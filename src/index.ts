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
    // msg: "this the test demo message recheck 2",
    attachments: [
      {
        author_name: "dash",
        author_link: "https://source.unsplash.com/random",
        author_icon: "https://source.unsplash.com/random",
        // title_link: "https://codesandbox.io",
        // title: "codesanbox",
        text:
          "**we are going to check if this** message is parsed into _markdown_. Making sure this **message is long enough** to check that the `message` is *_not_* `wrapped`.",
        color: "red",
      },
    ],
  };

  console.log("the roomId is", roomId);

  await driver.subscribeToMessages();

  await driver.sendToRoomId(message3, roomId);
}

main();
