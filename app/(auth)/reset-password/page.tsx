export const metadata = {
  title: "Reset Password - Stellar",
  description: "Page description",
};

import AuthLogo from "../auth-logo";
import resetpasswordStyles from "../signup/page.module.scss";

export default function ResetPassword() {
  return (
    <>
      {/* Page header */}
      <header className={resetpasswordStyles.l_signup__header}>
        {/* Logo */}
        <AuthLogo />
        {/* Page title */}
        <h1>Reset your password</h1>
      </header>

      {/* Form */}
      <section className={resetpasswordStyles.l_signup__form}>
        <div>
          <form>
            <div className={resetpasswordStyles.form__fields__container}>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                />
              </div>
            </div>
            <div className={resetpasswordStyles.form__submit__container}>
              <button>
                Reset Password <span> -&gt;</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
