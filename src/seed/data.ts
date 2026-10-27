/**
 * Demo fixtures for the Sartorea stage-1 build.
 *
 * Two kinds of content live here:
 *  - programme content (weeks, assignments, questions, rubric) — verbatim from the
 *    client's Week 1 document of 25.10, or written from her stage definitions;
 *  - one seeded persona (Anna) so that the coach view, I·FORM and the Week 6
 *    comparison have something real to show. Every persona field is replaceable
 *    in the admin panel.
 */

export const COACH = {
  name: 'Marina MacLeod',
  role: 'Sartorea coach · Maison Marina',
  initials: 'MM',
  bio: 'Coach for professional identity and presence. Founder of Maison Marina.',
};

export const SETTINGS = {
  programName: 'Sartorea',
  tagline: 'Professional identity, made visible.',
  cohortLabel: 'Pilot Cohort · November 2026',
  cohortStartDate: '2026-10-22',
  currentWeek: 1,
  coachName: 'Marina MacLeod',
  disclaimerPsychometric:
    'This is a development instrument, not a validated psychometric test. Scores describe where you are today and are meant for reflection, not selection.',
  disclaimerDevelopment:
    'Development record — not an accredited certification or employment guarantee.',
};

export const QUESTIONNAIRE = {
  title: 'Discover your starting point',
  intro:
    "Welcome to your professional identity journey. Before deciding where you want to go, it is important to understand where you are today. This first assessment invites you to explore how clearly you understand your professional strengths, how confidently you communicate your capabilities, and how prepared you feel to present yourself in a professional environment. There are no right or wrong answers — answer honestly, based on your current experience, not on how you think an employer would want you to answer.",
  likertLabels: [
    'Strongly Disagree',
    'Disagree',
    'Neither Agree nor Disagree',
    'Agree',
    'Strongly Agree',
  ],
  partTitles: {
    A: 'Part A — Professional Identity Clarity',
    B: 'Part B — Professional Capability & Confidence',
    C: 'Part C — Professional Image & Presence',
    D: 'Part D — Personal Reflection',
    E: 'Part E — Two-Minute Professional Introduction',
  },
  partInstructions: {
    A: 'Choose how strongly you agree with each statement.',
    B: 'Use the same five-point scale.',
    C: 'Use the same five-point scale.',
    D: 'Please answer in your own words. Short, meaningful answers are welcome.',
    E: 'Introduce yourself as if you were meeting a recruiter or professional contact for the first time.',
  },
  completion:
    'Thank you for completing your first Sartorea assessment. You have taken the first step toward understanding and expressing your professional identity. Your answers will inform your development activities during the next five weeks.',
};

