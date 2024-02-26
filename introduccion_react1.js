//  Impacto de React en el desarrollo de aplicaciones Frontend Web:
/*
    React ha tenido un impacto significativo en la comunidad de desarrolladores de frontend a pesar de ser una librería
    Javascript relativamente reciente. Introduce conceptos, como el "DOM virtual", y ha hecho que la comunidad entienda
    el poder del desarrollo software por componentes. Su diseño orientado a componentes funciona bien con la web, aunque
    React no está limitado a la web, se puede utilizar tambien para desarrollar aplicaciones móviles e incluso interfaces
    de usuario que funcionen por una terminal.
*/


//  Componentes Server de React:  Server rendered applications (aplicaciones renderizadas en el servidor)
/*
    El "Server Side Rendering" (SSR) es la capacidad de una aplicación de renderizar una página web en el servidor,
    en lugar de renderizarla en el navegador.

    Es decir, en el servidor se construye la página en HTML para luego enviarla al cliente. De esta forma se mejora
    la rapidez en el tiempo de carga de la página web, al aliviar el trabajo del dispositivo del usuario (cliente).

    Sin embargo, en el lado del cliente se descarga luego todo el JavaScript de React necesario para que la página sea
    interactiva. Por tanto, los componentes de React siguen estando del lado del cliente.

    1.- Optimización del rendering: los "React Server Components" permiten a los desarrolladores crear aplicaciones
        utilizando lo mejor del servidor y del cliente, combinando la interactividad que tienen las aplicaciones del
        lado del cliente con la mayor rapidez en el renderizado desde el servidor, mejorando así la experiencia del
        usuario.


    2.- React Components: Los Server Components permiten aprovechar mejor el servidor para lograr así un gran rendimiento.
        Los componentes grandes que afectan el tamaño del paquete de JavaScript en el lado del cliente ahora pueden
        quedarse completamente en el servidor. Así, al enviarse menos código JavaScript al navegador, se reduce el tiempo
        de interacción de la página.

        Esto permite a los desarrolladores obtener datos rápidamente de fuentes externas. No se tiene que enviar una
        solicitud desde el cliente a la base de datos del servidor para obtener los datos, porque mientras se procesan
        los componentes en el servidor, se puede realizar una llamada local a la API para obtener estos datos.

    3. React y aplicaciones móviles para negocios: Muchas empresas que se encuentran en el proceso de transformación
       digital necesitan crear soluciones móviles. React ha demostrado ser la herramienta de interfaz de usuario más
       popular, no solo entre los desarrolladores sino también entre las empresas, porque se puede utilizar tanto para
       el desarrollo de aplicaciones web, como también para aplicaciones móviles.

       El desarrollo multiplataforma con React Native permite la creación de aplicaciones para plataformas móviles iOS
       y Android nativas, pudiendo llegar las empresas a una audiencia más amplia de usuarios sin exceder su presupuesto.

       Además, este framework se proyecta al futuro gracias a la gran comunidad existente y al soporte de Meta,
       convirtiéndola en una inversión inteligente para proyectos duraderos.

       Debido a que React fomenta el desarrollo de aplicaciones móviles multiplataforma, ayuda a desarrollar una mejor
       conexión con los clientes, permitiendo a los negocios con aplicaciones móviles comprender las necesidades reales
       de sus usuarios finales.

       El desarrollo de aplicaciones móviles con React permite a los negocios incluir ciertas características después
       de analizar las tendencias del mercado y los requerimientos del cliente.
*/



//  React (a veces escrito React.js o ReactJS) es una biblioteca (libreria) en JavaScript, de código abierto, que se
//  utiliza para crear interfaces de usuario (GUI) para la web, permite el desarrollo "rapido" y "reutilizable" de
//  aplicaciones web potentes e interactivas. Su funcionamiento se basa  en un patrón de arquitectura de diseño por
//  componentes (SFC o Stateless Functional Componentes, es decir, la abstración de las vistas del GUI mediante el
//  uso de bloques de código React). React es una biblioteca (libreria) de JavaScript que permite el uso de componentes
//  (bloques encapsulados de codigo React) reutilizables.

