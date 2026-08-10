export type HimService = {
  slug: string;
  name: string;
  category: string;
  cardBody: string;
  tags: string[];
  heroTitle: string;
  heroLead: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  whatIncluded: string[];
  whyPoints: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export const himServices: HimService[] = [
  {
    slug: "release-of-information",
    name: "Release of Information (ROI) Management",
    category: "Release of Information",
    cardBody:
      "Authorization validation, PHI-safe redaction, and a requestor support desk for patients, attorneys, insurers and providers — AI-assisted triage for faster turnaround.",
    tags: ["Authorization review", "PHI-safe redaction", "Requestor helpdesk", "SLA-backed turnaround"],
    heroTitle: "Release of Information, handled the way US compliance teams expect.",
    heroLead:
      "A dedicated, HIPAA-compliant ROI desk for US hospitals, clinics and health systems — authorization validation, PHI-safe redaction and requestor support for patients, attorneys, insurers and other providers, with AI-assisted triage cutting turnaround time.",
    metaTitle: "Release of Information (ROI) Outsourcing Services | USA",
    metaDescription:
      "HIPAA-compliant Release of Information outsourcing for US hospitals & health systems — authorization review, PHI-safe redaction, and a dedicated requestor desk.",
    keywords: [
      "release of information outsourcing",
      "ROI outsourcing services USA",
      "HIPAA compliant release of information",
      "medical records release service",
      "ROI requestor support",
      "PHI redaction service",
    ],
    whatIncluded: [
      "Authorization & identity verification against HIPAA minimum-necessary standards",
      "PHI-safe redaction with human QA on every release",
      "Dedicated requestor support desk — patients, attorneys, insurance carriers, other providers",
      "Fulfillment via secure portal, fax, mail or certified courier",
      "SLA-backed turnaround with real-time status tracking",
      "Backlog clearance sprints for facilities behind on requests",
    ],
    whyPoints: [
      { title: "AI-assisted triage", body: "Urgent and legal requests are flagged first, cutting average turnaround without adding headcount." },
      { title: "Built by your EMR team", body: "The same engineers behind careup.ai integrate ROI into your release workflow, not as a bolt-on process." },
      { title: "Certified PHI handling", body: "ISO 27001 & SOC 2 Type II certified handling of every record that passes through the desk." },
    ],
    faqs: [
      { q: "Do you support HIPAA's minimum-necessary and patient-access requirements?", a: "Yes — every request is validated for scope and requestor authority before release, with all releases logged for HIPAA compliance auditing." },
      { q: "Can you handle attorney and subpoena-based record requests?", a: "Yes, our ROI desk routes legal requests — attorney authorizations, subpoenas, litigation holds — through a dedicated legal-request track with chain-of-custody documentation." },
      { q: "How fast is turnaround for standard ROI requests?", a: "Our SLA targets sub-24-hour turnaround for standard requests, with expedited handling available for urgent or legally time-bound deadlines." },
    ],
  },
  {
    slug: "medical-record-retrieval-litigation-support",
    name: "Medical Record Retrieval & Litigation Support",
    category: "Litigation Support",
    cardBody:
      "End-to-end sourcing, compilation and certification of medical records for legal, subrogation, workers'-comp and audit cases — chain-of-custody tracked, e-discovery ready.",
    tags: ["Legal record retrieval", "Chain-of-custody", "e-Discovery ready", "Subrogation & audit support"],
    heroTitle: "Medical records, retrieved and certified for the courtroom.",
    heroLead:
      "End-to-end sourcing, compilation and certification of medical records for US law firms, insurers and auditors — built for subrogation, workers'-compensation and litigation timelines, with full chain-of-custody documentation.",
    metaTitle: "Medical Record Retrieval & Litigation Support Services | USA",
    metaDescription:
      "US-focused medical record retrieval for law firms, insurers & auditors — chain-of-custody tracked, e-discovery ready, subrogation & workers'-comp support.",
    keywords: [
      "medical record retrieval company USA",
      "litigation support medical records",
      "subrogation record retrieval",
      "workers comp record retrieval",
      "e-discovery medical records",
      "legal record retrieval service",
    ],
    whatIncluded: [
      "Multi-provider record sourcing — hospitals, clinics, imaging centers, pharmacies",
      "Chain-of-custody tracking from request to delivery",
      "Certified copy preparation for court admissibility",
      "e-Discovery-ready formatting and Bates-numbering support",
      "Subrogation and workers'-compensation case file assembly",
      "Status dashboards for case managers and paralegals",
    ],
    whyPoints: [
      { title: "Chain-of-custody by default", body: "Built into every workflow from intake to delivery, not treated as an afterthought or add-on." },
      { title: "AI-assisted case assembly", body: "Record indexing across multiple providers speeds up complex, multi-source case files." },
      { title: "A named case manager", body: "One dedicated point of contact for every engagement — no ticket queues, no hand-offs." },
    ],
    faqs: [
      { q: "Can you retrieve records from multiple providers for a single case?", a: "Yes — we coordinate multi-provider retrieval and compile a single organized case file with chain-of-custody documentation throughout." },
      { q: "Do you support subrogation and workers'-compensation record retrieval?", a: "Yes, this is a core focus area — we understand the specific documentation and timeline requirements for subrogation and workers'-comp cases." },
      { q: "Is the output e-discovery ready?", a: "Yes, records are formatted, indexed and Bates-numbered on request for direct use in e-discovery platforms." },
    ],
  },
  {
    slug: "clinical-coding-cdi",
    name: "Clinical Coding & Documentation (CDI)",
    category: "Clinical Coding",
    cardBody:
      "ICD-10/CPT/HCPCS coding support and clinical documentation improvement, accelerated by our healthcare NLP models — fewer denials, more accurate charts, at scale.",
    tags: ["ICD-10 / CPT coding", "CDI programs", "AI-assisted abstraction", "Denial-reduction focus"],
    heroTitle: "Cleaner charts. Fewer denials. Coding done right the first time.",
    heroLead:
      "ICD-10-CM and CPT coding support plus clinical documentation improvement (CDI) for US hospitals and physician groups — accelerated by our healthcare NLP models, reviewed by trained coding specialists, built to reduce denials.",
    metaTitle: "Clinical Coding & CDI Outsourcing Services | USA",
    metaDescription:
      "ICD-10-CM & CPT coding support plus clinical documentation improvement for US providers — AI-assisted chart abstraction that reduces denials.",
    keywords: [
      "clinical coding outsourcing USA",
      "medical coding outsourcing company",
      "CDI outsourcing services",
      "ICD-10 coding support",
      "denial reduction coding",
      "chart abstraction service",
    ],
    whatIncluded: [
      "ICD-10-CM and CPT/HCPCS coding support across specialties",
      "Clinical documentation improvement (CDI) query workflows",
      "AI-assisted chart abstraction with human coder review",
      "Coding accuracy audits and denial-pattern analysis",
      "Physician query management for documentation gaps",
      "Specialty-specific coding support, scaled by volume",
    ],
    whyPoints: [
      { title: "AI-assisted, human-finalized", body: "AI performs first-pass abstraction and code suggestions; a trained specialist reviews and finalizes every chart." },
      { title: "Denial analytics feed the fix", body: "Denial patterns are traced back to coding and documentation gaps, not just re-submitted." },
      { title: "Integrated with your EMR", body: "The same platform team behind careup.ai's EMR means coding fits your existing chart workflow." },
    ],
    faqs: [
      { q: "Do you code across all specialties or specific ones?", a: "We support general and specialty coding; volume and specialty mix are scoped during onboarding to match your case mix." },
      { q: "How does AI-assisted coding maintain accuracy?", a: "AI performs first-pass abstraction and code suggestions; every chart is reviewed and finalized by a trained coding specialist before submission." },
      { q: "Can this help reduce our denial rate?", a: "Yes — we run denial-pattern analysis against coding and documentation gaps, feeding findings back into a CDI query workflow to address root causes." },
    ],
  },
  {
    slug: "revenue-cycle-payer-support",
    name: "Revenue Cycle & Payer Support",
    category: "Revenue Cycle",
    cardBody:
      "Claims support, denial management, prior-authorization coordination and payer correspondence — an operational layer that plugs directly into careup.ai or your existing HIS.",
    tags: ["Claims & denial management", "Prior-auth coordination", "Payer correspondence", "EMR-integrated"],
    heroTitle: "Revenue cycle support that closes the loop with payers.",
    heroLead:
      "Claims support, denial management, prior-authorization coordination and payer correspondence for US hospitals, physician groups and payers — integrated directly with careup.ai or your existing HIS.",
    metaTitle: "Revenue Cycle & Payer Support Outsourcing | USA",
    metaDescription:
      "Claims support, denial management & prior-auth coordination for US hospitals & payers — an operational layer that plugs into your existing HIS or careup.ai.",
    keywords: [
      "revenue cycle management outsourcing USA",
      "payer support services healthcare",
      "denial management outsourcing",
      "prior authorization support",
      "claims processing outsourcing",
      "payer correspondence services",
    ],
    whatIncluded: [
      "Claims scrubbing, submission support and status follow-up",
      "Denial management and appeals coordination",
      "Prior-authorization request tracking and payer coordination",
      "Payer correspondence and eligibility verification support",
      "Reporting on denial trends and revenue leakage",
      "EMR/HIS-integrated workflows — careup.ai or your existing system",
    ],
    whyPoints: [
      { title: "EMR-integrated, not siloed", body: "Direct integration with your EMR/HIS — not a disconnected claims queue your team has to reconcile manually." },
      { title: "AI-flagged denial patterns", body: "Speeds up appeals and reduces repeat denials by surfacing root causes early." },
      { title: "Co-managed oversight", body: "Your team keeps SLA ownership and visibility; we run the day-to-day operational desk." },
    ],
    faqs: [
      { q: "Do you work with Medicare, Medicaid and commercial payers?", a: "Yes, our payer support desk handles correspondence and coordination across Medicare, Medicaid and commercial payer types." },
      { q: "Can this integrate with our existing billing system, not just careup.ai?", a: "Yes — the revenue cycle support layer is built to integrate with HL7/FHIR-compliant HIS and billing systems generally." },
      { q: "How do you help reduce denials, not just process them?", a: "We analyze denial patterns and feed findings back into coding and documentation workflows, addressing root causes rather than only managing appeals." },
    ],
  },
  {
    slug: "ai-human-contact-center",
    name: "AI + Human Contact Center for HIM",
    category: "Contact Center",
    cardBody:
      "A hybrid desk — AI voice and chat handling routine ROI and status queries, with expert human agents for escalations — covering patients, law firms, insurers and internal staff.",
    tags: ["AI voice & chat", "Human escalation desk", "Multi-requestor support", "Extended-hours coverage"],
    heroTitle: "Every call answered. Every escalation handled by a real specialist.",
    heroLead:
      "A hybrid contact center for US healthcare HIM operations — AI voice and chat handling routine ROI-status and record-request queries, with trained human agents for escalations, covering patients, law firms, insurers and internal staff.",
    metaTitle: "AI + Human HIM Contact Center Services | USA",
    metaDescription:
      "A hybrid AI-voice and human contact center for US healthcare HIM operations — ROI status, record requests and payer queries, covered around the clock.",
    keywords: [
      "healthcare contact center outsourcing USA",
      "HIM call center services",
      "AI voice contact center healthcare",
      "medical records call center",
      "requestor support desk",
      "healthcare BPO contact center",
    ],
    whatIncluded: [
      "AI voice and chat for routine status and FAQ-type queries",
      "Human agent escalation desk for complex or sensitive requests",
      "Multi-requestor coverage — patients, attorneys, insurers, internal staff",
      "Extended-hours coverage aligned to US time zones",
      "Call and chat logging with quality monitoring",
      "Integration with your ROI and case-management workflows",
    ],
    whyPoints: [
      { title: "India-hours coverage", body: "US after-hours coverage without after-hours staffing costs, using our India-based delivery hours." },
      { title: "AI for volume, humans for nuance", body: "No frustrating bot-only experience — every interaction has a clear path to a trained agent." },
      { title: "Fully auditable", body: "Every call and chat is logged, access-controlled and available for compliance review." },
    ],
    faqs: [
      { q: "Will patients and attorneys always reach a human when needed?", a: "Yes — the AI layer handles routine queries, but every interaction has a clear escalation path to a trained human agent." },
      { q: "What hours does the contact center cover for US clients?", a: "We structure coverage around US business hours plus extended windows, using our India-based delivery hours to reduce off-hours staffing costs for you." },
      { q: "Is call and chat data handled in compliance with HIPAA?", a: "Yes, all interactions are logged, access-controlled and handled under HIPAA-aligned data protection protocols." },
    ],
  },
  {
    slug: "compliance-audit-data-governance",
    name: "Compliance, Audit & Data Governance",
    category: "Compliance & Governance",
    cardBody:
      "HIPAA, DPDP and ABDM-aligned audit trails, breach-risk reviews and retention governance for every record that moves through your HIM operation.",
    tags: ["HIPAA / DPDP / ABDM", "Audit trail management", "Breach-risk reviews", "Retention governance"],
    heroTitle: "Compliance built into the workflow, not bolted on after.",
    heroLead:
      "HIPAA-aligned audit trails, breach-risk reviews and retention governance for every record that moves through your HIM operation — backed by our own ISO 27001 and SOC 2 Type II certification.",
    metaTitle: "HIM Compliance, Audit & Data Governance Services | USA",
    metaDescription:
      "HIPAA-aligned audit trails, breach-risk reviews and retention governance for US healthcare HIM operations — ISO 27001 & SOC 2 Type II certified.",
    keywords: [
      "HIPAA compliance services healthcare",
      "healthcare data governance outsourcing",
      "HIM audit services",
      "breach risk assessment healthcare",
      "medical record retention compliance",
      "healthcare data security outsourcing",
    ],
    whatIncluded: [
      "Full audit trails on every record access, release and edit",
      "Periodic breach-risk assessments and gap reviews",
      "Retention schedule governance aligned to state and federal requirements",
      "Role-based access control design and review",
      "Incident response coordination support",
      "Compliance reporting for internal and external audits",
    ],
    whyPoints: [
      { title: "We hold the certifications ourselves", body: "ISO 27001 and SOC 2 Type II — not just a claim, a standard we operate under across every engagement." },
      { title: "Audit trails are native", body: "Built into every HIM workflow we run, not bolted on as a separate reporting layer." },
      { title: "Governance feeds operations", body: "Findings from reviews flow directly back into how your ROI, coding and payer desks run day to day." },
    ],
    faqs: [
      { q: "What certifications does WhirlingWind hold?", a: "WhirlingWind is ISO 27001 and SOC 2 Type II certified, with every HIM engagement built around HIPAA and DPDP-aligned data handling." },
      { q: "Do you help with medical record retention requirements?", a: "Yes, we help design and govern retention schedules aligned to applicable state and federal requirements for your organization." },
      { q: "Can you support us during an external compliance audit?", a: "Yes, our audit trails and compliance reporting are structured to support internal reviews and external regulatory or payer audits." },
    ],
  },
];

export function getHimService(slug: string) {
  return himServices.find((s) => s.slug === slug);
}
