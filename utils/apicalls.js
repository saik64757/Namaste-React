import axios from "axios";
import { CDN_URL, DetailsApi } from "./constants";

export async function datares() {
  let data = await axios.get(CDN_URL);
  return data;
}

// export async function fetchResDetails(id) {
//   const resDetails = await axios.get(DetailsApi + id);
//   return resDetails;
// }
