import Header from "@/components/ui/Header/Header";
import mainPageStyles from "./page.module.scss";
import "./home.main.scss";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main className={mainPageStyles.l_home_main}>
      <Header />
      <Hero />
    </main>
  );
}
