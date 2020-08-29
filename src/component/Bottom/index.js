import React, { useState, useEffect } from "react";
import "./index.less";
import AxiosData from "@/utils/axios";
import { showBottomDescUrl } from "@/config/urls";

const Bottom = () => {
  const [bottomDesc, setBottomDesc] = useState({});
  const queryBottomDesc = () => {
    AxiosData.get(showBottomDescUrl)
      .then((res) => {
        setBottomDesc(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    queryBottomDesc();
  }, []);
  return (
    <div className="copy-right">
      <p>{bottomDesc.coptRight}</p>
      <p>{bottomDesc.addr}</p>
      <p>{bottomDesc.tech}</p>
    </div>
  );
};

export default Bottom;
