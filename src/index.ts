import { config as dotenvConfig } from "dotenv";
import { driver, api } from "@rocket.chat/sdk";
import { IMessage } from "@rocket.chat/sdk/dist/config/messageInterfaces";

dotenvConfig();

const {
  ROCKETCHAT_URL = "http://localhost:3000/",
  ROCKETCHAT_USER = "faster-bot",
  ROCKETCHAT_PASSWORD = "superDuperFast",
} = process.env;

const message1: string = "this is fast hello";
const message2: string = "another hello from faster" + Date.now();

async function main() {
  await driver.connect({ host: ROCKETCHAT_URL, useSsl: false });

  await driver.login({
    username: ROCKETCHAT_USER,
    password: ROCKETCHAT_PASSWORD,
  });

  const roomId = await driver.getRoomId("general");

  const message3: IMessage = {
    rid: roomId,
    msg: "this the test demo message recheck 1",
    attachments: [
      {
        title: "dash",
        title_link: "https://codesandbox.io",
        text:
          "**we are going to check if this** message is parsed into _markdown_",
        color: "red",
        image_url:
          "https://images.unsplash.com/photo-1610431301122-1f9a9e3b7769?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      },
    ],
  };

  console.log("the roomId is", roomId);

  await driver.subscribeToMessages();

  await driver.sendToRoomId(message3, roomId);
}

main();
