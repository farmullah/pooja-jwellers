import LoginForm from "../components/LoginForm";
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
} from "react-icons/md";

import "../styles/login.css";

import VasundharaLogo from "../assets/images/vasundhara_logo.svg";

function Login() {
  return (
    <div className="login">
      <LoginForm />
      <div className="checkbox__buttons mt30">
        <div className="checkbox__button mr15 flex-full-center">
          <MdOutlineCheckBoxOutlineBlank fontSize={22} />
          <MdOutlineCheckBox fontSize={22} />
          <span className="ml10">Day start ritual</span>
        </div>
        <div className="checkbox__button flex-full-center">
          <MdOutlineCheckBoxOutlineBlank fontSize={22} />
          <MdOutlineCheckBox fontSize={22} />
          <span className="ml10">Day start ritual</span>
        </div>
      </div>

      <div className="vasundhara_logo mt30">
        <img src={VasundharaLogo} alt="Vasundhara logo" />
      </div>
    </div>
  );
}

export default Login;