//  Fue desarrollada por Facebook y se utiliza para construir componentes reutilizables y dinámicos para aplicaciones web.
//  React utiliza un enfoque basado en componentes, lo que significa que las interfaces de usuario se dividen en pequeños
//  elementos independientes que pueden actualizarse de forma eficiente cuando cambian los datos. React también permite
//  el uso de JSX, una extensión de JavaScript que permite escribir código HTML dentro de archivos de JavaScript, lo que
//  facilita la creación de interfaces de usuario (GUI) de manera más intuitiva.

//  Actualmente, React es la biblioteca (libreria) frontend más importantes para el desarrollo Web que se puede utilizar.


//  ¿Vale la pena aprender React?
/*  Aprender React tiene mucho sentido ya que proporciona la facilidad que tanto necesitan los desarrolladores
    para crear en muy poco tiempo interfaces de usuario y aplicaciones web muy atractivas. Esto resulta muy
    útil actualmente cuando las aplicaciones a crear son de gran escala y con datos que cambian con frecuencia.

    Cuando la tecnología es difícil de aprender, se vuelve difícil completar un proyecto y que sea exitoso.
    Por tanto, las empresas prefieren implementar aquella tecnología que sea fácil de aprender para el equipo
    de desarrollo y le permita terminar el proyecto en el tiempo programado.

    React es muy "fácil" de aprender (lo basico e intermedio) y está más enfocado que otros frameworks en el
    propio JavaScript. La facilidad para aprender React es la mejor ventaja en comparación con otros frameworks
    frontend populares, como Angular y Vue.

    Los beneficios de React de ser avanzado, robusto, receptivo y fácil de usar superan con creces sus desventajas.
    Además, React ahorra tiempo y dinero en el desarrollo, por estar basado en componentes. Es decir, una interfaz
    se puede dividir en componentes reutilizables, permitiendo crear interfaces de usuario dinámicas.
*/

