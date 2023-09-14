import { Acquirer } from "../interface/acquirer.interface";

export class MasterCard implements Acquirer{
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