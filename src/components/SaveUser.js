import { useState } from "react";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import TextInput from "../commons/inputs/textInput";
import {
  accessKeyState,
  baseUrlState,
  phoneNumberState,
} from "../commons/store";

export default function SaveUser() {
  const navigate = useNavigate();

  const [accessKey] = useRecoilState(accessKeyState);
  const [phone, setPhone] = useState(phoneNumberState);
  const [baseUrl] = useRecoilState(baseUrlState);
  const [userInfo] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const onClickSave = (e) => {
    e.preventDefault();

    if (!isLoading && phone) {
      setIsLoading(true);
      fetch(`${baseUrl}/saveUser`, {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          accessKey,
          userInfo: { ...userInfo, phone: phone },
        }),
      }).then((res) => {
        if (res.ok) {
          navigate(`/saveInquiry`);
          setIsLoading(false);
        }
      });
    } else {
      alert("전화번호를 입력해주세요.");
    }
  };

  return (
    <div className="background">
      <div className="wrapper">
        <h2>라벨제작</h2>
        <div>견적 받으실 전화번호를 입력해주세요.</div>
        <TextInput
          type={"text"}
          width={250}
          height={5}
          placeholder={"010-1234-5678"}
          onChange={onChangePhone}
        />
        <button
          style={{ opacity: isLoading ? 0.5 : 1 }}
          className="btn_save"
          onClick={onClickSave}
        >
          {isLoading ? "저장중..." : "다음"}
        </button>
      </div>
    </div>
  );
}
