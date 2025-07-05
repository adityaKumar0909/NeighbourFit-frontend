export function Button({ children }) {
    return (
        <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
            {children}
        </button>
    );
}
