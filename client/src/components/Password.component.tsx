import { IRegister } from "../interfaces/Register.interface";

export const Password: React.FunctionComponent<IRegister> = ({ changeValues }) => {
    return (
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
            </label>
            <input type="password" name="password" onChange={changeValues} className="shadow border text-gray-700 p-1 text-sm focus:outline-none focus:shadow-outline" />
        </div>
    );
}
