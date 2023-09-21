import { Acquirer } from "../interface/acquirer.interface";

export class Dinners implements Acquirer {
    authorize(data: any): string {
        return 'Authorize for Dinners'
    }
    pay(data: any): string {
       return 'method'
    }

}