import { Link } from "react-router-dom";
import img from '../../assets/images/login/login.svg'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import fbLogo from '../../assets/images/login/Facebook-logo.png'
import googleLogo from '../../assets/images/login/google.png'
import gitLogo from '../../assets/images/login/github.png'
import './SignUp.css'

const SignUp = () => {
    const {createUser} = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error))
    };

    return (
        <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2">
          <img src={img} alt="" />
        </div>
        <div className=" flex-shrink-0 w-full max-w-sm bg-base-100">
          <div className="card__body">
          <h1 className="text-3xl font-bold text-center mt-4">Sign Up</h1>
            <form  onSubmit={handleSignUp}>
            <div className="form-control mt-5">
              <label className="label">
                <span className="label-text text-base text-gray-700 font-semibold">Name</span>
              </label>
              <input
                type="text"
                name='name'
                placeholder="Your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-5">
              <label className="label">
                <span className="label-text text-base text-gray-700 font-semibold">Email</span>
              </label>
              <input
                type="email"
                name='email'
                placeholder="Your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-5">
              <label className="label">
                <span className="label-text text-base text-gray-700 font-semibold">Confirm Password</span>
              </label>
              <input
                type="password"
                name='password'
                placeholder="Your password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input className='btn bg-[#FF3811] hover:bg-[#d43718] border-none mt-3' type="submit" value="Sign Up" />
              <p className='text-lg font-semibold text-gray-600 text-center mt-6 mb-4'>Or Sign In with</p>
            <div className='flex gap-4 items-center justify-center'>
              <img className='w-14 h-9 rounded-full ' src={fbLogo} alt="" />
              <img className='w-7 h-7 rounded-full ' src={googleLogo} alt="" />
              <img className='w-10 h-10 rounded-full ' src={gitLogo} alt="" />
            </div>
            </div>
            </form>
            <p className='my-2 text-center text-sm'>Have an account? <Link className='text-orange-700 font-bold' to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SignUp;