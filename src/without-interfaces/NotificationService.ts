import { injectable } from "tsyringe";
import { EmailNotifcationService } from "./EmailNotificationService";

@injectable()
export class NotificationService {
  constructor(private email: EmailNotifcationService) {}

  send() {
    return this.email.sendEmail();
  }
}
