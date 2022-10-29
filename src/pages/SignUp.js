const SignUp = () => {
  return (
    <div className="signup__container">
      <h3 className="signup__heading">Sign Up</h3>
      {/* create a form */}
      <form className="signup__form">
        <label htmlFor="email">Email</label>
        <input
          className="signup__input"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
        <label htmlFor="password">Password</label>
        <input
          className="signup__input"
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
        />
        <button className="signup__btn" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
