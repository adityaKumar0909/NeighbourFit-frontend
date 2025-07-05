import {useNavigate} from "react-router-dom";

export default function About(){

    const navigate = useNavigate();

    return (
        <section id="about" className="bg-white lg:grid lg:h-screen lg:place-content-center dark:bg-black">
            <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                <div className="mx-auto max-w-prose text-center">
                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
                        Just tell us
                        <strong className="text-[#4361ee]"> how </strong>
                        you live, and
                        <strong className="text-[#4361ee]"> where </strong>
                        you’d like to be

                    </h1>

                    <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
                        No long forms, no pressure. Just choose a few lifestyle preferences,
                        pick the city you’re curious about and we’ll show you
                        the neighbourhoods that feel just right.
                    </p>

                    <div className="mt-4 flex justify-center gap-4 sm:mt-6">
                        <button onClick={()=>navigate('/dashboard')}
                            className="inline-block bg-[#e5e5e5] px-5 py-3 border rounded-lg font-medium text-black shadow-sm transition-colors hover:bg-indigo-700 hover:text-white"
                        >
                            Get Started
                        </button>


                    </div>
                </div>
            </div>
        </section>
    )
}