'use server'

const backend_url = "http://localhost:8000";

export async function submitForm(formData) {
    const response = await fetch(`${backend_url}/submit-form`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            'Content-type': "application/json"
        },
        cache: 'no-cache'
    });
    const result = await response.json();
    return result.message;
}

export async function getUserForms(userId) {
    const response = await fetch(`${backend_url}/get-forms/${userId}`, {
        method: "GET",
        cache: 'no-cache'
    });
    const result = await response.json();
    console.log(result.forms[0].entries);
    return result;
}