import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/components/site";
import { AboutSection, SkillsSection, ExperienceSection, ResumeSection } from "@/components/portfolio-sections";
import { CertificationsSection } from "@/components/certificates";
export const Route = createFileRoute("/about")({ head: () => seo("About Fidhin — Skills & Data Analytics Experience", "Meet Fidhin, an aspiring Data Analyst based in Kerala, open to worldwide opportunities. Explore skills, Iqraa Mark internship research and original credentials."), component: About });
function About() { return <><AboutSection /><SkillsSection /><ExperienceSection /><CertificationsSection /><ResumeSection /></>; }
