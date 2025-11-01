# ProyectAngular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

El presente proyecto fue desarrollado utilizando Angular, un framework moderno de desarrollo web basado en TypeScript que permite crear aplicaciones dinámicas, modulares y de alto rendimiento.



El objetivo principal del proyecto es construir una interfaz interactiva y eficiente, aplicando componentes reutilizables, servicios, rutas y comunicación entre vistas para ofrecer una experiencia fluida al usuario.

Gracias a la estructura escalable de Angular, se logra una mejor organización del código, facilidad de mantenimiento y compatibilidad con otras herramientas del ecosistema web. Además, el proyecto integra formularios reactivos, directivas, eventos y enlaces de datos, demostrando el uso de buenas prácticas en el desarrollo front-end.


ChatVerse - Aplicación de Mensajería Grupal1. 
El Concepto (Argumento Central)ChatVerse es una aplicación de chat simple y moderna que simula un entorno de mensajería al estilo Slack o Discord. Los usuarios pueden autenticarse, unirse a "Salas" o "Canales" temáticos, y enviar mensajes de texto que se actualizan para todos los miembros del canal instantáneamente.Este proyecto es el mejor campo de pruebas para la persistencia de datos multiusuario y las actualizaciones en vivo.2. Justificación Técnica Clave (El Desafío en Angular)Concepto de Angular/TecnologíaAplicación Práctica en ChatVerseComponentes de Contenedor/PresentaciónComponentes contenedores para la pantalla principal (ChatScreenComponent) y componentes de presentación para elementos como MessageBubbleComponent, ChannelListComponent y InputBarComponent.Inyección de Dependencias (Servicios)Un servicio central (ChatService) manejará todas las llamadas a la base de datos (Firestore) y la lógica de autenticación (Firebase Auth).Bases de Datos en Tiempo RealConexión obligatoria con Firebase Firestore. Usarás la función de subscripción (onSnapshot) para escuchar los cambios en la colección de mensajes. Esto garantiza que cada usuario vea los mensajes nuevos sin necesidad de recargar o actualizar manualmente.Autenticación Multi-UsuarioImplementar Registro y Login con Firebase Authentication. El ID del usuario autenticado (userId) se adjuntará a cada mensaje enviado para identificar al autor.Manejo de Formularios y EventosUsarás un Formulario Reactivo o ngModel para capturar la entrada del mensaje, y un evento (submit) para enviar el mensaje a la base de datos.Directivas AvanzadasUso de *ngFor para iterar sobre el array de mensajes y la directiva [ngClass] para aplicar estilos diferentes a los mensajes propios (burbuja azul) vs. los mensajes de otros (burbuja gris).
