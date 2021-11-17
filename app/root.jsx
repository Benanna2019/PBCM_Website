import { Meta, Links, Scripts, LiveReload } from "remix";
import { Outlet } from "react-router-dom";
import Cross from "./assets/Cross.png";
import tailwindUrl from "./styles/app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";

export function links() {
  return [{ rel: "stylesheet", href: tailwindUrl }];
}

export function meta() {
  return {
    title: "PBCM",
    description: "Welcome to Peninsula Biblical Counseling Ministries",
    viewport: "width=device-width,initial-scale=1,viewport-fit=cover",
    charSet: "utf-8",
  };
}

function Document({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href={Cross} type="image/png" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
      <footer></footer>
    </Document>
  );
}

export function ErrorBoundary({ error }) {
  console.error(error);
  return (
    <Document>
      <ErrorPage error={error} />
    </Document>
  );
}
