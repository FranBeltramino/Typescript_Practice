interface Persona{
    
    nombre:string;
    apellido:string;

    imprimir():string
}

const persona2:Persona = {
    nombre: "Francisco",
    apellido: "Beltramino",

    imprimir(){
        return persona2.nombre + ' ' + persona2.apellido;
    }
}

console.log(persona2.nombre)
console.log(persona2.apellido)
console.log(persona2.imprimir())

// Interface con parametros opcionales:

interface rutina{
    lunes:string;
    martes?:string;
    miercoles:string;
    jueves?:string;
    viernes:string
}

const BeltraminoFran = {
    lunes: 'pecho',
    martes: 'espalda',
    miercoles: 'abs',
    jueves: 'brazos',
    viernes: 'piernas',
}

function retornar(BeltraminoFran:rutina):string{
    if (BeltraminoFran.martes && BeltraminoFran.jueves){
        return 'Entrenamiento completo'
    } else {
        return 'Entrenamiento incompleto'
    }
}

console.log(retornar(BeltraminoFran))

//Interfaces con parametros solo lectura

interface Humano{
    readonly name,
    readonly lastname,
    readonly age,
}

//Interfaces como funciones

interface mostrarData{
    (nombre:string, apellido:string, edad:number):void
}

let imprimirA:mostrarData

imprimirA = function(nombre:string,apellido:string,edad:number):void{
    console.log(`${nombre} ${apellido} ${edad}`)

}

imprimirA('cris','sa', 23)