class person{
    nombre:string;
    apellido:string;
    edad:number;
    email:string;

    constructor(nombre_:string,apellido_:string,edad_:number,email_:string){
        this.nombre = nombre_;
        this.apellido = apellido_;
        this.edad = edad_;
        this.email = email_;
    }

    get getNombre():string {return this.nombre;}
    set setNombre(nombre:string) {this.nombre = nombre;}

    get getApellido():string {return this.apellido;}
    set setApellido(apellido:string) {this.apellido = apellido;}

    get getEdad():number {return this.edad;}
    set setEdad(edad:number) {this.edad = edad;}

    get getEmail():string {return this.email;}
    set setEmail(email:string) {this.email = email;}
}

let persona1 = new person('francisco','beltramino',22,'fb@gmail.com')
console.log(persona1.getApellido)



//Herencia

class employee extends person{
    sueldo:number;

    constructor(nombre_:string,apellido_:string,edad_:number,email_:string, sueldo_:number){
        super(nombre_, apellido_, edad_, email_);
        this.sueldo = sueldo_;
    
}
}

let empleado1 = new employee('francisco','beltramino',22, 'fb@gmail.com', 30000);
console.log(empleado1.getEmail)

empleado1.setEdad = 23;
console.log(empleado1.getEdad)


// Clase abstracta

abstract class abstr{

    abstract method1():void
    
    method2():void{
        console.log('Hola')
    }

}

class hereda extends abstr{ //Extender una clase abstracta implica obligatoriamente sobreescribir metodos

    constructor(){
        super()
    }

    method1(): void {
        console.log('Sobreescribiendo el metodo 1')
    }
}