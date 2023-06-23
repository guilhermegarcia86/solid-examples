class ResellerService {
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
    return this.repositoryService.createReseller(reseller);
  }

}
