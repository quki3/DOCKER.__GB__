const express = require('express');
const app = express();
const routes = require('./routes/dev');
app.use(express.json());			/*lee json*/
app.use(express.urlencoded({extended:true}));	/*lee json put post*/

app.use((req,res,next)=>{
	res.setHeader('Access-Control-Allow-Origin','*');	/*cors*/
	res.setHeader('Access-Control-allow-Methods','POST','PUT','GET','DELETE');/*cors*/
	next();
});

console.log('# error 2 require a function',typeof routes);
app.use('/dev',routes);

try{
	console.log(`
	# server ON 
	http://localhost:3001/dev/services GET ON `);
	app.listen(process.env.EXTERNAL_PORT || 3001);
}catch (error){
	console.error(error)
}
