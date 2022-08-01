import styled from "styled-components";

export const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  padding-bottom: 30px;
`;
export const HeaderRow = styled.div`
  border-bottom: 1px solid #a6a6a6;
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const Row = styled.div`
  border-bottom: 1px solid #a6a6a6;
  padding: 10px;
  display: flex;
  align-items: center;
  :hover {
    color: #1565c0;
    font-weight: 600;
    cursor: pointer;
  }
`;
export const Col = styled.div`
  width: 70px;
  padding: 0 20px;
  text-align: center;
`;
export const ColHeaderNo = styled.div`
  font-weight: 600;
  width: 70px;
  padding: 0 20px;
  text-align: center;
`;
export const ColHeaderTitle = styled.div`
  font-weight: 600;
  width: 200px;
  padding: 0 20px;
  text-align: center;
`;
export const ColTitle = styled.div`
  width: 200px;
  padding: 0 20px;
  text-align: center;
`;
