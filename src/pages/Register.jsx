import { Link } from 'react-router-dom';
import loginLogo from '../assets/assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';




const Register = () => {
    const {handleCreateNewUser} = useContext(AuthContext);
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        handleCreateNewUser(email, password)
            .then(res => console.log(res, "User Created"))
            .catch(error=>console.log(error))
    }
    return (
        <div className="my-10">
            <div className="hero min-h-screen bg-base-200 rounded-xl p-5">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="flex lg:text-left p-10">
                        <img src={loginLogo} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit}>
                            <h2 className="text-4xl text-center ">Sign Up</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="name" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered"  />
                            </div>
                                <input type="submit" className='btn btn-warning my-3' value="Sign Up" />
                        </form>
                        <p className="text-center mb-4">Already have an acccount? <Link className='text-blue-800' to='/login'>Sign In</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;