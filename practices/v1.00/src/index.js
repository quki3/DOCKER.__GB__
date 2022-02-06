const express = require('express');
const app = express();
const routesDev = require('./routes/dev');
const routesUsers = require('./routes/users');
const sequelize = require('./utils/db.js');
const User = require('./models/users.js');


app.use(express.json());			/*lee json*/
app.use(express.urlencoded({extended:true}));	/*lee json put post*/

app.use((req,res,next)=>{
	res.setHeader('Access-Control-Allow-Origin','*');	/*cors*/
	res.setHeader('Access-Control-allow-Methods','POST','PUT','GET','DELETE');/*cors*/
	next();
});

app.use('/dev',routesDev);
app.use('/users',routesUsers);

( async ()=>{
try{

	console.log(`
	# server ON 
	http://localhost:3001/dev/services GET ON
	http://localhost:3001/users GET OFF`);
	app.listen(3001);
}catch (error){
	console.error(error)
}
})()
