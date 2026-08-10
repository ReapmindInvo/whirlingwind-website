export const site = {
  name: "WhirlingWind",
  legalName: "WhirlingWind Technologies Private Limited",
  domain: "https://whirlingwind.com",
  tagline: "Healthcare, engineered forward.",
  description:
    "WhirlingWind Technologies builds AI-first healthcare products — careup.ai HMS, healthcare LLMs, health kiosks & telemedicine platforms for hospitals in India & GCC.",
  email: "hello@whirlingwind.com",
  phone: "+91 90968 55853",
  address: {
    line1: "THE SINGULARITY, Office 101",
    line2: "Near Bharti Vidyapeeth, Film City Road",
    city: "Kolhapur",
    region: "Maharashtra",
    postalCode: "416013",
    country: "India",
  },
  branch: "The Silver Tower, 20 Marasi Drive, Business Bay, Dubai, UAE",
  group: "The Singularity Group",
};

export const stats = [
  { value: 200000, suffix: "+", label: "Doctors on our platforms" },
  { value: 5000000, suffix: "+", label: "Patient encounters processed", compact: true },
  { value: 300, suffix: "+", label: "Hospital implementations" },
  { value: 500000, suffix: "+", label: "Patients connected to care", compact: true },
];

export type Brand = {
  slug: string;
  name: string;
  category: string;
  accent: string;
  headline: string;
  summary: string;
  points: string[];
  metrics: { value: string; label: string }[];
  logo?: string;
  image?: string;
  imageAlt?: string;
};

export const brands: Brand[] = [
  {
    slug: "vkonnect-health",
    name: "VKonnect Health",
    category: "Medical Knowledge Platform",
    accent: "#ffffff",
    headline: "India's most widely adopted medical knowledge app for doctors.",
    summary:
      "VKonnect Health puts an AI-native clinical companion in the pocket of 200,000+ Indian doctors — HuntGPT AI search, Persona work-mode tools, WHO outbreak tracking, radiology assist and a content ecosystem spanning 25+ specialties.",
    points: [
      "HuntGPT — AI-powered medical search combining clinical AI, image analysis & academic research",
      "Persona — a doctor's AI assistant: diagnosis support, Instant PPT, diet charts, protocols & mind maps",
      "Real-time WHO outbreak tracker, PubMed & journal integrations",
      "Medical reels, podcasts, CME events and peer learning for a 200K+ doctor community",
    ],
    metrics: [
      { value: "200K+", label: "doctors across India" },
      { value: "92.8%", label: "user retention" },
      { value: "500K+", label: "monthly sessions" },
      { value: "4.8★", label: "app store rating" },
    ],
    logo: "/brand/vkonnect.svg",
    image: "/images/vkonnect.jpg",
    imageAlt: "Doctor using a medical knowledge app on a smartphone in a dark clinic",
  },
  {
    slug: "mulkmed",
    name: "MulkMed Healthcare",
    category: "Telemedicine & Medical Tourism",
    accent: "#c2d4e0",
    headline: "Borderless care — telemedicine and medical tourism at global scale.",
    summary:
      "MulkMed connects 500,000+ patients with certified providers worldwide — virtual consultations, second opinions, doctor EMR automation and end-to-end medical travel across 18 countries, engineered by WhirlingWind for the UAE and GCC.",
    points: [
      "Telemedicine at scale — 500K+ patients, seamless virtual consultations anytime, anywhere",
      "AI clinical insights processing 2M+ data points daily across 35+ specialties",
      "End-to-end medical tourism with 200+ accredited providers across 18 countries",
      "50M+ patient records managed with full HIPAA & GDPR compliance",
    ],
    metrics: [
      { value: "500K+", label: "patients connected" },
      { value: "18", label: "countries in network" },
      { value: "10K+", label: "physicians on EMR" },
      { value: "40%", label: "faster clinical decisions" },
    ],
    logo: "/brand/mulkmed.png",
    image: "/images/mulkmed.jpg",
    imageAlt: "Elderly patient in a telemedicine video consultation at night",
  },
  {
    slug: "elif-healthcare",
    name: "Elif Healthcare",
    category: "Mental Wellness & EAP",
    accent: "#d9cdb4",
    headline: "Clinician-led mental wellness for the modern workforce.",
    summary:
      "Elif Healthcare delivers clinical-grade corporate mental wellness — confidential EAP counselling, organizational workshops and therapy access, led by certified psychiatrists. WhirlingWind engineered Elif's digital wellness-management platform to take clinically-led care pan-India.",
    points: [
      "Employee Assistance Programs — confidential 1-on-1 counselling, crisis support & burnout prevention",
      "Organizational wellness — emotional intelligence, leadership & stress-management programs",
      "Clinician-led, not app-driven: psychiatrists & psychologists, with pre/post outcome measurement",
      "Trusted by JP Morgan, Wipro, Optum India, Carelon and leading institutions",
    ],
    metrics: [
      { value: "500+", label: "employees trained" },
      { value: "28%", label: "avg. productivity lift" },
      { value: "25+", label: "sectors served" },
      { value: "4", label: "clinic locations" },
    ],
    image: "/images/elif.jpg",
    imageAlt: "Calm one-on-one counselling session by soft window light",
  },
  {
    slug: "hb-check-camps",
    name: "HB Check Camps",
    category: "IoT Health Screening",
    accent: "#dfe5e9",
    headline: "IoT-powered hemoglobin screening — from device to cloud, at population scale.",
    summary:
      "HB Check Camps pair a Bluetooth hemoglobin analyzer with a WhirlingWind-built mobile platform to screen thousands daily across India — instant anemia detection on the ground, secure AWS cloud records, and research-grade population health data.",
    points: [
      "Connected HbChek device paired live with a purpose-built field screening app",
      "An average of 5,000 patients screened per day across camps in India",
      "Secure AWS cloud storage powering research & public-health study datasets",
      "CSR-ready deployment model for corporates, schools and rural communities",
    ],
    metrics: [
      { value: "5K", label: "patients screened daily" },
      { value: "100%", label: "digital capture on-site" },
      { value: "AWS", label: "secure cloud records" },
      { value: "Pan-India", label: "camp coverage" },
    ],
    image: "/images/hbcheck.jpg",
    imageAlt: "Healthcare worker testing a patient with a handheld hemoglobin device at a field camp",
  },
];

