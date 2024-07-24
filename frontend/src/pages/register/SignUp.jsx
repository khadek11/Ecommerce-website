import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import "./SignIn.css";
import Logo from "../../assets/images/logo.jpg";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const SignUp = () => {
  const context = useContext(MyContext);

  useEffect(() => {
    context.setIsHeaderFooterShow(false);
  }, []);
  return (
    <>
      <section className="loginSection">
        <div className="containerLogin">
          <div className="cardLogin">
            <div className="textImage">
              <img src={Logo} />
            </div>
            <h2>Sign Up</h2>

            <form>
              <div className="rowForm">
                <div className="rowFormsix">
                  <div className="form-group">
                    <TextField
                      id="standard-basic"
                      label="Name"
                      required
                      variant="standard"
                      className="wText"
                    />
                  </div>
                </div>
                <div className="rowFormsix">
                <div className="form-group">
                    <TextField
                      id="standard-basic"
                      label="Phone No."
                      required
                      variant="standard"
                      className="wText"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <TextField
                  id="standard-basic"
                  label="Email"
                  required
                  variant="standard"
                  className="wText"
                />
              </div>
              <div className="form-group">
                <TextField
                  id="standard-basic"
                  label="Password"
                  type="password"
                  required
                  variant="standard"
                  className="wText"
                />
              </div>

              <p className="forgot">Forgot Password</p>
              <div className="fkex">
                <Button className="btn__blw">CREATE AN ACCOUNT</Button>
                <Link to="/" className="Link">
                  <Button
                    className="btn__blw"
                    onClick={() => context.setIsHeaderFooterShow(true)}
                  >
                    Cancel
                  </Button>
                </Link>
              </div>

              <p className="not">
                Arleady Registered
                <Link to="/signin" className="signnot">
                  SignUP
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
