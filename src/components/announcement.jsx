import {useState} from 'react'

export default function Announcement() {

    const [showAnnouncement,SetshowAnnouncement] = useState(true);

    if(!showAnnouncement) return null;

    return(
        <div className="fixed inset-x-0 bottom-0 z-auto p-4">
            <div
                className="flex items-center justify-between rounded border border-gray-200 bg-gray-100 px-4 py-2 text-gray-900"
            >
                <span> </span>

                <p className="text-center font-medium">
                    We currently serve only in few cities
                    . Support for your city will be available
                    <span className="underline"> soon</span> !
                </p>

                <button
                    type="button"
                    aria-label="Dismiss"
                    onClick={()=>SetshowAnnouncement(false)}
                    className="rounded border border-gray-300 bg-white p-1.5 shadow-sm transition-colors hover:bg-gray-50"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    )
}