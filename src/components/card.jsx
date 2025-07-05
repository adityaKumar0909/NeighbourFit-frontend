export default function Card({name,description}) {
    return (
        <div className="max-w-3xl px-8 py-6 bg-white rounded-lg shadow-md dark:bg-black">

            <div className="mt-2">
                <h2
                   className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
                   tabIndex="0" role="link">{name}</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
            </div>


        </div>
    )
}