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
      </div>
    </div>
  );
}
