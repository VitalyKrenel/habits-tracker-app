const url = 'http://localhost:8000/api'

export const fetchAuthApi = async (username, password) => {
    return await fetch(`${url}/auth/login`, {
        method: 'POST',
        body: JSON.stringify({
            email: username,
            password: password,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

export const fetchSignUpApi = async ({
    mail,
    login,
    passwordFirstTime,
    name,
    passwordSecondTime,
}) => {
    console.log(mail, login, passwordFirstTime, name, passwordSecondTime)
    return await fetch(`${url}/auth/register`, {
        method: 'POST',
        body: JSON.stringify({
            email: mail,
            password: passwordFirstTime,
            password_confirmation: passwordSecondTime,
            name: name,
            login: login,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

export const fetchGetProfileData = async (token) => {
    return await fetch(`${url}/profile`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export const fetchGetHabitsApi = async ({
    dateFrom,
    dateTo,
    page = 1,
    perPage = 10,
    token,
}) => {
    console.log('TOKEN CHECK', token, dateFrom)
    return await fetch(
        `${url}/main?date_from=${dateFrom}&date_to=${dateTo}&page=${page}&per_page=${perPage}`,
        {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    )
}