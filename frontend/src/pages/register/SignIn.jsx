import { useContext, useEffect } from "react"
import { MyContext } from "../../App"
import './SignIn.css'
import Logo from '../../assets/images/logo.jpg'
import { TextField } from "@mui/material"
import { Button } from "@mui/material";
import { Link } from "react-router-dom"
import { useFormik } from 'formik';
import * as yup from 'yup'
import { useDispatch } from 'react-redux';
import { loginUser } from "../../features/user/userSlice"
import { useNavigate } from 'react-router-dom';

const loginSchema = yup.object({
  email: yup.string().nullable().email("email should be valid").required("Email Address is required"),
  password: yup.string().required("password is required")
});

const SignIn = () => {
    const dispatch = useDispatch()
    
    const context = useContext(MyContext)
    const formik = useFormik({
      initialValues: {
        email: '',    
        password: '',
      },
      validationSchema: loginSchema,
      onSubmit: values => {
        dispatch(loginUser(values))
        
      },
    });
  

    useEffect(() => {
        context.setIsHeaderFooterShow(false)
    }, [])
    return(
    <>
        <section className="loginSection">
        
          <div className="containerLogin">
            <div className="cardLogin">
              <div className="textImage">
                <img src={Logo} />
              </div>
               <h2>Sign In</h2>

               <form onSubmit={formik.handleSubmit}>
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
              /></div>
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

                  <p className="forgot" >Forgot Password</p>
                 <div className="fkex">
                   <Button className="btn__blw" type="submit">Sign In</Button>


                   <Link to="/"><Button className="btn__blw" onClick={() =>  context.setIsHeaderFooterShow(true)}>Cancel</Button></Link>
                   </div>


                  <p className="not">Not Registered<Link to="/register" className="signnot">SignUP</Link></p>
               </form>
            </div>
          </div>
        </section>
    </>
    )
}

export default SignIn;