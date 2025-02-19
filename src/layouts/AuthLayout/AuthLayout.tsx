import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ElearningLogo, UserCircle, backgroundAuth, shield } from '~/assets/images';
import AuthInput from '~/components/Auth/AuthInput';
import { AuthLayoutProps } from '~/types/AuthLayoutProps/AuthLayoutProps';

import { LoginService } from '~/services/AuthService/LoginService';

function AuthLayout({ title, transfer, type }: AuthLayoutProps) {
    //navigate
    const navigate = useNavigate();

    //state
    const [username, setUsername] = useState('');
    const [creditentialValue, setcreditentialValue] = useState('');

    //enter username and password function
    const handleUsernameChange = (e: any) => {
        setUsername(e.target.value);
    };

    const handleCredentialValueChange = (e: any) => {
        const value = e.target.value;

        if (type == 'resetPassword' && !/^\d*$/.test(value)) {
            return;
        }

        setcreditentialValue(value);
    };

    const handleLogin = async () => {
        await LoginService({ username, creditentialValue, navigate });
    };

    return (
        <>
            {/* w-1920-h-1080 */}
            <div
                className="w-[100vw] h-[100vh] overflow-hidden"
                style={{
                    backgroundImage: `url(${backgroundAuth})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* form*/}
                <div className="flex flex-col w-[22%] absolute top-[50%] translate-y-[-50%] right-[11%]">
                    <div className="text-center text-[#373839] text-5xl font-extrabold font-['Mulish'] tracking-wide">
                        {title}
                    </div>

                    <div className="flex flex-col gap-[10px] w-full mt-[30px]">
                        <AuthInput
                            label={'Tên đăng nhập'}
                            labelValue={username}
                            handleChangeValue={handleUsernameChange}
                            type="username"
                            imgIcon={UserCircle}
                        />
                        {type == 'login' ? (
                            <AuthInput
                                imgIcon={shield}
                                label={'Mật khẩu'}
                                labelValue={creditentialValue}
                                handleChangeValue={handleCredentialValueChange}
                                type="login"
                            />
                        ) : (
                            <AuthInput
                                imgIcon={shield}
                                label={'Mã xác thực'}
                                labelValue={creditentialValue}
                                handleChangeValue={handleCredentialValueChange}
                                type="resetPassword"
                            />
                        )}
                    </div>
                    <Link
                        to={type === 'login' ? '/reset-password' : '/'}
                        className="text-end cursor-pointer mt-[10px]  text-[#ff7506] text-base font-normal font-['Source Sans Pro'] leading-tight"
                    >
                        {transfer}
                    </Link>

                    <div
                        onClick={type === 'login' ? handleLogin : undefined}
                        className="w-[100%] cursor-pointer mt-[10px] h-auto py-[5px] bg-gradient-to-l from-[#ff5400] to-[#f17f21] rounded-lg flex-col justify-center items-center gap-2.5 inline-flex"
                    >
                        <div className="text-white text-lg font-extrabold font-['Mulish'] tracking-tight">{title}</div>
                    </div>
                </div>
                {/* logo */}
                <div className="w-[8%] h-auto absolute right-[3%] top-[3%]">
                    <img className="w-full h-full" src={ElearningLogo} alt="" />
                </div>
            </div>
        </>
    );
}

export default AuthLayout;
