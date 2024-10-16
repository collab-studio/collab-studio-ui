import Logo from "@/components/ui/Logo";
import mainPageStyles from "./page.module.scss";

export default function Home() {
  return (
    <main className={mainPageStyles.l_home_main}>
      <Logo />
      <h1>Collab-studio</h1>
    </main>
  );
}
