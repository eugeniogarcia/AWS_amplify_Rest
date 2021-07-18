# Instalar el CLI de Amplify

```ps
npm install -g @aws-amplify/cli
```

# Crear la App React

Crear el template de la aplicación _react_, usando typescript:

```ps
npx create-react-app mi-app --template typescript
```

# Configurar Amplify para nuestra App

Configuramos amplify:

```ps
cd mi-app

amplify configure
```

Especificamos los siguientes valores:

|Cuenta|Valor|
|-----|-----|
|euge|egsmartin@hotmail.com|
|Client ID|AKIAXBEVMWBDPGUDK6ZQ|
|Client Secret|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|

Instalamos las dependencias de Amplifly:

```ps
npm install aws-amplify @aws-amplify/ui-react
```

Lo inicializamos:

```ps
amplify init
```

## Crear un Backend (Autenticación)

Añadimos el backend de autenticación:

```ps
amplify add auth

amplify push
```

## Crear un Backend (Lambda)

```ps
amplify add function
```

## Eliminar un Backend

```ps
amplify remove auth
```

## Eliminar un proyecto

```ps
amplify delete
```

# Codificación

En _index_ añadimos Amplify:

```js
//Configura React para trabajar con Amplify
import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)
```

## Autenticación

Incluimos la App en un wrapper:

```js
export default withAuthenticator(App)
```

Incluimos en la respuesta un control para salir

```js
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Hola desde AWS Amplify</h1>
      <AmplifySignOut />
    </div>
```

## Función

Para crear una función haremos lo siguiente:

```ps
amplify add function
```

Esto crear un directorio en nuestro projecto en la carpeta _backend_. Cada función tiene una _app.js_ donde se implementan los end-points de nuestra función, usando Express - porque es el runtime que hemos elegido al crear la fución.

## Api

Para crear una api hacemos:

```ps
amplify add api
```

Para publicar los cambios:

```ps
amplify push

Current Environment: dev

| Category | Resource name | Operation | Provider plugin   |
| -------- | ------------- | --------- | ----------------- |
| Function | miapp649af301 | Create    | awscloudformation |
| Api      | cryptoapi     | Create    | awscloudformation |
| Auth     | miappbfd4fb76 | Delete    | awscloudformation |
```

Podemos ver el estado de Amplify:

```ps
amplify status

Current Environment: dev

| Category | Resource name | Operation | Provider plugin   |
| -------- | ------------- | --------- | ----------------- |
| Function | miapp649af301 | No Change | awscloudformation |
| Api      | cryptoapi     | No Change | awscloudformation |

REST API endpoint: https://fqk9vnz7qf.execute-api.eu-west-2.amazonaws.com/dev
```

Como podemos ver el comando nos indica que tenemos _pendiente_ de subir a AWS.

## Axios

Con Axios tenemos una librería que permite, tanto desde _Node.js_ como desde un navegador hacer peticiones http.

Instalaremos axios en la aplicación js que se ha creado para nuestra función, porque es desde nuestra función desde la que queremos hacer uso de ella. Podemos encontrar la aplicación que se ha creado para esta función en _amplify\backend\function\miapp649af301_:

```ps
cd C:\Users\Eugenio\Downloads\mi-app\amplify\backend\function\miapp649af301\src

npm install axios
```

