//  Pensando en React

/*
    React puede cambiar tu forma de pensar sobre los diseños que miras y las aplicaciones que creas.
    Cuando construyes una interfaz de usuario con React, primero la divides en partes llamadas componentes.
    Luego, describirá los diferentes estados visuales de cada uno de sus componentes. Finalmente, conectará sus componentes para que los datos fluyan a través de ellos. En este tutorial, lo guiaremos a través del proceso de pensamiento de crear una tabla de datos de productos con capacidad de búsqueda con React.


    1.-  Diseno de la maqueta GUI por componentes

    Imagine que ya tiene una API JSON y una maqueta de un diseñador.

    La API JSON devuelve algunos datos similares a estos:

    [
      { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
      { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
      { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
      { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
      { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
      { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ]

    La maqueta se ve así: (ver maqueta de diseno de la aplicacion)

    -------------------------------

*/
//  Pasos de implementacion de la maqueta:.

//  Paso 1: dividir la interfaz de usuario en una jerarquía de "componentes" y "subcomponentes"
/*
            1.1.- Sintesis de la jerarquia de componentes:  Comience dibujando cuadros alrededor de cada
                  componente y subcomponente en la maqueta y nombrándolos. Si trabaja con un diseñador,
                  es posible que ya haya nombrado estos componentes en su herramienta de diseño.

                  Dependiendo de tu experiencia, puedes pensar en dividir un diseño en componentes de
                  diferentes maneras:

            1.2.- Programación (anadir logica funcional): utilice las mismas técnicas para decidir si
                  un componente debe crear una nueva función u objeto. 
            
                  Una de esas técnicas es el "principio de responsabilidad única": lo ideal es que un
                  componente solo haga una cosa. Si termina creciendo, conviene descomponerlo en
                  subcomponentes más pequeños. Por ejemplo, un subcomponente de un componente de una
                  tabla de datos puede mostrar una lista de elementos de pantalla de varios cuadros de
                  texto. Si se agrega un nuevo elemento a la lista de elementos de pantalla, la lista de
                  cuadros de texto no debería cambiar, por lo que podría ser un buen lugar para separarlo.


            1.3.- Estilizado del componente CSS: considere para qué crearía selectores de clases.
                  (Sin embargo, los componentes son un poco menos granulares).


            Diseño : considere cómo organizaría las capas del diseño.

                     Si su JSON está bien estructurado, a menudo encontrará que se asigna naturalmente a
                     la estructura de componentes de su interfaz de usuario. Esto se debe a que los modelos
                     de datos y de interfaz de usuario suelen tener la misma arquitectura de información,
                     es decir, la misma forma. Separe su interfaz de usuario en componentes, donde cada
                     componente coincida con una parte de su modelo de datos.

                     Hay cinco componentes en esta pantalla:


                        1.- FilterableProductTable(gris):       contiene la aplicación completa.
                        2.- SearchBar(azul):                    recibe la entrada del usuario.
                        3.- ProductTable(lavanda):              muestra y filtra la lista según la entrada del usuario.
                        4.- ProductCategoryRow(verde):          muestra un encabezado para cada categoría.
                        5.- ProductRow (amarillo):              muestra una fila para cada producto.

                     Si observa ProductTable(lavanda), verá que el encabezado de la tabla (que contiene
                     las etiquetas "Name" y "Price") no es su propio componente. Esta es una cuestión de
                     preferencia y puedes optar por cualquier opción. Para este ejemplo, es parte del
                     componente "ProductTable", porque aparece dentro de la lista: "ProductTable". Sin embargo,
                     si este encabezado se vuelve complejo (por ejemplo, si agrega clasificación), puede moverlo
                     a su propio componente: "ProductTableHeader".


            Ahora que ha identificado los componentes en la maqueta, hay que organizarlos en una "jerarquía de
            componentes" de la aplicacion. Los componentes que aparecen dentro de otro componente en la maqueta
            deberían aparecer como elementos secundarios en la jerarquía:

                                      1.- FilterableProductTable
                                              2.- SearchBar
                                              2.- ProductTable
                                                      3.- ProductCategoryRow
                                                      4.- ProductRow
*/

