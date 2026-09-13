require("dotenv").config();

const { App } = require("@slack/bolt");
const axios = require("axios");



const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/kibb-help", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
`Haii!!!! I'm Kibb, here is the cool stuf i can do!!!:
/kibb-meow - Mreowwww :3
/kibb-foxpic - generate UNLIMITED fox pics !!!`
  });
});

app.command("/kibb-foxpic", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://randomfox.ca/floof/");
    await respond({ blocks: [ 
        {
        type: "image",
        image_url: response.data.image, 
        alt_text: "cute wittle fox :3"    }
    ]
    });
  } catch (err) {
    await respond({ text: "failed to find foxies :(" });
  }
});

app.command("/kibb-meow", async ({ command, ack, respond }) => {
  await ack();
  await respond({ text: `mrrreeoooow :3` });
});

(async () => {
  await app.start();
  console.log("bot is running!");
})();