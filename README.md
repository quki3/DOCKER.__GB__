# DOCKER.__GB__
borrar gabrielbrufau borrar gabrielbrufau borrar gabrielbrufau borrar
*introduccion*
docker permite contruir , distribuir, ejecutar cualquier aplicacion en
cualquier lado mediante la virtualizacion
- Docker usa contenedores para construir y desplegar sofware
- reutilizan el kernel del sistema operativo
- contenedor es una maquina virtual mas liviana esta aislada 

*instalacion*
- `Docker.com/get-started`>donwload
- crear una cuenta en docker hub

*estructura de docker*
```bash
server docker daemon`los servicios de docker maneja todas las entidaddes
interactua con el sistema operativo`
        ->rest api`como cualquier rest api pero es de docker`
            ->client docker CLI `el bash que biene por default tambien
	    podemos instalar clientes en node python go etc que se 
	    comuniquen con la res api de docker `
                ->CLI `maneja`  >docker`el corazon`
                                >images`empaqueta codigo`
                                >data volumenes `la forma en que docker
				nos permite acceder con seguridad al
				sistema de archivos de la maquina
				anfitriona o servidores`
                                >network`permite comunicarse entre
				contenedores o con el mundo exterior`
```
# Docker Client
 Docker CLI
 *codigo de salida*
`status (0) todo salio bien`

```bash

docker --version `nos da la version`

docker build -t nameofimagenquevamosacrear contectodebuild

docker cp archivoquequeremoscopiar nombredelcontenedor:/carpetadentro
delcontenedor/dondelovamosaguardar.ejm  ``
docker-compose up `levanta los contenedores y los conecta`
docker-compose up -d `los corre en background`

docker login //? nos logeamos con la cuenta de dockerhub
docker loguot //? nos deslogueamos

docker rm -f nombredelcontenedorqueestacorriendo `frena y borra el proceso`
docker run --rm ` crea un contenedor y lo ejecuta y lo elimina cuando
lo apaguemos`
docker run --rm -p 3000:3000 nombredelaimagen `-p publicamos
el puerto expuesto al local corre ubuntu -d hace correr en
bockground el contenedor`
docker run --name nombredelconteiner -d ubuntu tail -f /dev/null `tail -f
algunComando nos permite correr un comando luego de levantar el contenedor `

docker exec -it nombredelcontenedor bash `it esto nos deja interactuar
con el contenedor`

docker inspect --format `{{.State.Pid}}` alwaysup ` me da el id de la
maquina nativa`
docker image ls `muestra las imagenes`
docker pull imagen:00.00 `pull (traemos), imagen(algunaimagen de docker
hub), 00.00 (version de la imagen)`


kill iddelamaquinanativa ` matamos el proceso esto va a funcionar solo en
una maquina de linux`

docker stop nombredelcontenedor //? frena el proceso 

docker logs nombredelcontenedor `vamos a ver todos los log de las peticiones
que hacemos y en el caso que el contenedor no este corriendo por algun
problema nos mostrara una posible razon`
docker logs -f nombredelcontenedorcorriendo `-f de follow  esto se queda
escuchando` 
docker logs --tail 10 -f nombredelcontenadorcorriendo `va a escuchar las
ultimas banderas`

docker ps ` Nos muestra los contenedores corriendo `
docker ps -a `Nos muestra los que coorieron y ya se apagaron`
docker ps -aux `muestra todo lo que esta corriendo en el contenedor
tambien se puede usar sin docker`
docker container prune `Elimina todos los container apagados`
docker push nameofUserDockerHub/nameimg:nameversion `push a tu
cuenta de docker hub una img`

docker history namaOfimg:nameOrnumVersion `muestra una especie
de dockerfile`

docker info `nos da info de docker`
docker inspect conteinerID `Podemos ver info de como el
contenedor esta configurado`
docker inspect loquequeramosinspect `info de lo que queramos`

docker network ls `muestra las redes`
docker network create newnamenet `crea una nueva red`
docker network create --attachable newnamenet `-- attachable
permite que otros contenedores se puedan conectar a ella cuando quieran`
docker network inspect namenet `info de la network`
docker network connect namenet nameconteinerrun `namenet (la red a conectar)
nameconteinerrun (el contenedor que se va a conectar a la red)`

docker rm -f nombredelcontenedorqueestacorriendo `frena y borra el proceso`
docker run --rm ` crea un contenedor y lo ejecuta y lo elimina cuando
lo apaguemos`
docker run --rm -p 3000:3000 nombredelaimagen `-p publicamos
el puerto expuesto al local corre ubuntu -d hace correr en
bockground el contenedor`
docker run --name alwaysup -d ubuntu tail -f /dev/null `tail -f
algunComando nos permite correr un comando luego de levantar el contenedor `
docker run `Crea un contenedor y lo ejecuta`
docker rm $(docker ps -aq)` elimina todo la lista`
docker run -d --name proxy nginx ` -d detach no vincula input con output lo
hace correr en bacground) corre el contenedor publico de nginx`
docker run -d --name proxy -p 8080:80 nginx ` - p es de publish o de port
le pasamos el puerto de nuestra maquina : el puerto del contenedor`
docker run --name hello-gabi hello-world` nombra un contenedor `
docker rename hello-gabi hola-gabi `Renombra a un contenedor`
docker rm nobredelcontenedor //? elimina 
docker rmi $(docker images -aq) //? elimina las imagenes
docker rm -f nombredelcontenedorqueestacorriendo `frena y borra el proceso`
docker run --rm ` crea un contenedor y lo ejecuta y lo elimina cuando

