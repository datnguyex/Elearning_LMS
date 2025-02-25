import React, { useContext } from 'react';
import { EyeWhite, SlashedEyeOrange } from 'src/assets/Icons/Icons';
import { AddClassContest } from 'src/pages/ClassManage/AddClassSchedule/AddClassSchedule';
const PasswordInput: React.FC = () => {
    const { passwordValue, setPasswordValue, hiddenPassword, togglePasswordVisibility } = useContext(AddClassContest);
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(e.target.value);
    };

    return (
        <div className="relative w-[100%]">
            <input
                type={hiddenPassword ? 'password' : 'text'}
                onChange={handlePasswordChange}
                value={passwordValue}
                className={`rounded-lg ${hiddenPassword ? '' : 'italic'} w-full border border-[#C9C4C0] h-9 outline-none bg-transparent flex-1 px-4 py-4 text-base font-normal font-sourceSansPro leading-tight pr-[34px]`}
            />
            <div
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-0 z-[10] cursor-pointer h-full flex items-center"
            >
                {hiddenPassword ? (
                    <SlashedEyeOrange width={'24px'} height={'20px'} />
                ) : (
                    <EyeWhite width={'24px'} height={'20px'} color={'#FF7506'} />
                )}
            </div>
        </div>
    );
};

export default PasswordInput;
