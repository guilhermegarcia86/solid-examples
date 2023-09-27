import { Acquirer } from "../interface/acquirer.interface";

export class Visa implements Acquirer<true>{
    authorize(data: any): string {
        console.log('authorize with Visa');
        return 'authorize with Visa'
    }
    pay(data: any): string {
        return this.payVisa(data)
    }
    
    private payVisa(data: any): string {
        console.log('pay with Visa');
        return 'pay with Visa'
    }
}