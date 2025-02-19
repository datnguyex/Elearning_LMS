interface AddClassContestType {
    passwordValue: string;
    setPasswordValue: (e: string) => void;
    hiddenPassword: boolean;
    togglePasswordVisibility: () => void;
    linkValue: any;
    handleSetLinkValue: (e: string) => void;
    handleCopy: () => void;
    inputRef: any;
}
export default AddClassContestType;
