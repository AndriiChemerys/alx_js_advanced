###############################################################
DAY 4 - 2022-04-03
###############################################################

package.json for P6

{
"name": "project_06-express_js",
"version": "1.0.0",
"description": "",
"main": "index.js",
################
"type": "module",
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
##########################
"start": "nodemon server.js"
},
"author": "",
"license": "ISC",
"dependencies": {
"express": "^4.17.3",
"nodemon": "^2.0.15"
}
}

---

ES lint config:

npm install eslint --save-dev
npm init @eslint/config

https://eslint.org/docs/user-guide/getting-started

---

NodeJS

FS:
https://nodejs.org/api/fs.html

/////////////////////
// With callback domyslny sposob obslugi node js:

// fs.readFile("./data/hello.txt", "utf8", (error, data) => {
// if (error) {
// console.log(error);
// return;
// }

// fs.writeFile("./data/hello2.txt", data, "utf8", (error2, data2) => {
// if (error2) {
// console.log(error2);
// return;
// }
// console.log("success!");
// });
// console.log(data);
// });
/////////////////////

---

Express JS generator

npx express-generator .
