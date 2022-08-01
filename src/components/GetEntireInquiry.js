import { Background } from "../styles/saveInquiry.styles";
import { baseUrl } from "../commons/default/baseUrl";
import { accessKey } from "../commons/default/accessKey";
import { useEffect, useState } from "react";
import useFetch from "../commons/hooks/useFetch";

export default function GetEntireInquiry() {
  const inquiries = useFetch(
    `${baseUrl}/getEntireInquiry?accessKey=${accessKey}`
  );

  console.log(inquiries["fe8af572-5c64-457c-828a-f57d7fed6208"]);
  return (
    <Background>
      <div className="wrapper">
        <div>data</div>
      </div>
    </Background>
  );
}
