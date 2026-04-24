import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, LogIn } from 'lucide-react';
import { loginStyles } from '../assets/dummyStyles';

function Login({ onLoginSuccess = null }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };
  return (
    <div className={loginStyles.pageContainer}>
      <div className={loginStyles.bubble1}></div>
      <div className={loginStyles.bubble2}></div>

      <Link to='/' className={loginStyles.backButton}>
        <ArrowLeft className={loginStyles.backButtonIcon} />
        <span className={loginStyles.backButtonText}>Home</span>
      </Link>

      <form onSubmit={handleSubmit} className={loginStyles.form} noValidate>
        <div className={loginStyles.formWrapper}>
          <div className={loginStyles.animatedBorder}>
            <div className={loginStyles.formContent}>

              <h2 className={loginStyles.heading}>
                <span className={loginStyles.headingIcon}>
                  <LogIn className={loginStyles.headingIconInner} />
                </span>
                <span className={loginStyles.headingText}>Login</span>
              </h2>

              <p className={loginStyles.subtitle}>
                Sign in to continue to Hexagon Quiz. Light, clean UI - smooth
                micro-animations and easy validation.
              </p>
              <label className={loginStyles.label}>
                <span className={loginStyles.labelText}>Email</span>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;