export const careup = {
  name: "careup.ai",
  headline: "The AI-first Hospital Management System.",
  summary:
    "careup.ai is an ABDM/ABHA-ready, NABH-compliant hospital management system with AI-native EMR — 300+ implementations and 5M+ patient encounters processed with a 99.9% uptime SLA. Go live in days, not months.",
  metrics: [
    { value: "5M+", label: "encounters processed" },
    { value: "300+", label: "implementations" },
    { value: "99.9%", label: "uptime SLA" },
    { value: "Days", label: "to go live" },
  ],
  pillars: [
    {
      title: "AI-First by design",
      body: "Ambient documentation, AI triage, smart orders and predictive bed & revenue analytics woven into every workflow — not bolted on.",
    },
    {
      title: "ABDM & ABHA ready",
      body: "Full ABDM stack out of the box: ABHA ID creation, PHR linking, and HIP/HIU workflows for India's national digital health ecosystem.",
    },
    {
      title: "NABH compliant",
      body: "Audit trails, nursing care plans and quality indicators mapped to NABH standards — accreditation-ready from day one.",
    },
    {
      title: "Zero learning curve",
      body: "Clinician-first UX your staff already understands. 300+ hospitals went live in days — not months of change management.",
    },
  ],
};

export const aiServices = [
  {
    title: "Custom Healthcare LLMs",
    body: "Domain-tuned large language models trained on medical corpora and your institutional knowledge — fine-tuned, aligned and evaluated against clinical benchmarks, deployed on-prem or in your private cloud.",
    tags: ["Fine-tuning", "RLHF & alignment", "Clinical evals", "On-prem deployment"],
  },
  {
    title: "EMR Copilots & Plugin AI",
    body: "Drop-in AI copilots for your existing EMR/HIS — ambient scribing, discharge summaries, coding suggestions and order sets, integrated via HL7/FHIR without replacing your systems.",
    tags: ["Ambient scribing", "HL7 / FHIR", "Discharge summaries", "ICD coding AI"],
  },
  {
    title: "Medical RAG & Knowledge AI",
    body: "Retrieval-augmented generation over guidelines, formularies, PubMed and your own protocols — grounded answers with citations, built for clinical trust.",
    tags: ["RAG pipelines", "Vector search", "Guideline grounding", "Citation-first"],
  },
  {
    title: "Medical Imaging & Vision AI",
    body: "Radiology assist, disease detection and MRSA identification with advanced image-recognition models — flagging anomalies in X-rays, MRIs and CT scans in seconds.",
    tags: ["Radiology AI", "Disease detection", "DICOM pipelines", "Edge inference"],
  },
  {
    title: "Clinical NLP & Predictive Analytics",
    body: "Symptom-to-diagnosis NLP, prognosis evaluation and decision optimization built on real clinical data patterns — validated against global medical guidelines.",
    tags: ["Clinical NLP", "Risk scoring", "Outcome prediction", "Decision support"],
  },
  {
    title: "Safe & Compliant AI Engineering",
    body: "HIPAA, GDPR and DPDP-compliant AI development with guardrails, red-teaming, audit logs and clinician-in-the-loop validation at every stage.",
    tags: ["HIPAA / GDPR / DPDP", "Guardrails", "Red-teaming", "Audit trails"],
  },
];

