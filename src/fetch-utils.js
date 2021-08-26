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
};

export async function getTodos(token) {
    const ToDosURL = `${URL}/api/ToDo`;
    const resp = await fetch(ToDosURL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
    });
    const data = await resp.json();
    return data;
}

export async function createTodo(token, todo) {
    const ToDosURL = `${URL}/api/todos`;
    const resp = await fetch(ToDosURL, {
        method: 'POST',
        HEADERS: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
        body: JSON.stringify(todo),
    });
    const data = await resp.json();
    console.log(data);
}