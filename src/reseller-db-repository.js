class ResellerDatabaseRepository {
  constructor(resellername, password) {
    this.database = new Database();
  }

  authenticate(resellername, pass) {
    console.log("autenticado");
    return true;
  }

  createReseller(reseller) {
    this.database.saveReseller(reseller);
  }

  updateReseller(reseller) {
    this.database.updateReseller(reseller);
  }

  deleteReseller(resellerId) {
    this.database.deleteReseller(resellerId);
  }
}
