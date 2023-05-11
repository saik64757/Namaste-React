import { useEffect, useState } from "react";
import { DetailsApi } from "./constants";
import axios from "axios";

const useRestraunt = (params) => {
  const [restraunt, setrestraunt] = useState(null);

  useEffect(() => {
    fetchResDetails();
  }, []);

  async function fetchResDetails(id) {
    const resDetails = await axios.get(DetailsApi + id);
    return resDetails;
  }

  return restraunt;
};

export default useRestraunt;
