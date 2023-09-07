export const Form: React.FunctionComponent = () => {
    return (
        <div className="w-full max-w-xs">
            <form action="" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        Email Address
                    </label>
                    <input type="text" className="shadow border text-gray-700 p-1 text-sm focus:outline-none focus:shadow-outline" />
                </div>
            </form>
        </div>
    );
}
