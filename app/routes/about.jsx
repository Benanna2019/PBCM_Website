// This should just be the generic layout for the about section

import { Outlet } from "react-router-dom";
import AboutNav from "~/components/AboutNav";

export function meta() {
  return {
    title: "About PBCM",
    description: "About The Ministry",
  };
}

export default function About() {
  return (
    <>
      <AboutNav />
    </>
  );
}
