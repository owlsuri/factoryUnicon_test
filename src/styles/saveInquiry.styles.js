import styled from "styled-components";

export const Background = styled.div`
  background: linear-gradient(130deg, #f2e5fe, #e0e9fe, #d5f5ff);
  display: flex;
  justify-content: center;
  padding: 150px 0 50px 0;
`;

export const Title = styled.div`
  padding: 10px 0;
  font-size: 25px;
  font-weight: 600;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Error = styled.div`
  color: red;
  font-size: small;
`;
export const LabelBox = styled.div`
  display: flex;
  padding: 50px 0 5px 0;
`;
export const MainLabel = styled.div`
  font-size: 22px;
  font-weight: 600;
`;
export const SubLabel = styled.div`
  width: 350px;
  height: 20px;
  text-align: center;
  background-color: #ebf6ff;
  font-size: 17px;
  font-weight: 600;
  padding: 5px 0;
  margin: 10px 5px 5px 5px;
`;
export const SubClass = styled.div`
  font-weight: 500;
  font-size: 16px;
`;
export const Must = styled.div`
  font-size: 17px;
  font-weight: 700;
  color: red;
`;

export const RadioBox = styled.div`
  width: 230px;
  display: flex;
  padding: 15px 0;
`;
export const Radio = styled.div`
  width: 230px;
`;
export const LabelSize = styled.div`
  display: flex;
`;
export const Number = styled.div`
  display: flex;
  align-items: baseline;
  margin-right: 10px;
`;
export const Unit = styled.div`
  font-size: 20px;
  padding-left: 10px;
`;
export const SubmitBtn = styled.button`
  width: 330px;
  height: 50px;
  background-color: ${(props) => (props.isActive ? "#1565c0" : "#E5E5E5")};
  color: ${(props) => (props.isActive ? "#fff" : "#a6a6a6")};
`;
export const StyledTextarea = styled.textarea`
  width: 300px;
  height: 100px;
  padding: 16px;
  font-size: 16px;
  line-height: 20px;
  resize: none;
  border: 1px solid #a6a6a6;
  margin: 10px 0;
  border-radius: 8px;
`;
export const InquiryCheck = styled.div`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  background-color: #1565c0;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 10px;
  cursor: pointer;
`;
