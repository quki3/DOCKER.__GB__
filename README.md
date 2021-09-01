# DOCKER.__GB__
# Docker Client
 Docker CLI
```bash
docker login //? nos logeamos con la cuenta de dockerhub
docker loguot //? nos deslogueamos
docker run //? crea un contenedor y lo ejecuta
docker run hello-word //corre un contenedor de docker que exista en el repositorio de docker hub
docker run ubuntu //? corre ubuntu con docker
docker run -it ubuntu
docker run --name alwaysup -d ubuntu tail -f /dev/null //? corre ubuntu -d hace correr en bockground el contenedor
docker exec -it alwayup bash //? esto nos deja interactuar con el contenedor alwayup de ubuntu
docker inspect --format `{{.State.Pid}}` alwaysup //? me da el id de la maquina nativa
kill iddelamaquinanativa //? matamos el proceso esto va a funcionar solo en una maquina de linux
docker rm -f nombredelcontenedorqueestacorriendo //? frena y borra el proceso
docker run -d --name proxy nginx //? corre el contenedor publico de nginx
docker stop nombredelcontenedor //? frena el proceso 
docker run -d --name proxy -p 8080:80 nginx //? - p es de publish o de port le pasamos el puerto de nuestra maquina : el puerto del contenedor
docker logs nombredelcontenedor //? vamos a ver todos los log de las peticiones que hacemos y en el caso que el contenedor no este corriendo por algun problema nos mostrara una posible rason
docker logs -f nombredelcontenedorcorriendo //? -f de follow  esto se queda escuchando 
docker logs --tail 10 -f nombredelcontenadorcorriendo //? va a escuchar las ultimas banderas 
docker ps //? nos muestra los contenedores corriendo 
docker ps -a //? nos muestra los que coorieron y ya se apagaron
docker inspect conteinerID //? podemos ver iinfo de como el contenedor esta configurado
docker run --name hello-gabi hello-world //? nombra un contenedor 
docker rename hello-gabi hola-gabi //? renombra a un contenedor
docker rm nobredelcontenedor //? elimina 
docker container prune //? elimina todos los container apagados

docker pull
client.containers.run
client.containers.run
```
## conectar datos de mi maquina a un contenedor
```bash
docker run -d --name db mongo //? esto va a correr en el background mongo 5.0 nesecita core i3 en adelante 
docker exec -it db bash //? nos permite intereactuar 
mongo //? este biene con el contenedor lo vamos a usar para cear una base de datos'
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
```
 # Docker rest/api
 ```bash
 
 ```
 # Docker deamon
 ```bash
 
 ```