export const iotDevices = [
  {
    title: "Patient Kiosks & Health ATMs",
    body: "Self-service health kiosks measuring vitals in minutes — BP, SpO2, BMI, glucose, ECG and more — with instant digital reports, ABHA linking and teleconsultation escalation. Built for hospital lobbies, corporates and rural PHCs.",
    specs: ["40+ health parameters", "ABHA-linked reports", "Teleconsult escalation", "Rugged, field-serviceable build"],
    image: "/images/iot-kiosk.jpg",
    imageAlt: "White health kiosk with glowing screen in a dark hospital lobby",
  },
  {
    title: "Smart Medicine Dispensers",
    body: "IoT-enabled automated dispensing — prescription-verified vending, cold-chain monitoring, stock telemetry and refill alerts. Extend pharmacy access to every ward, campus and remote community, 24×7.",
    specs: ["Rx-verified dispensing", "Cold-chain telemetry", "Real-time stock sync", "24×7 unmanned operation"],
    image: "/images/iot-dispenser.jpg",
    imageAlt: "Automated medicine dispensing machine with backlit compartments",
  },
  {
    title: "Health Booths & Telehealth Pods",
    body: "Private, connected consultation pods with integrated diagnostic devices and high-definition telemedicine — a clinic-grade experience in malls, factories, campuses and villages.",
    specs: ["Integrated diagnostics", "HD teleconsultation", "Soundproof private pod", "Deploy anywhere footprint"],
    image: "/images/iot-pod.jpg",
    imageAlt: "Private telehealth consultation pod with glowing interior",
  },
];

export const him = {
  name: "Health Information Management",
  headline: "The team behind your EMR, now running the operations inside it.",
  summary:
    "AI-augmented Health Information Management — release of information, medical record retrieval, clinical coding and payer support — co-managed with your team and built by the engineers behind careup.ai.",
  metrics: [
    { value: "<24 hrs", label: "average ROI turnaround SLA" },
    { value: "5+", label: "live client engagements" },
    { value: "2", label: "delivery hubs — India & UAE" },
    { value: "24/6", label: "contact center coverage" },
  ],
  certifications: ["ISO 27001 Certified", "SOC 2 Type II", "HIPAA Aligned", "DPDP Compliant"],
  pillars: [
    {
      title: "Built by the people who build your EMR",
      body: "Our HIM desk is run by the same engineers behind careup.ai — meaning tighter integration, faster escalation, and none of the hand-off friction of a third-party vendor.",
    },
    {
      title: "AI-augmented, not AI-branded",
      body: "The same clinical-NLP and HuntGPT stack live across VKonnect and careup.ai does the first pass on triage, redaction and coding — your team reviews, not re-does.",
    },
    {
      title: "India + GCC delivery",
      body: "Operating from Kolhapur and Business Bay, Dubai — cost-efficient India delivery with GCC-hours coverage for both US and Gulf healthcare clients.",
    },
    {
      title: "Co-managed, not outsourced-and-forgotten",
      body: "You keep oversight and SLAs; we bring the trained staff, workflow tooling and AI acceleration — an extension of your team, not a black box.",
    },
  ],
};

export const himProcess = [
  { step: "Assess", body: "We audit your current ROI turnaround, coding backlog and compliance gaps against HIPAA/DPDP/ABDM standards." },
  { step: "Design", body: "Co-design workflows, staffing model and SLAs with your HIM and compliance leadership." },
  { step: "Deploy", body: "Stand up your dedicated desk — AI + trained specialists — integrated with your EMR/HIS or careup.ai." },
  { step: "Operate", body: "Live operations with SLA-backed turnaround, requestor support and coding throughput from day one." },
  { step: "Improve", body: "Monthly analytics, audit reviews and continuous workflow tuning as volume scales." },
];

export const leadership = [
  { name: "Aroof Shaikh", role: "Founder & CEO" },
  { name: "Bhaskar Nallamelli", role: "Head of Business Strategies" },
  { name: "Tejesh Kodalli", role: "Board of Directors · Chairman, Bluecloud Infosoft" },
  { name: "Keith Wallace", role: "Head of Operations" },
];

export const trusted = [
  "Integrace Health", "MulkMed Healthcare LLC", "Zydus", "Biocon", "Sajaya Medical Care",
  "Kidwai Memorial Institute of Oncology", "The Times of India", "DQS", "upGrad", "Hyundai",
];
