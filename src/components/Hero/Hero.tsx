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

        {/* Particles animation */}
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
      </div>
    </section>
  );
}
