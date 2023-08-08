import { MasterCard } from "./acquirer/master-card-acquirer";
import { Visa } from "./acquirer/visa-acquirer";

export class ResellerPaymentService {

    pay(resellerAcquirer: any): string {
        if(resellerAcquirer instanceof MasterCard){
            return resellerAcquirer.payMaster('data')
        } else if(resellerAcquirer instanceof Visa){
            return resellerAcquirer.payVisa('data')
        }
        return 'none payment selected'
    }
}