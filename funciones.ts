function sumar(a:number, b:number):number{ 
    return a + b;
}

//Palabra reservada "function" + name + atributos (si es necesrio) + tipado de regreso (:number);
// Regresa la suma entre los parametros a y b;

let operacion1 = sumar(6,7);
console.log(operacion1)


//Función flecha:

const regresa = ():void => {console.log('Mostrando funcion regresa')}

regresa() //Invocamos la funcion
// --------------------------------------------------------------------
//Funcion flecha con parametros:

const nombre = (a:string):void => {console.log(`Su nombre es ${a}`)}

nombre('Francisco') //Invocamos la función
//----------------------------------------------------------------------
//Funciones con parametros opcionales:

const presentation = (nombre:string, apellido:string, edad?:number) => {
    if(edad){
        console.log(`Su nombre es ${nombre} ${apellido} y tiene ${edad} años.`)
    } else{
        console.log(`Su nombre es ${nombre} ${apellido}.`)
    }
}

presentation('Francisco','Beltramino', 22);
presentation('Juan', 'Perez')

// Funciones con parametros REST

const desert = (cart:string, ...fruit:string[]) => {
    console.log(`El postre se llama ${cart} y es de ${fruit}`)
}

desert('Ensalada de frutas', 'naranja', 'manzana', 'banana', 'kiwi');