const express = require('express')
const app = express()

function calcularPromedio(numeros) {
    // Verificar si el arreglo está vacío
    if (numeros.length === 0) {
        return 0;
    }

    const suma = numeros.reduce((total, numero) => total + numero, 0);
    const promedio = suma / numeros.length;
    return promedio;
}

// Ejemplo de uso
const arregloNumeros = [10, 20, 30, 40, 50];
const promedio = calcularPromedio(arregloNumeros);
console.log("El promedio es:", promedio);

function crearArchivo(str) {
    //fs es el módulo que contiene las funciones para 
    //manipular el sistema de archivos
    const filesystem = require('fs');
    //Se escribe el segundo parámetro en el archivo del primer parámetro
    filesystem.writeFileSync('Lab8/Ejercicio2.txt', str);
    console.log("Archivo generado");
}

crearArchivo('El ejercicio 2 trata de crear una función que reciba un string y escriba el string en un archivo de texto. ')

class torresHanoi {
    constructor(numDiscos) {
        this.numDiscos = numDiscos;
        this.movimientos = [];
    }
    
    solve() {
        this.movimientos = [];
        this.moveDisc(this.numDiscos, 'A', 'C', 'B');
    }

    moveDisc(n, origen, destino, auxiliar) {
        if (n === 1) {
            this.movimientos.push(`Mover disco 1 de ${origen} a ${destino}`);
            return;
        }
        this.moveDisc(n - 1, origen, auxiliar, destino);
        this.movimientos.push(`Mover disco ${n} de ${origen} a ${destino}`);
        this.moveDisc(n - 1, auxiliar, destino, origen);
    }
}

// Crear una instancia de la clase
const hanoi = new torresHanoi(3); // Por ejemplo, con 3 discos

// Resolver las torres de Hanoi
hanoi.solve();

// Imprimir los movimientos en la consola
console.log('Movimientos de las Torres de Hanoi:');
hanoi.movimientos.forEach(movimiento => console.log(movimiento));

const http = require('http');

