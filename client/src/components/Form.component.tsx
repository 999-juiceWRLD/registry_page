import { Button } from "./Button.component";
import { useState } from "react";
import { IFormData } from "../interfaces/FormData.interface";
import { Email } from "./form-tools/Email.component";
import { Password } from "./form-tools/Password.component";
import axios from "axios";

export const Form: React.FunctionComponent = () => {
    
    //
    const config = {
        headers: {
        'Content-Type': 'application/json'
        },
        withCredentials: true
    }
    //

    const [values, setValues] = useState<IFormData>({ email: '', password: '', passwordAgain: '' });
    
    const changeValues = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value }); 
    };

    const dataRequest = async () => {
        if (values.password === values.passwordAgain) {
            const { email, password } = values;
            const toBeSent = { email, password };
            axios.defaults.withCredentials = true;
            await axios.post('http://localhost:3000/api/sign-up', toBeSent, config)
                .then(res => { console.log(res.data) })
                .catch(err => { console.log(err) });
        } else {
            console.log('you better check your passwords');
        }
    }

    return (
        <div className="w-full max-w-xs">
            <form action="" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <Email changeValues={changeValues} />
                <Password changeValues={changeValues} />
                <Password changeValues={changeValues} />
                <Button buttonType="button" onClick={dataRequest}/>
                <a href="" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 pt-3">Already have an account? Login</a>
            </form>
        </div>
    );
}
