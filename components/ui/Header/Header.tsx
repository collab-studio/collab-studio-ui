import Link from "next/link";
import Logo from "../Logo";
import headerStyles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={headerStyles.l_header}>
      <div className={headerStyles.l_header__container}>
        {/* Site branding */}
        <div className={headerStyles.l_header__small_container}>
          <Logo />
        </div>

        {/* Desktop navigation */}
        <nav className={headerStyles.l_header__nav}>
          {/* Desktop menu links */}
          <ul className={headerStyles.nav__container}>
            <li>
              <Link
                className={`${headerStyles.l_header__nav_link} ${headerStyles.l_header__nav_link_font}`}
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={`${headerStyles.l_header__nav_link} ${headerStyles.l_header__nav_link_font}`}
                href="/integrations"
              >
                Integrations
              </Link>
            </li>
            <li>
              <Link
                className={`${headerStyles.l_header__nav_link} ${headerStyles.l_header__nav_link_font}`}
                href="/pricing"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                className={`${headerStyles.l_header__nav_link} ${headerStyles.l_header__nav_link_font}`}
                href="/customers"
              >
                Customers
              </Link>
            </li>
            <li>
              <Link
                className={`${headerStyles.l_header__nav_link} ${headerStyles.l_header__nav_link_font}`}
                href="/changelog"
              >
                Changelog
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop sign in links */}
        <ul
          className={`${headerStyles.nav__container} ${headerStyles.l_header__small_container} ${headerStyles.l_nav_sign_link}`}
        >
          <li>
            <Link
              className={headerStyles.l_header__nav_link_font}
              href="/signin"
            >
              Sign in
            </Link>
          </li>
          <li className={headerStyles.nav_sign_up__button}>
            <Link
              href="/signup"
              className={`${headerStyles.l_header__nav_link_font} ${headerStyles.nav_sign_up__button__background}`}
            >
              <span className={headerStyles.nav_sign_up__button__container}>
                Sign up{" "}
                <span
                  className={`${headerStyles.nav_sign_up__button__arrow} ${headerStyles.l_header__nav_link_font}`}
                >
                  -&gt;
                </span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
