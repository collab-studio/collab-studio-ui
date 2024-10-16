import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/public/favicon.ico";

export default function Logo() {
  return (
    <Link className="inline-flex" href="/" aria-label="home">
      <Image
        src={LogoImg}
        width={38}
        height={38}
        priority
        alt="Collab Studio"
      />
    </Link>
  );
}
