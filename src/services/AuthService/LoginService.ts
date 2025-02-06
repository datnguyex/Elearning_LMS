import { loginServiceProps, LoginUserServiceProps } from './../../types/LoginServiceProps/LoginServiceProps';
import { getDatabase, ref, get, child } from 'firebase/database';
import { Databasez } from '~/firebase';
export const LoginService = async ({ username, creditentialValue, navigate }: loginServiceProps) => {
    const dbRef = ref(Databasez);

    try {
        const snapshot = await get(child(dbRef, 'Elearning/users'));
        if (snapshot.exists()) {
            const users = snapshot.val();
            let isMatch = false;

            Object.values(users).forEach((user) => {
                const typedUser = user as LoginUserServiceProps;

                if (typedUser.username === username && typedUser.password === creditentialValue) {
                    isMatch = true;
                }
            });

            if (isMatch) {
                navigate('/');
            } else {
                console.log('Sai tên đăng nhập hoặc mật khẩu!');
            }
        } else {
            console.log('Không tìm thấy dữ liệu.');
        }
    } catch (error) {
        console.error('Lỗi khi lấy dữ liệu:', error);
    }
};
