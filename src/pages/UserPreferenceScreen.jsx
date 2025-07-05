import CCarousel from "../components/carousel.jsx";
import { useState, useEffect } from "react";
import RadarChartComponent from "../components/radarChart.jsx";
import Tooltip from "../components/tooltip.jsx";
import { motion } from 'framer-motion';
import AlertError from "../components/alertError.jsx";
import { useLocation } from 'react-router-dom';
import Loading from "../components/loading.jsx";

const FAKE_REVIEWS = [
    {
        author: "Riya Sharma",
        text: "Peaceful and clean neighbourhood. Loved living here!",
    },
    {
        author: "Aman Verma",
        text: "Perfect for students – cafes and metro nearby.",
    },
    {
        author: "Neha Kapoor",
        text: "Great vibes, slightly expensive but worth it.",
    }
];

export function UserPreferenceScreen() {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    const [selectedNeighbour, setSelectedNeighbour] = useState(null);
    const [error, setError] = useState(null);
    const [top3Neighborhoods, setTop3Neighborhoods] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const cityNameFromRoute = location.state?.city;

    useEffect(() => {
        if (cityNameFromRoute) {
            localStorage.setItem("selectedCity", cityNameFromRoute);
        }
    }, [cityNameFromRoute]);

    const cityName = cityNameFromRoute || localStorage.getItem("selectedCity");

    useEffect(() => {
        if (selectedNeighbour?.name) {
            setTimeout(() => {
                setReviews(FAKE_REVIEWS.sort(() => 0.5 - Math.random()).slice(0, 3));
            }, 500); // simulate fake fetch delay
        }
    }, [selectedNeighbour]);

    const [preferences, setPreferences] = useState({
        rent: 0,
        safety: 0,
        greenery: 0,
        budgetFriendly: 0,
        studentFriendly: 0,
        bachelorFriendly: 0,
        publicTransport: 0,
        foodAccessibility: 0,
        cleanliness: 0,
        nightlife: 0,
    });

    const handleChange = (e) => {
        setPreferences({ ...preferences, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!cityName) {
            setError("City information is missing. Please go back to the location selection page.");
            return;
        }

        const selectedTopPriorities = Object.entries(preferences)
            .filter(([_, value]) => Number(value) >= 9)
            .map(([key]) => key);

        setLoading(true);
        try {
            const requestBody = {
                city: cityName,
                preferences,
                top: selectedTopPriorities,
            };

            const response = await fetch('https://neighbourfit-eqoq.onrender.com/dashboard/topThreeWebsites', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(requestBody),
            });

            const data = await response.json();
            console.log("Response status:", response.status);

            setLoading(false);

            if (response.status === 200) {
                setTop3Neighborhoods(data);
                setSelectedNeighbour(data[0]); // Auto-select top match
            } else {
                setError(data.message || 'An error occurred');
            }
        } catch (error) {
            console.error('Fetch error:', error);
            setError(error.message || 'Network error');
            setLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
        >
            <section id="home" className="bg-white min-h-screen w-full">

                <div className="max-w-screen-xl mx-auto px-6 py-10 min-h-screen mb-6 overflow-x-hidden">
                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-8 text-center md:text-left">
                        Tell us what matters to you in a neighbourhood!
                    </h1>

                    <div className='flex gap-2'>
                        <p className="text-lg text-gray-700 mb-8 text-center md:text-left">
                            Use the sliders below to set your preferences.
                        </p>
                        <Tooltip tip={"Left = less importance , Right = more importance"} />
                    </div>

                    <form onSubmit={handleSubmit} className="mb-6">
                        <div className="grid md:grid-cols-2 gap-10 items-start">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {Object.keys(preferences).map((name) => (
                                    <div key={name}>
                                        <label htmlFor={name} className="block text-lg font-semibold text-gray-800 mb-2">
                                            {name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, ' $1')}
                                        </label>
                                        <input
                                            name={name}
                                            type="range"
                                            min={0}
                                            max={10}
                                            value={preferences[name]}
                                            onChange={handleChange}
                                            className="range range-lg"
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="w-full">
                                <CCarousel />
                                <div className="bg-white p-6 mt-4">
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleSubmit(e);
                                                setTimeout(() => {
                                                    window.location.hash = "results";
                                                }, 2000);
                                            }}
                                            type="submit"
                                            className="btn btn-neutral btn-dash"
                                            disabled={loading}
                                        >
                                            Submit Preferences
                                        </button>
                                        {loading && <Loading />}
                                        {error && <AlertError error={error} />}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                    <div id="results">
                        {top3Neighborhoods.length > 0 && (
                            <div className="mt-16">
                                <h2 className="text-left text-3xl font-semibold text-gray-800 mb-6">
                                    Your Top 3 Neighbourhood Matches
                                </h2>

                                <div className="grid md:grid-cols-3 gap-6 mt-2">
                                    {top3Neighborhoods.map((n, index) => {
                                        const isSelected = selectedNeighbour?.name === n.name;

                                        return (
                                            <div
                                                key={n._id || index}
                                                className={`border rounded-2xl p-6 shadow-lg transition hover:scale-[1.02] 
                                                ${index === 0 ? "bg-gray-50 border-green-400" : "bg-white"}
                                                ${isSelected ? "ring-2 ring-blue-500" : ""}
                                            `}
                                            >
                                                <h3 className="text-xl font-bold text-gray-800">
                                                    {n.name || `Zone ${index + 1}`}
                                                </h3>
                                                <p className="text-sm text-gray-500 mt-1">
                                                    Score: <span className="font-semibold">{n.score}</span>
                                                </p>

                                                <div className="mt-4">
                                                    <RadarChartComponent data={n} />
                                                </div>

                                                <button
                                                    className="mt-4 btn btn-outline btn-primary btn-sm"
                                                    onClick={() => setSelectedNeighbour(n)}
                                                >
                                                    View on Map
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {selectedNeighbour?.name && (
                            <>
                                <div className="mt-12">
                                    <h3 className="text-left text-2xl font-semibold text-gray-800 mb-4">
                                        Explore the Area on Map
                                    </h3>
                                    <iframe
                                        width="100%"
                                        height="400"
                                        style={{ border: "0", borderRadius: "1rem" }}
                                        loading="lazy"
                                        allowFullScreen
                                        referrerPolicy="no-referrer-when-downgrade"
                                        src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${selectedNeighbour.name}+${cityName}`}
                                    ></iframe>

                                </div>

                                <h3 className="text-left text-2xl font-semibold text-gray-800 mt-12 mb-6">
                                    Spotted your dream zone? Let’s talk homes.
                                </h3>

                                <div className="flex gap-6">
                                    <button className="text-lg btn btn-dash rounded-full">Call ☎️</button>
                                    <button className="text-lg btn btn-dash rounded-full">Message 💬</button>
                                    <button className="text-lg btn btn-dash rounded-full">Email 📫</button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
