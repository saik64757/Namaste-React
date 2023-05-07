import axios from "axios";
import { CDN_URL } from "./constants";

export async function datares() {
  let data = await axios.get(CDN_URL);
  return data;
}