export const WEEKS = [
  {
    number: 1,
    stage: 'OBSERVE',
    stageDefinition: 'Primary diagnosis of where you are today.',
    summary:
      'A starting-point assessment of identity clarity, confidence and presence, plus a two-minute introduction reviewed by your coach.',
    artifact: 'Starting-point profile',
    opensInDays: 0,
    contentStatus: 'ready',
    assignments: [
      {
        title: 'Starting-point assessment',
        type: 'assessment',
        instructions:
          'Twelve statements on a five-point scale, followed by four reflection questions. Answer honestly and without preparing.',
        criteria: 'Completion. There are no right or wrong answers.',
        dueInDays: 0,
        order: 1,
      },
      {
        title: 'Personal reflection',
        type: 'reflection',
        instructions:
          'Four open questions about where you are as a professional today, what you are good at, and what you want to change.',
        criteria: 'Completion. Reflections are never graded and never included in reports.',
        dueInDays: 0,
        order: 2,
      },
      {
        title: 'Two-minute professional introduction',
        type: 'video',
        instructions:
          'Record up to two minutes introducing yourself to a recruiter: background, skills, one contribution you are proud of, and the opportunity you want to explore.',
        criteria: 'Reviewed on clarity, structure, relevance, evidence and communication delivery — never on appearance or accent.',
        dueInDays: 0,
        order: 3,
      },
    ],
  },
  {
    number: 2,
    stage: 'IDENTIFY',
    stageDefinition: 'Revealing personal identity and professional capabilities.',
    summary:
      'Two tracks, kept deliberately separate: who you are, and what you can do. They are compared only after both are complete.',
    artifact: 'Two-track Identity Map',
    opensInDays: 7,
    contentStatus: 'pending',
    assignments: [
      {
        title: 'Identity Discovery — personal track',
        type: 'practice',
        instructions: 'Values, motivations and the experiences that shaped them.',
        criteria: 'Completion.',
        dueInDays: 7,
        order: 1,
      },
      {
        title: 'Identity Discovery — professional track',
        type: 'practice',
        instructions: 'Capabilities, evidence and the environments where they show up.',
        criteria: 'Completion.',
        dueInDays: 7,
        order: 2,
      },
    ],
  },
  {
    number: 3,
    stage: 'FOCUS',
    stageDefinition: 'Choosing the professional direction that fits the evidence.',
    summary:
      'The two tracks meet. You connect experience to capabilities and commit to a direction you can defend.',
    artifact: 'Identity Signature + 1–3 evidence records',
    opensInDays: 14,
    contentStatus: 'pending',
    assignments: [
      {
        title: 'Identity Signature',
        type: 'practice',
        instructions: 'Write the sentence you want a recruiter to repeat about you.',
        criteria: 'Reviewed by your coach.',
        dueInDays: 14,
        order: 1,
      },
      {
        title: 'Add 1–3 evidence records',
        type: 'evidence',
        instructions: 'One situation per record, with the result it produced.',
        criteria: 'Each record needs a verifiable result.',
        dueInDays: 14,
        order: 2,
      },
    ],
  },
  {
    number: 4,
    stage: 'EXPRESS',
    stageDefinition: 'Communication and building confidence.',
    summary:
      'Professional stories, interview answers and networking conversations, practised aloud with feedback.',
    artifact: 'Practice record + coach feedback',
    opensInDays: 21,
    contentStatus: 'pending',
    assignments: [
      {
        title: 'Professional story practice',
        type: 'practice',
        instructions: 'Three stories: a result, a failure, a reason for the direction you chose.',
        criteria: 'Coach feedback on relevance and evidence.',
        dueInDays: 21,
        order: 1,
      },
    ],
  },
  {
    number: 5,
    stage: 'PRESENT',
    stageDefinition: 'Shaping professional image, including Maison Marina.',
    summary:
      'Visual, behavioural and digital presence, using what you already own. Appearance is never assessed.',
    artifact: 'Professional Image Signature',
    opensInDays: 28,
    contentStatus: 'pending',
    assignments: [
      {
        title: 'Professional image lab',
        type: 'practice',
        instructions: 'Context, consistency and one deliberate choice per setting.',
        criteria: 'Reviewed on self-awareness and fit with context.',
        dueInDays: 28,
        order: 1,
      },
    ],
  },
  {
    number: 6,
    stage: 'ACT',
    stageDefinition: 'Final presentation, progress review and the I·FORM profile.',
    summary:
      'The same measurement as Week 1, six weeks later, and the profile that carries the evidence forward.',
    artifact: 'I·FORM + 30-day plan',
    opensInDays: 35,
    contentStatus: 'pending',
    assignments: [
      {
        title: 'Final measurement',
        type: 'assessment',
        instructions: 'The same twelve statements as Week 1, for comparison.',
        criteria: 'Completion. Compared with Week 1, never scored in isolation.',
        dueInDays: 35,
        order: 1,
      },
      {
        title: 'Two-minute introduction — final',
        type: 'video',
        instructions: 'The same task as Week 1, with six weeks of work behind it.',
        criteria: 'Reviewed on clarity, structure, relevance, evidence and communication delivery.',
        dueInDays: 35,
        order: 2,
      },
      {
        title: '30-day plan',
        type: 'practice',
        instructions: 'Three actions you will take in the month after the programme.',
        criteria: 'Completion.',
        dueInDays: 35,
        order: 3,
      },
    ],
  },
];

const LIKERT_QUESTIONS = [
  { part: 'A', text: 'I can clearly identify my three strongest professional qualities.' },
  { part: 'A', text: 'I understand how my previous experiences have shaped my professional capabilities.' },
  { part: 'A', text: 'I can explain the professional value I could bring to an organization.' },
  { part: 'A', text: 'I have a clear idea of the type of professional role or environment I want to explore.' },
  { part: 'B', text: 'I feel confident introducing myself to an unfamiliar professional.' },
  { part: 'B', text: 'I can describe my skills using specific examples from my previous experiences.' },
  { part: 'B', text: 'I can explain my achievements without minimizing my contributions.' },
  { part: 'B', text: 'I feel prepared to participate in a professional networking or interview conversation.' },
  { part: 'C', text: 'I understand how I want others to perceive me in a professional setting.' },
  { part: 'C', text: 'I can make intentional choices about how I present myself in different professional environments.' },
  {
    part: 'C',
    text: 'My current professional introduction, résumé or online profile communicates a consistent message about my capabilities.',
  },
  { part: 'C', text: 'I feel confident presenting myself in a way that reflects both my identity and the professional context.' },
];

