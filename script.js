const { Client } = require('pg')

const client = new Client(process.env.DATABASE_URL)

client.connect()




// javascript login system
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "admin") {
        alert ("Login successfully");
        window.location = "success.html"; // Redirecting to other page.
        return false;
    }
    else {
        alert("Wrong username or password");
    }
}

// take name as javascript input and add it to cockroachdb
function addName() {
    var name = document.getElementById("name").value;
    var query = "INSERT INTO names (name) VALUES ('" + name + "')";
    client.query(query, (err, res) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log(res.rows[0])
        }
    })
}








var username = document.getElementById("username");
var pass = document.getElementById("pass");
pass.onfocus = function () {
    if (pass.value == "ENTER PASSWORD") {
        pass.value = "";
    }
};
username.onfocus = function () {
    if (this.value == "ENTER USERNAME") {
        this.value = "";
    }
};
pass.onblur = function () {
    if (this.value == "") {
        pass.value = "ENTER PASSWORD";
    }
};
username.onblur = function () {
    if (this.value == "") {
        this.value = "ENTER USERNAME";
    }
};
