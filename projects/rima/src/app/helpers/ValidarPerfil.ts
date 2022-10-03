import { JwtHelperService } from "@auth0/angular-jwt";

export class ValidarPerfil{

    nombrePerfil: string;

    constructor(nombrePerfil:string){
        this.nombrePerfil = nombrePerfil;
    }

    get(): boolean{
        const helper = new JwtHelperService();
        const token = localStorage.getItem("ID_TOKEN");
        const decodedToken = helper.decodeToken(token);
        let result = false;
        
        if(decodedToken.roles){
            decodedToken.roles.forEach(rol => {
                if(this.nombrePerfil == rol.uNombrePerfil){
                    result = true;
                }
            });
        }
        return result;
    }

    // get(): boolean{
    //     return false;
    // }
}