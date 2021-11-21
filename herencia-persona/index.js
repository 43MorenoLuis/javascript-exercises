class Persona{

    static contadorPersonas = 0;

    constructor( nombre, apellido, edad ){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre( nombre ){
        return this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido( apellido ){
        return this._apellido = apellido;
    }

    get edad(){
        return this._edad;
    }

    set edad( edad ){
        return this._edad = edad;
    }

    toString(){
        return `
            ${ this._idPersona} 
            ${ this._nombre}  
            ${ this._apellido}  
            ${ this._edad}`;
    }
}

class Empleado extends Persona{

    static contadorEmpleados = 0;

    constructor( sueldo, nombre, apellido, edad ){
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo( sueldo ){
        return this._sueldo = sueldo;
    }

    toString(){
        return `${ super.toString() }
                ${ this._idEmpleado }
                ${ this._sueldo }`;
    }
}

class Cliente extends Persona{

    static contadorClientes = 0;

    constructor( nombre, apellido, edad, fechaRegistro ){
        super( nombre, apellido, edad );
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro( fechaRegistro ){
        return this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return `${ super.toString() }
                ${ this._idCliente }
                ${ this._fechaRegistro}`;
    }
}

const persona1 = new Persona( 'Luis', 'Moreno', '22');
console.log( persona1.toString() );

const persona2 = new Empleado( '312323', 'Luis', 'Moreno', '22');
console.log( persona2.toString() );

const persona3 = new Cliente( 'Luis', 'Moreno', '22', '21/12/2019');
console.log( persona3.toString() );