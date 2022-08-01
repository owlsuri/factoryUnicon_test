import { accessKey } from "../commons/default/accessKey";
import { baseUrl } from "../commons/default/baseUrl";
import { Background } from "../styles/saveInquiry.styles";
import { useLocation, useNavigate } from "react-router";
import useFetch from "../commons/hooks/useFetch";
import { Label } from "../styles/getUsers.styles";
import { Title } from "../styles/getEntireInquiry.styles";

export default function GetSingleInquiry() {
  const location = useLocation();
  const navigate = useNavigate();

  const inquiry = useFetch(
    `${baseUrl}/getSingleInquiry?accessKey=${accessKey}&uid=${location.pathname.slice(
      18
    )}`
  );

  const onClickToList = () => {
    navigate("/getEntireInquiry");
  };

  return (
    <Background>
      <div className="wrapper">
        <Title>견적요청 자세히 보기</Title>
        <div
          style={{
            width: "300px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Label>메인라벨</Label>
          <div>
            <div>[재질] : {inquiry?.mainLabel?.mainFabric}</div>
            <div>[형태] : {inquiry?.mainLabel?.mainForm}</div>
          </div>
          <hr />
          <Label>케어라벨</Label>
          <div>
            <div>[재질] : {inquiry?.careLabel?.careFabric}</div>
            <div>[위치] : {inquiry?.careLabel?.location}</div>
          </div>
          <hr />
          <Label>포인트라벨</Label>
          <div>
            <div>[재질] : {inquiry?.pointLabel?.pointFabric}</div>
            <div>[색상] : {inquiry?.pointLabel?.color}</div>
          </div>
          <hr />
          <Label>라벨크기</Label>
          <div>
            <div>[가로] : {inquiry?.labelSize?.width} cm</div>
            <div>[세로] : {inquiry?.labelSize?.height} cm</div>
          </div>
          <hr />
          <Label>수량</Label>
          <div>{inquiry?.quantity} 장</div>
          <hr />
          <Label>요청사항</Label>
          <div>
            {inquiry?.request ? inquiry?.request : "요청사항이 없습니다."}
          </div>
        </div>
        <button className="btn_save" onClick={onClickToList}>
          목록으로
        </button>
      </div>
    </Background>
  );
}
