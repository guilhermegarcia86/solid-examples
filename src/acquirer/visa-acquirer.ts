import { Acquirer } from "../interface/acquirer.interface";

export class Visa implements Acquirer{
    pay(data: any): string {
        return this.payVisa(data)
    }
    
    private payVisa(data: any): string {
        //
        //
        //
        return 'pay with Visa'
    }
}