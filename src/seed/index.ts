import fs from 'node:fs';
import path from 'node:path';
import type { Core } from '@strapi/strapi';
import {
  ASSESSMENTS,
  COACH,
  EVIDENCE_RECORDS,
  IFORM_SECTIONS,
  PARTICIPANT,
  QUESTIONS,
  QUESTIONNAIRE,
  RUBRIC_CRITERIA,
  SETTINGS,
  WEEKS,
} from './data';

type Entry = Record<string, unknown>;

/** Children first, so no relation is left pointing at a deleted entry. */
const COLLECTIONS = [
  'api::assignment.assignment',
  'api::assessment.assessment',
  'api::evidence-record.evidence-record',
  'api::question.question',
  'api::rubric-criterion.rubric-criterion',
  'api::iform-section.iform-section',
  'api::week.week',
  'api::participant.participant',
  'api::coach.coach',
  'api::ui-string.ui-string',
  'api::questionnaire.questionnaire',
  'api::programme.programme',
];

async function wipe(strapi: Core.Strapi): Promise<void> {
  for (const uid of COLLECTIONS) {
    await strapi.db.query(uid).deleteMany({});
  }
}

const sharedDir = process.env.SHARED_DIR ?? path.resolve(process.cwd(), '..', 'shared');

function loadUiStrings(): Array<{ key: string; group: string; value: string }> {
  const file = path.join(sharedDir, 'ui-strings.json');
  if (!fs.existsSync(file)) {
    throw new Error(`UI strings not found at ${file}`);
  }
  const raw = JSON.parse(fs.readFileSync(file, 'utf8')) as Record<string, string>;
  return Object.entries(raw).map(([key, value]) => ({
    key,
    group: key.split('.')[0] ?? 'common',
    value,
  }));
}

export async function seed(strapi: Core.Strapi) {
  // SEED_RESET=true rebuilds the demo content from this directory — used while
  // authoring fixtures, never on a live environment.
  if (process.env.SEED_RESET === 'true') {
    await wipe(strapi);
    strapi.log.info('[seed] reset: existing content removed');
  }

  const existing = await strapi.db.query('api::week.week').count();
  if (existing > 0) {
    strapi.log.info('[seed] content already present, skipping');
    return;
  }

  const create = (uid: string, data: Entry) => strapi.db.query(uid).create({ data });

  strapi.log.info('[seed] seeding Sartorea demo content');

  await create('api::programme.programme', SETTINGS as unknown as Entry);
  await create('api::questionnaire.questionnaire', QUESTIONNAIRE as unknown as Entry);

  const strings = loadUiStrings();
  for (const [index, item] of strings.entries()) {
    await create('api::ui-string.ui-string', { ...item, order: index });
  }

  const coach = (await create('api::coach.coach', COACH as unknown as Entry)) as { id: number };

  for (const week of WEEKS) {
    const { assignments, ...fields } = week;
    const created = (await create('api::week.week', fields as unknown as Entry)) as { id: number };
    for (const assignment of assignments) {
      await create('api::assignment.assignment', { ...assignment, week: created.id });
    }
  }

  for (const question of QUESTIONS) {
    await create('api::question.question', question as unknown as Entry);
  }
  for (const criterion of RUBRIC_CRITERIA) {
    await create('api::rubric-criterion.rubric-criterion', criterion as unknown as Entry);
  }
  for (const section of IFORM_SECTIONS) {
    await create('api::iform-section.iform-section', section as unknown as Entry);
  }

  const participant = (await create('api::participant.participant', {
    ...PARTICIPANT,
    coach: coach.id,
  })) as { id: number };

  for (const record of EVIDENCE_RECORDS) {
    await create('api::evidence-record.evidence-record', {
      ...record,
      participant: participant.id,
    });
  }
  for (const assessment of ASSESSMENTS) {
    await create('api::assessment.assessment', { ...assessment, participant: participant.id });
  }

  strapi.log.info(
    `[seed] done: ${WEEKS.length} weeks, ${QUESTIONS.length} questions, ${strings.length} ui strings`
  );
}
