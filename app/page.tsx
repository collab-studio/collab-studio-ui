import Header from "@/components/ui/Header/Header";
import mainPageStyles from "./page.module.scss";
import "./home.main.scss";

export default function Home() {
  return (
    <main className={mainPageStyles.l_home_main}>
      <Header />
    </main>
  );
}
