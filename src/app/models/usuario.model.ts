export class Usuario {

    constructor(
        public nombre: string,
        public correo: string,
        public password: string,
        public img?: string,
        public role?: string,
        public demoID?: string
    ) { }

}
