import { useState } from "react";
import * as S from "../../styles/InquiryCheck.styles";

export default function InquiryCheck(props) {
  const [isSelect, setIsSelect] = useState([
    { key: "0", value: props.value1, checked: true },
    { key: "1", value: props.value2, checked: false },
  ]);

  const onChangeCheck = (el) => (event) => {
    const temp = isSelect.map((el, idx) => {
      return { ...el, checked: idx === Number(event?.target.id) };
    });
    setIsSelect(temp);
    props.setValues(el.value);
  };

  return (
    <S.Wrapper>
      {isSelect.map((el, idx) => (
        <label className="checkbox" key={el.key}>
          <input
            type="checkbox"
            key={el.key}
            id={idx}
            onChange={onChangeCheck(el)}
            checked={el.checked}
          />
          <S.Value className="checkbox_color">{el.value}</S.Value>
        </label>
      ))}
    </S.Wrapper>
  );
}
