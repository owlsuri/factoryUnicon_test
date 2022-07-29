import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 150px;
  cursor: pointer;
`;

export default function Header() {
  const navigation = useNavigate();
  const locationNow = useLocation();

  if (locationNow.pathname === "/") return null;
  return (
    <Wrapper>
      <Logo
        src="/images/fu_logo.png"
        alt="logo"
        onClick={() => {
          navigation("/");
        }}
      />
    </Wrapper>
  );
}
