import { Acquirer } from "../interface/acquirer.interface";

export class Stone implements Acquirer<false> {
    pay(data: any): string {
        console.log('Pay for Stone');
        return 'Pay Stone'
    }
}