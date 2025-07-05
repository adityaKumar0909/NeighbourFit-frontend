export default function Tooltip({ tip }) {
    return (
        <div className="relative inline-block group">
            <button
                className="text-black transition-colors duration-200 focus:outline-none dark:text-black dark:hover:text-black hover:text-black">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"/>
                </svg>
            </button>

            {/* Tooltip appears only on hover */}
            <p className="absolute hidden group-hover:flex items-center justify-center w-48 p-3 text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-lg shadow-md left-12 -top-4 z-10 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700">
                <span className="">{tip}</span>

                <svg xmlns="http://www.w3.org/2000/svg"
                     className="absolute w-6 h-6 text-white transform rotate-45 -translate-y-1/2 fill-current -left-3 top-1/2 dark:text-black"
                     stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></path>
                </svg>
            </p>
        </div>
    );
}
