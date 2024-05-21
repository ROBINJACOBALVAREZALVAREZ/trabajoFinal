`TRABAJO FINAL`

El presente proyecto tiene como finalidad aplicar y demostrar conocimientos en tecnologías web clave, específicamente HTML, CSS y Bootstrap, así como habilidades en despliegue y contenedorización de aplicaciones. Para ello, se desarrollará una aplicación web sencilla que será desplegada en la plataforma Vercel. Además, se utilizará Docker para contenedizar la aplicación, facilitando así su ejecución y administración en diferentes entornos.

HTML: Se estructurará el contenido de la aplicación utilizando HTML5, asegurando una semántica adecuada y una base sólida.
CSS: Se aplicarán estilos mediante CSS para mejorar la apariencia visual y la experiencia de usuario.
Bootstrap: Se integrará Bootstrap para agilizar el diseño con el uso de componentes predefinidos, garantizando una interfaz atractiva y funcional en diferentes dispositivos.
Despliegue en Vercel:Se configurará el entorno de despliegue en Vercel, aprovechando sus capacidades de hosting y sus flujos de trabajo de implementación continua.
Se realizará el despliegue de la aplicación, verificando su correcta operatividad y accesibilidad en línea.
Contenedorización con Docker:Se creará un Dockerfile para definir el entorno de la aplicación, incluyendo las dependencias y configuraciones necesarias.
Se utilizará Docker Play para construir y ejecutar el contenedor de la aplicación, facilitando su replicabilidad y administración en diversos entornos de desarrollo y producción.

Una aplicación web plenamente operativa que demuestre el uso correcto de HTML, CSS y Bootstrap. La aplicación estará desplegada en Vercel, accesible públicamente, y mostrando un rendimiento y disponibilidad óptimos, Una imagen Docker funcional que permita la ejecución de la aplicación en cualquier entorno compatible con Docker, facilitando la gestión y escalabilidad del proyecto.

Este proyecto no solo permite la aplicación práctica de conocimientos teóricos en HTML, CSS, Bootstrap, y Docker, sino que también prepara al desarrollador para enfrentar desafíos reales en el desarrollo y despliegue de aplicaciones web modernas. La implementación y despliegue en Vercel demuestran la capacidad de utilizar plataformas de última generación para la publicación de aplicaciones, mientras que la contenedorización con Docker subraya la importancia de la portabilidad y eficiencia en el desarrollo de software. En conclusión, este proyecto es un paso significativo hacia la consolidación de habilidades técnicas esenciales en el campo del desarrollo web y la ingeniería de software.

- Robin Jacob Alvarez Alvarez
- Andrez Felipe Muñoz Muñoz

`Depliegue con docker`

- docker build -t trabajo-final .
- docker run -d -p 80:80 trabajo-final