//  Paso 2: crea una "versión estática" de la GUI en React
/*
    Ahora que tiene su "jerarquía de componentes" de la aplicacion, es hora de implementar la logica de la propia
    aplicación. El enfoque más sencillo es crear una "versión" que represente la "interfaz de usuario" (GUI) a
    partir de su modelo de datos sin agregar interactividad... ¡todavía! A menudo es más fácil crear primero la
    versión estática y agregar interactividad más tarde. Crear una versión estática requiere escribir mucho y no
    pensar, pero agregar interactividad requiere pensar mucho y no escribir mucho.

    Para crear una versión estática de su aplicación que represente su modelo de datos, querrá crear componentes
    que reutilicen otros componentes y pasen datos mediante "accesorios". Los "accesorios" son una forma de pasar
    datos de padres a hijos. 
    
        Nota.- Si está familiarizado con el concepto de estado, no use estado en absoluto para crear
               esta versión estática. El estado está reservado solo para interactividad, es decir,
               datos que cambian con el tiempo. Dado que esta es una versión estática de la aplicación,
               no lo necesitas.

    Puede construir "de arriba hacia abajo", comenzando con la construcción de los componentes más altos en la
    jerarquía (como "FilterableProductTable") o "de abajo hacia arriba" trabajando desde los componentes más
    bajos (como "ProductRow"). 
    
        Nota.- En ejemplos más simples, suele ser más fácil ir de arriba hacia abajo y, en proyectos más grandes,
               es más fácil ir de abajo hacia arriba.

                1.- FilterableProductTable:
                      2.- SearchBar
                      2.- ProductTable
                            3.- ProductCategoryRow
                            4.- ProductRow

                //  3.- ProductCategoryRow            
                function ProductCategoryRow({ category }) {
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>{rows}</tbody>
                    </table>
                  );
                }

                //  4.- ProductRow
                function ProductRow({ product }) {
                  const {name, price, stocked} = product;

                  const the_name = stocked ? name :
                    <span style={{ color: 'red' }}>
                      {name}
                    </span>;

                  return (
                    <tr>
                      <td>{the_name}</td>
                      <td>{price}</td>
                    </tr>
                  );
                }

                //  2.- SearchBar
                function SearchBar() {
                  return (
                    <form>
                      <input type="text" placeholder="Search..." />
                      <label>
                        <input type="checkbox" />
                        {' '}
                        Only show products in stock
                      </label>
                    </form>
                  );
                }


                // 2.- ProductTable
                function ProductTable({ products }) {
                  const rows = [];
                  let lastCategory = null;

                  products.forEach((product) => {
                    if (product.category !== lastCategory) {
                      rows.push(
                        <ProductCategoryRow
                          category={product.category}
                          key={product.category} />
                      );
                    }
                    rows.push(
                      <ProductRow
                        product={product}
                        key={product.name} />
                    );
                    lastCategory = product.category;
                  });

                  return (
                    <table>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>{rows}</tbody>
                    </table>
                  );
                }

                // 1.- FilterableProductTable
                function FilterableProductTable({ products }) {
                  return (
                    <div>
                      <SearchBar />
                      <ProductTable products={products} />
                    </div>
                  );
                }

          const PRODUCTS = [
            {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
            {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
            {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
            {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
            {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
            {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
          ];

          export default function App() {
            return <FilterableProductTable products={PRODUCTS} />;
          }


    Después de construir los componentes (sin logica ni estados), tendrá una biblioteca de componentes
    reutilizables que representan su modelo de datos. Como se trata de una aplicación estática, los
    componentes solo devolverán JSX. El componente en la parte superior de la jerarquía ( FilterableProductTable)
    tomará su modelo de datos como accesorio. Esto se denomina "flujo de datos unidireccional" porque
    los datos fluyen desde el componente de nivel superior hasta los que se encuentran en la parte inferior
    del árbol de componentes.
*/


