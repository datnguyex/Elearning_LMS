export interface AuthLayoutProps {
    title: string;
    credential: string;
    transfer: string;
    type: string;
}
export interface AuthInputProps {
    imgIcon: string;
    label: string;
    labelValue: string;
    handleChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
}
