
//Key component of email verification during sign-up

import AlertError from '../components/alertError.jsx'
import {useNavigate} from 'react-router-dom'
import {useState} from "react";

export default function AuthenticateOTPScreen() {

    const [error, setError] = useState(null);
    const [form, setForm] = useState({email: '', otp: ''});

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://neighbourfit-eqoq.onrender.com/verify-otp", {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });

            const data = await response.json();

            console.log("Response status:", response.status);

            if (response.status === 200) {
                navigate('/login', { replace: true });
            }
            else if (response.status === 400) {
                setError(data.message);

            }
            else {
                setError(data.message || 'An error occurred ');
            }
        } catch (error) {
            setError(error.message || 'Network error occurred');


        }
    }

    const navigate = useNavigate();

    return (
        <div className="bg-gray-50">
            <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
                <div className="max-w-[480px] w-full">

                    <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
                        <h1 className="text-slate-900 text-center text-3xl font-semibold">Tell us the magical code ...</h1>

                        <div className="mt-6">
                            {error && <AlertError error={error} />}
                        </div>


                        <form className="mt-12 space-y-6" onSubmit={handleSubmit} action="http://localhost:5000/verify-otp" method="POST">
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
                                <label className="text-slate-900 text-sm font-medium mb-2 block">Enter OTP</label>
                                <div className="relative flex items-center">
                                    <input name="otp" type="text" required
                                           className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
                                           placeholder="Enter OTP sent to your email. "
                                           onChange={handleChange}
                                    />

                                </div>
                            </div>

                            <div className="!mt-12">
                                <button type="submit"
                                        className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
                                    Verify OTP
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
