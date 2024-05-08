import { Link } from 'react-router-dom';
import loginLogo from '../assets/assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';


const Login = () => {
    const { handleSignIn, handleGoogleSignin } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        handleSignIn(email, password)
            .then(() => console.log("Login successful"))
            .catch(() => console.log('Login Unsuccessful'))
    }

    const handleGoogle = () => {
        handleGoogleSignin()
    }
    return (
        <div className="my-10">
            <div className="hero min-h-screen bg-base-200 rounded-xl">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="flex lg:text-left p-10">
                        <img src={loginLogo} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleLogin}>
                            <h2 className="text-4xl text-center ">Login</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <input type="submit" className='btn btn-warning' value="Sign In" />
                            </div>
                        </form>
                        <h2 className="text-lg text-center">Or Sign Up with</h2>
                        <button onClick={handleGoogle} className="btn btn-primary">Google</button>
                        <p className="text-center my-4">New to Car Doctors? <Link className='text-blue-800' to='/signup'>Sign Up</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;