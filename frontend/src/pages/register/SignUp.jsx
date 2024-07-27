import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import "./SignIn.css";
import Logo from "../../assets/images/logo.jpg";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup'
import { useDispatch } from 'react-redux';
import { registerUser } from "../../features/user/userSlice";



const signupSchema = yup.object({
  firstname: yup.string().required("first name. is required"),
  lastname: yup.string().required("last name is required"),
  email: yup.string().nullable().email("email should be valid").required("Email Address is required"),
  mobile : yup.string().required("mobile No. is required"), 
  password: yup.string().required("password is required")
});

const SignUp = () => {
  const navigate = useNavigate()
  const dispatch  = useDispatch();
  const context = useContext(MyContext);
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      mobile: '',
      password: '',
    },
    validationSchema: signupSchema,
    onSubmit: values => {
      dispatch(registerUser(values))
      context.isLogin(true)
      navigate('/')
    },
  });


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

            <form onSubmit={formik.handleSubmit}>
              <div className="rowForm">
                <div className="rowFormsix">
                  <div className="form-group">

                  <TextField
                    id="firstname"
                    label="First Name"
                    variant="standard"
                    className="wText"
                    value={formik.values.firstname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    helperText={formik.touched.firstname && formik.errors.firstname ? formik.errors.firstname : null}
                    error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                    fullWidth
                  />
                  </div>
                </div>
                <div className="rowFormsix">
                <div className="form-group">
                <TextField
                    id="lastname"
                    label="Last Name"
                    variant="standard"
                    className="wText"
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    helperText={formik.touched.lastname && formik.errors.lastname ? formik.errors.lastname : null}
                    error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                    fullWidth
                  />
                  </div>
                </div>
              </div>
              <div className="form-group">
              <TextField
                id="mobile"
                label="Phone No."
                variant="standard"
                className="wText"
                value={formik.values.mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.mobile && formik.errors.mobile ? formik.errors.mobile : null}
                error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                fullWidth
              />
                  </div>

              <div className="form-group">
              <TextField
                id="email"
                label="Email"
                variant="standard"
                className="wText"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.email && formik.errors.email ? formik.errors.email : null}
                error={formik.touched.email && Boolean(formik.errors.email)}
                fullWidth
              />
              </div>
              <div className="form-group">
              <TextField
                id="password"
                label="Password"
                type="password"
                variant="standard"
                className="wText"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.password && formik.errors.password ? formik.errors.password : null}
                error={formik.touched.password && Boolean(formik.errors.password)}
                fullWidth
              />
              </div>

              <p className="forgot">Forgot Password</p>
              <div className="fkex">
                <Button className="btn__blw" type="submit">CREATE AN ACCOUNT</Button>
                <Link to="/" className="Link" >
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
                <Link to="/register/signin" className="signnot">
                  Sign In
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
