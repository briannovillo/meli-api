**CircleCi Build status:** [![CircleCI](https://circleci.com/gh/briannovillo/meli-api/tree/master.svg?style=svg)](https://circleci.com/gh/briannovillo/meli-api/tree/master)



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

Estructura del proyecto

```
meli-api
├── config
│   ├── custom-environment-variables.json --> Disponibiliza configs que se pueden sobreescribir con variables de entorno
│   └── default.json --> Variables de entorno por defecto
├── dist --> Archivos compilados de la app con babel y webpack
├── docs --> Documentacion de apidoc
├── package.json --> Lista las dependencias y comandos disponibles de npm
├── package-lock.json --> Versiones estatificadas de las dependencias npm
├── README.md --> Info del proyecto
├── serverless.yml --> Archivo para crear la infraestructura en AWS de Lambda + Api Gateway
├── src
│   ├── controllers
│   │   └── product
│   │       ├── MeliDataProvider.ts --> Funciones que hacen los fetch al provider MELI
│   │       └── ProductController.ts --> Mapea la respuesta de la Api de Mercadolibre a un modelo propio
│   ├── middlewares
│   │   ├── common.ts --> Middlewares basicos para capturar el body, usar compresion, etc
│   │   └── index.ts --> Exporta los middlewares dentro de common
│   ├── models
│   │   └── ProductAPI.ts --> Clases e interfaces necesarias para crear las respuestas de esta Api
│   ├── routes
│   │   ├── index.ts --> Exporta todas las rutas de las subcarpetas listadas abajo
│   │   └── product
│   │       └── routes.ts --> Rutas relacionadas con productos
│   ├── server.ts --> Archivo inicial para iniicar el server
│   └── utils
│       ├── Helper.ts --> Funciones genericas de uso frecuente
│       ├── Helper.spec.ts --> Test de las funciones
│       └── index.ts
└── tsconfig.json
```
