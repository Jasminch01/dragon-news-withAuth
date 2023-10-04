import { Link } from "react-router-dom";
import Header from "../Home/Header/Header";
import Navbar from "../Home/Navbar/Navbar";

const Register = () => {
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div>
          <div className="my-10">
            <p className="text-3xl text-bold text-center">
              Register Your Account
            </p>
          </div>
          <div className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo"
                  className="input input-bordered"
                  required
                />
              </div>
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
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
          <p className="mt-10 text-sm text-center">
            Already have an account? 
            <Link to="/login" className="text-blue-400">
               Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
