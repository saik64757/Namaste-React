import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestraunt from "../../../utils/useRestraunt";

function RestrauntDetails() {
  // const [restrauntDetails, setrestrauntDetails] = useState();
  const params = useParams();
  const { id } = params;

  // useEffect(() => {
  //   (async () => {
  //     const data = await fetchResDetails(id);
  //     setrestrauntDetails(data.data.data);
  //   })();
  // }, []);

  let res1 = useRestraunt(id);

  console.log(res1 ? res1 : "noData");
  return <h1>RestrauntDetails of : {id}</h1>;
}

export default RestrauntDetails;
