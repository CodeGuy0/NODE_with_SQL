const { faker } = require("@faker-js/faker");
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Pranay@21'
});


let getRandomUser = () => {
    return [
      faker.string.uuid(),
      faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password(),
    ];
};


//INSERTING NEW DATA

let q = "INSERT INTO user (id, username, email, password) VALUES ?";

// let user = ["123", "123_newuser", "abc@gmail.com", "abc" ];

//    let users = [
//     ["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
//     ["123c", "123_newuserc", "abc@gmail.comc", "abcc"]
//    ];

// INSERT IN BULK

let data = [];
for (let i=1; i<=100; i++){
    data.push(getRandomUser()); // 100 fake users
}

try {
    connection.query(q, [data], (err, result) => {
        if (err) throw err;
        console.log(result);
    })
} catch (err) {
    console.log(err);
}

connection.end();




