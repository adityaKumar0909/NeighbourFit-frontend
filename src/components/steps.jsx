export default function Steps(){
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-8 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">

                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">

          </span>{' '}
                    How We Find Your Perfect Neighborhood
                </h2>
                <pre className="text-base text-gray-700 md:text-lg">
                    We gather real-world data, apply smart filters,
                    and rank the best areas just for you
                </pre>
            </div>
            <div className="grid gap-10 lg:grid-cols-4 sm:grid-cols-2">
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <p className="text-2xl font-bold">Step 1</p>
                        <svg
                            className="w-6 text-gray-700 transform rotate-90 sm:rotate-0"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <line
                                fill="none"
                                strokeMiterlimit="10"
                                x1="2"
                                y1="12"
                                x2="22"
                                y2="12"
                            />
                            <polyline
                                fill="none"
                                strokeMiterlimit="10"
                                points="15,5 22,12 15,19 "
                            />
                        </svg>
                    </div>
                    <p className="text-gray-600">
                        Behind the scenes, we gather data from Google Maps reviews, online forums, and on-site sample surveys to build a holistic neighborhood profile.
                    </p>
                </div>
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <p className="text-2xl font-bold">Step 2</p>
                        <svg
                            className="w-6 text-gray-700 transform rotate-90 sm:rotate-0"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <line
                                fill="none"
                                strokeMiterlimit="10"
                                x1="2"
                                y1="12"
                                x2="22"
                                y2="12"
                            />
                            <polyline
                                fill="none"
                                strokeMiterlimit="10"
                                points="15,5 22,12 15,19 "
                            />
                        </svg>
                    </div>
                    <p className="text-gray-600">
                        We filter all neighborhoods that belong to the selected city in our database.
                    </p>
                </div>
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <p className="text-2xl font-bold">Step 3</p>
                        <svg
                            className="w-6 text-gray-700 transform rotate-90 sm:rotate-0"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <line
                                fill="none"
                                strokeMiterlimit="10"
                                x1="2"
                                y1="12"
                                x2="22"
                                y2="12"
                            />
                            <polyline
                                fill="none"
                                strokeMiterlimit="10"
                                points="15,5 22,12 15,19 "
                            />
                        </svg>
                    </div>
                    <p className="text-gray-600">
                        Each neighborhood is scored based on how well it
                        aligns with user lifestyle preferences like safety,
                        affordability, commute ease, and social vibe.
                    </p>
                </div>
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <p className="text-2xl font-bold">Success</p>
                        <svg
                            className="w-8 text-gray-600"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <polyline
                                fill="none"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit="10"
                                points="6,12 10,16 18,8"
                            />
                        </svg>
                    </div>
                    <p className="text-gray-600">
                        The top 3 neighborhoods with the highest scores are recommended to the user.
                        Each match includes summary highlights, suitability tags, and
                        quick facts to help users decide with confidence.

                    </p>
                </div>
            </div>
        </div>
    )
};