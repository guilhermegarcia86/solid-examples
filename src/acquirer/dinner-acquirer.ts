import { Acquirer } from "../interface/acquirer.interface";

export class Dinners implements Acquirer {
    pay(data: any): string {
       return 'method'
    }

}