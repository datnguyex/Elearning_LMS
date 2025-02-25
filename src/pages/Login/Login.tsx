import AuthLayout from '../../layouts/AuthLayout/AuthLayout';
function Login() {
    return (
        <>
            <AuthLayout title={'Đăng nhập'} credential={'Mật khẩu'} transfer={'Quên mật khẩu'} type={'login'} />
        </>
    );
}

export default Login;
