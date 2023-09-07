import { IButtonType } from "../interfaces/ButtonType.interface";

export const Button: React.FunctionComponent<IButtonType> = ({ buttonType, onClick }: IButtonType) => {
    return (
        <button type={buttonType} onClick={onClick}
            className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold rounded py-2 px-5">
            Sign in
        </button>
    );
}
