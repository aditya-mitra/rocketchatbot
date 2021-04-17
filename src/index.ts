import { driver } from "@rocket.chat/sdk";
import { IMessage } from "@rocket.chat/sdk/dist/config/messageInterfaces";

import { generateMessageAttachments } from "./faker";

const {
  ROCKETCHAT_URL = "http://localhost:3000/",
  ROCKETCHAT_USER = "faster-bot",
  ROCKETCHAT_PASSWORD = "superDuperFast",
} = process.env;

async function main() {
  await driver.connect({ host: ROCKETCHAT_URL, useSsl: false });

  await driver.login({
    username: ROCKETCHAT_USER,
    password: ROCKETCHAT_PASSWORD,
  });

  const roomId = await driver.getRoomId("general");

  const sendmessage: IMessage = {
    rid: roomId,
    // msg: "this the test demo message recheck 2",
    attachments: generateMessageAttachments(1,undefined,true),
  };

  console.log("the roomId is", roomId);

  await driver.subscribeToMessages();

  await driver.sendToRoomId(sendmessage, roomId);
}

main();
