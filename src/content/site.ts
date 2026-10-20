// Edit this file to update the portfolio. Only add verified, real information.

import ctdsAccountingCertificate from "@/assets/ctds-accounting-certificate.jpg.asset.json";
import ctdsStatementOfMarks from "@/assets/ctds-statement-of-marks.jpg.asset.json";
import iqraamarkLiveProjectExperience from "@/assets/iqraamark-live-project-experience.jpg.asset.json";
import rowsColumnsDataAnalyticsCertificate from "@/assets/rows-columns-data-analytics-certificate.jpg.asset.json";

export const profile = {
  name: "Fidhin",
  email: "fidhinp8@gmail.com",
  // Replace with your real profile URLs (leave "" to show "Coming soon").
  linkedin: "",
  github: "",
  // Put your resume PDF at public/resume.pdf
  resumeUrl: "/resume.pdf",
  // Availability line shown on the homepage.
  availability: "Open to entry-level roles in India and internationally",
};

export const internship = {
  company: "Iqraa Mark Private Limited",
  role: "Data Analytics Intern",
  location: "Kozhikode, Kerala, India",
  // Add your actual dates, e.g. "Jan 2026 – Apr 2026"
  dates: "",
  project: {
    title: "Premium Membership and Subscription Strategy for Iqraa Mark",
    to: "/projects/iqraa-mark-membership",
  },
  // Verified internship activities, presented as research, analysis and recommendations.
  responsibilities: [
    "Conducted competitor research and market analysis of comparable membership offerings.",
    "Performed customer segmentation and membership tier research.",
    "Researched subscription pricing strategy, including willingness-to-pay analysis.",
    "Prepared revenue forecasts and business feasibility research for the proposed membership model.",
    "Identified KPIs and defined how performance would be measured for the programme.",
    "Developed strategic recommendations for membership growth and retention.",
  ],
  // Honest scope note — do not claim implementation in the company's live platform or real revenue.
  scopeNote:
    "This work was delivered as research, analysis and recommendations. The strategy was not implemented on the company's live platform, and no revenue or business impact is claimed.",
};

export const skills = [
  { name: "Microsoft Excel", blurb: "Spreadsheets for data cleaning, analysis and reporting." },
  { name: "Power BI", blurb: "Interactive dashboards and business intelligence reporting." },
  { name: "SQL", blurb: "Querying and working with relational data." },
  { name: "Tableau", blurb: "Visual analytics and data storytelling." },
];

// Add real screenshots to src/assets and set `image` when available.
export const showcase = [
  { title: "Power BI Dashboards", tag: "Business Intelligence", image: "" },
  { title: "Excel Analysis", tag: "Spreadsheet Analytics", image: "" },
  { title: "SQL Projects", tag: "Data Querying", image: "" },
  { title: "Business Research", tag: "Market & Strategy", image: "" },
];

// Original certificate scans, shown unaltered. Titles, issuers and dates are the
// text printed on each document — keep them exactly as issued.
export const certificates = [
  {
    id: "iqraamark-live-project-experience",
    title: "Certificate of Live Project Experience",
    issuer: "Iqraamark Pvt. Ltd.",
    detail: "Data Analyst — three-month live industry project",
    meta: "06-07-2026 – 06-10-2026 · Issued 19-10-2026",
    image: iqraamarkLiveProjectExperience.url,
    alt: "Certificate of Live Project Experience issued to Fidhin P by Iqraamark Pvt. Ltd.",
    width: 902,
    height: 1280,
  },
  {
    id: "rows-columns-certificate-of-excellence",
    title: "Certificate of Excellence",
    issuer: "Rows&Columns",
    detail: "Data Analytics course",
    meta: "November 26, 2025",
    image: rowsColumnsDataAnalyticsCertificate.url,
    alt: "Certificate of Excellence issued to Fidhin P by Rows&Columns for a Data Analytics course",
    width: 1280,
    height: 959,
  },
  {
    id: "ctds-accounting-certificate",
    title: "Certificate",
    issuer: "Council for Technical Development Continuing Academic Educational and Scientific Studies",
    detail: "Certification in Certified Professional Computerised Accounting — Grade A",
    meta: "Exam 03/05/2025 · Issued 29/05/2025",
    image: ctdsAccountingCertificate.url,
    alt: "Certificate issued to Fidhin P by the Council for Technical Development Continuing Academic Educational and Scientific Studies for Certified Professional Computerised Accounting",
    width: 902,
    height: 1280,
  },
  {
    id: "ctds-statement-of-marks",
    title: "Statement of Marks",
    issuer: "Central Board of Examinations — Council for Technical Development Continuing Academic Educational & Scientific Studies",
    detail: "Certified Professional Computerised Accounting",
    meta: "Examination 03/05/2025 · Issued 26/05/2025",
    image: ctdsStatementOfMarks.url,
    alt: "Statement of Marks issued to Fidhin P by the Central Board of Examinations for Certified Professional Computerised Accounting",
    width: 920,
    height: 1279,
  },
];
