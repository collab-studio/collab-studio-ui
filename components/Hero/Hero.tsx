import Link from "next/link";
import Particles from "../Particles/Particles";
import heroStyles from "./Hero.module.scss";
import Illustration from "@/public/images/glow-bottom.svg";
import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className={heroStyles.l_hero__container}>
        {/* Particles animation */}
        <Particles />

        {/* Illustration Image */}
        <div
          className={heroStyles.l_hero__illustration_container}
          aria-hidden="true"
        >
          <div className={heroStyles.illustration_container}>
            <Image
              src={Illustration}
              width={2146}
              priority
              alt="Hero Illustration"
            />
          </div>
        </div>
        <div className={heroStyles.l_headline}>
          <div className={heroStyles.l_headline__container}>
            <h1 className={heroStyles.headline__title}>
              Where ideas come to life
            </h1>
            <p className={heroStyles.headline__subtitle}>
              Redefine the way to brainstorm potential idea with collab-studio
              instantly with everyone in your team
            </p>
            <ul className={heroStyles.headline__buttons_container}>
              <li>
                <Link href="/" className={heroStyles.headline__button}>
                  <span>
                    Get Started <span className={""}>-&gt;</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/" className={heroStyles.headline__button}>
                  <span>
                    Sign up <span>-&gt;</span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
