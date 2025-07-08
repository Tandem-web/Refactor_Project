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

export const register = async (username:string, email: string, password: string, confirmPassword: string) => {
    const response = await fetch(__API_URL__+'api/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Binarybox-Api-Key': apiKey,
        },
        body: JSON.stringify({
            username,
            email,
            password,
            confirmPassword
        }),
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Ошибка аутентификации');
    }
    return await response.json();
};