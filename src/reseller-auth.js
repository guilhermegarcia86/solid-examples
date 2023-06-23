class ResellerAuth {
  constructor(repository) {
    this.repository = repository;
  }

  login(username, pass) {
    const isAuthenticated = this.this.repository.authenticate(username, pass);
    return isAuthenticated;
  }

  logout() {
    console.log(`logout user ${this.username}`);
  }
}
