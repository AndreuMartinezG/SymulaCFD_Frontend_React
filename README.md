
# Symula CDF - Frontend

![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![image](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)


Acceso a la web: [https://symula-cfd-backend.herokuapp.com](https://symula-cfd-backend.herokuapp.com)<br>

## 0. Indice:


  [1. Introduccion:](#1-introducción)<br>
  [2. Como Usar:](#3-descripción-del-proyecto)<br>
  [3. Herramientas Utilizadas:](#5herramientas-utilizadas)<br>

## 1. Introducción.

- El proyecto se basa en la creación de una app para una Startup que realiza simulaciones de CFD 
(Dinámica de Fluidos Computacional) por medio de un software propio, en el cual quiere ampliar su 
modelo de negocio proporcionando a empresas la posibilidad de contratar un servicio de simulación 
online, en el cual se les permitiría a los clientes subir sus modelos 3D, ajustar parámetros específicos 
y lanzar la simulación a los servidores de la Startup en cuestión.

- BackEnd and BBDD Deployed on [HEROKU](https://symula-cfd-backend.herokuapp.com)<br>

- FrontEnd Deployed on [AWS](https://symula-cfd-backend.herokuapp.com)<br>
  
## 2. Como Usar.


  
- IMPORATANTE: Para poder realizar la demo del proyecto, tienes que descargar el modelo 3D (.stl) de este enlace:
https://drive.google.com/file/d/1HbDoXr6VxpvJ0inknzWrMBDwBsXi31OH/view?usp=sharing

- IMPORTANTE: A La hora de crear un proyecto se te solicitará en un punto que introduzcas la escala del modelo 3D que tendras que indicar que la unidad de medidas son METROS = (m), ya que es la medida especifica para este modelo 3D que te he propocionado. Ademas de cargar el mismo modelo 3D que hemos descargado.

- Para usar el proyecto, se debe de registrar en la web, y luego se debe de iniciar sesión.

- En la pasarela de pago se pueden añadir datos ficticios para simular una compra, pero no se puede realizar la compra.
  
  Nº de tarjeta: 4242 4242 4242 4242<br>
  Los demás datos son ficticios a elección del usuario.<br>
  La fecha de expiracion tiene que ser superior a la fecha actual.<br>

La aplicación consta distintas vistas:

 - Home
 - Login 
 - Register
 - Profile
 - Deskboard
 - ProjectDetail
 - SimulationDetail
 - Pasarela de Pago
 

## Home

La vista Home es la pagina de inicio de la aplicación y la primera que se muestra al usuario.

Te redirige a la vista de Login o al registro si no estas registrado.


![Home](/symula_cfd/src/img/Home.png)


## Login 
En la vista de Login podemos loguearnos  poniendo los campos email y contraseña para poder disfrutar de todas las funcionalidades de la aplicación.

![Login](/symula_cfd/src/img/Login.png)

## Register
En la vista de Register se solicitan una serie de datos personales mediante un formulario para poder acceder a la aplicación. 

![Register](/symula_cfd/src/img/Register.png)

## Deskboard
La vista de Deskboard es la pagina principal de la aplicacion, en la que podras crear nuevos proyectos (VER COMO USAR IMPORTANTE) y ver los proyectos que has creado.

![Deskboard](/symula_cfd/src/img/Deskboard.png)

## ProjectDetail
En la vista de ProjectDetail se puede ver el detalle de un proyecto, en el cual podremos ver el modelo 3D, los datos del proyecto y la simulación que se esta realizando.

![ProjectDetail](/symula_cfd/src/img/ProjectDetail.png)

## SimulationDetail
En la vista de SimulationDetail se puede ver el detalle de una simulación, con la cual se puede interactuar y introducir algunos parametro para la simulación.

Ademas de los botones para acudir a la pasarela de pago para finalizar la simulación.

![SimulationDetail](/symula_cfd/src/img/Simulation.png)

## Pasarela de Pago
En la vista de Pasarela de Pago se puede realizar el pago de la simulación, en la cual se puede introducir el numero de tarjeta, el codigo de seguridad y la fecha de expiración (TEST MODE).

![PasarelaPago](/symula_cfd/src/img/Pasarela.png)

## Profile 
En esta vista se muestra el perfil del usuario logueado.
Además de mostrar los datos del usuario, tienes la opción de modificar el perfil.

![Profile](/symula_cfd/src/img/Profile.png)


## 3. Herramientas Utilizadas.

- MySQL Workbench - (BBDD)
- Visual Studio Code - (DEV)
- Postman - (DEBUG)
- AWS - (DEPLOY)

<br>


[Subir](#top)
