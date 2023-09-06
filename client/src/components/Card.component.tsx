import { Form } from "./Form.component";

export const Card: React.FunctionComponent = () => {
    return (
        <div className="my-10 mx-auto w-[60%] border-2 rounded border-[#64CCC5]">
            <div className="flex flex-col content-center items-center gap-y-5 my-5">
                <h4>Sign up</h4>
                <Form />
            </div>
        </div>
    );
}
