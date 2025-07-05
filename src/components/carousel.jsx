import { useEffect, useState } from "react";
import Card from "./card.jsx";

export default function CCarousel() {
    const [current, setCurrent] = useState(0);


    const tips = [
        { title: "Rent", description: "Lower rent areas may have limited amenities but better budget flexibility." },
        { title: "Safety", description: "High safety zones are usually quieter and ideal for families." },
        { title: "Greenery", description: "Parks and trees improve mental health and reduce pollution." },
        { title: "Student-friendly", description: "Areas with students often have cheaper food and transport." },
        { title: "Nightlife", description: "Lively at night, but possibly noisy and less safe." },
        { title: "Public Transport", description: "Good connectivity means better access but may be crowded." },
        { title: "Food Accessibility", description: "Nearby eateries are a blessing, especially for bachelors." },
        { title: "Cleanliness", description: "Clean neighbourhoods improve quality of life and health." },
    ];

    // Auto-slide every 3s
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => tips.length ? (prev + 1) % tips.length : 0);
        }, 3000);

        return () => clearInterval(interval);
    }, [tips]);

    const prev = () => {
        setCurrent(prev => prev === 0 ? tips.length - 1 : prev - 1);
    };

    const next = () => {
        setCurrent(prev => prev === tips.length - 1 ? 0 : prev + 1);
    };

    return (
        <div
            id="indicators-carousel"
            className="relative w-full mx-auto pt-1 pb-1"
        >
            {/* Carousel wrapper */}
            <div className="relative w-full h-35 sm:h-40 md:h-64 lg:h-60 overflow-hidden rounded-lg bg-white flex items-center justify-center px-4">
                {tips.length > 0 && (
                    <Card
                        name={tips[current].title}
                        description={tips[current].description}
                    />
                )}
            </div>
        </div>

    );
}
