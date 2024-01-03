
const fetchData = async (metod, options) => {

    try {
        const response = await fetch(`http://localhost:8000/${metod}`, options);
        const data = await response.json();
        if (data.error) {
            throw data.error;
        } else {

            return data;
        }
    } catch (error) {
        throw error;
    }
}


export class User {

    constructor({ rut = null, password = null, first_name = null, last_name = null, id = null } = {}) {
        this.token = null
        this.rut = rut;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.id = id;

    }
    signIn = async () => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rut: this.rut,
                password: this.password
            })
        }
        const data = await fetchData('auth/logIn', options)
        return data

    }

    signUp = async () => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${this.token}`,
            }
        }
        const data = await fetchData('auth/logOut', options)
        return data


    }

    add = async ()  => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                rut: this.rut,
                password: this.password,
                first_name: this.first_name,
                last_name: this.last_name
            })
        }
        const data = await fetchData('AddUser/', options)
        return data


    }

    get = async () => {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const data = await fetchData(`GetUser/${this.id}`, options)
        return data
    }   

}

