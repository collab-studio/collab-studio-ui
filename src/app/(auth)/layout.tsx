import Image from "next/image";
import Illustration from "@/public/images/auth-illustration.svg";
import authLayoutStyles from "./layout.module.scss";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <section className={authLayoutStyles.l_auth__container}>
        {/* Illustration */}
        <div aria-hidden="true" className={authLayoutStyles.auth__illustration}>
          <Image src={Illustration} priority alt="Page Illustration" />
        </div>

        <div className={authLayoutStyles.l_auth__content}>{children}</div>
      </section>
    </main>
  );
}
