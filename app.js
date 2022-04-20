const form = document.querySelector('form');
const fName = document.getElementById('f-name');
const lName = document.getElementById('l-name');
const email = document.getElementById('e-mail');
const pwd = document.getElementById('pwd');
const msg = document.querySelector('.msg');

form.addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    console.log('Submit');

    if (fName.value === '' || lName.value === '' || email.value === '' || pwd.value === '') {
        const active = document.querySelector('.active');
        const fNameMsg = document.querySelector('.f-name-msg');
        const lNameMsg = document.querySelector('.l-name-msg');
        const emailMsg = document.querySelector('.email-msg');
        const pwdMsg = document.querySelector('.pwd-msg');

        if (fName.value === '') {
            fNameMsg.classList.add('active');
            fName.style.border = '1px red solid';
            setTimeout(() => fNameMsg.classList.remove('active'), 3000);
            setTimeout(() => fName.style.border = '1px hsl(246, 25%, 77%) solid', 3000);
        }

        if (lName.value === '') {
            lNameMsg.classList.add('active');
            lName.style.border = '1px red solid';
            setTimeout(() => lNameMsg.classList.remove('active'), 3000);
            setTimeout(() => lName.style.border = '1px hsl(246, 25%, 77%) solid', 3000);
        }

        if (email.value === '') {
            emailMsg.classList.add('active');
            email.style.border = '1px red solid';
            setTimeout(() => emailMsg.classList.remove('active'), 3000);
            setTimeout(() => email.style.border = '1px hsl(246, 25%, 77%) solid', 3000);
        }

        if (pwd.value === '') {
            pwdMsg.classList.add('active');
            pwd.style.border = '1px red solid';
            setTimeout(() => pwdMsg.classList.remove('active'), 3000);
            setTimeout(() => pwd.style.border = '1px hsl(246, 25%, 77%) solid', 3000);
        }


    } else {
        window.location.href = "./success.html";
    }


}