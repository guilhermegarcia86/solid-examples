import { Dinners } from './acquirer/dinner-acquirer';
import { MasterCard } from './acquirer/master-card-acquirer';
import { Visa } from './acquirer/visa-acquirer';
import { Stone } from './acquirer/stone-acquirer';
import { ResellerPaymentService } from './reseller-payment-service';

const dinners = new Dinners();
const master = new MasterCard();
const visa = new Visa();
const stone = new Stone();

const service = new ResellerPaymentService();

service.pay(stone);
service.pay(master);
service.pay(visa);
service.pay(dinners);