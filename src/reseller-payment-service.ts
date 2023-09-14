import { Acquirer } from "./interface/acquirer.interface";

export class ResellerPaymentService {

    pay(resellerAcquirer: Acquirer): string {
       return resellerAcquirer.pay('struct payment')
    }
}
