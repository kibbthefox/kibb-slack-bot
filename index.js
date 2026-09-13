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
`*Haii!!!! I'm Kibb, here is the cool stuf i can do!!!:*
/kibb-aboutme - hear me yap about myself
/kibb-meow - mreowwww :3 (I'm bilingual)
/kibb-foxpic - generate UNLIMITED fox pics !!!
/kibb-musicrec - learn about my music taste :D
/kibb-aboutcreator - learn about the person who made bot :O`
  });
});



app.command("/kibb-aboutme", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
` Hewwo!! I'm a fox named Kibb :3
I love music, stars, weather, and doodling!! :D
I don't like loud noises, school, and loneliness :(
I have a buncha cool frens like Crescent and Starfruit!!
I speak cat and fox :P`
  });
});



app.command("/kibb-aboutcreator", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
` Hai! I'm Eoin Toal, and Kibb is my fursona.
I love music, coding, art, and weather.
You can find my music here: https://www.youtube.com/@13UNIT
You can find my coding here: https://github.com/kibbthefox
Have a great day :3
This bot was made for Stardance.`
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



app.command("/kibb-musicrec", async ({ command, ack, respond }) => {
  await ack();
  await respond({ text: `*Here are my music recommendations!*
    - The artist 'WillyRodriguezWastTaken'
    - The album 'Twin Fantasy'
    - The album 'Dark Side of the Moon'
    - The album 'Flower Boy'
    - The album 'MIDI Bunny EP'` });
});



(async () => {
  await app.start();
  console.log("bot is running!");
})();