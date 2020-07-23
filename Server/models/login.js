const { sign } = require('jsonwebtoken');
const { resolve } = require('./ioc-container');

// получение токена из заголовка
const getTokenFromHeader = req => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];

    if (token) {
        if (token.startsWith('Bearer ')) {
            return token.slice(7, token.length);
        }
    }

    return undefined;
};

// генерация токена
const generateToken = data => {
    const signature = process.env.SIGNATURE; // супер секратная инфа нельзя давать никому - украв ее смогут хакнуть админа
    const expiration = process.env.EXPIRATION;

    return sign({ data }, signature, { expiresIn: expiration });
};

function CheckExistUser({login, password}) {
    return login === 'login' && password === 'password'; // какой-то запрос к бд с ответом есть пользователь или нет
};

// Проверка что данный токен существует в сеансе
function CheckTokenValid(currentToken) {
    const adminToken = resolve("adminToken");

    return adminToken !== null && currentToken === adminToken;
}

// вход в акк - в случае успеха получаем токен
function Login({login, password}) {
    const isExistUser = CheckExistUser({login, password});
    if (!isExistUser) {
        return "";
    }

    const data = { // можно еще ID сюда пихать если несколько админов
      login
    };

    return generateToken(data);
};

// проверка что есть токен и он валдиный у админа
function CheckTokenValidFromReq(req) {
    const currentToken = getTokenFromHeader(req);
    if (!currentToken) {
        return false;
    }

    const validToken = CheckTokenValid(currentToken);
    if (!validToken) {
        return false;
    }

    return true;
}


module.exports = {
    Login,
    CheckTokenValidFromReq
};
