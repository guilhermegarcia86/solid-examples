import { ResellerDatabase } from "./interface/reseller-database.interface";
import { ResellerAuth } from "./reseller-auth";

export class ResellerService {

  notifyService: NotifyService
  authService: ResellerAuth
  repositoryService: ResellerDatabase

  constructor(notifyService, authService, repositoryService) {
    this.notifyService = notifyService;
    this.authService = authService;
    this.repositoryService = repositoryService;
  }

  authReseller(username, pass){
    const isAuth = this.authService.login(username, pass)
    if(isAuth) this.notifyService.sendLoginNotification()
  }

  createReseller(reseller){
    //regras de negocio
    return this.repositoryService.createReseller(reseller);
  }

}
