'use server';

const backend_url = "http://localhost:8000";

export async function login(formData) {
    var payLoad = {}
    for (const [key, value] of formData.entries()) {
        payLoad[key] = value;
    }
    try {
        const response = await fetch(`${backend_url}/login`, {
            method: "POST",
            body: JSON.stringify(payLoad),
            headers: {
                'Content-type': "application/json"
            },
            cache: 'no-cache'
        });
        const result = await response.json();
        if (response.status != 200) {
            return { error: true, message: result.error }
        }
        else {
            return { userId: result.id }
        }
    }
    catch (e) {
        console.log(e);
    }
}

export async function register(formData) {
    var payLoad = {}
    for (const [key, value] of formData.entries()) {
        payLoad[key] = value;
    }
    console.log(payLoad);
    try {
        const response = await fetch(`${backend_url}/register`, {
            method: "POST",
            body: JSON.stringify(payLoad),
            headers: {
                'Content-type': "application/json"
            },
            cache: 'no-cache'
        });
        const result = await response.json();
        if (response.status != 200) {
            return { error: true, message: result.error }
        }
        else {
            return { userId: result.id }
        }
    }
    catch (e) {
        console.log(e);
    }
}