const OPEN_QUESTIONS = [
  { label: 'Your Professional Starting Point', text: 'How would you describe yourself as a professional today?' },
  {
    label: 'Recognizing Your Strengths',
    text: 'Describe a situation in which you felt capable, useful or proud of your contribution. What did you do?',
  },
  {
    label: 'Your Current Challenge',
    text: 'What is the most difficult part of presenting your professional value to potential employers or professional contacts?',
  },
  {
    label: 'Your Desired Development',
    text: 'At the end of six weeks, what would you most like to understand, improve or feel more confident about?',
  },
];

export const QUESTIONS = [
  ...LIKERT_QUESTIONS.map((question, index) => ({
    order: index + 1,
    part: question.part,
    type: 'likert',
    text: question.text,
    label: '',
    helper: '',
    required: true,
  })),
  ...OPEN_QUESTIONS.map((question, index) => ({
    order: 13 + index,
    part: 'D',
    type: 'open',
    text: question.text,
    label: question.label,
    helper: '',
    required: false,
  })),
  {
    order: 17,
    part: 'E',
    type: 'video',
    text: 'Introduce yourself as if you were meeting a recruiter or professional contact for the first time.',
    label: 'Two-Minute Professional Introduction',
    helper:
      'You may discuss your background, your skills and relevant experience, a contribution you are proud of, and the opportunity you would like to explore. Video is recommended for participants comfortable recording themselves; an accessible audio or live coach-assessed alternative is available.',
    required: true,
  },
];

export const RUBRIC_CRITERIA = [
  {
    order: 1,
    name: 'Clarity',
    description: 'Whether the listener can repeat, in one sentence, who this person is professionally.',
    descriptors: null,
    descriptorsPending: true,
  },
  {
    order: 2,
    name: 'Structure',
    description: 'Whether the introduction has a recognisable beginning, middle and end.',
    descriptors: null,
    descriptorsPending: true,
  },
  {
    order: 3,
    name: 'Relevance',
    description: 'Whether the content is relevant to the opportunity the participant is exploring.',
    descriptors: null,
    descriptorsPending: true,
  },
  {
    order: 4,
    name: 'Evidence',
    description: 'Whether claims are supported by specific, verifiable examples.',
    descriptors: null,
    descriptorsPending: true,
  },
  {
    order: 5,
    name: 'Communication delivery',
    description: 'Pace, audibility and delivery. Accent is never assessed.',
    descriptors: null,
    descriptorsPending: true,
  },
];

export const IFORM_SECTIONS = [
  {
    order: 1,
    title: 'Professional Identity Statement',
    description: 'Who you are professionally, in your own words, revised as your evidence sharpens.',
    emptyHint: 'Written after the Identity Discovery tracks in Week 2–3.',
    source: 'manual',
  },
  {
    order: 2,
    title: 'Selected evidence',
    description: 'The records you chose to represent your capabilities.',
    emptyHint: 'Add your first evidence record to fill this section.',
    source: 'auto',
  },
  {
    order: 3,
    title: 'Assignment results',
    description: 'Starting point and final measurement, side by side.',
    emptyHint: 'Appears after Week 6.',
    source: 'auto',
  },
  {
    order: 4,
    title: 'Assessment of change',
    description: 'What moved between Week 1 and Week 6, in your coach\'s assessment.',
    emptyHint: 'Appears after the final assessment.',
    source: 'auto',
  },
  {
    order: 5,
    title: 'Professional Image Signature',
    description: 'Visual, behavioural and digital presence — the deliberate choices you made.',
    emptyHint: 'Written in Week 5, in the Maison Marina lab.',
    source: 'manual',
  },
  {
    order: 6,
    title: 'Next step plan',
    description: 'Three actions for the 30 days after the programme.',
    emptyHint: 'Written in Week 6.',
    source: 'manual',
  },
];

