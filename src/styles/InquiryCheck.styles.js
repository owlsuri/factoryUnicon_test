import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  /* 체크박스 인풋 숨김 */
  .checkbox input {
    display: none;
  }
  /* 원 사이 간격 */
  .checkbox {
    margin: 20px 10px;
  }

  /* 체크 되었을때 */
  .checkbox input:checked + .checkbox_color {
    width: 150px;
    height: 35px;
    border-radius: 5px;
    background-color: #1565c0;
    color: #fff;
  }
`;

export const Value = styled.div`
  width: 150px;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #1565c0;
  color: #1565c0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
