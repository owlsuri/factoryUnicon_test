import { useState } from "react";
import { accessKey } from "../commons/default/accessKey";
import { baseUrl } from "../commons/default/baseUrl";
import TextInput from "../commons/inputs/textInput";
import * as S from "../styles/getUsers.styles";
import { Background } from "../styles/saveInquiry.styles";

export default function GetUser() {
  const [phone, setPhone] = useState("");
  const [data, setData] = useState([]);
  const [inquiryData, setInquiryData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const onClickSearch = async () => {
    setIsOpen(false);
    setData([]);
    if (phone) {
      try {
        await fetch(`${baseUrl}/getUser?accessKey=${accessKey}&phone=${phone}`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setData(data);
          });
      } catch (error) {
        alert(error.message);
      }
    } else {
      alert("전화번호를 입력해주세요.");
    }
  };

  const onClickShowInquiry = async () => {
    setIsOpen((prev) => !prev);

    try {
      await fetch(
        `${baseUrl}/getSingleInquiry?accessKey=${accessKey}&uid=${data?.inquiries?.[0]}`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setInquiryData(data);
        });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Background>
      <div className="wrapper">
        <S.Title>UserInfo</S.Title>
        <div>조회할 고객의 전화번호를 입력하세요.</div>
        <S.Search>
          <TextInput
            width={200}
            placeholder={"010-0000-0000"}
            onChange={onChangePhone}
          />
          <S.Btn className="btn_save" onClick={onClickSearch}>
            조회
          </S.Btn>
        </S.Search>
        <div>
          <S.Info>
            * 전화번호 :{" "}
            {data?.phone ? data?.phone : "일치하는 정보가 없습니다."}
          </S.Info>
          <S.Info>
            * 견적요청 :{" "}
            {data?.inquiries?.[0] ? (
              <span style={{ color: "#1565c0", fontWeight: 600 }}>
                견적 요청이 있습니다.
              </span>
            ) : (
              "견적요청 정보가 없습니다."
            )}
          </S.Info>
          {data?.inquiries?.[0] && (
            <S.ShowBtn onClick={onClickShowInquiry}>
              견적요청 자세히 보기
            </S.ShowBtn>
          )}
          {isOpen && (
            <div>
              <S.Label>메인라벨</S.Label>
              <div>[재질] : {inquiryData?.mainLabel?.mainFabric}</div>
              <div>[형태] : {inquiryData?.mainLabel?.mainForm}</div>
              <hr />
              <S.Label>케어라벨</S.Label>
              <div>[재질] : {inquiryData?.careLabel?.careFabric}</div>
              <div>[위치] : {inquiryData?.careLabel?.location}</div>
              <hr />
              <S.Label>포인트라벨</S.Label>
              <div>[재질] : {inquiryData?.pointLabel?.pointFabric}</div>
              <div>[색상] : {inquiryData?.pointLabel?.color}</div>
              <hr />
              <S.Label>라벨크기</S.Label>
              <div>[가로] : {inquiryData?.labelSize?.width} cm</div>
              <div>[세로] : {inquiryData?.labelSize?.height} cm</div>
              <hr />
              <S.Label>수량</S.Label>
              <div>{inquiryData?.quantity} 장</div>
              <hr />
              <S.Label>요청사항</S.Label>
              <div>
                {inquiryData?.request
                  ? inquiryData?.request
                  : "요청사항이 없습니다."}
              </div>
            </div>
          )}
        </div>
      </div>
    </Background>
  );
}
