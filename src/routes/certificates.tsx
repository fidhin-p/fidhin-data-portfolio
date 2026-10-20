import { createFileRoute } from "@tanstack/react-router";
import { CertificationsSection } from "@/components/certificates";
import { seo } from "@/components/site";

export const Route = createFileRoute("/certificates")({
  head: () =>
    seo(
      "Certifications — Fidhin",
      "Original certificate scans: live project experience with Iqraamark, a Rows&Columns data analytics course, and CTDS accounting certification.",
    ),
  component: Certificates,
});

function Certificates() {
  return <CertificationsSection />;
}
