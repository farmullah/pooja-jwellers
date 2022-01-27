import "./styles.css";
const LoginForm = () => {
  return (
    <div className="login__form flex-full-center fd-column">
      <h2>Login</h2>
      <div className="input__box mt36">
        <p>Employee ID</p>
        <input type="text" placeholder="24567" />
      </div>

      <div className="input__box mt30">
        <p>Password</p>
        <input type="password" placeholder="password" />
      </div>

      <button className="button mt36">Login</button>
    </div>
  );
};

export default LoginForm;