docker tag nombredelaimagen:versiondelaimg nameofuserDockerhub/newnameimg:newversion `
ahora podemos hacer push hemos cambiado la titularidad de esa imagen`

docker volume create nombredelvolume `crea un volumen`
docker volume ls `muestra los volumen`
docker run -d --name nombredelvolumen --mount src=nombredekvolumen,
dst=/verdondemongo/guardadata mongo 
`src=nombredb(especificar la fuente que queremos montar es decir
que queremos que este disponible para el contenedor que vamos a correr)
dst=/verdonde/mongogurdaddata(especificar el destino)`

docker pull
client.containers.run
client.containers.run
```
*conectar datos de mi maquina a un contenedor*

- `docker run -d --name nombredeladb mongo`esto va a correr en el background
mongo 5.0 nesecita core i3 en adelante

- `docker exec -it nombredeladbdb bash` nos permite intereactuar

- `mongo` es un comando que biene con el contenedor de mongo te permite
conectarte a la base de datos

- `show nombredelanasededatos` muestra las base de datos
- `use nombredelanewbasededatos` crea una base de datos
- `db.users.insert({"nombre":"guido"})` le insertamo un dato
- `exit` salimos de la consola
- `docker rm -f db` removemos el contenedor (en este punto los datos que
antes habiamos creado con mongo se perdieron cuando removimos el contenedor)
(para conservar los datos creados con el contenedor de mongo debemos usar
lo que se conose como maquina/version espejada)

- hacemos esta maquina/version espejada usando bymount
- `mkdir nombredelacarpeta` creamos un directorio
- `pwd` copiamos la direccion de el directorio que creamos para usarlo
en el run
- `docker run -d ---name db -v /direccion/deldirecctorio/namedirectoriocreado:
/verdondemongo/guardaladata mongo`
(lo que va a la isquierda de los dos puntos el la direccion en mi maquina
y lo que va a estar a la derecha es la ruta dentro del contenedor)
-v especifica un bind mound (ahora si generamos data dentro de mongo se
quedara espejada en el directorio que creamos)

*manejar datos con bymount creando un volumen en vez de un directorio*

- `docker volume ls` vemos los vulumenes de docker
- `docker volume create nombredelvulumen` creamos un volume
- `docker run -d --name db --mount src=nombredelvolume,dst=/data/db mongo`
--mount se usa para montar un volume.
src=dbdata es la ruta del volumen supongo, 
dst=/data/db el destino del volumen
(esto es mas seguro ya que no hay un directorio. solo podemos entrar a ver
o editar la data corriendo docker) 


**Introducir y sacar archivos a un contenedor**

- `touch introducirArchivo.txt` creamos un archivo
- `docker run -d --name nombredelcontainer ubuntu tail -f /dev/null` corre en
background 
- `docker cp nombredelarchivoquequeremoscopiar nombredelcontenedor:/direccion
delacarpetadentrodelcontainer/nombredelarchivoquelevamosadar.ejm` copia un archivo
y lo guarda en un contenedor
- `docker cp namecontainer:/namedirInConteiner NewnameInDirLocal` esto es 
en viseversa

** Docker image**<br/>
*crear una imagen*
- una imagen es un conjunto de capas ordenadas
- una imagen es un package de software empaquetada que tiene todo lo
necesario para que un contenedor se ejecute, dependencias codigo
herramientas etc.

- `mkdir nombredelacarpeta/Dockerfile` creamos una carpeta y el 
archivo Dockerfile
- todo lo que escribamos en el docker file se ejecuta en tiempo 
de build

```dockerfile
//dentro del Dockerfile colocamos

//todos los Dockerfile cominezan con un from quiere decir que 
//vamos a pertir de algo mas puede ser node ubuntu lo que sea
FROM nombredelaimagen:numeroOnombredelaversion

