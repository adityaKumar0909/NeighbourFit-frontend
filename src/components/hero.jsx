import heroImg from '../assets/hero.jpg';
import CookieAnnouncement from "./cookieAnnouncement.jsx";

export default function Hero(){
    return(
        <section id="home" className="bg-white lg:grid lg:h-screen lg:place-content-center">
            <div
                className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32"
            >
                <div className="max-w-prose text-left">
                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                        Your lifestyle deserves the right neighbourhood.
                    </h1>

                    <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
                        Neighbourhood Fit matches you with areas that align with how you live from work-life balance to social vibe and everything in between.
                    </p>

                    <div className="mt-4 flex gap-4 sm:mt-6">
                        <a
                            className="inline-block rounded-lg border  bg-[#212529] px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-[#4361ee]"
                            href="#about"
                        >
                            How it works?
                        </a>


                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <img
                        src={heroImg}
                        alt="Login Illustration"
                        className="w-full max-w-md rounded-xl  object-cover"
                    />
                </div>
                <CookieAnnouncement/>

            </div>
        </section>
    )
}