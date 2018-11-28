export enum Sexos{
    Masculino = 'Masculino',
    Femenino = 'Femenino',
    Indefinido = 'Indefinido'
  }

export class Persona {

    //Objeto Persona nombre: string  apellidos: string   sexo: enum(masc | fem | indefinido) email: string  edad: number
    //Encapsular los atributosy cuando se defina se inicializa con:
    /*
      nombre="anonimo"
      apellidos=""
      edad=16
      email=""
      sexo="indefinido"
    */

    //Pintar tres personas en el componente (por defecto, yo y al de al lao)

    private _nombre: string;
    private _apellidos: string;
    private _sexo: Sexos;
    private _email: string;
    private _edad: number;

    constructor(){
        this.nombre = 'Anónimo';
        this.apellidos = '';
        this.sexo = Sexos.Indefinido;
        this.edad = 16;
        this.email = '';
    }
    
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }

    public get apellidos(): string {
        return this._apellidos;
    }
    public set apellidos(value: string) {
        this._apellidos = value;
    }

    public get sexo(): Sexos {
        return this._sexo;
    }
    public set sexo(value: Sexos) {
        this._sexo = value;
    }
    
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    
    public get edad(): number {
        return this._edad;
    }
    public set edad(value: number) {
        this._edad = value;
    }

}