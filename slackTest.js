const { WebClient } = require("@slack/web-api");

const SLACK_APP_TOKEN = "";
const SLACK_CHANNEL_ID = "";

const web = new WebClient(SLACK_APP_TOKEN);

async function sendSlackMessage(message) {
  try {
    // Post a message to the channel
    await web.chat.postMessage({
      channel: SLACK_CHANNEL_ID,
      text: message,
    });
  } catch (error) {
    console.log("send message error!");
    console.log(error);
  }
}

sendSlackMessage("Hello!");