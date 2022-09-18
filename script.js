// const { Client } = require('pg')

// const client = new Client(process.env.DATABASE_URL)

// client.connect()

var first;
var last;
var healthCard;
var postal;

function nextPage() {
    first = document.getElementById('first').value;
    last = document.getElementById('last').value;
    healthCard = document.getElementById('healthCard').value;
    postal = document.getElementById('postal').value;
    // console.log(first)
    // FIND WAY to navigate to next page...
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




// var username = document.getElementById("username");
// var pass = document.getElementById("pass");
// pass.onfocus = function () {
//     if (pass.value == "ENTER PASSWORD") {
//         pass.value = "";
//     }
// };
// username.onfocus = function () {
//     if (this.value == "ENTER USERNAME") {
//         this.value = "";
//     }
// };
// pass.onblur = function () {
//     if (this.value == "") {
//         pass.value = "ENTER PASSWORD";
//     }
// };
// username.onblur = function () {
//     if (this.value == "") {
//         this.value = "ENTER USERNAME";
//     }
// };
