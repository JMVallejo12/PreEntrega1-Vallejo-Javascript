

// Ingresar el nombre

alert("Bienvenido a nuestro sistema de control de stock, por el momento tenemos solo un producto, pero cuando la empresa crezca introduciremos más en nuestra base de datos")


nombre = prompt("Por favor ingresa tu nombre")

let alfajores = 10;


// funcion para sumar stock

function sumar_stock(num1,num2){

    resultado = num1 + num2

    

    return resultado

}

// Funcion para restar el sotck
function restar_stock(num1,num2){

    resultado = num1 - num2

    

    return resultado

}



// Funcion de menu

function menu (){

   op = prompt("Bienvenido '"+ nombre +"' al menu. 1- Sumar stock. 2- Restar stock.")

   if (op == "1"){

        // funcion para sumar

        cantidad = prompt("Ingresa la cantidad de alfajores que quieres sumar al stock:")

        // Pasando de string a int

        cantidad = parseInt(cantidad,10)


        // Llamando a la funcion, pasando como parametros la variable global

        alfajores = sumar_stock(alfajores,cantidad)

        alert("La cantidad de alfajores es: '" + alfajores + "' ")
        


   }

   if (op == "2"){

        // funcion para restar
        cantidad = prompt("Ingresa la cantidad de alfajores que quieres restar al stock:")

        cantidad = parseInt(cantidad,10)

        alfajores = restar_stock(alfajores, cantidad)

        alert("La cantidad de alfajores es: '" + alfajores + "' ")

        // Se evito poner comentarios porque basicamente es lo mismo que lo de arriba solo que alreves
   }

}


// Inicializar el sistema

while(1<3){

    menu()

}




