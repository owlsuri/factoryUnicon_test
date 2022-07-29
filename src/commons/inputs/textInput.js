import styled from "styled-components";

const StyledTextarea = styled.input`
  width: calc(100% - 100px);
  ${(props) => props.width && `width : ${props.width}px`};
  ${(props) => props.height && `height : ${props.height}px`};
  padding: 16px;
  font-size: 16px;
  line-height: 20px;
  resize: none;
  border: 1px solid #a6a6a6;
  margin: 10px 0;
  border-radius: 8px;
`;

export default function TextInput(props) {
  const { type, width, height, onChange, placeholder, register } = props;

  return (
    <StyledTextarea
      type={type}
      width={width}
      height={height}
      placeholder={placeholder}
      onChange={onChange}
      {...register}
    />
  );
}
