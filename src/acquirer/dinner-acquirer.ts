import { Acquirer } from "../interface/acquirer.interface";

export class Dinners implements Acquirer {
    authorize(data: any): string {
        console.log('Authorize for Dinners');
        return 'Authorize for Dinners'
    }
    pay(data: any): string {
        console.log('Pay for Dinners');
        return 'Pay Dinners'
    }

}