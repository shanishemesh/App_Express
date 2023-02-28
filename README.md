# App express 

## Introduction:
In this application you can create a tab about yourself.

It can be used for all kinds of needs:
- [x]  **Personal use:** create a card about yourself.
- [x]  **Business use:** The site can be used for slave registration and tracking.
Cards can be deleted and updated accordingly.


#### **for Example:**
You want to keep track of the list of employees in your department.

You can enter the details of each employee and their role, you can edit if necessary and delete when the job is no longer relevant.


## How to start 

required: nodejs v18

#### step 1:
unzip the `App_Express.zip`.

#### step 2:
open new terminal or cmd inside your project folder and type this command `npm i` or `npm install` ,it will install all the packages & dependencies.

#### step 3:
create a database in your mysql workbench or server (whatever you use).
Or you can take the existing information in database_app.sql file and put it in your mysql.

#### step 4:
open & edit `database.js` file and in this part :
```javascript
let  hostname  =  ""; // put mysql hostname. eg: localhost
let  database  =  ""; // paste the database name you created recently.
let  username  =  ""; // mysql database username.
let  password  =  ""; // mysql database password.
```

Enter the details of your mysql system.

#### step 5:
if you are using windows operating system then run this command `npm run dev` or `npm start` but if you run the server using `npm run dev` it will continuously restart the server whenever you make any changes in the code.

but sometimes `npm run dev`  or `npm start` ot work on several operating system.

In this case you have to install the `nodemon` package globally on your system by using this command windows: `npm i -g nodemon`

**linux or mac:** `sudo npm i -g nodemon`

Then start your server `nodemon server.js`
then open your browser and visit at this **url:** `http://localhost:3000` (its default url)
if port `300` is not available is your system then it will use different port number!

#### note:
after run the server sequelize will automatically create table in your database.


## 🔗 Links:
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shani-shemesh-547396242)
