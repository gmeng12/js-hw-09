console.log("Form")
const STORAGE_KEY = "feedback-msg";

const form = document.querySelector(".feedback-form");


function readFormData(form) {
    const message = form.message.value.trim();
    const email = form.email.value.trim();
    return {
        message,
        email
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = readFormData(event.currentTarget);

    if (data.email && data.message) {
        console.log("Form", data);
        localStorage.removeItem(STORAGE_KEY);
        form.reset();
    }
})

form.addEventListener('input', (event) => {
    const data = readFormData(event.currentTarget);
    const jsonData = JSON.stringify(data);
    localStorage.setItem(STORAGE_KEY, jsonData);
})

const rawData = localStorage.getItem(STORAGE_KEY);
if (rawData) {
    const data = JSON.parse(rawData);
    if (data.email !== undefined) {
        form.email.value = data.email;
    }
    if (data.message !== undefined) {
        form.message.value = data.message;
    }
}