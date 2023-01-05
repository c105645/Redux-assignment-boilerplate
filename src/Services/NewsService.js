
export const loginAPI = ({ userName, password, rememberMe }) => {

    return fetch("http://localhost:3001/auth/v1", {
        "method": 'POST',
        "headers": { "content-type": "application/json" },
        "body": JSON.stringify({ username: userName, password: password }),
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json());
};

export const isAuthenticatedAPI = () => {
    const bearer = 'Bearer ' + sessionStorage.getItem('token');
    console.log(bearer);
    return fetch("http://localhost:3001/auth/v1/isAuthenticated", {
        "method": 'POST',
        "headers": {
            'Authorization': bearer
        },
        "credentials": "same-origin",
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json());
};

export const newsByCategory = () => {

    return fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=d958b72590774683af46819760963ff2", {
        "method": 'GET',
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json());
};


export const getBookmarkedNews = () => {

    const bearer = 'Bearer ' + sessionStorage.getItem('token');
    return fetch("http://localhost:3001/api/v1/bookmarks", {
        "method": 'GET',
        "headers": {
            'Authorization': bearer
        },
        "credentials": "same-origin",
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json());
};

export const saveBookarkedNews = (news) => {
    const bearer = 'Bearer ' + sessionStorage.getItem('token');

    return fetch("http://localhost:3001/api/v1/bookmarks", {
        "method": 'POST',
        "headers": {
            'Content-Type': 'application/json',
            'Authorization': bearer
        },
        "credentials": "same-origin",
        "body": JSON.stringify(news),
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json());
};


export const deleteBookmarkedNews = (id) => {
    const bearer = 'Bearer ' + sessionStorage.getItem('token');


    return fetch(`http://localhost:3001/api/v1/bookmarks/${id}`, {
        "method": 'DELETE',
        "headers": {
            'Content-Type': 'application/json',
            'Authorization': bearer
        },
        "credentials": "same-origin",

    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json());
};



