# practice with node js sequelize postgres docker
*introduccion*
- `mkdir v1.00`

*instalacion*
- `npm init -y`
- `npm i express pg sequelize`

*code*
- `mkdir src > touch index.js`
- `index.js`
```js
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true});
app.use((req,res,next)=>{
		res.setHeader('Access-Control-Allow-Origin','*');
		res.setHeader('Access-Control-Allow-Methods','GET','PUT','DELETE','POST');
		next();
});

try{
	app.listen(process.env.EXTERNAL_PORT || 3001)
}catch (error){
	console.log(error)
}

```
- now `mkdir controllers routes models utils`
- `cd routes touch dev.js`
- in `dev.js`
```js
const controllers = require('../controllers/dev');
const router = require('express').Router();

router.get('/version',controllers.version);

module.exports = router;
```
- `cd controllers touch dev.js`
- `dev.js`
```js
exports.version = (req,res,next)=>{
			return res.status(200).json("hello")
}
```
- go to `index.js`
```diff
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true});
app.use((req,res,next)=>{
		res.setHeader('Access-Control-Allow-Origin','*');
		res.setHeader('Access-Control-Allow-Methods','GET','PUT','DELETE','POST');
		next();
});

+	app.use('/dev',require('./routes/dev'));

try{
+	console.log(`
+			server on
+			http://localhost:3001/dev/services {GET:on}
	app.listen(process.env.EXTERNAL_PORT || 3001)
}catch (error){
	console.log(error)
}


```
- Esto ya deberia correr en port 3001
- Ahora creamos el dockerFile
- Go to cd v1.00 and create `touch Dockerfile`
- `Dockerfile`
```Dockerfile
FROM node:14

EXPOSE 3001

WORKDIR /src

RUN npm install i npm@latest -g

COPY package.json package-lock*.json ./

RUN npm install

COPY . .

CMD ["node","src/index.js"]
```
- ignoramos el node_modules con .dockerignore
- `touch .dockerignore`
```bash
node_modules

```
- en la terminal construimos la imagen parados en la carpeta donde esta el 
Dockerfile `docker build -t v1.00 .`



