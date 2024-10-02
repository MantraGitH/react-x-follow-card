# Vite + React X Follow Card

Levantar el proyecto mediante la terminal:

-cd "x-follow-card"
-npm run dev


## Simulación de una Follow Card de la red social "X".


Este proyecto es una simulación interactiva de una Follow Card para la red social "X", construida con React.js y estilizada con CSS personalizado. La aplicación permite a los usuarios alternar entre los estados de "seguir" y "siguiendo" para distintos perfiles. Cada Follow Card incluye la imagen del avatar y el nombre de usuario proporcionados dinámicamente mediante la API de unavatar.io.


## Aspectos técnicos clave:


-   `Componentes Reutilizables`: El componente XFollowCard es reutilizable, lo que facilita la incorporación de múltiples perfiles en la aplicación con el mismo código base.


-   `Gestión de estado con useState`: El hook useState gestiona el estado de seguimiento de manera eficiente, actualizando la interfaz de usuario cuando el estado cambia.


-   `Props y Children`: Los datos del usuario se manejan a través de props, mientras que el contenido de cada tarjeta se pasa como children, proporcionando flexibilidad.


-   `Estilos Dinámicos con CSS`: El estilo de los botones cambia dinámicamente según el estado de seguimiento. Por ejemplo, cuando el usuario está "siguiendo", el botón tiene un fondo transparente y un borde gris, pero al pasar el ratón sobre él, el color cambia a rojo, mejorando la experiencia de usuario visual. Además, se utilizan transiciones CSS para hacer que los cambios de estado se vean más naturales.


-   `Interactividad con Animaciones`: El botón de "seguir" cambia de estilo al hacer hover, mostrando el texto "Dejar de seguir" y ocultando el texto original "Siguiendo", lo que añade una capa de interactividad visual.
 

[Demo del proyecto Aquí](https://vimeo.com/1015412090?share=copy)