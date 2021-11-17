import Header from "~/components/Header";
import LandingPage from "~/components/LandingPage";
import tailwindUrl from "~/styles/app.css";

export function links() {
  return [{ rel: "stylesheet", href: tailwindUrl }];
}

export function meta() {
  return {
    title: "Peninsula Biblical Counseling Ministries",
    description: "Welcome to PBCM!",
  };
}

// export function links() {
//   return [{ rel: "stylesheet", href: stylesUrl }];
// }

export default function Index() {
  return (
    <>
      <LandingPage />
      {/* TODO: Add blog section to the landing page component */}
    </>
  );
}
