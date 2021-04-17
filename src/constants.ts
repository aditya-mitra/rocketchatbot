import {
  IAttachmentField,
  IMessageAttachment,
} from "@rocket.chat/sdk/dist/config/messageInterfaces";

export const message1: string = "bot fast";
export const message2: string = "another hello from faster " + Date.now();
/**
 * message is markdown
 */
export const message3: string = "checking **wrapping** of messages";
export const message4: string = "checking if the margin/padding is right";

export const ma1: IMessageAttachment[] = [
  {
    author_name: "other field",
    author_link: "https://source.unsplash.com/random",
    author_icon: "https://source.unsplash.com/random",
    title_link: "https://codesandbox.io",
    title: "title",
    text: message1,
    color: "red",
  },
  {
    author_name: "other field",
    author_link: "https://source.unsplash.com/random",
    author_icon: "https://source.unsplash.com/random",
    title_link: "https://codesandbox.io",
    title: "ninja turtle",
    text: message2,
    color: "blue",
  },
  {
    author_name: "other field",
    author_link: "https://source.unsplash.com/random",
    author_icon: "https://source.unsplash.com/random",
    title_link: "https://codesandbox.io",
    title: "batman",
    text: message3,
    color: "pink",
  },
  {
    author_name: "other field",
    author_link: "https://source.unsplash.com/random",
    author_icon: "https://source.unsplash.com/random",
    title_link: "https://codesandbox.io",
    title: "green lantern",
    text: "ring and worthy",
    color: "green",
  },
  {
    author_name: "other field",
    author_link: "https://source.unsplash.com/random",
    author_icon: "https://source.unsplash.com/random",
    title_link: "https://codesandbox.io",
    title: "deadshot",
    text: message1,
    color: "yellow",
  },
  {
    author_name: "other",
    author_link: "https://source.unsplash.com/random",
    author_icon: "https://source.unsplash.com/random",
    title_link: "https://codesandbox.io",
    title: "valkyrie",
    text: message3,
    color: "blue",
  },
];

export const messageAttachmentFields1: IAttachmentField[] = [
  {
    short: false,
    title: "field name is very big",
    value: "should have used some lorem ipsum",
  },
  
];

