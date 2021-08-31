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
docker logs nombredelcontenedor //? vamos a ver todos los log de las peticiones que hacemos
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

```
 # Docker rest/api
 ```bash
 
 ```
 # Docker deamon
 ```bash
 
 ```
