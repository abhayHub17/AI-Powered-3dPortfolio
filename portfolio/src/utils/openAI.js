/* eslint-disable no-unused-vars */
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_APP_OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

export default client;
