export const logIn = (username, password) => (
    new Promise((resolve, reject) => {
        if (username === 'Admin' && password === '12345') {
            resolve();
        } else {
            reject(new Error('Имя пользователя или пароль введены не верно'));
        }
    })
);

