import { Acquirer } from "./interface/acquirer.interface";
import { DatabaseRepository } from "./interface/database.interface";

export class ResellerPaymentService {

    readonly respository: DatabaseRepository;

    constructor(respository: DatabaseRepository) {
        this.respository = respository;
        this.respository.connect('user', 'password', 'host', 'port', 'database');
    }

    pay(resellerAcquirer: Acquirer): string {
       this.respository.insert('insert into payment');
       return resellerAcquirer.pay('struct payment')
    }
}