//  2.- Historia de React
/*
    2.1.- Antecedentes e inicios (2010- 2013):

          2010:             Facebook introduce XHP a su stack PHP como código abierto.

          2011:             Jordan Walke crea el primer prototipo para ReactJS ("FastJS").

          Abril, 2012:      Facebook adquiere Instagram, Pete Hunt desarrolló React para hacerlo de código abierto.

          Mayo 2013:        Facebook lanza React como un código abierto.

          Junio, 2013:      React está disponible en JSFiddle.

          Julio, 2013:      React y JSX están disponibles en Ruby on Rails.

          Agosto, 2013:     React y JSX están disponibles en aplicaciones de Python.


    2.2.- Expansión y popularidad (2014- 2016):

         Inicios de 2014:   Conferencias ReactJS world tour, enfocadas en construir una comunidad y convertir
                            a los 'haters' en aliados.

         Enero, 2014:       React Developer Tools es agregado como una extensión para Google Chrome.

         Abril 7-9, 2014:   React London 2014, una conferencia de 3 días sobre construir aplicaciones responsivas.

         Enero 2015:        Netflix anuncia que usará React para su desarrollo de interfaz de usuario.

         Inicios de 2015:   Airbnb usa React.

         Enero 28-29, 2015: Se publica la primera versión de React Native.

         Marzo 2015:        React Native es público y de libre acceso para iOS, y está disponible en Github.

         Septiembre 2015:   La primera versión de React Native para Android es publicada.

         Febrero 22, 2016:  React.js Conf 2016 en San Francisco.

         Junio 2-3, 2016:   ReactEurope 2016.

         Julio 11, 2016:    Se publica el sistema de Códigos de Error para React.10​


    2.3.- Mejora continua (2017- Actualidad):

         El 26 de septiembre de 2017, React 16.0 fue lanzado al público.11​

         El 16 de febrero de 2019, React 16.8 fue lanzada al público.12​ Este lanzamiento introdujo los React Hooks.

         El 10 de febrero de 2020, el equipo de React anuncio la primera candidata a lanzamiento de React v17.0,
         notable como el primer lanzamiento importante sin cambios importantes en la API de React orientada al
         desarrollador.14​

         El 29 de marzo de 2022, se lanzó React 18, que introdujo un nuevo renderizador concurrente, procesamiento
         por lotes automático y soporte para renderizado del lado del servidor con Suspense


    Facebook (la actual Meta), Jordan Walke, un ingeniero de software, creo lel primer prototipo de React
    (llamada "FaxJS"), en 2011, influenciado por XHP de HTML una librería de componentes para PHP. Este primer
    prototipo fue un gran exito y se utilizó para satisfacer las propias necesidades de desarrollo de Facebook,
    en la parte de Feed de Noticias de Facebook. Luego en el 2012 se comenzo a usarlo también en Instagram.

    En 2013, Facebook lanzó "React" al público, haciendo que fuera de código abierto (en la JSConf US en mayo
    del 2013). 
    
    Desde el 2014 muchas empresas comenzaron a utilizar React en sus entornos de desarrollo.

    En 2015, Facebook anunció "React Native", destinado a crear aplicaciones móviles nativas en iOS y Android.
    React Native, permitió el desarrollo nativo para Android, iOS y UWP con React, esto fue anunciado por
    Facebook en la "React Conf" en febrero de 2015 y se volvió codigó abierto en marzo de 2015.

    El 18 de abril de 2017, Facebook anuncio "React Fiber", un nuevo conjunto de algoritmos internos para
    la renderización, esto es opuesto al viejo algoritmos de renderizado de React.

    "React Fiber" se convertiría en la base de cualquier mejora futura y desarrollo de funciones de la biblioteca
    React. La sintaxis actual para la programación con React no ha cambiado; solo ha cambiado la forma en que
    se ejecuta la sintaxis. El viejo sistema de renderizado de React, "Stack", se desarrolló en un momento en
    que no se entendía el enfoque del sistema en el cambio dinámico. "Stack" era lento para dibujar animaciones
    complejas, por ejemplo, tratando de lograrlo todo en un solo fragmento. "Fiber" divide la animación en
    segmentos que se pueden distribuir en varios fotogramas. Asimismo, la estructura de una página se puede
    dividir en segmentos que se pueden mantenerse y actualizar por separado. Las funciones de JavaScript y el
    objeto del DOM virtual son llamados "fibers" y cada uno se puede operar y actualizar por separado, lo que
    permite una representación en pantalla más suave.

*/

//  Por que usar React?
/*
    1.- Ventajas de React para el desarrollo web "moderno":

        Facilidad de aprendizaje: los desarrolladores pueden convertirse en especialistas de React solo teniendo
        experiencia en JavaScript o conocimientos básicos de programación. Tiene una rápida curva de aprendizaje
        gracias a su sintaxis sencilla y a la capacidad de codificar en JavaScript.

    2.- Reutilización: React tiene la capacidad de "reutilizar componentes" en cualquier parte de la aplicacion.
        Esto optimiza el desarrollo, al permitir a las empresas mantener todo su código como base para escribir
        funciones similares con ese mismo código en otras aplicaciones.

    3.- Elementos dinámicos: React facilita la creación de contenido "interactivo" dinamico, sin afectar el
        rendimiento general de la aplicación. No es necesario volver a dibujar desde cero cada nodo del DOM, sino
        solo dibujar los nodos modificados (DOM virtual).

    4.- Fácil depuración: Con React, una aplicación web es fácil de probar. Con su codificación clara, React permite
        rastrear rápidamente cualquier error cuando algo sale mal‍.

    5.- Fuerte apoyo de la comunidad: Con el respaldo de muchos colaboradores, la comunidad React brinda ayuda
        inmediata, y se puede recibir también apoyo de los ingenieros de Instagram y Facebook.

    6.- Gran experiencia de desarrollador: El rápido desarrollo con JavaScript y la pequeña API de React combinados
        crean una fantástica experiencia de desarrollador. La API es muy simple de aprender. JSX es una sintaxis
        especial que se parece a HTML.



*/

