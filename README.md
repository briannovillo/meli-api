# REST API Mercadolibre

Url productiva: https://xcemt4j6ui.execute-api.us-east-1.amazonaws.com/prd/api/items?q=computacion \
\
Documentación de la API: https://briannovillo.github.io/meli-api/

### Esta API es un wrapper de los servicios expuestos en la [Api de productos de Mercadolibre](https://developers.mercadolibre.com.ar/es_ar/usuarios-y-aplicaciones/items-y-busquedas), la misma realiza algunas adaptaciones y devuelve los datos como los espera el modelo de la [App de front](https://github.com/briannovillo/meli-front/) 

#### Cosas que se tuvieron en cuenta al hacer esta app (y algunas que me hubiera gustado implementar pero quedaron en el tintero por falta de tiempo)

- [x] Se usó *Typescript* para hacer la API mas predecible durante el desarrollo, dado que se puede ver en todo momento de que tipo de dato son los argumentos que esperan y devuelven las funciones y asi prevenir errores en tiempo de ejecución
- [x] *Express* como motor de routing y middleware porque se requería en el documento de especificación
- [x] Se deployó el proyecto con *Serverless*, el mismo se usa tanto en local durante el desarrollo con [serverless offline](https://github.com/dherault/serverless-offline), como en produccion como una funcion lambda de AWS bajo un Api Gateway
- [x] Se configuró *CircleCI* para que cada vez que se crea una release de Github se corran los tests y se haga deploy del Lambda en producción, al tener este proceso simplificado se puede tener delivery continuo en prod. Además se corren los tests en cada branch al hacer push en git.
- [x] Se agregó *Apidoc* para mantener documentados con comentarios todos los recursos de la API
- [x] El proyecto cuenta tambien con *ESLint* para mantener la consistencia en el formato del código aunque desarrollen equipos de muchas personas.
- [x] La aplicación cuenta con algunos tests hechos con *mocha/chai*
- [ ] Agregar *Morgan+Winston* como Logger remoto
- [ ] Agregar badge de Github de code coverage

#### Para iniciar el proyecto en un entorno local

1. Clonar repositorio e instalar dependencias
```
git clone https://github.com/briannovillo/meli-api.git
npm install
```

2. Correr el server con hot reloading
```
npm run dev
```

#### Otros comandos útiles

* Si actualizamos la doc dentro del router deberemos correr el siguiente comando y hacer commit de los archivos actualizados dentro de la carpeta /docs
```
npm run apidoc
```

* Si se tienen las keys y token de AWS se puede realizar un hotfix en producción con el siguiente comando
```
npm run deploy:prd
```

* Correr tests
```
npm run test
```


