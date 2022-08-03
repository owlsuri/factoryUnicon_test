import styled from "styled-components";
import { useNavigate } from "react-router";

const Logo = styled.img`
  width: 200px;
`;

const Welcome = styled.div`
  padding-top: 30px;
  font-size: large;
  font-weight: 600;
`;

const Admin = styled.div`
  width: 100%;
  border-top: 1px solid #a6a6a6;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="background">
      <div className="wrapper">
        <Logo src="/images/fu_logo.png" alt="logo" />
        <Welcome>팩토리유니콘에 오신 것을 환영합니다!</Welcome>
        <button
          className="btn_save"
          onClick={() => {
            navigate("/saveUser");
          }}
        >
          라벨견적받기
        </button>
        <Admin>
          <button
            className="btn_save"
            onClick={() => {
              navigate("/getUser");
            }}
          >
            회원정보조회
          </button>
          <button
            className="btn_save"
            onClick={() => {
              navigate("/getEntireInquiry");
            }}
          >
            견적요청목록
          </button>
        </Admin>
      </div>
    </div>
  );
}
