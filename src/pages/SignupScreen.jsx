import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import AlertError from '../components/alertError.jsx'
import { motion } from 'framer-motion';
import Loading from "../components/loading.jsx";


export default function SignupScreen() {

    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [form, setForm] = useState({name: '', email: '', password: ''});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('https://neighbourfit-eqoq.onrender.com/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form),
                credentials: 'include',

            });

            const data = await response.json();

            setLoading(false);

            console.log("Response status:", response.status);

            if (response.status === 201) {
                navigate('/authenticate');
            }
            else if (response.status === 400) {
                setError(data.message);

            }
            else {
                setError(data.message || 'An error occurred during signup');
            }
        } catch (error) {
            console.error('Signup error:', error);
            setError(error.message || 'Network error occurred');


        }
    }


    return (

        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
        >

        <div className="bg-gray-50">
            <div className="mt-6" >
                {error && <AlertError error={error} />}
            </div>

            <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
                <div className="max-w-[480px] w-full">

                    <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
                        <h1 className="text-slate-900 text-center text-3xl font-semibold">Sign Up</h1>

                        <p className="text-center text-lg text-red-400 mt-2 font-bold">
                            Please check your spam folder too — your OTP might land there!
                        </p>


                        <form className="mt-12 space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label className="text-slate-900 text-sm font-medium mb-2 block">User name</label>
                                <div className="relative flex items-center">
                                    <input name="name" type="text" required
                                           className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
                                           placeholder="Enter user name"
                                           onChange={handleChange}
                                    />

                                </div>
                            </div>
                            <div>
                                <label className="text-slate-900 text-sm font-medium mb-2 block">Email</label>
                                <div className="relative flex items-center">
                                    <input name="email" type="email" required
                                           className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
                                           placeholder="yourEmail@gmail.com"
                                           onChange={handleChange}

                                    />

                                </div>
                            </div>
                            <div>
                                <label className="text-slate-900 text-sm font-medium mb-2 block">Password</label>
                                <div className="relative flex items-center">
                                    <input name="password" type="password" required
                                           className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
                                           placeholder="Enter password"
                                           onChange={handleChange} />

                                </div>
                            </div>
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex items-center">
                                    <input id="remember-me" name="remember-me" type="checkbox"
                                           className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"/>
                                    <label htmlFor="remember-me" className="ml-3 block text-sm text-slate-900">
                                        Remember me
                                    </label>
                                </div>

                            </div>

                            <div className="!mt-12">
                                <button type="submit"
                                        className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
                                    Sign Up
                                </button>
                            </div>
                            <p className="text-slate-900 text-sm !mt-6 text-center">Do you already have an account?
                                <button
                                    onClick={() => navigate('/login')}
                                className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold cursor-pointer">
                                    Login
                                </button>
                            </p>
                        </form>

                        <div className="mt-6 center">
                            {loading && <Loading/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </motion.div>
    )
}
