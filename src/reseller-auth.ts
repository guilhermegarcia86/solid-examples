import { ResellerDatabase } from "./interface/reseller-database.interface";

export class ResellerAuth {

  repository: ResellerDatabase

  constructor(repository) {
    this.repository = repository;
  }

  login(username, pass) {
    const isAuthenticated = this.repository.authenticate(username, pass);
    return isAuthenticated;
  }

  logout() {
    console.log('logout user');
  }
}
