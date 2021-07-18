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

## Autenticación

Añadimos el backend de autenticación:

```ps
amplify add auth

amplify push
```

