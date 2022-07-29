import * as S from "../styles/saveInquiry.styles";
import TextareaInput from "../commons/inputs/textareaInput";
import TextInput from "../commons/inputs/textInput";

export default function SaveInquiry() {
  return (
    <S.Background>
      <div className="wrapper">
        <S.Title>라벨 정보 입력</S.Title>
        <S.Error>* 표시는 필수 입력 사항 입니다.</S.Error>
        <S.Container>
          <S.LabelBox>
            <S.MainLabel>라벨 타입</S.MainLabel>
            <S.Must>*</S.Must>
          </S.LabelBox>
          <S.SubLabel>- 메인 라벨 -</S.SubLabel>
          <div>[재질]</div>
          <S.RadioBox>
            <S.Radio>
              <input type="radio" name="mainLabel" value="직조라벨" checked />
              직조 라벨
            </S.Radio>
            <S.Radio>
              <input type="radio" name="mainLabel" value="실크라벨" />
              실크 라벨
            </S.Radio>
          </S.RadioBox>
          <div>[형태]</div>
          <S.RadioBox>
            <S.Radio>
              <input type="radio" name="shape" value="양접이" checked />
              양접이
            </S.Radio>
            <S.Radio>
              <input type="radio" name="shape" value="반접이" />
              반접이
            </S.Radio>
          </S.RadioBox>
          <S.SubLabel>- 케어 라벨 -</S.SubLabel>
          <div>[재질]</div>
          <S.RadioBox>
            <S.Radio>
              <input type="radio" name="careLabel" value="실크라벨" checked />
              실크 라벨
            </S.Radio>
          </S.RadioBox>
          <div>[부착위치]</div>
          <TextareaInput
            width={300}
            height={100}
            placeholder={"자유롭게 작성해주세요."}
          />
          <S.SubLabel>- 포인트 라벨 -</S.SubLabel>
          <div>[재질]</div>
          <S.RadioBox>
            <S.Radio>
              <input type="radio" name="pointLabel" value="직조라벨" checked />
              직조 라벨
            </S.Radio>
            <S.Radio>
              <input type="radio" name="pointLabel" value="실크라벨" />
              실크 라벨
            </S.Radio>
          </S.RadioBox>
          <div>[배경색상]</div>
          <TextInput
            type={"text"}
            width={300}
            placeholder={"자유롭게 작성해주세요."}
          />
          <S.LabelBox>
            <S.MainLabel>라벨 크기</S.MainLabel>
            <S.Must>*</S.Must>
          </S.LabelBox>
          <S.LabelSize>
            <S.Number>
              <TextInput type={"number"} width={95} placeholder={"가로"} />
              <S.Unit>X</S.Unit>
            </S.Number>
            <S.Number>
              <TextInput type={"number"} width={95} placeholder={"세로"} />
              <S.Unit>cm</S.Unit>
            </S.Number>
          </S.LabelSize>
          <S.LabelBox>
            <S.MainLabel>수량</S.MainLabel>
            <S.Must>*</S.Must>
          </S.LabelBox>
          <div>기본 1000장, 500장 단위</div>
          <S.Number>
            <TextInput type={"number"} width={260} placeholder={"수량"} />
            <S.Unit>장</S.Unit>
          </S.Number>
          <S.LabelBox>
            <S.MainLabel>요청사항</S.MainLabel>
          </S.LabelBox>
          <TextareaInput
            width={300}
            height={100}
            placeholder={"요청사항이 있으시면 입력해주세요."}
          />
        </S.Container>
        <button className="btn_save">제출하기</button>
      </div>
    </S.Background>
  );
}
