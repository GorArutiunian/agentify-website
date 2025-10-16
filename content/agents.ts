// Legacy category type - kept for backward compatibility
export type AgentCategory = 'Bookings' | 'Sales' | 'Support' | 'Healthcare' | 'Logistics'

// New industry-based system
export type Industry = 
  | 'Real Estate'
  | 'Healthcare / Clinics'
  | 'Legal Firms'
  | 'Insurance Agencies'
  | 'Accounting & Finance Offices'
  | 'Education / Training Centers'
  | 'Logistics / Delivery'
  | 'E-commerce'
  | 'HR / Recruitment Agencies'
  | 'Marketing / Advertising Agencies'

export type Tier = 'simple' | 'standard' | 'complex'

export type PricingInfo = {
  tier: Tier
  marketSetup: number
  marketMonthly: number
  agentifySetup: number
  agentifyMonthly: number
}

export const pricingByTier: Record<Tier, PricingInfo> = {
  simple: {
    tier: 'simple',
    marketSetup: 800,
    marketMonthly: 250,
    agentifySetup: 560,
    agentifyMonthly: 175
  },
  standard: {
    tier: 'standard',
    marketSetup: 1800,
    marketMonthly: 600,
    agentifySetup: 1260,
    agentifyMonthly: 420
  },
  complex: {
    tier: 'complex',
    marketSetup: 3000,
    marketMonthly: 900,
    agentifySetup: 2100,
    agentifyMonthly: 630
  }
}

export type AgentListItem = {
  slug: string
  name: string
  blurb: string
  category?: AgentCategory
  industry?: Industry
  tier?: Tier
  subtitle?: string
  metrics?: string[]
  disclaimer?: string
  isHot?: boolean
}

export type AgentDetail = AgentListItem & {
  features?: string[]
  integrations?: string[]
  outcomes?: string[]
  kpis?: string[]
  steps?: string[]
  faq?: { q: string; a: string }[]
  image?: string
}

