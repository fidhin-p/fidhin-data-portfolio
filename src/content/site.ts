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
  location: "Kozhikode, Kerala",
  // Add your actual dates, e.g. "Jan 2026 – Apr 2026"
  dates: "",
  // Add verified responsibilities only.
  responsibilities: [] as string[],
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
