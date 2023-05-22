// import {} from "./styled";
// import * as colors from "../../config/colors";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Footer } from "../../components/Footer";
import { Dashboards } from "../../components/Dashboards";

export function Home() {
  return (
    <>
      <Header />
      <main>
        <section>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand&apos;s recognition and get detailed insights on how
            your links are performing.
          </p>
          <button>Get Started</button>
          <div>
            <img src="" alt="" />
          </div>
        </section>
        <Input />
        <Dashboards />
        <section>
          <h2>Boost your links today</h2>
          <button>Get Started</button>
        </section>
        <Footer />
      </main>
    </>
  );
}
