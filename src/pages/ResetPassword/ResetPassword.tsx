import AuthLayout from '~/layouts/AuthLayout/AuthLayout';

function ResetPassword() {
    return (
        <>
            <AuthLayout
                title={'Cấp lại mật khẩu'}
                credential={'Mã xác thực'}
                transfer={'Quay lại trang chủ'}
                type={'resetPassword'}
            />
        </>
    );
}

export default ResetPassword;
