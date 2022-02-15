import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { ThemeProvider } from "next-themes";
import "../styles/bg.css";

function MyApp({ Component, pageProps }) {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        overflow: "scroll",
        width: "100%",
        height: "100%",
      }}
    >
      <ThemeProvider attribute="class" enableSystem={false}>
        <div>
          <Navigation></Navigation>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
