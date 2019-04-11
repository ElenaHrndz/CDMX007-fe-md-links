# mdlinks
La herramienta mdlinks permite revisar los links dentro de un archivo .md para conocer el detalle de los mismos, el estatus y la cantidad de los mismos.

![diagrama](https://lh3.googleusercontent.com/2sGbPnklXXNOaoXAvWWHz67E5B_IxGDGUDwQpm3bEOGzRo-B6r8vUSKicSBao5J99CfyB29JyWQNmjbm8r6uUceWKrHfA8N4fMZFoiZ4MCSVzmbYuUXdLoZS2YJ9KdA3-lnD0XaGWepVpapKlu6Rb3OEA0xhiSVqPn6cRo5pDyS778h3eTRvwvfYa02xomKIiIu2KtVspO1r1jHPW2ngrBPQtlH-lUQh3Xak33u7gTzh_fAMM9TRka-_UVAwM87r-ZgZuEcL5GZEnNoOm3B2phx8vO2Wi_uDQ-VHdxkD3Pqfrof-8Lc-W8RgdtyqNDPpcv519fW0VF4TLtBTmHteIF79rSt6HKRVm2Ieh6UQjFCTBkUoF7UOTq6cRRpx4k94LTHAbCRHD8huZ68zWzqGmLlf1kJGcblhFXAxy7ypuX0weATEnRQNh_233QX4hhWIbJ7pjFuwuqcE-mJAjVUoYE9GdpFiJYXALDDayM2uxn8OSEebotXupyGTKZdBc2ijziALOWBg-WE2CBOqcYf6njHtt9SMEakdOVf2wqNkNWvhWdi8lmi1QTBpH9A7KFKk18P69YJmjgxQTD5yz_7eduwFhsP0CwdDUeN97uBHFQNBm9rl8vE1fVB74ox_Z7-Ld4GzInh25mLXjxC86LHNkSdzZrfe_HZP=w594-h944-no)

## Instalación 🔧

### Uso
Abre la terminal o shell de tu computadora. Ingresa al repositorio donde deseas correr la librería.
Instala la librería usando ```npm i mdlinks-finder```
Para ejecutar ingresa en la consola el comando (para conocer los links dentro del los archivos .md que encuentre en esa ubicación)
```sh
mdlinks get-links o
mdlinks gl
```

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
