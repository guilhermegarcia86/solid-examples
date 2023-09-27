import { Acquirer } from "../interface/acquirer.interface";

export class MasterCard implements Acquirer{
    authorize(data: any): string {
        console.log('Authorize for Master');
        return 'Authorize for Master'
    }

    pay(data: any): string {
        console.log('Pay for Master');
        return this.payMaster(data)
    }

    private payMaster(data: any): string {
        //
        //
        //
        //
        return 'pay with Master Card'
    }
}