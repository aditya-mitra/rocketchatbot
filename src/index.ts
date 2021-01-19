import { config as dotenvConfig } from "dotenv";
import { driver, api } from "@rocket.chat/sdk";

dotenvConfig();

const { ROCKETCHAT_URL, ROCKETCHAT_USER, ROCKETCHAT_PASSWORD } = process.env;

async function main() {
  await driver.connect({ host: ROCKETCHAT_URL, useSsl: false });

  await driver.login({
    username: ROCKETCHAT_USER,
    password: ROCKETCHAT_PASSWORD || "no-password",
  });

  await driver.login({
    username: ROCKETCHAT_USER,
    password: ROCKETCHAT_PASSWORD || "no-password",
  });

  await driver.joinRooms(["general"]);

  await driver.subscribeToMessages();

  await driver.sendToRoom("this is fast hello", "general");
}

main();