const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.write(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Indie+Flower&family=Montserrat:ital@0;1&family=Pacifico&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="Lab3_minimizada.css">
        <title>Laboratorio 1: Página personal</title>
    
    </head>
    <body>
        <header>
            <h1>Bienvenido a mi página personal</h1>
            <div id="frase">Hola! Soy Sofía Osorio, algunas de mis aficiones son bailar, nadar y disfrutar de las lecturas y animaciones japonesas.</div>
        </header>
    
        <main>
            <p>Considero que no tengo casi nada de experiencia en la construcción de software, me acuerdo que en la vocacional realicé una página web con HTML muy sencilla, pero he utilizado algunas herramientas que son necesarias para la construcción de software. Mi compromiso como miembro del equipo es ser responsable con los tiempos y las entregas, y tener la mente abierta a opiniones y retroalimentaciones de mi equipo. Espero que este sea un bloque exitoso donde aprendamos a trabajar en equipo y a manejar de forma más eficaz la base de datos a través de la práctica.</p>   
            <img src=".\equipo.jpg" 
            alt="Mi imagen de prueba" height="320" width="380" class="centrar"/>
        
            <h2>Top 5 cosas que me gusta hacer</h2>
            <ol>
                <li>Salir a pasear con mi familia.</li>
                <li>Leer historias de fantasía.</li>
                <li>Salir con mi perrito(Milo).</li>
                <li>Salir con mis amigos.</li>
                <li>Ver streaming acostada.</li>
            </ol>
            <img src=".\animacion.jpg" 
        alt="Mi imagen de prueba 2" height="220" width="180"/>
    
            <h2>Preguntas a responder</h2>
            <h3>Laboratorio 1</h3>
            <ul>
                <li><strong>¿Cuál es la diferencia entre Internet y la World Wide Web?</strong></li>
                <p>Internet es una inmensa red de computadoras alrededor de todo el mundo conectadas entre sí.En cambio, la web (la World Wide Web) es una enorme colección de páginas que se asienta sobre esa red de computadoras. Así que cuando se navega a través de un celular o computadora se usa el internet para acceder a la web.</p>
                <li><strong>¿Cuáles son las partes de un URL?</strong></li>
                <img src=".\URL.jpg" 
                alt="Mi imagen de prueba 3" height="220" width="500" id="centrar_espacio"/>
                <li><strong>¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE?</strong></li>
                <ul class="espacio">
                    <li>GET: Se utiliza para solicitar datos de un recurso específico en el servidor. Por lo general, se utiliza para recuperar información y no debe tener ningún efecto secundario en el servidor (es decir, no debe cambiar el estado del servidor).</li>
                    <li>HEAD: Es similar al método GET, pero solo solicita las cabeceras de respuesta del recurso, sin solicitar el cuerpo del recurso. Se usa comúnmente para obtener información sobre un recurso sin necesidad de descargar todo su contenido.</li>
                    <li>POST: Se utiliza para enviar datos al servidor para ser procesados, generalmente para crear un nuevo recurso en el servidor. A menudo se usa para enviar datos de formularios HTML al servidor.</li>
                    <li>PUT: Se utiliza para enviar datos al servidor para ser almacenados en un recurso específico, o para actualizar completamente un recurso existente. El cliente especifica la URI del recurso y el servidor debe almacenar los datos en esa URI.</li>
                    <li>PATCH: Similar a PUT, pero se utiliza para enviar datos al servidor para actualizar parcialmente un recurso existente en lugar de reemplazarlo completamente.</li>
                    <li>DELETE: Se utiliza para solicitar al servidor que elimine un recurso específico. Después de que un recurso es eliminado, se espera que una solicitud posterior al mismo recurso devuelva un estado 404 (no encontrado).</li>
                </ul>
                <li><strong>¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando ingresas tu usuario y contraseña en algún sitio? ¿Por qué?</strong></li>
                <p><em>POST</em>, ya que cuando se envía un formulario HTML con el método POST, los datos del formulario (como el nombre de usuario y la contraseña) se envían al servidor en el cuerpo de la solicitud HTTP.</p>
                <li><strong>¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL?</strong></li>
                <p><em>GET</em>, ya que cuando se escribe una URL en la barra de direcciones de tu navegador y presionas Enter, el navegador envía una solicitud GET al servidor correspondiente, solicitando la página web asociada con esa URL.</p>
                <li><strong>Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? ¿Ocurrió algún error?</strong></li>
                <p>Un código de estado 200 indica que <strong>no ha ocurrido ningún error</strong> y que la solicitud se ha procesado correctamente. Esto significa que el recurso solicitado (por ejemplo, una página web, un archivo, etc.) ha sido encontrado y devuelto correctamente por el servidor.</p>
                <li><strong>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 404? ¿Por qué?</strong></li>
                <p><strong>Si lo es</strong>, ya que como desarrllador web es su responsabilidad garantizar que el sitio web esté correctamente estructurado y que la página y sus recursos estén disponibles y accesibles para los usuarios. Un error 404 indica que hay una falta en esta responsabilidad.</p>
                <li><strong>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 500? ¿Por qué?</strong></li>
                <p>Sí, es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio, ya que los errores 500 indican un problema interno en el servidor, lo que significa que algo está mal con la lógica o el funcionamiento del sitio web.</p>
                <li><strong>¿Qué significa que un atributo HTML5 esté depreciado o desaprobado (deprecated)? Menciona algunos elementos de HTML 4 que en HTML5 estén desaprobados.</strong></li>
                <p>Cuando un atributo HTML está "depreciado" o "desaprobado" (deprecated en inglés), significa que su uso está obsoleto y que es posible que en futuras versiones del estándar HTML este atributo sea eliminado por completo. Esto generalmente ocurre porque el atributo ha sido reemplazado por una alternativa más moderna, más segura o más estándar.</p>
                <p>Ejemplo de un elemento de HTML4  que está desprobado en el HTML5 es el <strong>font</strong>. Se usaba para definir el tamaño, color y tipo de fuente del texto. En HTML5, se considera obsoleto y se recomienda usar CSS para estilizar el texto.</p>
                <li><strong>¿Cuáles son las diferencias principales entre HTML 4 y HTML5?</strong></li>
                <ul class="espacio">
                    <li><em>Sintaxis más clara:</em> HTML5 tiene una sintaxis más clara y fácil de entender en comparación con HTML4. Simplifica la forma de escribir etiquetas y atributos, para el desarrollo de páginas web.</li>
                    <li><em>Nuevas etiquetas:</em> HTML5 introduce nuevas etiquetas semánticas que permiten una mejor estructuración del contenido. Algunas de estas etiquetas son <strong>header, footer, nav, section, article,</strong> entre otras.</li>
                    <li><em>Compatibilidad con multimedia:</em> HTML5 ofrece soporte integrado para audio y video, facilitando la incorporación de estos elementos en las páginas web sin necesidad de plugins como Flash.</li>
                    <li><em>Mejoras en formularios:</em> HTML5 incluye nuevas funcionalidades y elementos para la creación de formularios web, como campos de fecha, email, teléfono, entre otros.</li>
                    <li><em>Soporte para gráficos y animaciones:</em> Con la introducción de la etiqueta <strong>canvas</strong> y la API Canvas en HTML5, es posible crear gráficos dinámicos y animaciones en el navegador sin necesidad de utilizar tecnologías externas como Flash.</li>
                </ul>
                <li><strong>¿Qué componentes de estructura y estilo tiene una tabla?</strong></li>
                <ul class="espacio">
                    <li><em>Estructura básica:</em> Los elementos que se utilizan para organizar y estructurar los datos en filas y columnas de una tabla son <strong>table, thead, tbody, tfoot y td o th</strong> ("th" para encabezados de tabla.</li>
                    <li><em>Encabezado de tabla:</em> Se definen dentro de los elementos "th" y se utilizan para identificar el contenido de las columnas o filas. Los encabezados de tabla se suelen colocar dentro de la sección thead.</li>
                    <li><em>Celdas de datos:</em> Se definen dentro de los elementos "td" y contienen la información principal de la tabla. Cada celda de datos corresponde a una celda en una fila de la tabla.</li>
                    <li><em>Filas de tabla:</em>Se definen dentro de los elementos "tr" y contienen las celdas de datos o encabezados de tabla correspondientes a una fila específica de la tabla.</li>
                    <li><em>Estilos CSS:</em> Es posible aplicar para controlar la apariencia de la tabla , incluyendo propiedades como el color de fondo, el color del texto, el tamaño de fuente, el espaciado de las celdas, los bordes, etc. </li>
                    <li><em>Atributos de tabla:</em>HTML5 proporciona una variedad de atributos para personalizar la apariencia y el comportamiento de la tabla, como border, cellspacing, cellpadding, align, bgcolor, entre otros.</li>
                </ul>
                <li><strong>¿Cuáles son los principales controles de una forma HTML5?</strong></li>
                <p>Los controles son los elementos que permiten al usuario introducir información.</p>
                <ul class="espacio">
                    <li><em>input type="text":</em> Este control permite al usuario ingresar texto de una sola línea, como nombres, direcciones, etc.</li>
                    <li><em>input type="password":</em> Permite al usuario ingresar texto de una sola línea, pero oculta el texto ingresado, generalmente para contraseñas.</li>
                    <li><em>input type="email":</em> Valida que el valor ingresado sea una dirección de correo electrónico.</li>
                    <li><em>input type="number":</em> Se utiliza para ingresar números. Puede incluir un atributo <strong>min</strong> y <strong>max</strong> para definir rangos, y <strong>step</strong> para establecer incrementos.</li>
                    <li><em>input type="checkbox":</em>Representa una casilla de verificación que permite al usuario seleccionar una o varias opciones.</li>
                    <li><em>input type="date", input type="time", input type="datetime-local":</em>Permiten al usuario seleccionar fechas y horas a través de controles de calendario y reloj.</li>
                    <li><em>textarea:</em> Se utiliza para ingresar texto multilínea, como comentarios o mensajes largos.</li>
                    <li><em>select y option:</em> Permiten al usuario seleccionar una opción de una lista desplegable. "select" define la lista, mientras que "option" define cada elemento de la lista.</li>
                    <li><em>input type="file"</em> Permite al usuario seleccionar y cargar un archivo desde su dispositivo.</li>
                </ul>
                <li><strong>¿Qué tanto soporte HTML5 tiene el navegador que utilizas?</strong></li>
                <p>Google Chrome es uno de los navegadores más compatibles con HTML5 en el mercado y ofrece un excelente soporte para las diversas características y elementos de HTML5, incluidos los elementos semánticos, audio y video, gráficos, animaciones, formularios mejorados, almacenamiento local, geolocalización, entre otros.</p>
                <h3>Sobre el ciclo de vida y desarrollo de los sistemas de información:</h3>
                <li><strong>¿Cuál es el ciclo de vida de los sistemas de información?</strong></li>
                <ol class="espacio">
                    <li><strong>Identificación de necesidades:</strong> En esta etapa, se identifican y analizan las necesidades de información de la organización o empresa. Se determina qué problemas deben resolver o qué oportunidades se pueden aprovechar a través de la implementación de un sistema de información.</li>
                    <li><strong>Análisis:</strong> Una vez identificadas las necesidades, se realiza un análisis detallado de los requisitos del sistema. Esto implica la recolección de información, la definición de procesos, la identificación de usuarios clave y la elaboración de especificaciones funcionales y técnicas.</li>
                    <li><strong>Diseño:</strong> En esta etapa, se diseña la arquitectura del sistema de información. Se definen los componentes del sistema, la estructura de la base de datos, la interfaz de usuario y otros aspectos técnicos. El objetivo es crear un plan detallado que guíe la implementación del sistema.</li>
                    <li><strong>Desarrollo e implementación:</strong> Durante esta etapa, se construye y se pone en funcionamiento el sistema de información. Se escribe el código, se configuran los servidores, se integran los componentes y se realizan pruebas exhaustivas para garantizar que el sistema funcione correctamente.</li>
                    <li><strong>Operación y mantenimiento:</strong> Una vez que el sistema está en funcionamiento, se lleva a cabo su operación continua. Esto incluye la administración de la infraestructura, la gestión de datos, la resolución de problemas y la aplicación de actualizaciones y mejoras periódicas para mantener el sistema actualizado y funcional.</li>
                    <li><strong>Evaluación y mejora:</strong> A lo largo de todo el ciclo de vida, se realizan evaluaciones periódicas para medir el rendimiento del sistema y su impacto en la organización. Se recopilan comentarios de los usuarios y se identifican áreas de mejora. Esta retroalimentación se utiliza para hacer ajustes y mejoras en el sistema de información.</li>
                    <li><strong>Retiro:</strong> Finalmente, llega el momento en que el sistema de información se vuelve obsoleto o ya no cumple con las necesidades de la organización. En esta etapa, se retira el sistema de producción, se realizan copias de seguridad de los datos importantes y se implementa un plan para migrar a un nuevo sistema o tecnología.</li>
                </ol>
                <li><strong>¿Cuál es el ciclo de desarrollo de los sistemas de información?</strong></li>
                <ol class="espacio">
                    <li><strong>Planificación</strong> Implica los objetivos, la metodología, el alcance que se espera con el proyecto, la designación de los roles o responsabilidades, el tiempo para cumplir las actividades, entre otros.</li>
                    <li><strong>Análisis</strong> Se realiza un análisis detallado de los requisitos del sistema. Esto implica la recolección de información, la definición de procesos, la identificación de usuarios clave y la elaboración de especificaciones funcionales y técnicas.</li>
                    <li><strong>Diseño</strong> Se diseña la arquitectura del sistema de información. Se definen los componentes del sistema, la estructura de la base de datos, la interfaz de usuario y otros aspectos técnicos.</li>
                    <li><strong>Implementación</strong> Se construye y se pone en funcionamiento el sistema de información. Se escribe el código, se configuran los servidores, se integran los componentes y se realizan pruebas exhaustivas para garantizar que el sistema funcione correctamente.</li>
                    <li><strong>Pruebas</strong> Permite evidenciar y certificar que el sistema funciona y cumple con los requisitos que el cliente había establecido.</li>
                    <li><strong>Operación y mantenimeinto</strong> Se lleva a cabo su operación continua. Esto incluye la administración de la infraestructura, la gestión de datos, la resolución de problemas y la aplicación de actualizaciones y mejoras periódicas para mantener el sistema actualizado y funcional.</li>
                </ol>
            </ul>
    
            <h3>Laboratorio 3</h3>
            <ul>
                <li><strong>Como ingeniero de software ¿cuál es tu recomendación sobre el uso de !important en un CSS?</strong></li>
                <p>Considero que <strong>!important</strong> es una herramienta útil, sin embargo se debe utilizar con moderación ya que sino se tiene un buen entedimiento de como está afectando la cascada de estilos uno se puede confundir y entropecer el desarrollo del programa. Mi recomendación es utilizarlo lo menos posible y si se debe de utilizar que sea solo para los casos espaciales.</p>
                <p>Un ejemplo es que si estas ocupando reglas CSS de terceros y no se puede modificar.</p>
                <li><strong>Si se pone una imagen de fondo en una página HTML, ¿por qué debe escogerse con cuidado?</strong></li>
                <p>Es importante saber elegir la imagen que se va a utilizar ya que puede dificultar la legibilidad del contenido, además la imagen debe completamentar el diseño general y si la imagen tiene un tamaño y fondo pesado puede afectar el rendimeiento de la página web.</p>
                <li><strong>Como ingeniero de software, ¿cuál es tu recomendación al elegir las unidades de un propiedad de estilo entre %, px y pt?</strong></li>
                <p>Mi recomendación al elegir las unidades de un propiedad de estilo son que el procentaje(%) es ideal para el diseño que deben adaptarse a diferentes tamaños de pantalla, los pixels(px) son adecuados para elementos con dimensiones fijas que no necesitan adaptarse a diferentes tamaños de pantalla.</p>
                <p>Los puntos(pt) son una unidad de medida relativa que está vinculada al tamaño de la fuente del documento y no son adecuados para el diseño general de la página, ya que no se ajustan automáticamente al tamaño de la pantalla o del contenedor.</p>
                <li><strong>¿Por qué el uso de una versión minimizada del CSS mejora el rendimiento del sitio?</strong></li>
                <p>La versión minimizada del CSS mejora el rendimeiento del sitio al reducir el tamaño del archivo CSS y la cantidad de datos transferidos, haciendo así que los tiempos de carga sean más rápidos y una experiencia de usuario más eficiente.</p>
            </ul>
    
    
        </main>
    
        <footer>
            <p><strong>Datos del estudiante</strong></p>
            <p>Nombre: Sofía Osorio Suárez<br>
            Matrícula: A01277695<br>
            Correo electrónico: A01277695@tec.mx</p>
    
            <p>El editor HTML que utilicé es <a href="http://www.sublimetext.com/">Sublime Text</a></p>
    
            <p><strong>Referencias Bibliográficas</strong></p>
    
            <p>BBC News Mundo. (2019, 12 marzo). ¿Cuál es la diferencia entre internet y la web? (y por qué muchos las confunden). BBC News Mundo. https://www.bbc.com/mundo/noticias-47538812#:~:text=Internet%20es%20una%20inmensa%20red,para%20acceder%20a%20la%20web.</p>
            <p>Pol, T. (2023, 29 septiembre). ¿Qué es una URL? significado, estructura y consejos de optimización. Semrush Blog. https://es.semrush.com/blog/que-es-una-url/</p>
            <p>OpenAI. (2023). ChatGPT (versión del 15 de julio) [Modelo de lenguaje de gran tamaño]. https://chat.openai.com/chat</p>
            <p>Cyberstream. (2024, 22 febrero). ¿Cuál es la diferencia entre HTML 4 y 5? Byron Vargas ®. https://www.byronvargas.com/web/cual-es-la-diferencia-entre-html-4-y-5/</p>
            <p>Euroinnova Business School. (2022, 10 noviembre). ¿Quieres conocer el campo laboral de informática? ¡Quédate aquí! https://www.euroinnova.mx/blog/que-es-el-ciclo-de-vida-de-un-sistema#:~:text=Pero%20bien%2C%20%C2%BFQu%C3%A9%20es%20el,desarrollado%2C%20tanto%20web%20como%20empresarial.</p>
        </footer>
    </body>
    </html>
    `);
    response.end();
});

server.listen(2001);