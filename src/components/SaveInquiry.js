import * as S from "../styles/saveInquiry.styles";
import TextInput from "../commons/inputs/textInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { baseUrl } from "../commons/default/baseUrl";
import { accessKey } from "../commons/default/accessKey";
import { useRecoilState } from "recoil";
import { phoneNumberState, userInfoState } from "../commons/store";
import { useNavigate } from "react-router";
import InquiryCheck from "../commons/inquiryCheck/inquiryCheck";

const schema = yup.object({
  location: yup.string().required("필수 입력 사항입니다."),
  color: yup.string().required("필수 입력 사항입니다."),
  width: yup.string().required("필수 입력 사항입니다."),
  height: yup.string().required("필수 입력 사항입니다."),
  quantity: yup.string().required("필수 입력 사항입니다."),
  request: yup.string(),
});

export default function SaveInquiry() {
  const navigate = useNavigate();

  const [userInfo] = useRecoilState(userInfoState);
  const [phone] = useRecoilState(phoneNumberState);
  const [mainFabric, setMainFabric] = useState("직조라벨");
  const [mainForm, setMainForm] = useState("양접이");
  const [careFabric] = useState("실크라벨");
  const [pointFabric, setPointFabric] = useState("직조라벨");

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data, e) => {
    e.preventDefault();

    fetch(`${baseUrl}/saveInquiry`, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        accessKey,
        userInfo: { ...userInfo, phone: phone },
        timestamp: new Date(),
        inquiryInfo: {
          mainLabel: {
            mainFabric,
            mainForm,
          },
          careLabel: {
            careFabric,
            location: data.location,
          },
          pointLabel: {
            pointFabric,
            color: data.color,
          },
          labelSize: {
            width: data.width,
            height: data.height,
          },
          quantity: data.quantity,
          request: data.request,
        },
      }),
    }).then((res) => {
      if (res.ok) {
        alert("견적요청이 완료되었습니다.");
        navigate(`/`);
      }
    });
  };

  return (
    <S.Background>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        <div className="wrapper">
          <S.Title>라벨 정보 입력</S.Title>
          <S.Error>* 표시는 필수 입력 사항 입니다.</S.Error>
          <S.Container>
            <S.LabelBox>
              <S.MainLabel>라벨 타입</S.MainLabel>
              <S.Must>*</S.Must>
            </S.LabelBox>
            <S.SubLabel> 메인 라벨 </S.SubLabel>
            <S.SubClass>[재질]</S.SubClass>
            <InquiryCheck
              setValues={setMainFabric}
              value1={"직조라벨"}
              value2={"실크라벨"}
            />
            <S.SubClass>[형태]</S.SubClass>
            <InquiryCheck
              setValues={setMainForm}
              value1={"양접이"}
              value2={"반접이"}
            />
            <S.SubLabel>케어 라벨</S.SubLabel>
            <S.SubClass>[재질]</S.SubClass>
            <S.InquiryCheck>실크라벨(한종류)</S.InquiryCheck>
            <S.SubClass>[부착위치]</S.SubClass>
            <S.StyledTextarea
              placeholder="자유롭게 작성해주세요."
              {...register("location")}
            />
            <S.Error>{formState.errors.location?.message}</S.Error>
            <S.SubLabel>포인트 라벨</S.SubLabel>
            <S.SubClass>[재질]</S.SubClass>
            <InquiryCheck
              setValues={setPointFabric}
              value1={"직조라벨"}
              value2={"실크라벨"}
            />
            <S.SubClass>[배경색상]</S.SubClass>
            <TextInput
              type={"text"}
              width={300}
              placeholder={"자유롭게 작성해주세요."}
              register={register("color")}
            />
            <S.Error>{formState.errors.color?.message}</S.Error>

            <S.LabelBox>
              <S.MainLabel>라벨 크기</S.MainLabel>
              <S.Must>*</S.Must>
            </S.LabelBox>
            <S.LabelSize>
              <div>
                <S.Number>
                  <TextInput
                    type={"text"}
                    width={95}
                    placeholder={"가로"}
                    register={register("width")}
                  />

                  <S.Unit>X</S.Unit>
                </S.Number>
                <S.Error>{formState.errors.width?.message}</S.Error>
              </div>
              <div>
                <S.Number>
                  <TextInput
                    type={"text"}
                    width={95}
                    placeholder={"세로"}
                    register={register("height")}
                  />

                  <S.Unit>cm</S.Unit>
                </S.Number>
                <S.Error>{formState.errors.height?.message}</S.Error>
              </div>
            </S.LabelSize>
            <S.LabelBox>
              <S.MainLabel>수량</S.MainLabel>
              <S.Must>*</S.Must>
            </S.LabelBox>
            <div>(기본 1000장, 500장 단위)</div>
            <S.Number>
              <TextInput
                type={"text"}
                width={260}
                placeholder={"수량"}
                register={register("quantity")}
              />
              <S.Unit>장</S.Unit>
            </S.Number>
            <S.Error>{formState.errors.quantity?.message}</S.Error>

            <S.LabelBox>
              <S.MainLabel>요청사항</S.MainLabel>
            </S.LabelBox>
            <S.StyledTextarea
              placeholder="요청사항이 있으시면 입력해주세요."
              {...register("request")}
            />
          </S.Container>
          <S.SubmitBtn
            type="submit"
            className="btn_save"
            isActive={formState.isValid}
            disabled={formState.isSubmitting}
          >
            견적요청하기
          </S.SubmitBtn>
        </div>
      </form>
    </S.Background>
  );
}
