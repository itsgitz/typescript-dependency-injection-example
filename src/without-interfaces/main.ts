import "reflect-metadata";
import { container } from "tsyringe";
import { NotificationService } from "./NotificationService";
import { EmailNotifcationService } from "./EmailNotificationService";

container.registerSingleton(EmailNotifcationService);

const notificationService = container.resolve(NotificationService);

console.log(notificationService.send());
