# XS PLUSD FRONTEND

Projecto base del xs-plusd-frontend usando el modelo federado, esto usa webpack y angular 11 para su funcionamiento

[[_TOC_]]

## Iniciar

Para poder correr el programa se usa `yarn`

<p>
<details>
<summary>Instalar yarn</summary>

Para poder instalar yarn se puede usar <b>NPM</b> <span style="font-size:1vw">Ironia?</span>

<pre><code>npm install -g yarn</code></pre>

Esta forma de instalar no es la recomendada, pero es la mas facil de hacer funcionar La forma recomendada es instalar de
forma nativa [por este metodo](https://classic.yarnpkg.com/en/docs/instal)

</details>
</p>

#### NO SE PUEDE USAR NPM INSTALL

Se tiene que usar yarn, para instalar todas las dependencias se ejecutan los siguientes comandos:

- ``yarn install``

Para ejecutar el servicio se usa tambien **yarn**

- ``yarn run start``

Y se podra ver en http://localhost:5000/

Para poder transpilar se usa, el resultado que sale en el **dist** que esos archivos se usan en produccion en un
contenedor con **nginx**

- ``yarn run build``

## MANEJAR DEPENDENCIAS

Como no se esta usando npm agregar dependencias se hace con el mismo ``yarn``

Por ejemplo:

#### Se tiene el comando en npm

- ``npm install @syncfusion/ej2-angular-grids --save``

Con yarn es

- ``yarn add @syncfusion/ej2-angular-grids``

#### Para una dependencia de desarrollo es

- ``npm install eslint --save-dev``

Con yarn es

- ``yarn add eslint --dev``
- ``yarn add eslint -D``

## LINTER

Este projecto usa de linter a `eslint`, para correr el linter se ejecuta

- ``yarn run ng lint``

Y para poder usar las recomendaciones del linter se puede correr como

- ``yarn run ng lint --fix``

# ESTILO DEL CODIGO

Estamos usando **Type**script asi que hay que aprovechar y usar las caracteristicas de un lenguaje fuertemente tipeado

En este projecto se va a usar la menor cantidad de **any** posible, el objetivo es que se use **any** solo cuando es
estrictamente necesario Si se va a usar un objecto (para mapear lo que devuelve un POST) lo mejor es crear un mapeo

# CI/CD (TODO)

Este projecto va a usar CI/CD con gitlab (TODO: Arley debe configurar esto) para verificar el codigo con el linter y
validar que todos los cambios sean compilables.

Como una segunda fase queda pendiente automatizar las pruebas, usando e2e y posteriormente Selenium (TODO: encontrar
alguien que pueda hacer esto) y se van a validar el correcto funcionamiento con el CI/CD

- [ ] CI/CD con gitlab
  - [X] Activar runners
  - [ ] Escribir .gitlab-ci.yml
  - [ ] Activar falla por un error en el linter
- [ ] Automatizacion de pruebas
  - [ ] Escribir pruebas con e2e
  - [ ] Escribir pruebas con Selenium
  - [ ] Pruebas de integración
