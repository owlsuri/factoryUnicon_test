import { Background } from "../styles/saveInquiry.styles";
import { baseUrl } from "../commons/default/baseUrl";
import { accessKey } from "../commons/default/accessKey";
import useFetch from "../commons/hooks/useFetch";
import * as S from "../styles/getEntireInquiry.styles";
import { useNavigate } from "react-router";

export default function GetEntireInquiry() {
  const navigate = useNavigate();

  const inquiries = useFetch(
    `${baseUrl}/getEntireInquiry?accessKey=${accessKey}`
  );

  const uid = Object.keys(inquiries).map((el) => {
    return el;
  });

  const onClickToDetail = (e) => {
    navigate(`/getSingleInquiry/${e.currentTarget.id}`);
  };

  return (
    <Background>
      <div className="wrapper">
        <S.Title>견적 요청 목록</S.Title>

        <div>
          <S.HeaderRow>
            <S.ColHeaderNo>번호</S.ColHeaderNo>
            <S.ColHeaderTitle>제목</S.ColHeaderTitle>
          </S.HeaderRow>
          {uid ? (
            <>
              {uid.map((el, i) => (
                <div key={i}>
                  <S.Row id={el} onClick={onClickToDetail}>
                    <S.Col>{uid ? uid.length - i : "loading..."}</S.Col>
                    <S.ColTitle>견적요청 드립니다.</S.ColTitle>
                  </S.Row>
                </div>
              ))}
            </>
          ) : (
            "견적 요청이 없습니다😅"
          )}
        </div>
        <button
          className="btn_save"
          onClick={() => {
            navigate("/getUser");
          }}
        >
          회원정보조회
        </button>
      </div>
    </Background>
  );
}
