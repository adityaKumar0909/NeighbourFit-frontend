import { useNavigate } from 'react-router-dom';
import {useState} from 'react'

export default function DropdownState(){
    const [cityName,setCityName] = useState('Greater Noida');

    const handleCityChange = (e) => {
        localStorage.setItem("selectedCity", cityName);
        setSelectedCity(e.target.value);
    };

    const handleSubmit = () => {
        navigate('/user-preference', { state: { city: selectedCity } });
    };

    return (
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

                    <option value="Greater Noida" selected={true}>Greater Noida</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Gurgaon">Gurgaon</option>
                </select>

            </div>
        </div>

    );
};
