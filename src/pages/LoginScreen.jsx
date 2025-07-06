
//Login page that is required to access the website key-feature

import AlertError from '../components/alertError.jsx'
import {useNavigate} from 'react-router-dom'
import {useState} from "react";
import { motion } from 'framer-motion';


export default function LoginScreen() {

    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [form, setForm] = useState({email: '', password: ''});

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://neighbourfit-eqoq.onrender.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form),
                credentials: 'include'
            });

            const data = await response.json();

            console.log("Response status:", response.status);

            if (response.status === 200) {
                console.log("Login successful");
                navigate('/', { replace: true });
            }
            else if (response.status === 400) {
                setError("Wrong credentials");
                console.log("Rendering error:", data.message);
            }
            else {
                setError(data.message || 'An error occurred during login');
            }
        } catch (error) {
            setError(error?.message || 'Network error occurred');
            console.log("Rendering error:", error?.message || 'Network error occurred');
        }
    }
    return (

        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.2 }}
        >
        <div className="lg:min-h-screen flex flex-col items-center justify-center p-6">

            <div className="mt-2 mb-4 flex justify-center">
                {error && <AlertError error={error} />}
            </div>



            <div className="grid lg:grid-cols-2 items-center gap-10 max-w-6xl max-lg:max-w-lg w-full">
                <div>
                    <h1 className="lg:text-5xl text-4xl font-bold text-slate-900 !leading-tight">
                        Knock Knock! Who’s Logging In?
                    </h1>
                    <p className="text-[15px] mt-6 text-slate-600 leading-relaxed">Good vibes, fit tribes, and local high-fives. You're just one login away.
                    </p>
                    <p className="text-[15px] mt-6 lg:mt-12 text-slate-600">Don't have an account
                        <button
                        onClick={()=>navigate('/sign-up')} className="text-blue-600 font-medium hover:underline ml-1">Register
                        here</button>
                    </p>
                </div>

                <form className="max-w-md lg:ml-auto w-full" onSubmit={handleSubmit}>
                    <h2 className="text-slate-900 text-3xl font-semibold mb-8">
                        Sign in
                    </h2>

                    <div className="space-y-6">
                        <div>
                            <label className='text-sm text-slate-900 font-medium mb-2 block'>Email</label>
                            <input name="email" type="email" required
                                   className="bg-slate-100 w-full text-sm text-slate-900 px-4 py-3 rounded-md outline-0 border border-gray-200 focus:border-blue-600 focus:bg-transparent"
                                   placeholder="Enter Email"
                                   value={form.email}
                                   onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className='text-sm text-slate-900 font-medium mb-2 block'>Password</label>
                            <input name="password" type="password" required
                                   className="bg-slate-100 w-full text-sm text-slate-900 px-4 py-3 rounded-md outline-0 border border-gray-200 focus:border-blue-600 focus:bg-transparent"
                                   placeholder="Enter Password"
                                   value={form.password}
                                   onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox"
                                       className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"/>
                                <label htmlFor="remember-me" className="ml-3 block text-sm text-slate-900">
                                    Remember me
                                </label>
                            </div>
                            <div className="text-sm">
                                <button  type="button" onClick={() => navigate('/reset-password')}
                                   className="text-blue-600 hover:text-blue-500 font-medium">
                                    Forgot your password?
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="!mt-12">
                        <button type="submit"
                                className="w-full shadow-xl py-2.5 px-4 text-[15px] font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
                            Log in
                        </button>
                    </div>

                </form>
            </div>
        </div>
            </motion.div>
    )
}
