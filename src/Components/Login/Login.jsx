import { Link } from "react-router-dom";
import Header from "../Home/Header/Header";
import Navbar from "../Home/Navbar/Navbar";
import { FcGoogle } from 'react-icons/fc';
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const {googleLogIn, signInEmailPass} = useAuth();

  const loginHandler = (e)=> {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');

    signInEmailPass(email, password)
    .then(res=> {
      console.log(res)
    })

  }

  const socailLogInHandler = (socail)=> {
    socail()
    .then()
    .catch()
  }
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div>
          <div className="my-10">
            <p className="text-3xl text-bold text-center">
              Log in your Account
            </p>
          </div>
          <div className=" w-full shadow-2xl bg-base-100">
            <form onSubmit={loginHandler} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link  className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="text-center">
                <p className="text-center">Log in with google</p>
                <button onClick={()=>socailLogInHandler(googleLogIn)}> <FcGoogle className="text-2xl"></FcGoogle> </button>
              </div>
            </form>
          </div>
            <p className="mt-10 text-sm text-center">Dont have account? <Link to= '/register' className="text-blue-400">Register now</Link> </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
