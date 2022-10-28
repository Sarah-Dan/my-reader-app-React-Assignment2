const SignUp = () => {
    return ( 
        <div className="signup__container">
            <h1>Sign Up</h1>
            {/* create a form */}
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <button type="submit">Sign Up</button>
            </form>
        </div>
     );
}
 
export default SignUp;