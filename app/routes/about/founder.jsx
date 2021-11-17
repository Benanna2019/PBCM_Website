// This should definitely be a static page with Janie's image and bio

import FounderContent from "~/components/FounderContent";

export function meta() {
  return {
    title: "PBCM Founder & President",
    description: "About Our Founder",
  };
}

export default function Founder() {
  return (
    <div>
      <FounderContent />
    </div>
  );
}