export const PARTICIPANT = {
  firstName: 'Anna',
  lastName: 'Kovalenko',
  age: 27,
  program: 'MBA',
  city: 'Toronto',
  goal: 'Business analyst / project coordinator',
  cohortLabel: 'Pilot Cohort · November 2026',
  identityStatement:
    'I turn messy operational data into decisions a team can act on. I am the person who makes the numbers usable, and I do it without making anyone feel slow for asking.',
  answers: [4, 4, 4, 3, 3, 4, 3, 3, 3, 3, 3, 3],
  weekSixAnswers: [4, 5, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3],
  reflections: [
    'I am a business analyst with three years in operations reporting. I describe myself through my job title rather than through what I actually change for a team.',
    'Our weekly reporting pack took two days to assemble. I rebuilt the queries and the layout, and it now takes about three hours. The team stopped working weekends on it.',
    'Explaining why the work matters, not only how it is done. I over-explain the method and lose the listener before I reach the point.',
    'I want to describe my value in one sentence without hedging, and to feel calm rather than apologetic when I say it out loud.',
  ],
  weekSixReflections: [
    'I am a business analyst who makes operational decisions possible. The title is still there; it is no longer the whole sentence.',
    'The same reporting rebuild, but now I tell it as a decision I made rather than a task I was given.',
    'The first thirty seconds. Once I have said the sentence, the rest follows.',
    'I can hold the sentence when someone pushes back. That is the part that stayed.',
  ],
};

export const EVIDENCE_RECORDS = [
  {
    title: 'Rebuilt the weekly reporting pack',
    situation:
      'Weekly operations reporting took two days to assemble each week and consumed the analyst team every weekend.',
    action:
      'I audited every query, removed duplicated manual steps, rebuilt the pack around the four decisions the leadership team actually made, and documented the process for the team.',
    result: 'Assembly time fell from two days to about three hours, and the weekend work stopped.',
    competency: 'Initiative',
    supportingEvidence: 'Before/after process document, and the team lead’s confirmation of the time saved.',
    verification: 'Confirmed by the team lead in the programme log.',
    status: 'coach-reviewed',
    coachComment: 'Strong. The result is specific and verifiable — lead with this one.',
    featured: true,
  },
  {
    title: 'Onboarded twelve new analysts onto the reporting stack',
    situation:
      'A hiring round brought twelve analysts into the team within one month, with no structured onboarding.',
    action:
      'I wrote the onboarding track, ran four sessions, and paired each new analyst with a live dataset instead of a demo file.',
    result: 'New analysts produced their first independent report in week two instead of week five.',
    competency: 'Collaboration',
    supportingEvidence: 'Onboarding outline and the ramp-up dates recorded by the team lead.',
    verification: 'Confirmed by the team lead in the programme log.',
    status: 'externally-verified',
    coachComment: 'This is your strongest collaboration evidence — it shows the system, not just the effort.',
    featured: true,
  },
  {
    title: 'Presented quarterly numbers to a regional director without slides',
    situation:
      'The regional director asked for a verbal summary of the quarter twenty minutes before a budget meeting.',
    action: 'I gave the three numbers that mattered, the reason behind each, and what I would do next.',
    result: 'The director used the summary in the meeting, and asked for the same format next quarter.',
    competency: 'Communication',
    supportingEvidence: '',
    verification: '',
    status: 'self-reported',
    coachComment: '',
    featured: false,
  },
];

export const ASSESSMENTS = [
  {
    timepoint: 'week1',
    presentationScore: 14,
    criteriaScores: { clarity: 3, structure: 3, relevance: 3, evidence: 2, delivery: 3 },
    comment:
      'The content is there and the structure is sound, but the result arrives late: the listener hears the method for seventy seconds before hearing why it mattered. Start with the decision you enabled, then explain the work. Evidence sounds like your weakest of the five — one specific number would change that.',
    assessedAt: '2026-10-24',
  },
  {
    timepoint: 'week6',
    presentationScore: 19,
    criteriaScores: { clarity: 4, structure: 4, relevance: 4, evidence: 3, delivery: 4 },
    comment:
      'You now open with the sentence, and the work follows it as proof rather than as an apology. The remaining gap is evidence: one quantified result would make the whole introduction land. Delivery is steady, unhurried, and the accent is not an issue — it never was.',
    assessedAt: '2026-12-04',
  },
];
