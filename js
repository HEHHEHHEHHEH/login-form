
function nextpage() {
    window.location.assign('login.html')
}
function homepage() {
    window.location.assign('homepage.html')
}
function signpage() {
    window.location.assign('index.html')
}
function signup() {
    var username = document.getElementById('Username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var Cpassword = document.getElementById('Cpassword').value;

    var signUp = {
        username,
        email,
        password,
        Cpassword
    }


    if (password == Cpassword) {
        var signUpData = JSON.parse(localStorage.getItem('signupdata'));


        if (!signUpData) {
            localStorage.setItem('signupdata', JSON.stringify([signUp]))

        }
        else {
            validity = false
            for (var i = 0; i < signUpData.length; i++) {
                if (email == signUpData[i].email) {
                    alert("Email already in use")
                    validity = true
                }
            }
            if (validity == false) {
                var updated = [...signUpData, signUp];
                localStorage.setItem('signupdata', JSON.stringify(updated))
                alert('signed up')
            }
        }


    }
    else {
        alert('password does not match')
    }

}
function login() {
    var email_login = document.getElementById('email1').value;
    var password_login = document.getElementById('password1').value;

    var saved_data = JSON.parse(localStorage.getItem('signupdata'))

    var valid = true;

    for (var i = 0; i < saved_data.length; i++) {
        if (email_login == saved_data[i].email && password_login == saved_data[i].password) {
            window.location.assign('homepage.html')
            valid = false
        }
    }
    if (valid == true) {
        alert('incorrect username or password')
    }
}
function log_out() {
    window.location.assign('login.html')
}
