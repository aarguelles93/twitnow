         ___        ______     ____ _                 _  ___  
        / \ \      / / ___|   / ___| | ___  _   _  __| |/ _ \ 
       / _ \ \ /\ / /\___ \  | |   | |/ _ \| | | |/ _` | (_) |
      / ___ \ V  V /  ___) | | |___| | (_) | |_| | (_| |\__, |
     /_/   \_\_/\_/  |____/   \____|_|\___/ \__,_|\__,_|  /_/ 
 ----------------------------------------------------------------- 


# TWIT NOW API

Toda la comunicación desde y hacia la API ha de realizarse utilizando el formato JSON a través del protocolo HTTP.

## Pasos previos

config/index.js
Contiene la configuración del servidor. Es necesario cambiar la IP para que coincida con la asignada al momento del despliegue.

## Entidades

### Anuncio

Está compuesto por los siguientes atributos
* contenido
* autor
* ubicacion
* fecha de creación
* fecha de modificación


### Usuario

Está compuesto por los siguientes atributos
* Nombre
* Apellido
* email (Correo electrónico)
* fecha de creación
* fecha de modificación

## Rutas

### GET - /api/anuncios/
#### Parámetros : 
N/A

#### Respuesta :
Retorna el todos los anuncios registrados en el sistema.
Ejemplo:
[{
    "contenido": "Hello world 1",
    "autor": "Andres",
    "ubicacion": "Bquilla",
    "fechacreacion": 1516122109535,
    "fechamodif": 1516122187746
}]

### GET - /api/anuncios/:id
#### Parámetros - HEADER/URL
* :id : Entero. _Id del anuncio registrado_

#### Respuesta :
Retorna el anuncio identificado por el id pasado como parámetro de entrada

Ejemplo:
{
    "contenido": "Hello world 1",
    "autor": "Andres",
    "ubicacion": "Bquilla",
    "fechacreacion": 1516122109535,
    "fechamodif": 1516122187746
}

### POST - /api/anuncios/
#### Parámetros - BODY
* contenido : Cadena de caracteres. _Contiene el mensaje del anuncio_
* autor : Cadena de caracteres. _Contiene el nombre de usuario del creador del anuncio_
* ubicacion: Cadena de caracteres. _Contiene el nombre de la ubicacion_

#### Respuesta :
Retorna el nuevo anuncio registrado.

Ejemplo:
{
    "contenido": "Hello world 1",
    "autor": "Andres",
    "ubicacion": "Bquilla",
    "fechacreacion": 1516122109535,
    "fechamodif": null
}

### PUT - /api/anuncios/:id
#### Parámetros - HEADER/URL
* :id : Entero. _Id del anuncio registrado_

#### Parámetros - BODY
* contenido : Cadena de caracteres. _Contiene el mensaje del anuncio_
* autor : Cadena de caracteres. _Contiene el nombre de usuario del creador del anuncio_
* ubicacion: Cadena de caracteres. _Contiene el nombre de la ubicacion_

#### Respuesta :
Retorna el nuevo anuncio modificado.

Ejemplo:
{
    "contenido": "Hello world 1",
    "autor": "Andres",
    "ubicacion": "Bquilla",
    "fechacreacion": 1516122109535,
    "fechamodif": 1516122187746
}

### DELETE - /api/anuncios/:id
#### Parámetros - HEADER/URL
* :id : Entero. _Id del anuncio registrado_

#### Respuesta :
Retorna el anuncio eliminado.

Ejemplo:
{
    "contenido": "Hello world 1",
    "autor": "Andres",
    "ubicacion": "Bquilla",
    "fechacreacion": 1516122109535,
    "fechamodif": 1516122187746
}


### GET - /api/usuarios/
#### Parámetros : 
N/A

#### Respuesta :
Retorna el todos los usuarios registrados en el sistema.
Ejemplo:
{
    "data": [
        {
            "estado": true,
            "_id": "5a652d8eb2a28f316a56a384",
            "nombre": "andres2",
            "apellido": "arguelles2",
            "email": "andresau93@hotmail.com",
            "createdAt": "2018-01-22T00:17:18.135Z",
            "updatedAt": "2018-01-22T00:17:18.135Z",
            "__v": 0
        }
    ],
    "limit": 10,
    "skip": 0
}

### GET - /api/usuarios/:id
#### Parámetros - HEADER/URL
* :id : Entero. _Id del usuario registrado_

#### Respuesta :
Retorna el usuario identificado por el id pasado como parámetro de entrada

Ejemplo:
{
    "estado": true,
    "_id": "5a652d8eb2a28f316a56a384",
    "nombre": "andres2",
    "apellido": "arguelles2",
    "email": "andresau93@hotmail.com",
    "createdAt": "2018-01-22T00:17:18.135Z",
    "updatedAt": "2018-01-22T00:17:18.135Z",
    "__v": 0
}

### POST - /api/usuarios/
#### Parámetros - BODY
* nombre : Cadena de caracteres. _Contiene el nombre del usuario_
* apellido : Cadena de caracteres. _Contiene el apellido del usuario_
* email: Cadena de caracteres. _Contiene el correo electronico del usuario. Es único_

#### Respuesta :
Retorna el nuevo usuario registrado.

Ejemplo:
{
    "estado": true,
    "_id": "5a652d8eb2a28f316a56a384",
    "nombre": "andres2",
    "apellido": "arguelles2",
    "email": "andresau93@hotmail.com",
    "createdAt": "2018-01-22T00:17:18.135Z",
    "updatedAt": "2018-01-22T00:17:18.135Z",
    "__v": 0
}

### PUT - /api/usuarios/:id
#### Parámetros - HEADER/URL
* :id : Entero. _Id del usuario registrado_

#### Parámetros - BODY
* nombre : Cadena de caracteres. _Contiene el nombre del usuario_
* apellido : Cadena de caracteres. _Contiene el apellido del usuario_
* email: Cadena de caracteres. _Contiene el correo electronico del usuario. Es único_

#### Respuesta :
Retorna el usuario modificado.

Ejemplo:
{
    "estado": true,
    "_id": "5a652d8eb2a28f316a56a384",
    "nombre": "andres",
    "apellido": "arguelles",
    "email": "andresau93@hotmail.com",
    "createdAt": "2018-01-22T00:17:18.135Z",
    "updatedAt": "2018-01-22T00:17:18.135Z",
    "__v": 0
}

### DELETE - /api/usuarios/:id

Desactiva el usuario indicado
#### Parámetros - HEADER/URL
* :id : Entero. _Id del usuario registrado_

#### Respuesta :
Retorna el usuario desactivado.

Ejemplo:
{
    "estado": false,
    "_id": "5a652d8eb2a28f316a56a384"
}

### DELETE - /api/usuarios/:id

Desactiva el estado del usuario indicado
#### Parámetros - HEADER/URL
* :id : Entero. _Id del usuario registrado_

#### Respuesta :
Retorna el usuario desactivado.

Ejemplo:
{
    "estado": false,
    "_id": "5a652d8eb2a28f316a56a384"
}

### PATCH - /api/usuarios/:id

Activa el estado del usuario indicado
#### Parámetros - HEADER/URL
* :id : Entero. _Id del usuario registrado_

#### Respuesta :
Retorna el usuario activado.

Ejemplo:
{
    "estado": true,
    "_id": "5a652d8eb2a28f316a56a384"
}

### Sobre las validaciones.

En caso tal que se presente un error por validación en los parámetros recibidos, 
la API retornará el código de excepción correspondiente (generalmente 422), acompañado del detalle.

Ejemplo
{
    "success": false,
    "msg": "Contenido no encontrado"
}
