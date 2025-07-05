import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer
} from 'recharts';
import { useEffect, useState } from 'react';

export default function RadarChartComponent({ data }) {
    // DB keys → Custom labels
    const categoryMap = {
        rent: "Rent",
        safety: "Safety",
        greenery: "Greenery",
        budgetFriendly: "Budget Friendly",
        studentFriendly: "Student Friendly",
        bachelorFriendly: "Bachelor Friendly",
        publicTransport: "Public Transport",
        foodAccessibility: "Food Access",
        cleanliness: "Cleanliness",
        nightlife: "Nightlife"
    };

    const chartData = Object.entries(categoryMap).map(([key, label]) => ({
        subject: label,
        value: Number(data[key]) || 0
    }));

    const [fontSize, setFontSize] = useState(12);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 400) {
                setFontSize(8);
            } else if (width < 768) {
                setFontSize(10);
            } else {
                setFontSize(12);
            }
        };

        handleResize(); // Initial call
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div style={{ width: '100%', height: 250 }}>
            <ResponsiveContainer>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" tick={{ fontSize, fill: "#4B5563" }} />
                    <PolarRadiusAxis angle={30} domain={[0, 10]} tick={{ fontSize }} />
                    <Radar
                        name="Score"
                        dataKey="value"
                        stroke="#6366F1"
                        fill="#6366F1"
                        fillOpacity={0.6}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}
