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

docker login //? nos logeamos con la cuenta de dockerhub
docker loguot //? nos deslogueamos

docker run --rm ` crea un contenedor y lo ejecuta y lo elimina cuando
lo apaguemos`
docker run --rm -p 3000:3000 nombredelaimagen `-p publicamos
el puerto expuesto al local corre ubuntu -d hace correr en
bockground el contenedor`
docker run --name alwaysup -d ubuntu tail -f /dev/null `tail -f
algunComando nos permite correr un comando luego de levantar el contenedor `

docker exec -it alwayup bash`it esto nos deja interactuar
con el contenedor alwayup de ubuntu`
docker inspect --format `{{.State.Pid}}` alwaysup //? me da el id de la maquina nativa
kill iddelamaquinanativa //? matamos el proceso esto va a funcionar solo en una maquina de linux
docker rm -f nombredelcontenedorqueestacorriendo //? frena y borra el proceso

docker stop nombredelcontenedor //? frena el proceso 

docker logs nombredelcontenedor //? vamos a ver todos los log de las peticiones que hacemos y en el caso que el contenedor no este corriendo por algun problema nos mostrara una posible rason
docker logs -f nombredelcontenedorcorriendo //? -f de follow  esto se queda escuchando 
docker logs --tail 10 -f nombredelcontenadorcorriendo //? va a escuchar las ultimas banderas 
docker ps ` Nos muestra los contenedores corriendo `
docker ps -a `Nos muestra los que coorieron y ya se apagaron`
docker ps -aux `muestra todo lo que esta corriendo en el contenedor tambien se puede usar sin docker`

docker info `nos da info de docker`
docker inspect conteinerID `Podemos ver info de como el
contenedor esta configurado`

docker run `Crea un contenedor y lo ejecuta`
docker rm $(docker ps -aq) //? elimina todo la lista
docker run -d --name proxy nginx //? corre el contenedor publico de nginx
docker run -d --name proxy -p 8080:80 nginx //? - p es de publish o de port le pasamos el puerto de nuestra maquina : el puerto del contenedor
docker run --name hello-gabi hello-world` nombra un
 contenedor `
docker rename hello-gabi hola-gabi `Renombra a un contenedor`
docker rm nobredelcontenedor //? elimina 
docker rmi $(docker images -aq) //? elimina las imagenes
docker container prune `Elimina todos los container apagados`

docker pull
client.containers.run
client.containers.run
```
## conectar datos de mi maquina a un contenedor
```bash
docker run -d --name nombredeladb mongo //? esto va a correr en el background mongo 5.0 nesecita core i3 en adelante 
docker exec -it nombredeladbdb bash //? nos permite intereactuar 
docker exec -it nombredelaimagenmsql mysql -p //? entramos en msql si ya temenos rodando una imagen de docker de msql
mongo //? este biene con el contenedor lo vamos a usar para cear una base de datos
use nombredelanewbasededatos //? crea una base de datos
db.users.insert({"nombre":"guido"})//? le insertamo un dato
exit //? salimos de la consola
docker rm -f db //? removemos el contenedor (en este punto los datos que antes habiamos creado con mongo se perdieron cuando removimos el contenedor)
(para conservar los datos creados con el contenedor de mongo debemos usar lo que se conose como maquina espejada)
HACIEDO ESTA MAQUINA ESPEJADA
mkdir mongodata //? creamos un directorio
pwd //? copiamos la direccion de el directorio que crceamos para usarlo en el run
docker run -d ---name db -v /direccion/deldirecctorio/creado:/data/db mongo //? -v especifica un bind mound 
(ahora si generamos data dentro de mongo se quedara espejada en el directorio que ceamos)
HACIENDO LO MISMO CON MOUNT CREANDO UN VOLUMEN EN VES DE UN DIRECTORIO
docker volume ls //? vemos los vulomenes de docker
docker volume create dbdata //? creamos un volume
docker run -d --name db --mount src=dbdata, dst=/data/db mongo //? --mount se usa para montar un volume. src=dbdata es la ruta del volumen supongo, dst=/data/db el destino del volumen
(esto es mas seguro ya que no hay un directorio solo  podemos entrar a ver o editar la data corriendo docker)
 docker cp archivoquequeremoscopiar nombredelcontenedor:/direcciondelacarpeta/nuevonombredelarchivo //copiar un archibo de local dentro de un contenedor usamos
 docker cp nombredelcontenedor:/nombredelacarpetaenelcontenedor nombredelacarpetalocal //esto es en viseveresa
```
# Docker image
una imagen es un package de software empaquetada que tiene tdo lo neecesario para que un contenedor se ejecute ,dependencias codigo herramientas etc.
```bash
docker image ls //muestra las imagenes 
docker pull nombredelaimagen:version//trae una imagen a tu maquina
docker history nombredelaimagen //se ven las capas
```
para crear una imagen se parte de un docker file
de una imagen podemos generar infinitos contenedores
```dockerfile
FROM ubuntu:latest

RUN touch /usr/src/hola.txt
```
->vamos a bash para correr build
```bash
docker build -t nombredetag:nombredeversion . //? -t es de tag es decir el tag que le doy. el . es el contecto que va a usar build para construir
```
->ahora necesitamos cambiarle las credenciales 
```bash
docker tag nombredetag:nombredeversion usuariodedockerhub/nombredetag:nombredeversion //tag es para cambiarle el tag
```
# como construir con docker
```Dockerfile
FROM node:12

COPY [".","/usr/src/"]  //?copi todo lo que hay en este directorio(.) a la ruta /usr/src/ del contenedor

WORKDIR /usr/src //?en este acrchivo va a istallar

RUN npm install //?instala todo lo que hay en package.json

EXPOSE 3000 //? expone el puerto 3000 para que pueda ser usado desde el contenedor

CMD ["node","index.js"]  //? definimos el comando por defecto que va a ejecutarce cuando corramos el contenedor
CMD node inedx.js
```

 # Docker rest/api
 ```bash
 
 ```
 # Docker deamon
 ```bash
 
 ```

 
