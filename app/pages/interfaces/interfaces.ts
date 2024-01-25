export interface Users{
    id: number;
    username: string;
    password :string;
    rut:string;
    role: string;
    isactive: boolean

}
export interface Iasistencias{
    id: number;
    nombre: string;
    apellido:string;
    rut:string;
    seccion:string;

}

export interface Iasistencia{
    nombre: string;
    apellido:string;
    rut:string;
    seccion:string;

}

export interface Iregistrar{
    id: number;
    username: string;
    password: string;
    rut: string;
    asignatura: string;
    role: string;
    isactive: boolean
}
    export interface IPalabras{
        id:number;
        username: string;
        palabra: string;
        hora:string;
    }
    
    //post
    export interface IPalabra{
        username: string;
        palabra: string;
        hora:string;
}

export interface IregistrarP{
    id: number;
    username: string;
    password: string;
    rut: string;
    role: string;
    isactive: boolean
}



