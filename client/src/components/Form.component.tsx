import { Button } from "./Button.component";
import { useState } from "react";
import { IFormData } from "../interfaces/FormData.interface";
import axios from "axios";

export const Form: React.FunctionComponent<IFormData> = () => {
    
    const [values, setValues] = useState<IFormData>({ email: '', password: '' });
    
    const changeValues = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value }); 
    };

    const dataRequest = async () => {
        axios.defaults.withCredentials = true;
        await axios.post('http://localhost:3000/api/sign-up', values)
            .then(res => { console.log(res.data) })
            .catch(err => { console.log(err) });
    }

    // const log = () => {
    //     console.log(values);
    // }

    return (
        <div className="w-full max-w-xs">
            <form action="" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        Email Address
                    </label>
                    <input type="text" name="email" onChange={changeValues} className="shadow border text-gray-700 p-1 text-sm focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input type="password" name="password" onChange={changeValues} className="shadow border text-gray-700 p-1 text-sm focus:outline-none focus:shadow-outline" />
                </div>
                <Button buttonType="button" onClick={dataRequest}/>
            </form>
        </div>
    );
}
