import { Reseller } from "./domain/reseller";
import { ResellerDatabase } from "./interface/reseller-database.interface";

export class ResellerDatabaseRepository implements ResellerDatabase{

  resellername: string
  password: string

  constructor(resellername, password) {
    this.resellername = resellername
    this.password = password
    // this.database = new Database();
  }

  authenticate(resellername, pass) {
    console.log("autenticado");
    return true;
  }

  createReseller(reseller: Reseller) {
    // this.database.saveReseller(reseller);
    return reseller
  }

  updateReseller(reseller: Reseller) {
    // this.database.updateReseller(reseller);
    return 0
  }

  deleteReseller(resellerId: string) {
    // this.database.deleteReseller(resellerId);
  }
}
