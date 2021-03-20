const loginCheck = ({ username, password }) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'admin' && password === 'password') {
                resolve();
            } else {
                reject();
            }
        }, 1000);
    });
}

export default loginCheck;