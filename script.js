document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('registrationDialog').style.display = 'block';
    document.getElementById('openDialogBtn').addEventListener('click', function () {
        document.getElementById('registrationDialog').style.display = 'none';
        document.getElementById('loginDialog').style.display = 'block';
    });

    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();
        loginUser();
    });

    document.getElementById('registrationForm').addEventListener('submit', function (event) {
        event.preventDefault();
        registerUser();
    });
});

function closeDialog() {
    document.getElementById('loginDialog').style.display = 'none';
    document.getElementById('registrationDialog').style.display = 'none';
}

function loginUser() {
    let storedUsername = localStorage.getItem('username');
    let storedPassword = localStorage.getItem('password');

    let inputUsername = document.getElementById('loginUsername').value;
    let inputPassword = document.getElementById('loginPassword').value;

    if (inputUsername === storedUsername && inputPassword === storedPassword) {
        alert('Դուք հաջողությամբ գրանցվեցիք');
        closeDialog();
    } else {
        alert('Ինչ-որ բան սխալ է Փորձեք կրկին');
    }
}

function registerUser() {
    let regUsername = document.getElementById('regUsername').value;
    let regPassword = document.getElementById('regPassword').value;

    localStorage.setItem('username', regUsername);
    localStorage.setItem('password', regPassword);

    alert('Գրանցումը կատարվեց');
    closeDialog();
}