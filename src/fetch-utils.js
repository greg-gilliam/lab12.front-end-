const URL = 'http://localhost:7890';

export async function getToken(loginInfo, type) {
    const authURL = `${URL}/auth/${type}`;
    const resp = await fetch(authURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginInfo),
    });
    const data = await resp.json();
    localStorage.setItem('TOKEN', data.token);
    return data.token;
}