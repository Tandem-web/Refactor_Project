const __API_URL__ = 'https://mock-api.binaryboxtuts.com/';
const apiKey = process.env.REACT_APP_AUTH_API_KEY;

/* -------------------------------------------------------------------------- */
/*                                    LOGIN                                   */
/* -------------------------------------------------------------------------- */

export const login = async (email: string, password: string) => {
    const response = await fetch(__API_URL__+'api/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Binarybox-Api-Key': apiKey,
        },
        body: JSON.stringify({
            email,
            password
        }),
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Ошибка аутентификации');
    }
    return await response.json();
};

/* -------------------------------------------------------------------------- */
/*                                  Register                                  */
/* -------------------------------------------------------------------------- */

export const register = async (name:string, email: string, password: string, password_confirmation : string) => {
    const response = await fetch(__API_URL__+'api/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Binarybox-Api-Key': apiKey,
        },
        body: JSON.stringify({
            name,
            email,
            password,
            password_confirmation 
        }),
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Ошибка аутентификации');
    }
    return await response.json();
};

/* -------------------------------------------------------------------------- */
/*                                   logout                                   */
/* -------------------------------------------------------------------------- */

export const logout = async (token: string) => {
    const response = await fetch(__API_URL__ + 'api/logout', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'X-Binarybox-Api-Key': apiKey,
        },
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Ошибка выхода из системы');
    }
    return await response.json();
};

/* -------------------------------------------------------------------------- */
/*                                   update                                   */
/* -------------------------------------------------------------------------- */

export const update_userInfo = async (token: string) => {
    const response = await fetch(__API_URL__ + 'api/user', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'X-Binarybox-Api-Key': apiKey
        }
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Ошибка получения пользователя');
    }

    return await response.json();
}