//en run va lo que queremos correr lo que hace es crear un
//archivo ejem.txt dentro de los archivos del contenedor
RUN touch /name/of/dir/ejem.txt
```
- Vamos a bash para correr build
```bash
- `docker build -t nombredetag:nombredeversion .` -t es de tag
(version que le doy)es decir el tag que le doy. el . es el contecto
que va a usar build para construir
este comando buil creo la imagen
```

**como construir con docker**
- supongamos que tenemos un proyecto con la siguiente estructura
```bash
build
test
.dockerignore
.gitignore
docker-compose.yml
Dockerfile
index.js
LICENSE
package-lock.json
package.json
README.md
```
- Dentro de docker file pondriamos algo como lo siguiente
va a estar mal estructurado pero sirvira
```Dockerfile
//traemos la libreria que vamos a usar
FROM node:12

/*COPY["desdedondequeremosEmpezaracopiarel"."indicaDesdedondeEsta
Paradoeldockerfile","adondeloqueremoscopiarenelcontenedor"]*/
COPY [".","/usr/src/"] `copi todo lo que hay en este directorio(.) a la ruta /usr/src/ del contenedore`

/*para movernos a la carpeta creada e instalar*/
WORKDIR /usr/src `en este acrchivo va a istallar`

RUN npm install `instala todo lo que hay en package.json`

/*para permitir que un puerto sea bindeable en la maquina uespped*/
EXPOSE 3000 //? expone el puerto 3000 para que pueda ser usado desde el contenedor

CMD ["node","index.js"]  //? definimos el comando por defecto que va a ejecutarce
cuando corramos el contenedor si no especificamos nada
/*otra forma mas informal de escribir lo mismo*/
CMD node index.js
```
- una ves editado el archivo vamos al bash y creamos la image
- `docker build -t newnameofimg .` newnameofimg (es el name que le vamos a dar)
. (es el contecto desde donde vamos a construir la img)

- `docker run --rm -p 3000:3000 nameofimg`
-p 3000:3000 (el puerto 3000 del contenedor va a estar expuesto en el 
puerto 3000 de mi maquina)
--rm (cuando el contenedor se detenga lo borra)

-estructuremos mejor el dockerfile cap 20.

```bash
FROM node:14

COPY ["package.json","package-lock.json","/usr/src/"]

WORKDIR /usr/src

RUN npm install

COPY [".", "/usr/src/"]

EXPOSE 3000

CMD ["node", "index.js"]

```
- optimizar el entorno de desarrollo configurando el CMD de Dockerfile
para no tener que buildear cada vez que cambiemos algo montando solo un
archivo
```bash
CMD ["npx","nodemon","index.js"]
```
- `docker build -t newnameofimg .`
- corremos la image
- `docker run --rm -p 3000:3000 -v /dircciondeldirectoriodelproyecto/con
eldockerfile/index.js:/dir/indocker/index.js nameimg`
 
**conectar un contenedor de node con un contenedor de mongo,mysql,etc sin
docker compose**
- la manera que nos da mongo es con redes virtuales o redes docker
(docker networ)
- `docker network create --attachable newnamenet` creamos la network
- `docker run -d --name newnamedb mongo` corremos un contenedor de docker 
- `docker network connect namenet namedbdocker` conectamos el contenedor
a la red
- corremos un contenedor que se conecte a esa red donde ya esta conectado
la base de datos (db)
- `docker run --name newApp -p 3000:3000 --env NOMBREDEVARIABLE_URL=mon
go://hostnamedelamaquinadondeestamongo:numport/nameschema nameimag
eproyecto` --env leasigna una nueva variable de entorno a este contenedor) 
mongo:// es el parametro que es el protocolo  de mongo
hostnamedelamaquinadondeestamongo:numeroport/namebasededatosschema
este puede encontrarse si las dos maquinas estan conctadas a la misma
red como sus nombres en este caso es namedb:27017/ejm
- conectamos nameimgproyecto a la network para que se vean con la db antes conectada
- `docker network connect namenet nameimgproyecto`

*usando docker-compose-yml*
- tener en cuenta el tabulado ya que se considera sintaxis
- si miramos el archivo vemos
```bash
/*comiensa con la version del composefile*/
version:"3.8"

/*los distintos componentes que tiene nuesta app estan dentro de services*/
services:
	app:
	/*nameimagenproyecto*/
		image:nameimagenproyect
	/*--env */
			environment:
	    			MONGO_URL:"mongodb://hostdb:27017/schema"
	/*el servicio db nesecita ser levantado antes que app*/
		depends_on:
	    		- db
	/* -p */
		ports:
	    		- "3000:3000"
	

	db:
			image:mongo

```
- configurado esto vamos al bash siempre dentro de la carpeta raiz del pro
yecto dende esta el cocker-compose y corremos
- `docker-compose up -d` levanta los contenedores y los connecta en background





