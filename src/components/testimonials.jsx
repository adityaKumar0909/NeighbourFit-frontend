export default function Testimonials(){

    const testimonials = [
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Karim",
            title: "Student",
            quote: "I used to bounce between flats every year. NeighbourFit nailed my vibe now I live where I work and play. Finally, a place that feels like me!"
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Nidhi",
            title: "Product designer",
            quote: "With two school kids and hectic jobs, we needed a calm but connected area. NeighbourFit understood our rhythm and suggested a neighbourhood that truly fits."
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Jaswinder",
            title: "DevOp engineer",
            quote: " I just wanted a place close to campus but not too noisy. This website figured out the perfect balance of chill and convenience."
        },
    ]

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl sm:text-center md:mx-auto">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        See what others saying about us
                    </h3>

                </div>
                <div className="mt-12">
                    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            testimonials.map((item, idx) => (
                                <li key={idx} className="bg-gray-100 p-4 rounded-xl">
                                    <figure>
                                        <div className="flex items-center gap-x-4">
                                            <img src={item.avatar} className="w-16 h-16 rounded-full" />
                                            <div>
                                                <span className="block text-gray-800 font-semibold">{item.name}</span>
                                                <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                            </div>
                                        </div>
                                        <blockquote>
                                            <p className="mt-6 text-gray-700">
                                                {item.quote}
                                            </p>
                                        </blockquote>
                                    </figure>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}