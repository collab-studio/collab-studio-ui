import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/favicon.ico";
import logoStyles from "./auth-logo.module.scss";

export default function AuthLogo() {
  return (
    <Link href="/" aria-label="home">
      <div className={logoStyles.logo__container}>
        <Image src={Logo} width={42} height={42} alt="Collab Studio" />
      </div>
    </Link>
  );
}
