import CancerCareContent from "~/components/CancerCareContent";

export function meta() {
  return {
    title: "Cancer Care",
    description: "PBCM's Cancer Care Ministry",
  };
}

export default function CancerCare() {
  return (
    <>
      <CancerCareContent />
    </>
  );
}
