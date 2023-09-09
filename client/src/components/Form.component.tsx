import { Button } from "./Button.component";
import { useState } from "react";
import { IFormData } from "../interfaces/FormData.interface";
import { Email } from "./form-tools/Email.component";
import { Password } from "./form-tools/Password.component";
import axios from "axios";

export const Form: React.FunctionComponent = () => {
    
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

    return (
        <div className="w-full max-w-xs">
            <form action="" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <Email changeValues={changeValues} />
                <Password changeValues={changeValues} />

                <Button buttonType="button" onClick={dataRequest}/>
            </form>
        </div>
    );
}
