import type { Core } from '@strapi/strapi';
import { seed } from './seed';

/** Content the public (browser) role may read. No writes from the public role. */
const PUBLIC_READ_TYPES = [
  'ui-string',
  'programme',
  'questionnaire',
  'week',
  'assignment',
  'question',
  'rubric-criterion',
  'iform-section',
  'participant',
  'coach',
  'evidence-record',
  'assessment',
];

async function grantPublicRead(strapi: Core.Strapi) {
  const role = await strapi.db
    .query('plugin::users-permissions.role')
    .findOne({ where: { type: 'public' } });

  if (!role) {
    strapi.log.warn('[permissions] public role not found');
    return;
  }

  for (const name of PUBLIC_READ_TYPES) {
    for (const action of ['find', 'findOne']) {
      const fullAction = `api::${name}.${name}.${action}`;
      const existing = await strapi.db.query('plugin::users-permissions.permission').findOne({
        where: { action: fullAction, role: role.id },
      });
      if (!existing) {
        await strapi.db.query('plugin::users-permissions.permission').create({
          data: { action: fullAction, role: role.id },
        });
      }
    }
  }

  strapi.log.info(`[permissions] public read enabled for ${PUBLIC_READ_TYPES.length} types`);
}

export default {
  register() {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    try {
      await grantPublicRead(strapi);
    } catch (error) {
      strapi.log.error(`[permissions] failed: ${(error as Error).message}`);
    }

    if (process.env.SEED_ON_BOOT === 'false') {
      return;
    }

    try {
      await seed(strapi);
    } catch (error) {
      strapi.log.error(`[seed] failed: ${(error as Error).message}`);
    }
  },
};
