#Appi Backend de Clinica Dental

##Contenido

1. [Sobre el Proyecto](#item1)
2. [Deploy](#item2)
3. [Stack](#item3)
4. [Diagrama](#item4)
5. [Insatalacion](#item5)
6. [Endpoints](#item6)
7. [Futuras mejoras](#item7)
8. [Sobre el autor](#item8)

<a name="item1"></a>

### _Sobre el poryecto_

Este proyecto ejemplifica el backend necesario para una clinica dental.
Se compone de una base de datos en MySQL, y se trabaja con Sequelize para acceder a esta.
Las funcionalidades previstas son el Register, el Login como los Endpoints principales.
Despues los diferentes tipos de usuarios podran realizar acciones concretas.
El Admin podra ver todos los usarios, buscar por usuario concreto y crear nuevos usarios.
Un usario tipo Paciente podra ver su propio perfil, modificarlo, pedir una cita, ver sus citas, moficiarlas y eliminar sus citas.
Un usario tipo Doctro podra ver todas las citas existentes y todos los usarios registrados.

<a name="item2"></a>

### _Deploy_

<div align:"center">
<a href="https://josejakkan.github.io/DentalClinic/">Proyecto</a>
</a>
</div>

<a name="item3"></a>

### _Stack_

Tecnologias usadas:

- JavaScript
- Node.Js
- Express.Js
- MySQL
- Sequelize
- MySQL Workbench
- Postman
- Docker Dekstop

<a name="item4"></a>

### _Diagrama_

![Diagrama de la Clinica Dental.](https://raw.githubusercontent.com/JoseJakkan/DentalClinic/main/assets/ClinicaDental.png)

<a name="item5"></a>

### _Instalacion_

La ruta para instalar el proyecto es la siguiente:

1. Clonar el repositorio
2. $ npm install
3. Conectamos nuestro repositorio con la base de datos
4. $ Ejecutamos las migraciones
5. $ Ejecutamos los seeders
6. $ npm run dev

Una vez realizados estos pasos se puede acceder al proyecto.

<a name="item6"></a>

### _Endpoints_

Los Endopoints actualmente son los siguientes

1- Endpoints de Auth

- Register:

  POST http://localhost:3000/auth/register

        Body:

        {
            "user_name": "Cleopatra",
            "user_last_name": "Philopator",
            "email": "QueenTwoEgipts@aspid.com",
            "password": "12345678",
            "birthdate": "1940-10-10",
            "address": "42 Wallaby St. Sidney",
            "phone": "488870503"
        }

  - Login

  POST http://localhost:3000/auth/login

  Body:
  {
  "email": "QueenTwoEgipts@aspid.com",
  "password": "12345678"
  }

2. Endpoints de Admin

- getAll
  GET http://localhost:3000/admin/getAll?page=1

-getById
GET http://localhost:3000/admin/10

<a name="item7"></a>

### _Futuras Mejoras_

En futuras actualizaciones se crearan los siguiente Endpoints

1. Como usuario:

- Busqueda del propio perfil
- Modificacion del propio perfil
- Pedir cita
- Modificar cita
- Eliminar cita

2.  Como doctor

- Consultar sus propias citas
- Consultar todos los pacientes

<a name="item8"></a>

### _Sobre el autor_

- Jose Antonio Lopez
- Estudiante de GeeksHubs Academy https://geekshubsacademy.com/
- e-mail: lopez.joseantonio82@gmail.com
