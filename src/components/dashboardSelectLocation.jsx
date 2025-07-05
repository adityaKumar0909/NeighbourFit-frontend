import DropdownState from "./dropdownState.jsx";
import Announcement from "./announcement.jsx";
import {useState} from "react";
import AlertError from "./alertError.jsx";
import {useNavigate} from 'react-router-dom'



export default function DashboardSelectLocation() {
    const navigate = useNavigate();

    const [error, setError] = useState(null)
    const [cityName,setCityName] = useState('Greater Noida');


    const handleSubmit = () => {
        navigate('/user-preference', { state: { city: cityName } });
    };


    return(

        <section id="about" className="bg-white lg:grid lg:h-screen lg:place-content-center dark:bg-black">
            <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">

                <div className="mt-6">
                    {error && <AlertError error={error} />}
                </div>

                <div className="mx-auto max-w-prose text-center">
                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
                        Just your city. That’s all we need.
                    </h1>

                    <div className="flex  items-center gap-4">


                        <div className="relative w-72 max-w-full mx-auto mt-12">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-400 right-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <select onChange={(e)=> setCityName(e.target.value) } className="z-10 w-full px-3 py-4 text-lg text-black bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">

                                <option value="Greater Noida">Greater Noida</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Bengaluru">Bengaluru</option>
                                <option value="Gurgaon">Gurgaon</option>
                            </select>

                        </div>
                    </div>

                    <div className="mt-6 flex justify-center gap-6 sm:mt-6">
                        <button onClick={handleSubmit}
                            className="inline-block bg-[#e5e5e5] px-5 py-3 border rounded-lg font-medium text-black shadow-sm transition-colors hover:bg-indigo-700 hover:text-white">
                            I’m Ready
                        </button>
                    </div>
                </div>
                <Announcement/>
            </div>

        </section>

    )
}