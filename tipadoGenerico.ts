//Función generica

function generic1<T>(dato:T):T{
    return dato;
}

//Clases genericas

class persona<T>{
    nombre: T
    apellido: T

}

//Los objetos que creemos de esta clase serán de tipo Persona, una clase generica que permite definir cualquier
// tipo de dato

//Interfaces genericas

interface personad<T>{
    nombre: T
}

let obj:personad<string> = {nombre: 'Carlos'} //En la implementación si o si pasar el tipo de dato <string>