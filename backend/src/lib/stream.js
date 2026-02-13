import { StreamChat } from "stream-chat";
import { ENV } from "./env.js";

if (!apiKey || !apiSecret) {
  console.error("STREAM_API_KEY or STREAM_API_SECRET is missing");
}

export const upsertStreamUser = async (userData) => {
  try {
    await chatClient.upsertStreamUser(userData);
    console.log("Stream user upserted successfully:", userData);
  } catch (error) {
    console.error("Error upserting Stream user:", error);
  }
};

export const deleteStreamUser = async (userId) => {
  try {
    await chatClient.deleteStreamUser(userId);
    console.log("Stream user deleted successfully:", userId);
  } catch (error) {
    console.error("Error deleting the Stream user:", error);
  }
};
