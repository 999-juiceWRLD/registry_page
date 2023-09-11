import { ILogin } from "../../interfaces/Login.interface";
import { Email } from "../../components/form-tools/Email.component";
import { Password } from "../../components/form-tools/Password.component";
import { Button } from "../../components/Button.component";
import { useState } from "react";
import axios from "axios";

export const Login: React.FunctionComponent<ILogin> = () => {
    
    const [values, setValues] = useState<ILogin>({ email: '', password: '' });
    
    const config = {
        headers: {
        'Content-Type': 'application/json'
        },
        withCredentials: true
    }

    const changeValues = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value }); 
    };

    const dataRequest = async () => {
        axios.defaults.withCredentials = true;
        await axios.post('http://localhost:3000/api/sign-up', values, config)
            .then(res => { console.log(res.data) })
            .catch(err => { console.log(err) });
    }

    return (
        <div>
            <div className="w-full max-w-xs">
                <form action="" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <Email changeValues={changeValues} />
                    <Password changeValues={changeValues} />
                    <Button buttonType="button" onClick={dataRequest}/>
                </form>
        </div>
        </div>
    );
}
