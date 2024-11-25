import {singleton} from "tsyringe";

@singleton()
export class EmailNotifcationService {
  sendEmail() {
    return "sending email notification!";
  }
}
