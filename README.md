# mdlinks
La herramienta mdlinks permite revisar los links dentro de un archivo .md para conocer el detalle de los mismos, el estatus y la cantidad de los mismos.

## Instalación 🔧

### Uso
Abre la terminal o shell de tu computadora. Ingresa al repositorio donde deseas correr la librería.
Instala la librería usando kfnifdh
Para ejecutar ingresa en la consola el comando (para conocer los links dentro del los archivos .md que encuentre en esa ubicación) ```sh mdlinks get-links  o mdlinks gl ```

#### Opciones

1. Si deseas acceder a un archivo específico ingresa
```sh
mdlinks validate-md <archivo>  o
mdlinks validate-md <carpeta/archivo>  o
mdlinks vm <dirección>
```
2. Para validar los links del archivo ingresa (muestra el estatus de los linka)
```sh
mdlinks validate o
mdlinks v
```
3. Para conocer la cantidad de links y cuántos de ellos son únicos ingresa
```sh
mdlinks stats o
mdlinks s
```
4. También puedes combinar las opciones validate y stats para conocer cuantos de los link estan rotos  
```sh
mdlinks validateStats o
mdlinks vS
```

## Documentación tecnica 🛠️
* [colors](https://www.npmjs.com/package/colors)
* [commander](https://www.npmjs.com/package/commander)
* [eslint](https://eslint.org/docs/user-guide/getting-started)
* [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)
* htmlhint    
* [jest](https://jestjs.io/)
* [link](https://docs.npmjs.com/cli/link.html)
* [node-fetch](https://www.npmjs.com/package/node-fetch)

## Versionado 📌
Version: 1.0.0
## Autor ✒️
María Elena Hernández Payán - Master