//  Paso 3: Analisis y sintesis de la representación mínima pero completa del estado de la interfaz de usuario
/*
    Para que la interfaz de usuario (GUI) de la aplicacion sea "interactiva", se debe permitir que los usuarios
    cambien su modelo de datos subyacente. Para ello se utilizan los "estados" (variables de estado) de los componentes.

    1.- Principio de estado "dry" (seco) => se deben tener el numero minimo, imprescindible de variables de estado
        en el componente, sin repeticiones.
  
        El "estado" de la interfaz de usuario es el conjunto mínimo de datos cambiantes que la aplicación necesita
        recordar. El principio más importante para estructurar el estado es mantenerlo SECO (No lo repitas). Calcule
        la "representación mínima absoluta del estado" que necesita su aplicación y calcule todo lo demás según demanda. Por ejemplo, si está creando una lista de compras, puede almacenar los artículos como una matriz en estado. Si también desea mostrar la cantidad de elementos en la lista, no almacene la cantidad de elementos como otro valor de estado; en su lugar, lea la longitud de su matriz.


    Ahora piense en "todos los "estados" posibles de esta aplicación de ejemplo:

          1.-  Datos origen: La lista original de productos.
          2.-  El texto de búsqueda que ha introducido el usuario.
          3.-  El valor de la casilla de verificación.
          4.-  La lista filtrada de productos.

          ¿Cuáles de estos estados son "dry" y significativos? Identifique los que no lo son:

                A.-  ¿Permanece sin cambios con el tiempo?
                     Si es así, no es estado => datos origen no es "estado".

                B.-  ¿Se transmite "informacion" de uno de los padres a través de accesorios?
                     Si es así, no es estado. => datos origen no es "estado".

                C.-  ¿ Puedes calcularlo en función del estado existente o de los accesorios de tu componente?
                     Si es así, ¡ definitivamente no es estado! => La lista filtrada de productos no es estado


          Probablemente lo que queda es el Estado.

          Repasémoslos uno por uno nuevamente:

              1.- La "lista original" de productos se pasa como accesorios, por lo que no es un estado.
              2.- El "texto de búsqueda" parece ser un estado, ya que cambia con el tiempo y no se puede
                  calcular a partir de nada.
              3.- El "valor de la casilla de verificación" parece ser un estado, ya que cambia con el tiempo
                  y no se puede calcular a partir de nada.
              4.- La "lista filtrada de productos" no es un estado porque se puede calcular tomando la
                  lista original de productos y filtrándola según el texto de búsqueda y el valor de la
                  casilla de verificación.


    BUCEAR PROFUNDO: Props vs Estado

    Hay dos tipos de datos de "modelo" en React: "accesorios" (o props) y "estados" (o state).
    Los dos son muy diferentes:

    1.- Tipo de dato "accesorio" o "props": los "accesorios" (props) son las propiedades de un componente.
        Los accesorios son como argumentos que se pasan a una función. Permiten que un componente principal
        pase datos a un componente secundario y personalice su apariencia.
        
        Por ejemplo, "Form" puede pasar un atributo (accesorio o propiedad) "color" al componente hijo "Button".

    
    2.- Tipo de datos "states": un "state" (estado o variable de estado) es como la memoria de un componente.
        Permite que un componente realice un seguimiento de cierta información y la cambie en respuesta a las
        interacciones (del usuario o de otros componentes).
        
        Por ejemplo, un componente "Button" podría realizar un seguimiento del estado: "isHovered".


    Los "accesorios" y los "estado" son TOTALMENTE diferentes, pero funcionan juntos. Un componente principal
    a menudo mantendrá cierta información en el estado (para poder cambiarla) y la pasará a los componentes
    secundarios como sus "accesorios".
*/


//  Paso 4: Identifique dónde debería vivir su estado.

