// Edit this file to update the portfolio. Only add verified, real information.

export const profile = {
  name: "Fidhin",
  email: "fidhinp8@gmail.com",
  // Replace with your real profile URLs (leave "" to show "Coming soon").
  linkedin: "",
  github: "",
  // Put your resume PDF at public/resume.pdf
  resumeUrl: "/resume.pdf",
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

// Put certificate files in public/certificates/ and set `file` (PDF or image).
export const certificates = [
  { title: "Internship Experience Certificate", issuer: "Iqraa Mark Private Limited", file: "" },
  { title: "Internship Completion Certificate", issuer: "Iqraa Mark Private Limited", file: "" },
];
