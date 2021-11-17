import CovidResponse from "~/components/CovidResponse";

export function meta() {
  return {
    title: "Covid Response",
    description: "PBCM Covid Response",
  };
}

export default function Covid() {
  return <CovidResponse />;
}
