import {
  IAttachmentField,
  IMessageAttachment,
} from "@rocket.chat/sdk/dist/config/messageInterfaces";
import faker from "faker";

function randomColor() {
  const colors = ["red", "green", "pink", "yellow", "blue"];
  const rand = Math.floor(Math.random() * 5);
  return colors[rand];
}

function generateMessageFields(
  random?: boolean,
  noOfFields: number = 8
): IAttachmentField[] {
  const fields: IAttachmentField[] = [];
  const limit = random ? Math.floor(Math.random() * 5) : noOfFields;

  for (let i = 0; i < limit; i++) {
    const field: IAttachmentField = {
      short: false,
      title: faker.commerce.productMaterial(),
      value: faker.commerce.productName(),
    };
    fields.push(field);
  }
  return fields;
}

export function generateMessageAttachments(
  noOfAttachments: number = 3,
  textLength = 7,
  addFields: boolean = false
): IMessageAttachment[] {
  const messageAttachements: IMessageAttachment[] = [];
  for (let i = 0; i < noOfAttachments; i++) {
    const attachment: IMessageAttachment = {
      author_name: faker.name.findName(),
      author_link: faker.internet.url(),
      author_icon: faker.image.imageUrl(),
      title: faker.company.companyName(),
      text: faker.lorem.words(textLength),
      color: randomColor(),
    };

    if (addFields) {
      attachment.fields = generateMessageFields();
    }

    messageAttachements.push(attachment);
  }
  return messageAttachements;
}
