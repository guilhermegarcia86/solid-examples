import { Acquirer } from "../interface/acquirer.interface";

export class MasterCard implements Acquirer{
    authorize(data: any): string {
        return 'Authorize for Master'
    }

    pay(data: any): string {
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