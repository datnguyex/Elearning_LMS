import { AuthInputProps } from '~/types/AuthLayoutProps/AuthLayoutProps';

function AuthInput({ label, labelValue, handleChangeValue, type, imgIcon }: AuthInputProps) {
    return (
        <div className="w-full h-auto">
            <div className="text-[#373839]  text-lg font-semibold font-['Mulish'] tracking-tight">{label}</div>
            <div
                className={`w-full px-4 py-2 rounded-lg justify-start items-center gap-2 inline-flex ${
                    labelValue === '' ? 'bg-[#f2f2f2]' : 'bg-[#fff] border border-[#373839]'
                }`}
            >
                <img className="w-[20.50px] h-auto" src={imgIcon} alt="User Icon" />
                <input
                    onChange={handleChangeValue}
                    className="w-[100%] h-auto bg-transparent outline-none"
                    type={type === 'username' ? 'text' : type === 'login' ? 'password' : 'text'}
                    value={labelValue}
                />
            </div>
        </div>
    );
}

export default AuthInput;
