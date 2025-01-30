export const metadata = {
  title: "Sign In - Collab Studio",
  description: "Page description",
};

import Link from "next/link";
import AuthLogo from "../auth-logo";
import siginStyles from "../signup/page.module.scss";

export default function SignIn() {
  return (
    <>
      {/* Page header */}
      <header className={siginStyles.l_signup__header}>
        {/* Logo */}
        <AuthLogo />
        {/* Page title */}
        <h1>Sign in to your account</h1>
      </header>

      {/* Form */}
      <section className={siginStyles.l_signup__form}>
        <div>
          <form>
            <div className={siginStyles.form__fields__container}>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  name="email"
                  required
                />
              </div>
              <div>
                <div className={siginStyles.sigin__password__container}>
                  <label htmlFor="password">Password</label>
                  <Link href="/reset-password">Forgot?</Link>
                </div>
                <input
                  id="password"
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  required
                />
              </div>
            </div>
            <div className={siginStyles.form__submit__container}>
              <button>
                Sign In <span> -&gt;</span>
              </button>
            </div>
          </form>

          <div className={siginStyles.form__footer__already_signed_in}>
            {"Don't have an account?"}
            <Link
              className="font-medium text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out"
              href="/signup"
            >
              Sign up
            </Link>
          </div>

          {/* Divider */}
          <div className={siginStyles.form__divider}>
            <div aria-hidden="true"> </div>
            <span>or</span>
            <div aria-hidden="true"> </div>
          </div>

          {/* Social login */}
          <div className={siginStyles.form__social__login}>
            <button
              className={siginStyles.form__social__login__item__container}
            >
              <span>
                <span className={siginStyles.form__social__login__label}>
                  Continue with Twitter
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="17"
                  height="16"
                  viewBox="0 0 30 30"
                >
                  <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z"></path>
                </svg>
              </span>
            </button>
            <button
              className={siginStyles.form__social__login__item__container}
            >
              <span>
                <span className={siginStyles.form__social__login__label}>
                  Continue with GitHub
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16">
                  <path d="M7.488 0C3.37 0 0 3.37 0 7.488c0 3.276 2.153 6.084 5.148 7.113.374.094.468-.187.468-.374v-1.31c-2.06.467-2.527-.936-2.527-.936-.375-.843-.843-1.124-.843-1.124-.655-.468.094-.468.094-.468.749.094 1.123.75 1.123.75.655 1.216 1.778.842 2.153.654.093-.468.28-.842.468-1.03-1.685-.186-3.37-.842-3.37-3.743 0-.843.281-1.498.75-1.966-.094-.187-.375-.936.093-1.965 0 0 .655-.187 2.059.749a6.035 6.035 0 0 1 1.872-.281c.655 0 1.31.093 1.872.28 1.404-.935 2.059-.748 2.059-.748.374 1.03.187 1.778.094 1.965.468.562.748 1.217.748 1.966 0 2.901-1.778 3.463-3.463 3.65.281.375.562.843.562 1.498v2.059c0 .187.093.468.561.374 2.996-1.03 5.148-3.837 5.148-7.113C14.976 3.37 11.606 0 7.488 0Z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
