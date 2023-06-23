class NotifyService {

  constructor(service) {
    this.service = service;
  }

  sendLoginNotification() {
    this.service.send(this.username, "Login successful");
  }

  sendWelcomeNotification(user) {
    this.service.send(user.email, "Welcome to our system");
  }
}
