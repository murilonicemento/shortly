import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Footer } from "../../components/Footer";
import { Statistics } from "../../components/Statistics";
import { MainSection, BoostSection } from "./styled";
import illustrationWorking from "../../assets/images/illustration-working.svg";

export function Home() {
  return (
    <>
      <Header />
      <main>
        <MainSection>
          <div>
            <img src={illustrationWorking} alt="" />
          </div>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand&apos;s recognition and get detailed insights on how
            your links are performing.
          </p>
          <button>Get Started</button>
        </MainSection>
        <Input />
        <Statistics />
        <BoostSection>
          <h2>Boost your links today</h2>
          <button>Get Started</button>
        </BoostSection>
        <Footer />
      </main>
    </>
  );
}
