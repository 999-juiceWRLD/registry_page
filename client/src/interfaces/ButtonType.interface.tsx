export interface IButtonType {
    buttonType: 'button' | 'reset' | 'submit';
    onClick(): void;
}