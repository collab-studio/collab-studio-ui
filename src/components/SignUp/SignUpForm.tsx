"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import Auth from "@/src/context/AuthContext";
import AuthLogo from "@/src/components/AuthLogo/AuthLogo";
import signupStyles from "./SignUp.module.scss";
import withAuthProvider from "@/src/utils/withAuthProvier";

const { AuthContext } = Auth;

function SignUpForm() {
  const Auth = useContext(AuthContext);
  const [signUpForm, setSignupForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSignup = async () => {
    if (!Auth) return;
    try {
      await Auth.register(
        signUpForm.username,
        signUpForm.email,
        signUpForm.password,
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* Page header */}
      <header className={signupStyles.l_signup__header}>
        {/* Logo */}
        <AuthLogo />
        {/* Page title */}
        <h1>Create your free account</h1>
      </header>

      {/* Form */}
      <section className={signupStyles.l_signup__form}>
        <div>
          <form>
            <div className={signupStyles.form__fields__container}>
              <div>
                <label htmlFor="full-name">
                  Full Name <span>*</span>
                </label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="Harry Potter"
                  name="name"
                  autoComplete="name"
                  onChange={(e) =>
                    setSignupForm({ ...signUpForm, username: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label htmlFor="email">
                  Email <span>*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="potter@hogwards.com"
                  autoCapitalize="email"
                  onChange={(e) =>
                    setSignupForm({ ...signUpForm, email: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label htmlFor="password">
                  Password <span>*</span>
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  onChange={(e) =>
                    setSignupForm({ ...signUpForm, password: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div className={signupStyles.form__submit__container}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  void handleSignup();
                }}
                disabled={
                  !signUpForm.username ||
                  !signUpForm.email ||
                  !signUpForm.password
                }
              >
                Sign Up <span> -&gt;</span>
              </button>
            </div>
          </form>

          <div className={signupStyles.form__footer__already_signed_in}>
            Already have an account? <Link href="/signin">Sign in</Link>
          </div>

          {/* Divider */}
          <div className={signupStyles.form__divider}>
            <div aria-hidden="true"> </div>
            <span>or</span>
            <div aria-hidden="true"> </div>
          </div>

          {/* Social login */}
          <div className={signupStyles.form__social__login}>
            <button
              className={signupStyles.form__social__login__item__container}
              onClick={Auth?.googleLogin}
            >
              <span>
                <span className={signupStyles.form__social__login__label}>
                  Continue with Google
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
              className={signupStyles.form__social__login__item__container}
            >
              <span>
                <span className={signupStyles.form__social__login__label}>
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

export default withAuthProvider(SignUpForm);
