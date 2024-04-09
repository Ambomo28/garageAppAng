import { Color} from "./color.enum";
import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

@NgModule({
    //Déclarations, imports, providers, etc.

    schemas: [NO_ERRORS_SCHEMA]
})
export class Car{  static id: any;
    model: string;
    brand: string;
    image: string;
    year: number;
    color: Color;
    prix: number;

    
}