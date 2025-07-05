export default function Footer(){
    return (
        <footer id="contact" className="bg-black dark:bg-black">
            <div className="mx-auto max-w-5xl px-2 py-10 sm:px-4 lg:px-6">

                {/* Navigation Links */}
                <ul className="flex justify-center flex-wrap gap-6 text-sm text-white">
                    <li><a href="#" className="hover:text-gray-500">About</a></li>
                    <li><a href="#" className="hover:text-gray-500">Home</a></li>
                    <li><a href="#" className="hover:text-gray-500">Dashboard</a></li>
                </ul>

                {/* Social Icons */}
                <div className="mt-6 flex justify-center space-x-6">
                    <a href="mailto:kadi93030@email.com" className="text-white hover:text-gray-500">
                        <i className="fas fa-envelope text-lg"></i>
                    </a>
                    <a href="https://www.instagram.com/adityakmr2730/" className="text-white hover:text-gray-500">
                        <i className="fab fa-instagram text-lg"></i>
                    </a>
                    <a href="https://github.com/adityaKumar0909" className="text-white hover:text-gray-500">
                        <i className="fab fa-github text-lg"></i>
                    </a>
                </div>

                {/* Copyright (optional) */}
                <p className="mt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} NeighbourFit. All rights reserved.
                </p>

            </div>
        </footer>
    )
}