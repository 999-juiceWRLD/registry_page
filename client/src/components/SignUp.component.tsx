import { Form } from "./Form.component";

export const SignUp: React.FunctionComponent = () => {
    return (
        <div className="mx-auto w-[60%] border-2 rounded border-light-blue-border">
            <div className="flex flex-col content-center items-center gap-y-5 my-5">
                <h4>Sign up</h4>
                <Form />
            </div>
        </div>
    );
}