/*  Después de identificar los datos de "estados" mínimos de la aplicación, se debe entonces identificar qué
    componente es responsable de cambiar cada "estado" o es el "propietario del estado". 
    
        Nota.- Recuerde: React utiliza un flujo de datos unidireccional, pasando datos por la
               jerarquía de componentes desde el componente principal al secundario.


    Para cada "estado" identificado en la aplicacion:

        1.- Identifique el(los) componente(s) que represente algo en función de ese estado.

            Encuentre su componente principal común más cercano: un componente por encima de todos ellos
            en la jerarquía, donde tenga sentido poseer el estado.

        2.- Decida dónde debería "vivir" el "estado": A menudo, puedes poner el estado directamente en su
            padre común. También puede colocar el "estado" en algún componente por encima de su padre común.

            Si no puede encontrar un componente donde tenga sentido poseer el "estado", cree un nuevo
            componente únicamente para mantener el estado y agréguelo en algún lugar de la jerarquía
            encima del componente principal común.


    En el paso anterior, encontró dos variables de "estado" en la aplicacion: 
    
      1.- El "texto de entrada de búsqueda" (search_text)
      2.- El "valor de la casilla de verificación" (stocked?). 
    
    En este ejemplo, siempre aparecen juntos, por lo que tiene sentido colocarlos en el mismo lugar.


    Ahora repasemos nuestra estrategia para ellos:

        1.- Componentes que utilizan el estado:

            1.- Estado "search_text" y "stocked?"": 
            
                1.- "ProductTable": necesita filtrar la lista de productos según ese "estado" (search_text) (texto de búsqueda
                y valor de la casilla de verificación "stocked?").

                2.- "SearchBar": necesita mostrar los dos "estados" (search_text) y (stocked?)

        2.- Encuentre su padre común (componente padre): el primer componente padre que comparten ambos componentes
            es "FilterableProductTable".

        3.- Decida dónde "vive" (se crea, hace cosas y muere) el "estado": mantendremos los dos estados (search_text)
            y (stocked?) en el componente "FilterableProductTable". Luego, pasará el texto del filtro y los valores
            del estado verificados en "FilterableProductTable" que se le pasará al componente "ProductTable".

    Así los dos estados "viviran" len el componente: "FilterableProductTable".


    Agregue estado al componente con el Hook "useState()"". Los ganchos (Hooks) son funciones especiales que te
    permiten "conectar" a React. Agregue dos variables de estado en la parte superior del componente "FilterableProductTable"
    y especifique su estado inicial:

              function FilterableProductTable({ products }) {
                const [filterText, setFilterText] = useState('');
                const [inStockOnly, setInStockOnly] = useState(false);

              Luego, pasa las dos "variables de estado": "filterText" y "inStockOnly" a los componentes hijos:
              "ProductTable" y "SearchBar"como accesorios (props):

              <div>
                <SearchBar 
                  filterText={filterText} 
                  inStockOnly={inStockOnly} />
                <ProductTable 
                  products={products}
                  filterText={filterText}
                  inStockOnly={inStockOnly} />
              </div>

    Puedes empezar a ver cómo se comportará tu aplicación. Edite el valor inicial del estado: "filterTextvalor"
    a useState('fruit') en el código de la zona de pruebas a continuación. Verá tanto el texto de entrada de búsqueda
    como la actualización de la tabla:

              import { useState } from 'react';

              function FilterableProductTable({ products }) {
                const [filterText, setFilterText] = useState('');
                const [inStockOnly, setInStockOnly] = useState(false);

                return (
                  <div>
                    <SearchBar 
                      filterText={filterText} 
                      inStockOnly={inStockOnly} />
                    <ProductTable 
                      products={products}
                      filterText={filterText}
                      inStockOnly={inStockOnly} />
                  </div>
                );
              }

              function ProductCategoryRow({ category }) {
                return (
                  <tr>
                    <th colSpan="2">
                      {category}
                    </th>
                  </tr>
                );
              }

              function ProductRow({ product }) {
                const name = product.stocked ? product.name :
                  <span style={{ color: 'red' }}>
                    {product.name}
                  </span>;

                return (
                  <tr>
                    <td>{name}</td>
                    <td>{product.price}</td>
                  </tr>
                );
              }

              function ProductTable({ products, filterText, inStockOnly }) {
                const rows = [];
                let lastCategory = null;

                products.forEach((product) => {
                  if (
                    product.name.toLowerCase().indexOf(
                      filterText.toLowerCase()
                    ) === -1
                  ) {
                    return;
                  }
                  if (inStockOnly && !product.stocked) {
                    return;
                  }
                  if (product.category !== lastCategory) {
                    rows.push(
                      <ProductCategoryRow
                        category={product.category}
                        key={product.category} />
                    );
                  }
                  rows.push(
                    <ProductRow
                      product={product}
                      key={product.name} />
                  );
                  lastCategory = product.category;
                });

                return (
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                  </table>
                );
              }

              function SearchBar({ filterText, inStockOnly }) {
                return (
                  <form>
                    <input 
                      type="text" 
                      value={filterText} 
                      placeholder="Search..."/>
                    <label>
                      <input 
                        type="checkbox" 
                        checked={inStockOnly} />
                      {' '}
                      Only show products in stock
                    </label>
                  </form>
                );
              }

              const PRODUCTS = [
                {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
                {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
                {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
                {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
                {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
                {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
              ];

              export default function App() {
                return <FilterableProductTable products={PRODUCTS} />;
              }

    Advertencia: proporcionó una propiedad `value` a un campo de formulario sin un controlador `onChange`.
                 Esto generará un campo de solo lectura. Si el campo debe ser mutable, utilice `defaultValue`.
                 De lo contrario, configure "onChange" o "readOnly". en la entrada en el formulario en
                SearchBar (https://786946de.sandpack-bundler-4bw.pages.dev/src/App.js:120:5) en div en
                FilterableProductTable (https://786946de.sandpack-bundler-4bw. páginas.dev/src/App.js:18:5)
                en la aplicación

    Advertencia: proporcionó un accesorio "marcado" a un campo de formulario sin un controlador "onChange".
                 Esto generará un campo de solo lectura. Si el campo debe ser mutable, utilice `defaultChecked`.
                 De lo contrario, configure "onChange" o "readOnly". en la entrada en la etiqueta en el formulario
                 en SearchBar (https://786946de.sandpack-bundler-4bw.pages.dev/src/App.js:120:5) en div en
                 FilterableProductTable (https://786946de.sandpack-bundler- 4bw.pages.dev/src/App.js:18:5)
                en la aplicación


    Tenga en cuenta que editar el formulario aún no funciona. Hay un error de consola en el sandbox anterior que
          explica por qué:

          Console
          You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only
          field.
          
          En la zona de pruebas de arriba, ProductTable le da a SearchBar los accesorios filterText y inStockOnly
          para representar la tabla, la entrada y la casilla de verificación. Por ejemplo, así es como SearchBar
          se completa el valor de entrada:

                    function SearchBar({ filterText, inStockOnly }) {
                      return (
                        <form>
                          <input 
                            type="text" 
                            value={filterText} 
                            placeholder="Search..."/>

        Sin embargo, aún no ha agregado ningún código para responder a las acciones del usuario, como escribir. Este será tu último paso.
/*


//  Paso 5: agregar flujo de datos inverso
/*
    Actualmente, la aplicación se procesa correctamente con accesorios y estado que fluyen hacia abajo en la jerarquía.
    Pero para "cambiar el estado" según la entrada del usuario, deberá admitir que los datos fluyan en sentido
    contrario: los "componentes" del formulario que se encuentran en lo más profundo de la jerarquía deben actualizar
    el estado en el componente "padre": "FilterableProductTable":

      FilterableProductTable  ==  valores de los estados "filterText" y "inStockOnly" ==> componentes "hijos"

      Los datos de los dos estados "viajan" como "accesorios" props en los componentes hijos: SearchBar y ProductTable
    
    
      SearchBar y ProductTable  ==>  FilterableProductTable  ==>  Los datos de cambio de los estados deben "viajar"
                                                                  como "actualizaciones" de los valores de los estados
                                                                  del componente "padre"

    React hace que este flujo de datos sea "explícito", pero requiere un poco más de escritura que el enlace de datos
    bidireccional. Si intenta escribir o marcar la casilla en el ejemplo anterior, verá que React ignora su entrada.
    Esto es intencional. Al escribir <input value={filterText} />, ha configurado el accesorio "value" para el 
    input que siempre sea igual al estado "filterText" (pasado desde el componente padre FilterableProductTable.
    Como el componente "filterText" el estado nunca se establece, la entrada nunca cambia.


    Desea que cada vez que el usuario cambie las entradas del formulario, el estado se actualice para reflejar esos
    cambios. El "estado" es propiedad del componente: "FilterableProductTable", por lo que sólo él puede llamar
    a la funcion de cambio de estado: "setFilterText" y "setInStockOnly".
    
    Para permitir que el componente "hijo": "SearchBar" pueda actualizar el estado que se le pasa como accesorio,
    se deben pasar tambien las funciones de actualizacion dev estados: "setFilterText" y "setInStockOnly" a SearchBar
    como "accesorios":

              function FilterableProductTable({ products }) {
                const [filterText, setFilterText] = useState('');
                const [inStockOnly, setInStockOnly] = useState(false);

                return (
                  <div>
                    <SearchBar 
                      filterText={filterText} 
                      inStockOnly={inStockOnly}
                      onFilterTextChange={setFilterText}
                      onInStockOnlyChange={setInStockOnly} />


    Dentro del componente: "SearchBar", coloque los "controladores de eventos" correspondientes: "onChange"
    y establecerá el estado principal a partir de ellos:

                    function SearchBar({
                      filterText,
                      inStockOnly,
                      onFilterTextChange,
                      onInStockOnlyChange
                    }) {
                      return (
                        <form>
                          <input
                            type="text"
                            value={filterText}
                            placeholder="Search..."
                            onChange={(e) => onFilterTextChange(e.target.value)}
                          />
                          <label>
                            <input
                              type="checkbox"
                              checked={inStockOnly}
                              onChange={(e) => onInStockOnlyChange(e.target.checked)}


    ¡Ahora la aplicación funciona completamente!


aplicación.js


import { useState } from 'react';

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly} 
        onFilterTextChange={setFilterText} 
        onInStockOnlyChange={setInStockOnly} />
      <ProductTable 
        products={products} 
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;


*/