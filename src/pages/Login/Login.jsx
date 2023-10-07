import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

  const {signIn} = useContext(AuthContext);

    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);

        signIn(email, password)
        .then(result =>{
          console.log(result.user);
        })
        .catch(error =>{
          console.log(error);
        })

    }


  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-2xl text-center mt-10">Please Login</h2>
      
      <div className="card flex-shrink-0 mx-auto mt-12 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
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
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="mb-5 ml-8">Do not have an account? Please <Link to='/register'><span className="text-blue-700">Register</span></Link></p>
        </div>
    </div>
  );
};

export default Login;
