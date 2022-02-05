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
FROM node:12-alpine	/*le dice la version de node que usamos*/

WORKDIR /src		/*en la ruta /src del contenedor*/

COPY package.json package-lock*.json ./ 	/*copiamos los package*/

RUN npm install		/*instalamos*/

COPY . .	/*copiamos todas las carpetas de . a . de docker*/

CMD ["node","src/index.js"]	/*lo que queremos que corra cuando levantemos el contenedor*/
```
- ignoramos el node_modules con .dockerignore
- `touch .dockerignore`
```bash
node_modules

```
- en la terminal construimos la imagen parados en la carpeta donde esta el 
Dockerfile `docker build -t v1.00 .`
- en la terminal levantamos el contenedor `docker run -p 3001:30001 v1.00`
- `Ctrl c` para parar el contenedor o `docker stop nameofconteiner o idconteiner`
- usando docker-compose.yml
- in `cd v1.00` `touch docker-compose.yml`
```docker
/*version del compose schema*/
version:
	"3.7"
/*next,we'll define the list of services or conteiners we want to run as part of our aplication*/
services:
	src:
		container_name:
			v1.00
		image:
			v1.00:docker-compose
		build:
			context: .
		ports:
			- "3001:3001"
		environment:
			- EXTERNAL_PORT=3001
```
- run in terminal `docker-compose build`
- run in terminal `docker-compose up` levanta el contenedor