//  1.- Introduccion a React
/*
    React es:

    1.- Declarativo: React es una biblioteca que usa "declaraciones" para crear interfaces de usuario.
                     Las "vistas" de la GUI, que representan un "estado" de la GUI, se pueden desarrollar
                     de manera "declarativa". Una vez que el usuario interactuará con la GUI, o que cambian
                     los datos de las variables de estado, el estado de la "vista" de la GUI puede ser alterado,
                     y React se encargará de actualizar la interfaz de usuario, lo "componentes" que conforman
                     la GUI, de forma eficiente.

                     El desarrollo "declarativo" de componentes de las vistas de la GUI hace que su código sea
                     más predecible y más fácil de depurar.
 
    2.- Basado en componentes: React utiliza componentes para crear interfaces de usuario. Estos componentes son 
                               "bloques de codigo" controlados directamente por React, encapsulados y reutilizables.
                               Los componentes React son una forma de reutilizar código. Los componentes "encapsulan"
                               los datos (estados) y funciones (metodos) de los componentes, y son los propios
                               componentes los que administran el estado del propio componente.
                               
                               Cualquier GUI, compuesta de diferentes elementos HTML, se puede dividir en componentes
                               React. La "composicion" de estos componentes React, junto con la "encapsulacion"
                               permite desarrollar cualquier vista dinamica Web.

                               Dado que la lógica de los componentes está escrita en JavaScript en lugar de plantillas,
                               puede pasar fácilmente datos enriquecidos a través de su aplicación y mantener el estado
                               fuera del DOM.

    3.- Reutilizable: No hacemos suposiciones sobre el resto de su pila de tecnología, por lo que puede desarrollar
                      nuevas funciones en React sin tener que reescribir el código existente.

                      React también se puede renderizar en el servidor usando Node y potenciar aplicaciones móviles
                      usando React Native .
*/

/*
Características principales de React:

    1.- Hooks (Ganchos): funciones de React utilizados en los componentes.

    2.- Componentes: documenta los componentes integrados que puede utilizar en su JSX.
    3.- APIs de React: APIs que son útiles para la definicion y el desarrollo de los componentes React.
    4.- Directivas: instrucciones para paquetes compatibles con los componentes del servidor React.
    5.-  DOM Virtual (DOM de React): el React-dom contiene funciones que solo son compatibles con aplicaciones
                                    web (que se ejecutan en el entorno DOM del navegador). Esta sección se divide en lo siguiente:

Hooks : Hooks para aplicaciones web que se ejecutan en el entorno DOM del navegador.
Componentes : React admite todos los componentes HTML y SVG integrados del navegador.
API : el react-dompaquete contiene métodos admitidos solo en aplicaciones web.
API de cliente : las react-dom/clientAPI le permiten representar componentes de React en el cliente (en el navegador).
API de servidor : las react-dom/serverAPI le permiten representar componentes de React en HTML en el servidor.
API heredadas
API heredadas : exportadas desde el reactpaquete, pero no recomendadas para su uso en código recién escrito.
*/


//  React es una Parte de un "Todo", de un conjunto de librerias que crean la aplicacion GUI Web.
/*
    React no se utiliza generalmente aislado, sino que utiliza otras librerias, tecnologias, lenguajes y plataformas,
    que conforman "un todo", una solucion unica a la respuesta de unos requerimientos y necesidades concretas.
    
    Para utilizar en el desarrollo la libreria "React" en una solucion determinada, se debe complementar con otras
    librerías que den respuesta a los "otros"requerimientos en la aplicacion, ya que React se centra únicamente en
    la vista de la aplicacion. Esto brinda un contraste con respecto a utilizar frameworks que traen mucho más de serie.
    
    Ambos enfoques tienen sus ventajas e inconvenientes. React sin embargo por su propia definicion de "libreria"
    javascript es mucho mas flexible que cualquier framework del mercado. Todo lo que puedes hacer en JavaScript,
    puedes hacerlo igual o mejor en React, mas rapidamente y reusable.

    Las ideas presentadas por React han tenido su influencia el desarrollo de frameworks, aunque más importante es que
    nos ha ayudado a entender cómo de bien encaja el pensar en componentes en el desarrollo de aplicaciones web.
*/