export const agents: AgentDetail[] = [
  {
    slug: 'real-estate-lead-qualifier',
    name: 'Lead Qualifier',
    subtitle: 'Instant routing to the right agent',
    blurb: 'Qualify web and portal leads in under 2 minutes and route by budget, location, and urgency to maximize conversions.',
    industry: 'Real Estate',
    tier: 'standard',
    metrics: ['<2m response', '+20-35% conversions'],
    isHot: true,
    category: 'Sales',
    features: [
      'AI-powered lead scoring based on budget, timeline, and location',
      'Automatic routing to the most qualified agent',
      'Real-time lead notifications via SMS and email',
      'Integration with major real estate platforms (Zillow, Realtor.com)',
      'Lead tracking and follow-up reminders',
      'Custom qualification questions per agency'
    ],
    integrations: [
      'Zillow Premier Agent',
      'Realtor.com',
      'MLS systems',
      'CRM platforms (Salesforce, HubSpot)',
      'SMS/Email providers',
      'Calendar systems'
    ],
    outcomes: [
      'Faster response times increase conversion rates by 20-35%',
      'Reduced lead response time from hours to under 2 minutes',
      'Improved agent productivity by eliminating manual lead sorting',
      'Higher quality leads reach the right agents immediately',
      'Automated follow-up prevents leads from going cold'
    ],
    kpis: [
      'Lead response time (target: <2 minutes)',
      'Conversion rate improvement (baseline +20-35%)',
      'Lead quality score distribution',
      'Agent response rates and engagement',
      'Follow-up completion rates'
    ]
  },
  {
    slug: 'real-estate-appointment-scheduler',
    name: 'Appointment Scheduler + Reminders',
    subtitle: 'Fewer no-shows, smoother showings',
    blurb: 'Automated booking and timed reminders reduce no-shows 30-40% across SMS, WhatsApp, and email with self-serve rescheduling.',
    industry: 'Real Estate',
    tier: 'simple',
    metrics: ['-30-40% no-shows', '-50% admin calls'],
    category: 'Sales',
    features: [
      'Multi-channel appointment scheduling (website, phone, SMS)',
      'Automated reminder sequences with customizable timing',
      'Self-serve rescheduling with calendar integration',
      'Waitlist management for cancellations',
      'Appointment confirmation and preparation instructions',
      'Integration with MLS and CRM systems'
    ],
    integrations: [
      'MLS systems',
      'CRM platforms (Salesforce, HubSpot)',
      'Calendar systems (Google, Outlook)',
      'SMS/Email providers',
      'Real estate websites',
      'Property management software'
    ],
    outcomes: [
      'Reduced no-show rates by 30-40% through proactive reminders',
      'Decreased administrative calls by 50%',
      'Improved client experience with self-serve options',
      'Increased showing efficiency and agent productivity',
      'Better time management and schedule optimization'
    ],
    kpis: [
      'No-show rate reduction (target: 30-40%)',
      'Administrative call volume (target: -50%)',
      'Appointment rescheduling completion rate',
      'Client satisfaction scores',
      'Agent time saved on scheduling tasks'
    ]
  },
  {
    slug: 'real-estate-property-inquiry',
    name: 'Property Inquiry Triage',
    subtitle: 'Fast answers to common questions',
    blurb: 'Route property inquiries instantly with FAQs, availability checks, and agent handoff when needed to keep prospects engaged 24/7.',
    industry: 'Real Estate',
    tier: 'standard',
    metrics: ['24/7 response', '+15-20% engagement'],
    category: 'Sales',
    features: [
      'AI-powered inquiry classification and routing',
      'Instant responses to common property questions',
      'Availability checking and scheduling integration',
      'Lead qualification and scoring',
      'Automated follow-up sequences',
      'Integration with property databases and MLS'
    ],
    integrations: [
      'MLS systems',
      'Property databases',
      'CRM platforms',
      'Website chat widgets',
      'Email and SMS providers',
      'Calendar scheduling systems'
    ],
    outcomes: [
      '24/7 availability for property inquiries',
      'Increased prospect engagement by 15-20%',
      'Faster response times and better lead quality',
      'Reduced agent workload on basic inquiries',
      'Improved conversion rates through instant responses'
    ],
    kpis: [
      'Response time (target: <2 minutes)',
      'Engagement rate increase (target: +15-20%)',
      'Inquiry resolution rate',
      'Lead quality score distribution',
      'Agent time saved on basic inquiries'
    ]
  },
  {
    slug: 'real-estate-document-generator',
    name: 'Document Generator',
    subtitle: 'Instant contracts and disclosures',
    blurb: 'Generate listing agreements, buyer contracts, and disclosures in seconds with pre-filled property and client data ready for e-signature.',
    industry: 'Real Estate',
    tier: 'complex',
    metrics: ['-80% doc prep time', '99% accuracy'],
    category: 'Sales',
    features: [
      'Automated contract generation with pre-filled data',
      'Smart template library for all document types',
      'E-signature integration for instant signing',
      'Compliance checking and validation',
      'Document version control and tracking',
      'Custom branding and formatting options'
    ],
    integrations: [
      'E-signature platforms (DocuSign, HelloSign)',
      'MLS systems',
      'CRM platforms',
      'Document management systems',
      'Transaction management software',
      'State compliance databases'
    ],
    outcomes: [
      'Document preparation time reduced by 80%',
      '99% accuracy with automated data population',
      'Faster transaction timelines',
      'Reduced errors and compliance issues',
      'Improved client experience with instant documents'
    ],
    kpis: [
      'Document prep time (target: -80%)',
      'Error rate (target: <1%)',
      'Time to signature completion',
      'Client satisfaction with document process',
      'Compliance audit pass rate'
    ]
  },
  {
    slug: 'real-estate-post-viewing-followup',
    name: 'Post-Viewing Follow-up',
    subtitle: 'Never lose a hot prospect',
    blurb: 'Automatic follow-up after showings captures feedback, answers questions, and schedules next steps to keep deals moving forward.',
    industry: 'Real Estate',
    tier: 'simple',
    metrics: ['+25% follow-up rate', '+10-15% conversions'],
    category: 'Sales',
    features: [
      'Automated follow-up messages after showings',
      'Feedback collection and sentiment analysis',
      'Next-step scheduling and coordination',
      'Multi-channel communication (SMS, email)',
      'Smart timing based on prospect engagement',
      'Integration with showing management systems'
    ],
    integrations: [
      'Showing management platforms',
      'CRM systems',
      'Calendar platforms',
      'SMS/Email providers',
      'MLS systems',
      'Agent communication tools'
    ],
    outcomes: [
      'Follow-up rate increased by 25%',
      'Conversion rates improved by 10-15%',
      'Faster deal progression',
      'Better prospect engagement',
      'Reduced lost opportunities'
    ],
    kpis: [
      'Follow-up completion rate (target: +25%)',
      'Conversion rate improvement (target: +10-15%)',
      'Time to next action',
      'Prospect response rates',
      'Deal velocity improvement'
    ]
  },
  {
    slug: 'healthcare-appointment-reminder',
    name: 'Appointment & Reminder Bot',
    subtitle: 'Fewer no-shows, smoother days',
    blurb: 'Automated reminders and self-serve rescheduling reduce missed appointments 30-40% and cut front-desk calls in half.',
    industry: 'Healthcare / Clinics',
    tier: 'standard',
    metrics: ['-30-40% no-shows', '-50% calls'],
    isHot: true,
    category: 'Sales',
    features: [
      'Multi-channel appointment reminders (SMS, email, phone)',
      'Automated rescheduling with calendar integration',
      'Pre-appointment preparation instructions',
      'Waitlist management for cancellations',
      'HIPAA-compliant communication tracking',
      'Custom reminder timing based on appointment type'
    ],
    integrations: [
      'Electronic Health Records (EHR)',
      'Practice management systems',
      'Calendar platforms (Google, Outlook)',
      'SMS/Email providers',
      'Patient portal systems',
      'Telehealth platforms'
    ],
    outcomes: [
      'Reduced no-show rates by 30-40% through proactive reminders',
      'Decreased front-desk call volume by 50%',
      'Improved patient satisfaction with better communication',
      'Increased revenue through better appointment utilization',
      'Reduced administrative burden on staff'
    ],
    kpis: [
      'No-show rate reduction (target: 30-40%)',
      'Front-desk call volume (target: -50%)',
      'Appointment rescheduling completion rate',
      'Patient satisfaction scores',
      'Staff time saved on manual reminders'
    ]
  },
  {
    slug: 'healthcare-patient-intake',
    name: 'Patient Intake Bot',
    subtitle: 'Faster check-ins, less paperwork',
    blurb: 'Digital intake forms completed before arrival reduce wait times 60% and give staff complete patient info upfront.',
    industry: 'Healthcare / Clinics',
    tier: 'standard',
    metrics: ['-60% wait time', '100% digital'],
    category: 'Sales',
    features: [
      'Digital intake forms sent before appointments',
      'Smart form routing based on appointment type',
      'Insurance verification and eligibility checking',
      'Medical history collection and validation',
      'HIPAA-compliant data storage',
      'Integration with EHR systems'
    ],
    integrations: [
      'Electronic Health Records (EHR)',
      'Practice management systems',
      'Insurance verification services',
      'Patient portal platforms',
      'Payment processing systems',
      'Telehealth platforms'
    ],
    outcomes: [
      'Wait times reduced by 60% with pre-completed forms',
      '100% digital paperless process',
      'Improved data accuracy and completeness',
      'Better staff efficiency and patient flow',
      'Enhanced patient satisfaction'
    ],
    kpis: [
      'Wait time reduction (target: -60%)',
      'Form completion rate before arrival',
      'Data accuracy scores',
      'Staff time saved on intake',
      'Patient satisfaction ratings'
    ]
  },
  {
    slug: 'healthcare-result-notification',
    name: 'Result Notification Bot',
    subtitle: 'Secure, instant lab results',
    blurb: 'Automatically sends patients lab results via their preferred channel, cutting inbound calls 50% and improving satisfaction.',
    industry: 'Healthcare / Clinics',
    tier: 'complex',
    metrics: ['-50% calls', 'instant delivery'],
    category: 'Sales',
    features: [
      'Automated lab result notifications',
      'Multi-channel delivery (portal, SMS, email)',
      'Secure HIPAA-compliant messaging',
      'Patient preference management',
      'Follow-up appointment scheduling',
      'Critical result flagging and routing'
    ],
    integrations: [
      'Laboratory information systems (LIS)',
      'Electronic Health Records (EHR)',
      'Patient portal platforms',
      'SMS/Email providers',
      'Secure messaging platforms',
      'Appointment scheduling systems'
    ],
    outcomes: [
      'Inbound calls reduced by 50%',
      'Instant result delivery to patients',
      'Improved patient satisfaction',
      'Reduced staff workload',
      'Better follow-up compliance'
    ],
    kpis: [
      'Call volume reduction (target: -50%)',
      'Result delivery time',
      'Patient portal engagement',
      'Follow-up appointment booking rate',
      'Patient satisfaction scores'
    ]
  },
  {
    slug: 'healthcare-feedback-collector',
    name: 'Feedback Collector',
    subtitle: 'Improve care with patient insights',
    blurb: 'Post-visit surveys sent automatically capture feedback while fresh and identify issues before they become complaints.',
    industry: 'Healthcare / Clinics',
    tier: 'simple',
    metrics: ['+60% response rate', 'real-time alerts'],
    category: 'Sales',
    features: [
      'Automated post-visit survey distribution',
      'Multi-channel feedback collection',
      'Real-time alert system for negative feedback',
      'Sentiment analysis and categorization',
      'Trend tracking and reporting',
      'Integration with quality improvement systems'
    ],
    integrations: [
      'Practice management systems',
      'Survey platforms',
      'SMS/Email providers',
      'Quality management software',
      'Patient portal systems',
      'Analytics platforms'
    ],
    outcomes: [
      'Response rates increased by 60%',
      'Real-time issue identification',
      'Improved patient satisfaction scores',
      'Proactive complaint resolution',
      'Data-driven quality improvements'
    ],
    kpis: [
      'Survey response rate (target: +60%)',
      'Average satisfaction score',
      'Issue resolution time',
      'Negative feedback trend',
      'Quality improvement implementation rate'
    ]
  },
  {
    slug: 'healthcare-prescription-reminder',
    name: 'Prescription Reminder',
    subtitle: 'Better adherence, healthier patients',
    blurb: 'Automated reminders for medication times and refills improve adherence rates and reduce pharmacy calls.',
    industry: 'Healthcare / Clinics',
    tier: 'simple',
    metrics: ['+30% adherence', '-40% pharmacy calls'],
    category: 'Sales',
    features: [
      'Automated medication reminders',
      'Refill notification system',
      'Dosage schedule tracking',
      'Multi-channel reminder delivery',
      'Pharmacy integration for easy refills',
      'Adherence tracking and reporting'
    ],
    integrations: [
      'Electronic Health Records (EHR)',
      'Pharmacy management systems',
      'SMS/Email providers',
      'Patient portal platforms',
      'Medication tracking apps',
      'Telehealth platforms'
    ],
    outcomes: [
      'Medication adherence improved by 30%',
      'Pharmacy calls reduced by 40%',
      'Better health outcomes',
      'Reduced hospital readmissions',
      'Improved patient engagement'
    ],
    kpis: [
      'Medication adherence rate (target: +30%)',
      'Pharmacy call volume (target: -40%)',
      'Refill completion rate',
      'Patient engagement scores',
      'Health outcome improvements'
    ]
  },
  {
    slug: 'legal-client-intake',
    name: 'Client Intake Bot',
    subtitle: 'Qualify prospects before consultation',
    blurb: 'Collect case details, check conflicts, and schedule consultations automatically so only qualified leads reach your calendar.',
    industry: 'Legal Firms',
    tier: 'standard',
    metrics: ['+40% qualified leads', '-70% admin time'],
    isHot: true,
    category: 'Sales',
    features: [
      'Automated case information collection and conflict checking',
      'Intelligent lead scoring based on case type and urgency',
      'Calendar integration for automatic consultation scheduling',
      'Document collection and preliminary case assessment',
      'Client communication tracking and follow-up automation',
      'Integration with legal case management systems'
    ],
    integrations: [
      'Legal case management software',
      'Calendar systems (Outlook, Google)',
      'Document management platforms',
      'Conflict checking databases',
      'Client communication tools',
      'Billing and time tracking systems'
    ],
    outcomes: [
      'Increased qualified lead conversion by 40%',
      'Reduced administrative time by 70%',
      'Faster case intake and initial assessment',
      'Improved client experience with streamlined onboarding',
      'Better case prioritization and resource allocation'
    ],
    kpis: [
      'Qualified lead percentage increase (target: +40%)',
      'Administrative time reduction (target: -70%)',
      'Case intake completion rate',
      'Client satisfaction scores',
      'Consultation booking conversion rate'
    ]
  },
  {
    slug: 'legal-deadline-reminder',
    name: 'Deadline & Court Reminder',
    subtitle: 'Never miss a critical date',
    blurb: 'Automated alerts for court dates, filing deadlines, and statute limitations with multi-level escalation ensures nothing falls through.',
    industry: 'Legal Firms',
    tier: 'simple',
    metrics: ['zero missed deadlines', '3-tier alerts'],
    category: 'Sales',
    features: [
      'Automated deadline tracking and alerts',
      'Multi-level escalation system',
      'Court date synchronization',
      'Statute of limitations monitoring',
      'Team notification management',
      'Calendar integration across platforms'
    ],
    integrations: [
      'Legal practice management software',
      'Calendar systems (Google, Outlook)',
      'Court filing systems',
      'Document management platforms',
      'SMS/Email providers',
      'Task management tools'
    ],
    outcomes: [
      'Zero missed deadlines',
      '3-tier alert system ensures visibility',
      'Reduced malpractice risk',
      'Improved case management',
      'Better team coordination'
    ],
    kpis: [
      'Deadline compliance rate (target: 100%)',
      'Alert response time',
      'Escalation effectiveness',
      'Team acknowledgment rates',
      'Risk mitigation metrics'
    ]
  },
  {
    slug: 'legal-contract-summary',
    name: 'Contract Summary Bot',
    subtitle: 'Fast contract analysis and risk flagging',
    blurb: 'Upload contracts and get instant summaries highlighting key terms, obligations, and risks to save hours on initial review.',
    industry: 'Legal Firms',
    tier: 'complex',
    metrics: ['-80% review time', '95% accuracy'],
    category: 'Sales',
    features: [
      'AI-powered contract analysis',
      'Key term extraction and highlighting',
      'Risk and obligation identification',
      'Clause comparison across documents',
      'Summary generation in plain language',
      'Integration with document management systems'
    ],
    integrations: [
      'Document management systems',
      'Legal practice management software',
      'Cloud storage (Dropbox, Google Drive)',
      'E-signature platforms',
      'Contract lifecycle management tools',
      'Legal research databases'
    ],
    outcomes: [
      'Contract review time reduced by 80%',
      '95% accuracy in key term identification',
      'Faster deal closure',
      'Reduced risk exposure',
      'Improved attorney productivity'
    ],
    kpis: [
      'Review time reduction (target: -80%)',
      'Accuracy rate (target: 95%)',
      'Risk identification rate',
      'Attorney time saved',
      'Client satisfaction scores'
    ]
  },
  {
    slug: 'legal-invoice-reminder',
    name: 'Invoice Reminder Bot',
    subtitle: 'Get paid faster, reduce write-offs',
    blurb: 'Automated payment reminders and easy online payment links reduce aging receivables and improve cash flow.',
    industry: 'Legal Firms',
    tier: 'simple',
    metrics: ['+35% collection rate', '-60% write-offs'],
    category: 'Sales',
    features: [
      'Automated payment reminders',
      'Multi-channel reminder delivery',
      'Online payment link integration',
      'Aging receivables tracking',
      'Escalation workflows',
      'Payment plan management'
    ],
    integrations: [
      'Legal billing software',
      'Payment processors (Stripe, PayPal)',
      'Accounting systems (QuickBooks)',
      'Practice management software',
      'SMS/Email providers',
      'Client portal platforms'
    ],
    outcomes: [
      'Collection rates improved by 35%',
      'Write-offs reduced by 60%',
      'Improved cash flow',
      'Reduced administrative burden',
      'Better client payment experience'
    ],
    kpis: [
      'Collection rate improvement (target: +35%)',
      'Write-off reduction (target: -60%)',
      'Days sales outstanding (DSO)',
      'Payment completion rate',
      'Client payment satisfaction'
    ]
  },
  {
    slug: 'legal-faq-triage',
    name: 'FAQ / Triage Bot',
    subtitle: 'Answer common questions 24/7',
    blurb: 'Handle routine inquiries instantly and route complex questions to the right attorney to reduce intake staff workload by 50%.',
    industry: 'Legal Firms',
    tier: 'standard',
    metrics: ['24/7 response', '-50% staff load'],
    category: 'Sales',
    features: [
      '24/7 automated FAQ responses',
      'Intelligent inquiry routing',
      'Practice area identification',
      'Lead qualification',
      'Multi-channel support',
      'Knowledge base integration'
    ],
    integrations: [
      'Website chat widgets',
      'Legal practice management software',
      'CRM systems',
      'Email platforms',
      'SMS providers',
      'Knowledge management systems'
    ],
    outcomes: [
      '24/7 availability for client inquiries',
      'Staff workload reduced by 50%',
      'Faster response times',
      'Better lead qualification',
      'Improved client satisfaction'
    ],
    kpis: [
      'Response time (target: instant)',
      'Staff workload reduction (target: -50%)',
      'Inquiry resolution rate',
      'Lead conversion rate',
      'Client satisfaction scores'
    ]
  },
  {
    slug: 'insurance-policy-renewal',
    name: 'Policy Renewal Reminder',
    subtitle: 'Higher retention, zero lapses',
    blurb: 'Automated renewal reminders with easy update options reduce policy lapses by 40% and improve retention rates.',
    industry: 'Insurance Agencies',
    tier: 'simple',
    metrics: ['-40% lapses', '+25% retention'],
    isHot: true,
    category: 'Sales',
    features: [
      'Automated renewal reminders',
      'Easy policy update options',
      'Multi-channel notification delivery',
      'Coverage review prompts',
      'Payment link integration',
      'Lapse prevention workflows'
    ],
    integrations: [
      'Insurance management systems',
      'CRM platforms',
      'Payment processors',
      'SMS/Email providers',
      'Calendar systems',
      'Document management platforms'
    ],
    outcomes: [
      'Policy lapses reduced by 40%',
      'Retention rates improved by 25%',
      'Increased revenue from renewals',
      'Better client engagement',
      'Reduced administrative workload'
    ],
    kpis: [
      'Policy lapse rate (target: -40%)',
      'Retention rate improvement (target: +25%)',
      'Renewal completion rate',
      'Client response time',
      'Revenue from renewals'
    ]
  },
  {
    slug: 'insurance-claim-submission',
    name: 'Claim Submission Bot',
    subtitle: 'Fast, accurate claim filing',
    blurb: 'Guide clients through claim submission with document upload and validation to reduce errors by 60% and speed processing.',
    industry: 'Insurance Agencies',
    tier: 'standard',
    metrics: ['-60% errors', '2x faster filing'],
    category: 'Sales',
    features: [
      'Guided claim submission process',
      'Document upload and validation',
      'Real-time error checking',
      'Claim type identification',
      'Status tracking integration',
      'Multi-channel support'
    ],
    integrations: [
      'Claims management systems',
      'Document management platforms',
      'Insurance carrier portals',
      'SMS/Email providers',
      'Mobile apps',
      'Payment systems'
    ],
    outcomes: [
      'Claim errors reduced by 60%',
      'Filing speed increased by 2x',
      'Faster claim processing',
      'Improved client satisfaction',
      'Reduced administrative burden'
    ],
    kpis: [
      'Error rate reduction (target: -60%)',
      'Filing time improvement (target: 2x)',
      'First-time submission success rate',
      'Client satisfaction scores',
      'Processing time reduction'
    ]
  },
  {
    slug: 'insurance-claim-status',
    name: 'Claim Status Tracker',
    subtitle: 'Proactive updates, fewer calls',
    blurb: 'Automatic status updates keep clients informed and cut where-is-my-claim calls by 70% while improving satisfaction.',
    industry: 'Insurance Agencies',
    tier: 'standard',
    metrics: ['-70% status calls', '+30% satisfaction'],
    category: 'Sales',
    features: [
      'Automated claim status updates',
      'Proactive client notifications',
      'Multi-channel delivery',
      'Real-time tracking integration',
      'Milestone alerts',
      'Self-service status portal'
    ],
    integrations: [
      'Claims management systems',
      'Insurance carrier APIs',
      'SMS/Email providers',
      'Client portal platforms',
      'Mobile apps',
      'CRM systems'
    ],
    outcomes: [
      'Status inquiry calls reduced by 70%',
      'Client satisfaction improved by 30%',
      'Reduced staff workload',
      'Better client experience',
      'Improved transparency'
    ],
    kpis: [
      'Call volume reduction (target: -70%)',
      'Satisfaction improvement (target: +30%)',
      'Update delivery rate',
      'Client portal engagement',
      'Staff time saved'
    ]
  },
  {
    slug: 'insurance-lead-qualification',
    name: 'Lead Qualification Bot',
    subtitle: 'Only qualified prospects to agents',
    blurb: 'Pre-qualify leads by needs, budget, and timeline then route hot prospects instantly and nurture cold ones automatically.',
    industry: 'Insurance Agencies',
    tier: 'standard',
    metrics: ['+50% agent efficiency', '+30% conversions'],
    category: 'Sales',
    features: [
      'Automated lead qualification',
      'Needs assessment and scoring',
      'Budget and timeline evaluation',
      'Intelligent lead routing',
      'Automated nurture campaigns',
      'Integration with CRM systems'
    ],
    integrations: [
      'CRM platforms',
      'Marketing automation tools',
      'Lead generation platforms',
      'SMS/Email providers',
      'Calendar systems',
      'Analytics platforms'
    ],
    outcomes: [
      'Agent efficiency improved by 50%',
      'Conversion rates increased by 30%',
      'Better lead quality',
      'Faster sales cycles',
      'Improved ROI on marketing'
    ],
    kpis: [
      'Agent efficiency (target: +50%)',
      'Conversion rate (target: +30%)',
      'Lead quality score',
      'Time to conversion',
      'Marketing ROI'
    ]
  },
  {
    slug: 'insurance-onboarding-checklist',
    name: 'Onboarding Checklist Bot',
    subtitle: 'Smooth new policy activation',
    blurb: 'Guide new clients through policy setup with checklists and document collection to reduce activation time by 50%.',
    industry: 'Insurance Agencies',
    tier: 'simple',
    metrics: ['-50% activation time', '100% completion'],
    category: 'Sales',
    features: [
      'Automated onboarding checklists',
      'Document collection workflows',
      'Progress tracking and reminders',
      'Multi-step process guidance',
      'Integration with policy systems',
      'Completion verification'
    ],
    integrations: [
      'Insurance management systems',
      'Document management platforms',
      'E-signature platforms',
      'SMS/Email providers',
      'CRM systems',
      'Payment processors'
    ],
    outcomes: [
      'Activation time reduced by 50%',
      '100% checklist completion rate',
      'Improved client experience',
      'Faster time to coverage',
      'Reduced administrative burden'
    ],
    kpis: [
      'Activation time (target: -50%)',
      'Completion rate (target: 100%)',
      'Client satisfaction scores',
      'Time to first premium payment',
      'Staff time saved'
    ]
  },
  {
    slug: 'accounting-auto-invoice',
    name: 'Auto-Invoice Bot',
    subtitle: 'Instant invoicing, faster payment',
    blurb: 'Generate and send invoices automatically after service delivery with payment links to reduce billing delays by 80%.',
    industry: 'Accounting & Finance Offices',
    tier: 'standard',
    metrics: ['-80% billing delay', '+40% cash flow'],
    isHot: true,
    category: 'Sales',
    features: [
      'Automated invoice generation',
      'Service completion triggers',
      'Payment link integration',
      'Multi-currency support',
      'Branded invoice templates',
      'Accounting software synchronization'
    ],
    integrations: [
      'Accounting software (QuickBooks, Xero)',
      'Payment processors (Stripe, PayPal)',
      'Project management tools',
      'Time tracking systems',
      'CRM platforms',
      'Banking systems'
    ],
    outcomes: [
      'Billing delays reduced by 80%',
      'Cash flow improved by 40%',
      'Faster payment collection',
      'Reduced administrative burden',
      'Improved client satisfaction'
    ],
    kpis: [
      'Billing delay reduction (target: -80%)',
      'Cash flow improvement (target: +40%)',
      'Days sales outstanding (DSO)',
      'Invoice delivery time',
      'Payment completion rate'
    ]
  },
  {
    slug: 'accounting-receipt-scanner',
    name: 'Receipt Scanner & Categorizer',
    subtitle: 'Bookkeeping on autopilot',
    blurb: 'Snap receipt photos and AI extracts data and categorizes then syncs to accounting software automatically with no manual entry.',
    industry: 'Accounting & Finance Offices',
    tier: 'standard',
    metrics: ['-90% data entry', '95% accuracy'],
    category: 'Sales',
    features: [
      'AI-powered receipt scanning',
      'Automatic data extraction',
      'Smart categorization',
      'Multi-format support (photo, PDF)',
      'Expense tracking integration',
      'Real-time sync with accounting software'
    ],
    integrations: [
      'Accounting software (QuickBooks, Xero)',
      'Expense management platforms',
      'Cloud storage (Dropbox, Google Drive)',
      'Mobile apps',
      'Banking systems',
      'Tax preparation software'
    ],
    outcomes: [
      'Data entry reduced by 90%',
      '95% accuracy in data extraction',
      'Real-time expense tracking',
      'Reduced bookkeeping costs',
      'Improved financial visibility'
    ],
    kpis: [
      'Data entry reduction (target: -90%)',
      'Accuracy rate (target: 95%)',
      'Processing time per receipt',
      'Categorization accuracy',
      'Cost savings on bookkeeping'
    ]
  },
  {
    slug: 'accounting-late-payment',
    name: 'Late Payment Reminder',
    subtitle: 'Polite persistence that works',
    blurb: 'Automated escalation sequences for overdue invoices with professional tone improve collections without damaging relationships.',
    industry: 'Accounting & Finance Offices',
    tier: 'simple',
    metrics: ['+45% collection rate', '-30% write-offs'],
    category: 'Sales',
    features: [
      'Automated payment reminders',
      'Multi-level escalation sequences',
      'Professional tone customization',
      'Payment plan options',
      'Client relationship management',
      'Aging report integration'
    ],
    integrations: [
      'Accounting software (QuickBooks, Xero)',
      'Payment processors',
      'SMS/Email providers',
      'CRM systems',
      'Collections management tools',
      'Client portals'
    ],
    outcomes: [
      'Collection rates improved by 45%',
      'Write-offs reduced by 30%',
      'Better cash flow management',
      'Maintained client relationships',
      'Reduced administrative burden'
    ],
    kpis: [
      'Collection rate improvement (target: +45%)',
      'Write-off reduction (target: -30%)',
      'Days sales outstanding (DSO)',
      'Client retention rate',
      'Payment completion rate'
    ]
  },
  {
    slug: 'accounting-monthly-report',
    name: 'Monthly Report Generator',
    subtitle: 'Client reports in minutes, not hours',
    blurb: 'Auto-generate branded financial reports with key metrics and insights then schedule delivery to reduce reporting time by 75%.',
    industry: 'Accounting & Finance Offices',
    tier: 'standard',
    metrics: ['-75% report time', '100% on-time'],
    category: 'Sales',
    features: [
      'Automated report generation',
      'Branded templates',
      'Key metrics and insights',
      'Scheduled delivery',
      'Custom report configurations',
      'Data visualization'
    ],
    integrations: [
      'Accounting software (QuickBooks, Xero)',
      'Business intelligence tools',
      'Email platforms',
      'Client portal systems',
      'Data analytics platforms',
      'Cloud storage'
    ],
    outcomes: [
      'Report generation time reduced by 75%',
      '100% on-time delivery',
      'Improved client satisfaction',
      'Better financial insights',
      'Reduced staff workload'
    ],
    kpis: [
      'Report generation time (target: -75%)',
      'On-time delivery rate (target: 100%)',
      'Client satisfaction scores',
      'Report accuracy',
      'Staff time saved'
    ]
  },
  {
    slug: 'accounting-document-uploader',
    name: 'Document Uploader Bot',
    subtitle: 'Get client docs without hassle',
    blurb: 'Request, receive, and organize client documents automatically while smart reminders ensure you get everything on time.',
    industry: 'Accounting & Finance Offices',
    tier: 'simple',
    metrics: ['+80% on-time docs', '-60% follow-up'],
    category: 'Sales',
    features: [
      'Automated document requests',
      'Smart reminder system',
      'Secure document upload portal',
      'Automatic organization and categorization',
      'Progress tracking',
      'Integration with accounting workflows'
    ],
    integrations: [
      'Accounting software (QuickBooks, Xero)',
      'Document management systems',
      'Cloud storage (Dropbox, Google Drive)',
      'E-signature platforms',
      'SMS/Email providers',
      'Client portal systems'
    ],
    outcomes: [
      'On-time document submission improved by 80%',
      'Follow-up time reduced by 60%',
      'Better client compliance',
      'Faster tax preparation',
      'Reduced administrative burden'
    ],
    kpis: [
      'On-time submission rate (target: +80%)',
      'Follow-up reduction (target: -60%)',
      'Document completion rate',
      'Average submission time',
      'Client satisfaction scores'
    ]
  },
  {
    slug: 'education-lesson-scheduler',
    name: 'Lesson Scheduler',
    subtitle: 'Easy booking for students and staff',
    blurb: 'Automated lesson booking with instructor availability and room management reduces scheduling conflicts by 70%.',
    industry: 'Education / Training Centers',
    tier: 'standard',
    metrics: ['-70% conflicts', '+50% bookings'],
    isHot: true,
    category: 'Sales',
    features: [
      'Automated lesson booking system',
      'Instructor availability management',
      'Room and resource allocation',
      'Conflict detection and resolution',
      'Calendar synchronization',
      'Student and parent notifications'
    ],
    integrations: [
      'Learning management systems (LMS)',
      'Calendar platforms (Google, Outlook)',
      'Student information systems',
      'SMS/Email providers',
      'Payment processing systems',
      'Video conferencing platforms'
    ],
    outcomes: [
      'Scheduling conflicts reduced by 70%',
      'Booking volume increased by 50%',
      'Improved resource utilization',
      'Better student satisfaction',
      'Reduced administrative workload'
    ],
    kpis: [
      'Conflict reduction (target: -70%)',
      'Booking increase (target: +50%)',
      'Resource utilization rate',
      'Student satisfaction scores',
      'Staff time saved on scheduling'
    ]
  },
  {
    slug: 'education-student-progress',
    name: 'Student Progress Bot',
    subtitle: 'Keep students and parents informed',
    blurb: 'Automated progress reports with attendance, grades, and milestones improve engagement and reduce parent inquiries by 60%.',
    industry: 'Education / Training Centers',
    tier: 'standard',
    metrics: ['-60% parent calls', '+40% engagement'],
    category: 'Sales',
    features: [
      'Automated progress report generation',
      'Attendance tracking and alerts',
      'Grade and milestone notifications',
      'Parent portal integration',
      'Customizable report templates',
      'Multi-channel delivery'
    ],
    integrations: [
      'Learning management systems (LMS)',
      'Student information systems',
      'Gradebook platforms',
      'Parent portal systems',
      'SMS/Email providers',
      'Mobile apps'
    ],
    outcomes: [
      'Parent inquiry calls reduced by 60%',
      'Student engagement improved by 40%',
      'Better parent-teacher communication',
      'Improved student outcomes',
      'Reduced administrative burden'
    ],
    kpis: [
      'Parent call reduction (target: -60%)',
      'Engagement improvement (target: +40%)',
      'Report delivery rate',
      'Parent portal usage',
      'Student performance trends'
    ]
  },
  {
    slug: 'education-assignment-reminder',
    name: 'Assignment Reminder',
    subtitle: 'Fewer late submissions, better outcomes',
    blurb: 'Smart reminders for upcoming assignments and deadlines reduce late submissions by 50% and improve completion rates.',
    industry: 'Education / Training Centers',
    tier: 'simple',
    metrics: ['-50% late work', '+30% completion'],
    category: 'Sales',
    features: [
      'Automated assignment reminders',
      'Smart timing based on due dates',
      'Multi-channel notifications',
      'Progress tracking',
      'Parent notification options',
      'Integration with LMS platforms'
    ],
    integrations: [
      'Learning management systems (LMS)',
      'Assignment tracking platforms',
      'Calendar systems',
      'SMS/Email providers',
      'Student portals',
      'Mobile apps'
    ],
    outcomes: [
      'Late submissions reduced by 50%',
      'Completion rates improved by 30%',
      'Better student time management',
      'Improved academic performance',
      'Reduced teacher follow-up time'
    ],
    kpis: [
      'Late submission reduction (target: -50%)',
      'Completion rate improvement (target: +30%)',
      'On-time submission rate',
      'Student engagement scores',
      'Academic performance trends'
    ]
  },
  {
    slug: 'education-quiz-assistant',
    name: 'Quiz Assistant',
    subtitle: 'Automated assessments and feedback',
    blurb: 'Schedule quizzes, auto-grade, and deliver instant feedback to save instructors 10+ hours per week on assessment management.',
    industry: 'Education / Training Centers',
    tier: 'standard',
    metrics: ['-10h/week grading', 'instant feedback'],
    category: 'Sales',
    features: [
      'Automated quiz scheduling',
      'Auto-grading for multiple formats',
      'Instant feedback delivery',
      'Question bank management',
      'Performance analytics',
      'Integration with LMS platforms'
    ],
    integrations: [
      'Learning management systems (LMS)',
      'Assessment platforms',
      'Gradebook systems',
      'Student information systems',
      'Analytics tools',
      'Mobile apps'
    ],
    outcomes: [
      'Grading time reduced by 10+ hours per week',
      'Instant feedback to students',
      'Improved assessment efficiency',
      'Better learning outcomes',
      'Enhanced instructor productivity'
    ],
    kpis: [
      'Grading time saved (target: -10h/week)',
      'Feedback delivery time',
      'Assessment completion rate',
      'Student performance trends',
      'Instructor satisfaction scores'
    ]
  },
  {
    slug: 'education-parent-comms',
    name: 'Parent Comms Bot',
    subtitle: 'Keep parents in the loop effortlessly',
    blurb: 'Automated updates on events, schedule changes, and important announcements ensure 100% parent communication coverage.',
    industry: 'Education / Training Centers',
    tier: 'simple',
    metrics: ['100% reach', '-80% admin time'],
    category: 'Sales',
    features: [
      'Automated announcement distribution',
      'Event and schedule notifications',
      'Multi-channel communication',
      'Targeted messaging by class/grade',
      'Delivery confirmation tracking',
      'Two-way communication support'
    ],
    integrations: [
      'Student information systems',
      'Parent portal platforms',
      'SMS/Email providers',
      'Calendar systems',
      'Mobile apps',
      'School management software'
    ],
    outcomes: [
      '100% parent communication reach',
      'Administrative time reduced by 80%',
      'Improved parent engagement',
      'Better event attendance',
      'Enhanced school-home connection'
    ],
    kpis: [
      'Communication reach rate (target: 100%)',
      'Admin time reduction (target: -80%)',
      'Message open rates',
      'Parent engagement scores',
      'Event attendance rates'
    ]
  },
  {
    slug: 'logistics-shipment-tracking',
    name: 'Shipment Tracking Bot',
    subtitle: 'Real-time visibility for every package',
    blurb: 'Automatic tracking updates keep customers informed and reduce where-is-my-order inquiries by 80%.',
    industry: 'Logistics / Delivery',
    tier: 'standard',
    metrics: ['-80% inquiry calls', '95% satisfaction'],
    isHot: true,
    category: 'Sales',
    features: [
      'Real-time shipment tracking',
      'Automated status updates',
      'Multi-carrier integration',
      'Proactive delay notifications',
      'Delivery confirmation alerts',
      'Customer self-service portal'
    ],
    integrations: [
      'Shipping carriers (FedEx, UPS, USPS)',
      'Order management systems',
      'E-commerce platforms',
      'SMS/Email providers',
      'Customer service platforms',
      'Warehouse management systems'
    ],
    outcomes: [
      'Inquiry calls reduced by 80%',
      'Customer satisfaction improved to 95%',
      'Reduced customer service workload',
      'Better customer experience',
      'Improved delivery visibility'
    ],
    kpis: [
      'Inquiry call reduction (target: -80%)',
      'Customer satisfaction (target: 95%)',
      'Tracking update delivery rate',
      'Customer portal engagement',
      'Support ticket reduction'
    ]
  },
  {
    slug: 'logistics-route-optimizer',
    name: 'Route Optimizer Helper',
    subtitle: 'Save fuel, time, and money daily',
    blurb: 'AI-powered route optimization considers traffic, delivery windows, and driver schedules to reduce miles driven by 25%.',
    industry: 'Logistics / Delivery',
    tier: 'complex',
    metrics: ['-25% miles', '+30% deliveries/day'],
    category: 'Sales',
    features: [
      'AI-powered route optimization',
      'Real-time traffic integration',
      'Delivery window management',
      'Driver schedule optimization',
      'Multi-stop route planning',
      'Fuel cost calculation'
    ],
    integrations: [
      'GPS and mapping services',
      'Traffic data providers',
      'Fleet management systems',
      'Order management platforms',
      'Driver mobile apps',
      'Fuel tracking systems'
    ],
    outcomes: [
      'Miles driven reduced by 25%',
      'Deliveries per day increased by 30%',
      'Lower fuel costs',
      'Improved driver efficiency',
      'Better on-time delivery rates'
    ],
    kpis: [
      'Miles reduction (target: -25%)',
      'Deliveries per day (target: +30%)',
      'Fuel cost savings',
      'On-time delivery rate',
      'Driver productivity metrics'
    ]
  },
  {
    slug: 'logistics-driver-checkin',
    name: 'Driver Check-in Bot',
    subtitle: 'Streamlined start and end of day',
    blurb: 'Automated vehicle inspection checklists and route confirmations ensure compliance and reduce morning delays by 40%.',
    industry: 'Logistics / Delivery',
    tier: 'simple',
    metrics: ['-40% morning delays', '100% compliance'],
    category: 'Sales',
    features: [
      'Automated vehicle inspection checklists',
      'Route confirmation workflows',
      'Compliance documentation',
      'Photo and signature capture',
      'Issue reporting and escalation',
      'Mobile-first interface'
    ],
    integrations: [
      'Fleet management systems',
      'Mobile driver apps',
      'Maintenance tracking systems',
      'Compliance management platforms',
      'Document management systems',
      'Communication platforms'
    ],
    outcomes: [
      'Morning delays reduced by 40%',
      '100% compliance with inspections',
      'Faster route starts',
      'Better vehicle maintenance',
      'Reduced safety incidents'
    ],
    kpis: [
      'Morning delay reduction (target: -40%)',
      'Compliance rate (target: 100%)',
      'Average check-in time',
      'Issue resolution time',
      'Safety incident rate'
    ]
  },
  {
    slug: 'logistics-delay-alert',
    name: 'Delay Alert System',
    subtitle: 'Proactive customer communication',
    blurb: 'Automatic notifications when delays occur with updated ETAs maintain trust and reduce complaint calls by 65%.',
    industry: 'Logistics / Delivery',
    tier: 'standard',
    metrics: ['-65% complaints', '+40% trust'],
    category: 'Sales',
    features: [
      'Automated delay detection',
      'Proactive customer notifications',
      'Updated ETA calculations',
      'Multi-channel communication',
      'Reason code explanations',
      'Resolution tracking'
    ],
    integrations: [
      'Route tracking systems',
      'GPS and mapping services',
      'Customer communication platforms',
      'SMS/Email providers',
      'Order management systems',
      'Customer service platforms'
    ],
    outcomes: [
      'Complaint calls reduced by 65%',
      'Customer trust improved by 40%',
      'Better customer experience',
      'Proactive issue resolution',
      'Improved brand reputation'
    ],
    kpis: [
      'Complaint reduction (target: -65%)',
      'Customer trust score (target: +40%)',
      'Notification delivery rate',
      'Customer satisfaction scores',
      'Issue resolution time'
    ]
  },
  {
    slug: 'logistics-auto-invoice-route',
    name: 'Auto-Invoice per Route',
    subtitle: 'Instant billing after delivery',
    blurb: 'Generate invoices automatically when routes complete with proof of delivery to speed billing by 90% and improve cash flow.',
    industry: 'Logistics / Delivery',
    tier: 'standard',
    metrics: ['-90% billing time', '+50% cash flow'],
    category: 'Sales',
    features: [
      'Automated invoice generation',
      'Proof of delivery integration',
      'Route completion triggers',
      'Multi-customer billing',
      'Payment link integration',
      'Accounting system sync'
    ],
    integrations: [
      'Route management systems',
      'Proof of delivery platforms',
      'Accounting software (QuickBooks, Xero)',
      'Payment processors',
      'Order management systems',
      'Customer portals'
    ],
    outcomes: [
      'Billing time reduced by 90%',
      'Cash flow improved by 50%',
      'Faster payment collection',
      'Reduced billing errors',
      'Improved customer satisfaction'
    ],
    kpis: [
      'Billing time reduction (target: -90%)',
      'Cash flow improvement (target: +50%)',
      'Invoice accuracy rate',
      'Days sales outstanding (DSO)',
      'Payment completion rate'
    ]
  },
  {
    slug: 'ecommerce-cart-recovery',
    name: 'Cart Recovery Bot',
    subtitle: 'Recover lost sales automatically',
    blurb: 'Smart abandoned cart reminders with personalized incentives recover 15-25% of abandoned carts and boost revenue.',
    industry: 'E-commerce',
    tier: 'standard',
    metrics: ['+15-25% recovery', '+$10k/month avg'],
    isHot: true,
    category: 'Sales',
    features: [
      'Automated abandoned cart detection',
      'Personalized reminder sequences',
      'Dynamic incentive offers',
      'Multi-channel outreach',
      'Cart content preservation',
      'A/B testing for messaging'
    ],
    integrations: [
      'E-commerce platforms (Shopify, WooCommerce)',
      'Email marketing platforms',
      'SMS providers',
      'Analytics tools',
      'Payment processors',
      'Customer data platforms'
    ],
    outcomes: [
      'Cart recovery rate of 15-25%',
      'Average $10k/month additional revenue',
      'Improved customer lifetime value',
      'Better conversion rates',
      'Reduced revenue loss'
    ],
    kpis: [
      'Cart recovery rate (target: 15-25%)',
      'Revenue recovered per month',
      'Email open and click rates',
      'Conversion rate improvement',
      'Return on investment (ROI)'
    ]
  },
  {
    slug: 'ecommerce-order-status',
    name: 'Order Status Bot',
    subtitle: 'Keep customers informed automatically',
    blurb: 'Automatic order updates from purchase to delivery reduce support tickets by 70% and improve satisfaction.',
    industry: 'E-commerce',
    tier: 'simple',
    metrics: ['-70% support tickets', '+35% satisfaction'],
    category: 'Sales',
    features: [
      'Automated order status updates',
      'Multi-stage tracking notifications',
      'Delivery confirmation alerts',
      'Proactive delay notifications',
      'Self-service order tracking',
      'Multi-channel delivery'
    ],
    integrations: [
      'E-commerce platforms',
      'Shipping carriers',
      'Order management systems',
      'SMS/Email providers',
      'Customer service platforms',
      'Mobile apps'
    ],
    outcomes: [
      'Support tickets reduced by 70%',
      'Customer satisfaction improved by 35%',
      'Reduced customer service workload',
      'Better customer experience',
      'Improved brand loyalty'
    ],
    kpis: [
      'Support ticket reduction (target: -70%)',
      'Satisfaction improvement (target: +35%)',
      'Notification delivery rate',
      'Customer engagement scores',
      'Repeat purchase rate'
    ]
  },
  {
    slug: 'ecommerce-product-recommendation',
    name: 'Product Recommendation Bot',
    subtitle: 'Personalized shopping at scale',
    blurb: 'AI-powered product suggestions based on browsing and purchase history increase average order value by 20-30%.',
    industry: 'E-commerce',
    tier: 'complex',
    metrics: ['+20-30% AOV', '+40% engagement'],
    category: 'Sales',
    features: [
      'AI-powered product recommendations',
      'Browsing behavior analysis',
      'Purchase history integration',
      'Real-time personalization',
      'Cross-sell and upsell suggestions',
      'A/B testing capabilities'
    ],
    integrations: [
      'E-commerce platforms',
      'Customer data platforms',
      'Analytics tools',
      'Email marketing platforms',
      'Product catalog systems',
      'Machine learning platforms'
    ],
    outcomes: [
      'Average order value increased by 20-30%',
      'Customer engagement improved by 40%',
      'Higher conversion rates',
      'Improved customer satisfaction',
      'Increased revenue per customer'
    ],
    kpis: [
      'Average order value (target: +20-30%)',
      'Engagement improvement (target: +40%)',
      'Recommendation click-through rate',
      'Conversion rate on recommendations',
      'Revenue from recommendations'
    ]
  },
  {
    slug: 'ecommerce-review-aggregator',
    name: 'Review Aggregator',
    subtitle: 'More reviews, better reputation',
    blurb: 'Post-purchase review requests with easy submission increase review volume by 300% and improve SEO.',
    industry: 'E-commerce',
    tier: 'simple',
    metrics: ['+300% reviews', '+25% conversions'],
    category: 'Sales',
    features: [
      'Automated review requests',
      'Optimal timing for requests',
      'Easy submission process',
      'Multi-platform review aggregation',
      'Incentive management',
      'Review response automation'
    ],
    integrations: [
      'E-commerce platforms',
      'Review platforms (Google, Trustpilot)',
      'Email marketing tools',
      'SMS providers',
      'Social media platforms',
      'SEO tools'
    ],
    outcomes: [
      'Review volume increased by 300%',
      'Conversion rates improved by 25%',
      'Better SEO rankings',
      'Improved brand reputation',
      'Higher customer trust'
    ],
    kpis: [
      'Review volume increase (target: +300%)',
      'Conversion rate improvement (target: +25%)',
      'Review submission rate',
      'Average star rating',
      'SEO ranking improvements'
    ]
  },
  {
    slug: 'ecommerce-stock-notifier',
    name: 'Stock Level Notifier',
    subtitle: 'Never run out unexpectedly',
    blurb: 'Low stock alerts and reorder suggestions based on sales velocity reduce stockouts by 60% and prevent lost sales.',
    industry: 'E-commerce',
    tier: 'simple',
    metrics: ['-60% stockouts', '+20% revenue'],
    category: 'Sales',
    features: [
      'Automated low stock alerts',
      'Sales velocity analysis',
      'Reorder point calculations',
      'Supplier notification integration',
      'Multi-channel alert delivery',
      'Inventory forecasting'
    ],
    integrations: [
      'E-commerce platforms',
      'Inventory management systems',
      'Supplier portals',
      'Analytics platforms',
      'SMS/Email providers',
      'Purchasing systems'
    ],
    outcomes: [
      'Stockouts reduced by 60%',
      'Revenue increased by 20%',
      'Better inventory management',
      'Reduced lost sales',
      'Improved customer satisfaction'
    ],
    kpis: [
      'Stockout reduction (target: -60%)',
      'Revenue increase (target: +20%)',
      'Inventory turnover rate',
      'Lost sales prevention',
      'Reorder accuracy'
    ]
  },
  {
    slug: 'hr-candidate-screener',
    name: 'Candidate Screener Bot',
    subtitle: 'Only qualified candidates to interviews',
    blurb: 'Automated screening questions and resume analysis reduce recruiter workload by 70% and improve candidate quality by 40%.',
    industry: 'HR / Recruitment Agencies',
    tier: 'complex',
    metrics: ['-70% screening time', '+40% quality'],
    isHot: false,
    category: 'Sales',
    features: [
      'AI-powered resume parsing and skills matching',
      'Automated initial screening questionnaires',
      'Candidate scoring based on job requirements',
      'Integration with ATS and recruitment platforms',
      'Automated interview scheduling for qualified candidates',
      'Candidate communication and status tracking'
    ],
    integrations: [
      'Applicant Tracking Systems (ATS)',
      'Job boards and career sites',
      'Video interview platforms',
      'Reference checking services',
      'Background check providers',
      'HR management systems'
    ],
    outcomes: [
      'Reduced screening time by 70% through automation',
      'Improved candidate quality by 40% through better filtering',
      'Faster time-to-hire with streamlined processes',
      'Enhanced recruiter productivity and focus on high-value tasks',
      'Better candidate experience with faster response times'
    ],
    kpis: [
      'Screening time reduction (target: -70%)',
      'Candidate quality improvement (target: +40%)',
      'Time-to-hire metrics',
      'Interview-to-offer conversion rate',
      'Recruiter productivity metrics'
    ]
  },
  {
    slug: 'hr-interview-scheduler',
    name: 'Interview Scheduler',
    subtitle: 'Effortless interview coordination',
    blurb: 'Automated interview scheduling with panel availability and room booking reduces coordination time by 80%.',
    industry: 'HR / Recruitment Agencies',
    tier: 'standard',
    metrics: ['-80% coordination time', '+50% speed'],
    category: 'Sales',
    features: [
      'Automated interview scheduling',
      'Panel availability coordination',
      'Room and resource booking',
      'Calendar synchronization',
      'Candidate communication',
      'Rescheduling management'
    ],
    integrations: [
      'Calendar systems (Google, Outlook)',
      'Applicant Tracking Systems (ATS)',
      'Video conferencing platforms',
      'Room booking systems',
      'SMS/Email providers',
      'HR management systems'
    ],
    outcomes: [
      'Coordination time reduced by 80%',
      'Interview scheduling speed improved by 50%',
      'Better candidate experience',
      'Reduced scheduling conflicts',
      'Improved recruiter productivity'
    ],
    kpis: [
      'Coordination time reduction (target: -80%)',
      'Scheduling speed improvement (target: +50%)',
      'Interview completion rate',
      'Candidate satisfaction scores',
      'Scheduling conflict rate'
    ]
  },
  {
    slug: 'hr-onboarding-checklist',
    name: 'Onboarding Checklist Bot',
    subtitle: 'Smooth first days for new hires',
    blurb: 'Personalized onboarding checklists with document collection and system access reduce onboarding time by 50%.',
    industry: 'HR / Recruitment Agencies',
    tier: 'standard',
    metrics: ['-50% onboarding time', '95% completion'],
    category: 'Sales',
    features: [
      'Personalized onboarding checklists',
      'Document collection workflows',
      'System access provisioning',
      'Progress tracking and reminders',
      'Multi-department coordination',
      'Compliance verification'
    ],
    integrations: [
      'HR management systems',
      'IT provisioning systems',
      'Document management platforms',
      'E-signature platforms',
      'Learning management systems',
      'Payroll systems'
    ],
    outcomes: [
      'Onboarding time reduced by 50%',
      '95% checklist completion rate',
      'Better new hire experience',
      'Improved compliance',
      'Reduced HR administrative burden'
    ],
    kpis: [
      'Onboarding time reduction (target: -50%)',
      'Completion rate (target: 95%)',
      'New hire satisfaction scores',
      'Time to productivity',
      'Compliance audit pass rate'
    ]
  },
  {
    slug: 'hr-performance-review',
    name: 'Performance Review Collector',
    subtitle: 'Timely reviews without hassle',
    blurb: 'Automated review cycles with reminders and progress tracking ensure 100% on-time completion and reduce admin work by 60%.',
    industry: 'HR / Recruitment Agencies',
    tier: 'standard',
    metrics: ['100% on-time', '-60% admin work'],
    category: 'Sales',
    features: [
      'Automated review cycle management',
      'Smart reminder system',
      'Progress tracking dashboard',
      'Multi-rater feedback collection',
      'Template management',
      'Reporting and analytics'
    ],
    integrations: [
      'HR management systems',
      'Performance management platforms',
      'Calendar systems',
      'SMS/Email providers',
      'Document management systems',
      'Analytics platforms'
    ],
    outcomes: [
      '100% on-time review completion',
      'Administrative work reduced by 60%',
      'Better employee engagement',
      'Improved feedback quality',
      'Streamlined HR processes'
    ],
    kpis: [
      'On-time completion rate (target: 100%)',
      'Admin time reduction (target: -60%)',
      'Employee participation rate',
      'Manager satisfaction scores',
      'Review cycle duration'
    ]
  },
  {
    slug: 'hr-vacation-request',
    name: 'Vacation Request Bot',
    subtitle: 'Easy PTO management for all',
    blurb: 'Self-service vacation requests with balance checking and approval workflows reduce approval time by 75%.',
    industry: 'HR / Recruitment Agencies',
    tier: 'simple',
    metrics: ['-75% approval time', '100% visibility'],
    category: 'Sales',
    features: [
      'Self-service request submission',
      'Real-time balance checking',
      'Automated approval workflows',
      'Team calendar integration',
      'Conflict detection',
      'Mobile-friendly interface'
    ],
    integrations: [
      'HR management systems',
      'Calendar platforms',
      'Payroll systems',
      'Team collaboration tools',
      'SMS/Email providers',
      'Mobile apps'
    ],
    outcomes: [
      'Approval time reduced by 75%',
      '100% PTO balance visibility',
      'Better employee satisfaction',
      'Reduced HR administrative burden',
      'Improved team planning'
    ],
    kpis: [
      'Approval time reduction (target: -75%)',
      'Balance visibility (target: 100%)',
      'Employee satisfaction scores',
      'Request processing time',
      'Conflict resolution rate'
    ]
  },
  {
    slug: 'marketing-campaign-reporter',
    name: 'Campaign KPI Reporter',
    subtitle: 'Client reports in minutes, not hours',
    blurb: 'Auto-generate campaign performance reports with key metrics and insights to reduce reporting time by 80%.',
    industry: 'Marketing / Advertising Agencies',
    tier: 'standard',
    metrics: ['-80% report time', '100% on-time'],
    isHot: false,
    category: 'Sales',
    features: [
      'Automated report generation',
      'Multi-platform data aggregation',
      'Customizable templates',
      'Scheduled delivery',
      'Visual dashboards',
      'Client portal integration'
    ],
    integrations: [
      'Marketing platforms (Google Ads, Facebook)',
      'Analytics tools',
      'CRM systems',
      'Email platforms',
      'Data visualization tools',
      'Client portal systems'
    ],
    outcomes: [
      'Report generation time reduced by 80%',
      '100% on-time delivery',
      'Improved client satisfaction',
      'Better data insights',
      'Reduced manual work'
    ],
    kpis: [
      'Report time reduction (target: -80%)',
      'On-time delivery rate (target: 100%)',
      'Client satisfaction scores',
      'Report accuracy',
      'Team time saved'
    ]
  },
  {
    slug: 'marketing-content-approval',
    name: 'Content Approval Bot',
    subtitle: 'Faster approvals, smoother workflows',
    blurb: 'Automated approval workflows with version tracking and deadline reminders reduce approval time by 60%.',
    industry: 'Marketing / Advertising Agencies',
    tier: 'standard',
    metrics: ['-60% approval time', '+40% throughput'],
    category: 'Sales',
    features: [
      'Automated approval workflows',
      'Version control and tracking',
      'Deadline reminders',
      'Multi-stakeholder coordination',
      'Comment and feedback management',
      'Approval history tracking'
    ],
    integrations: [
      'Project management tools',
      'Content management systems',
      'Collaboration platforms',
      'Document management systems',
      'SMS/Email providers',
      'Design tools'
    ],
    outcomes: [
      'Approval time reduced by 60%',
      'Content throughput increased by 40%',
      'Better workflow efficiency',
      'Reduced bottlenecks',
      'Improved team collaboration'
    ],
    kpis: [
      'Approval time reduction (target: -60%)',
      'Throughput improvement (target: +40%)',
      'Average approval cycles',
      'Bottleneck identification',
      'Team satisfaction scores'
    ]
  },
  {
    slug: 'marketing-lead-nurture',
    name: 'Lead Nurture Bot',
    subtitle: 'Convert prospects on autopilot',
    blurb: 'Personalized drip campaigns based on behavior and engagement increase conversion rates by 35% with smart automation.',
    industry: 'Marketing / Advertising Agencies',
    tier: 'standard',
    metrics: ['+35% conversions', '+50% engagement'],
    category: 'Sales',
    features: [
      'Automated drip campaigns',
      'Behavior-based personalization',
      'Engagement tracking',
      'Lead scoring',
      'Multi-channel outreach',
      'A/B testing capabilities'
    ],
    integrations: [
      'Marketing automation platforms',
      'CRM systems',
      'Email marketing tools',
      'SMS providers',
      'Analytics platforms',
      'Social media platforms'
    ],
    outcomes: [
      'Conversion rates increased by 35%',
      'Engagement improved by 50%',
      'Better lead quality',
      'Automated nurturing',
      'Improved ROI'
    ],
    kpis: [
      'Conversion rate improvement (target: +35%)',
      'Engagement increase (target: +50%)',
      'Lead nurture velocity',
      'Campaign performance metrics',
      'Marketing ROI'
    ]
  },
  {
    slug: 'marketing-social-scheduler',
    name: 'Social Scheduler',
    subtitle: 'Consistent posting made easy',
    blurb: 'Schedule posts across all platforms with optimal timing to save 10+ hours per week and improve engagement by 25%.',
    industry: 'Marketing / Advertising Agencies',
    tier: 'simple',
    metrics: ['-10h/week', '+25% engagement'],
    category: 'Sales',
    features: [
      'Multi-platform scheduling',
      'Optimal timing recommendations',
      'Content calendar management',
      'Bulk upload capabilities',
      'Performance analytics',
      'Team collaboration tools'
    ],
    integrations: [
      'Social media platforms',
      'Content management systems',
      'Analytics tools',
      'Design tools',
      'Team collaboration platforms',
      'Client approval systems'
    ],
    outcomes: [
      'Time saved: 10+ hours per week',
      'Engagement improved by 25%',
      'Consistent posting schedule',
      'Better content planning',
      'Improved team efficiency'
    ],
    kpis: [
      'Time saved (target: -10h/week)',
      'Engagement improvement (target: +25%)',
      'Posting consistency rate',
      'Content performance metrics',
      'Team productivity'
    ]
  },
  {
    slug: 'marketing-invoice-reminder',
    name: 'Invoice & Payment Reminder',
    subtitle: 'Get paid on time, every time',
    blurb: 'Automated invoice delivery and payment reminders reduce late payments by 50% and improve cash flow.',
    industry: 'Marketing / Advertising Agencies',
    tier: 'simple',
    metrics: ['-50% late payments', '+40% cash flow'],
    category: 'Sales',
    features: [
      'Automated invoice delivery',
      'Payment reminder sequences',
      'Payment link integration',
      'Aging receivables tracking',
      'Client payment portal',
      'Escalation workflows'
    ],
    integrations: [
      'Accounting software (QuickBooks, Xero)',
      'Payment processors',
      'Project management tools',
      'CRM systems',
      'SMS/Email providers',
      'Client portal systems'
    ],
    outcomes: [
      'Late payments reduced by 50%',
      'Cash flow improved by 40%',
      'Faster payment collection',
      'Reduced administrative burden',
      'Better client relationships'
    ],
    kpis: [
      'Late payment reduction (target: -50%)',
      'Cash flow improvement (target: +40%)',
      'Days sales outstanding (DSO)',
      'Payment completion rate',
      'Client satisfaction scores'
    ]
  }

// Total: 50 agents
]

export const agentCategories: AgentCategory[] = [
  'Bookings',
  'Sales',
  'Support',
  'Healthcare',
  'Logistics'
]

export const industries: Industry[] = [
  'Real Estate',
  'Healthcare / Clinics',
  'Legal Firms',
  'Insurance Agencies',
  'Accounting & Finance Offices',
  'Education / Training Centers',
  'Logistics / Delivery',
  'E-commerce',
  'HR / Recruitment Agencies',
  'Marketing / Advertising Agencies'
]
