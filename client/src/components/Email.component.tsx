import { IRegister } from "../interfaces/Register.interface";

export const Email: React.FunctionComponent<IRegister> = ({ changeValues }) => {
    return (
        <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
            </label>
            <input type="text" name="email" onChange={changeValues} className="shadow border text-gray-700 p-1 text-sm focus:outline-none focus:shadow-outline" />
        </div>
    );
}
