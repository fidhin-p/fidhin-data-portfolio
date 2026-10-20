import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/components/site";
import { ContactSection, ResumeSection } from "@/components/portfolio-sections";
export const Route = createFileRoute("/contact")({ head: () => seo("Contact Fidhin — Data Analyst Opportunities Worldwide", "Contact Fidhin for entry-level Data Analyst opportunities in India and worldwide at fidhinp8@gmail.com."), component: Contact });
function Contact() { return <><ContactSection /><ResumeSection /></>; }
