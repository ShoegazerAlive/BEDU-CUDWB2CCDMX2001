I

    A. Es el modelo en el que está basada la organización de los onbjetos que se ven en un navegador.
    B. SOn los elementos que a veces pueen ser etiquetas, pero, a veces , dentro del DOM, pueden ser contenido.
    C. Está el evento mouseover que es cuando pasas el cursor sobre un elemento, mouseout que es cuando lo quitas, mousemove que es cuando se realiza algún movimiento del cursor, el evento submit que es cuando se envía algún dato y el evento mousewheel que es cuando se mueve la rueda del mouse.

II. 

   //Archivo JS
   function suma(){

            var num1 = Number(document.getElementbyId("num1").value);
            var num2 = Number(document.getElementbyId("num2").value);
            var ans = num1 + num2;

            document.getElementbyId("ans").value.ans; 


            }

    //Archivo HTML
    <!DOCTYPE html>
        <html>
        <head>
            <title>Suma JS</title>
        </head>
        <body>

            Número 1 <input type="text" id="num1" name=""><br>
            Número 2 <input type="text" id="num2" name=""><br>
            Respuesta <input type="text" name="ans">

            <input type="button" name="" value="Answer" onclick="suma">

        <script type="text/javascript" src="suma.js"></script>
        </body>
        </html>

//Reto Extra

    Sí se podría cambiar la activación de la suma por otro evento, en lugar de que sea un evento click.
