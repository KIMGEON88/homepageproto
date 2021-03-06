import styled from "styled-components";
import "../Styles/css/App.css";

import MainCarousel from "../Function/MainCarousel";
import MainReviewCarousel from "../Function/MainReviewCarousel";

import ReactPlayer from "react-player/youtube";

const ContentsBoxOneContainer = styled.div`
  width: 100%;
  height: 60vw;
  display: flex;
  position: absolute;
  top: 0;
  z-index: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: gray;
`;

const ContentsBoxTwoContainer = styled.div`
  width: 100%;
  height: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #00ffd6;
`;

const ContentsBoxThreeContainer = styled.div`
  width: 100%;
  height: 35vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
`;

const ContentsBoxFourContainer = styled.div`
  width: 100%;
  height: 55vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const ContentsBoxFiveContainer = styled.div`
  width: 100%;
  height: 15vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;

const ContentsBoxSixContainer = styled.div`
  width: 100%;
  height: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const ContentsBoxSevenContainer = styled.div`
  width: 100%;
  height: 45vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const ContentsBoxEightContainer = styled.div`
  width: 100%;
  height: 55vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const ContentsBoxNineContainer = styled.div`
  width: 100%;
  height: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #00ffd6;
`;

const TextSizeOne = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 7.5vw;
  color: #f6f6f6;
  margin-top: 12vw;
`;
const TextSizeTwo = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 4vw;
  color: #f6f6f6;
`;

const TextSizeThree = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 2.7vw;
  color: #101010;
`;

const TextSizeFour = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 1.7vw;
  color: #101010;
  margin-top: 63vw;
`;
const TextSizeFive = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 2.5vw;
  color: #101010;
`;

const TextSizeSix = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 2.5vw;
  color: #101010;
`;

const TextSizeSeven = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 3.5vw;
  color: #101010;
`;

const TextSizeEight = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 1.5vw;
  color: #00ffd6;
`;

const TextSizeNine = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 3.5vw;
  color: #f6f6f6;
`;

const TextSizeTen = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 1vw;
  color: #f6f6f6;
`;

const TextSizeEleven = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 1.2vw;
  color: #00ffd6;
`;

const TextSizeTwelve = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 1.2vw;
  color: #101010;
`;

const TextSizeThirteen = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 3vw;
  color: #00887c;
`;

const TextSizeFourteen = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 2vw;
  color: #101010;
  margin-top: 8vw;
`;
const TextSizeFifteen = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 3.5vw;
  color: #101010;
`;

const TextSizeSixteen = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 1.5vw;
  color: #101010;
  margin-top: 1vw;
`;

const TextSizeSeventeen = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 1.5vw;
  color: #101010;
`;

const TextSizeEightteen = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 1vw;
  color: #101010;
`;

const TextSizeNineteen = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 1.5vw;
  color: #101010;
`;

const TextSizeTwenty = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 2vw;
  color: #101010;
  margin-top: 2vw;
`;
const TextSizeTwentyOne = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 3.5vw;
  color: #101010;
`;

const BlackBoxWrapper = styled.div`
  width: 25vw;
  height: 15vw;
  background-color: #101010;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ApplyButton = styled.button`
  width: 15vw;
  height: 2.5vw;
  background-color: #101010;
  border-radius: 1vw;
  border-color: #00ffd6;
  cursor: pointer;
  margin-top: 1.5vw;
`;

const ApplyBlackButton = styled.button`
  all: unset;
  width: 20vw;
  height: 4vw;
  background-color: #101010;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const MiddleTextBox = styled.div`
  display: flex;
  height: 100%;
  width: 20vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const VideoPlayWrapper = styled.div`
  width: 40vw;
  height: 25vw;
  display: flex;
  align-items: center;
  justify-items: center;
  background-color: #101010;
  margin-top: 4vw;
`;

const ColorBoxWrapper = styled.div`
  width: 20vw;
  height: 15vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-items: start;
  padding: 2vw;
  ${({ color }) => {
    return color ? `background-color: ${color}` : null;
  }}
`;

const MapWrapper = styled.div`
  width: 60vw;
  height: 40vw;
  background-color: gray;
  margin: 1.5vw;
`;

const Main = () => {
  return (
    <>
      <ContentsBoxOneContainer>
        <div
          style={{
            width: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "start",
          }}
        >
          <TextSizeOne>KGA</TextSizeOne>
          <TextSizeTwo>
            Kyungil
            <text style={{ color: "#00ffd6" }}>{` `}Game Academy</text>
          </TextSizeTwo>
          <div
            style={{
              width: "44vw",
              height: "3.5vw",
              backgroundColor: "#00ffd6",
              marginTop: "0.5vw",
              marginLeft: "0.5vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextSizeThree>??????????????? ???????????? ????????? ????????????</TextSizeThree>
          </div>
        </div>
      </ContentsBoxOneContainer>
      <ContentsBoxTwoContainer>
        <TextSizeFour>????????? ????????? ????????? ??? ??????</TextSizeFour>
        <TextSizeFive>????????? ???????????? ????????? ????????????</TextSizeFive>
      </ContentsBoxTwoContainer>
      <div
        style={{
          width: "100%",
          height: "3vw",
          backgroundColor: "#f4f4f4",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "0",
            height: "0",
            borderTop: "3vw solid #00ffd6",
            borderBottom: "3vw solid none",
            borderRight: "2vw solid transparent",
            borderLeft: "2vw solid  transparent",
          }}
        ></div>
      </div>
      <ContentsBoxThreeContainer>
        <MainCarousel></MainCarousel>
      </ContentsBoxThreeContainer>
      <ContentsBoxFourContainer>
        <TextSizeSix>KGA??? ??????</TextSizeSix>
        <div
          style={{
            width: "40vw",
            height: "4.5vw",
            backgroundColor: "#00ffd6",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextSizeSeven>?????? ?????? ????????? ????????????</TextSizeSeven>
        </div>
        <div
          style={{
            width: "80vw",
            height: "35vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: "2vw",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "50%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <BlackBoxWrapper>
              <TextSizeEight>????????????????????????</TextSizeEight>
              <TextSizeNine>???????????????</TextSizeNine>
              <TextSizeTen>??? ????????? ???????????? Unity 3D ??????</TextSizeTen>
              <ApplyButton>
                <TextSizeEleven>????????? ??????</TextSizeEleven>
              </ApplyButton>
            </BlackBoxWrapper>
            <BlackBoxWrapper>
              <TextSizeEight>????????????????????????</TextSizeEight>
              <TextSizeNine>?????? ??????</TextSizeNine>
              <TextSizeTen>?????? ?????????????????? ???????????????</TextSizeTen>
              <ApplyButton>
                <TextSizeEleven>????????? ??????</TextSizeEleven>
              </ApplyButton>
            </BlackBoxWrapper>
            <BlackBoxWrapper>
              <TextSizeEight>????????????????????????</TextSizeEight>
              <TextSizeNine>AR / VR</TextSizeNine>
              <TextSizeTen>????????? ????????? ?????? ??????</TextSizeTen>
              <ApplyButton>
                <TextSizeEleven>????????? ??????</TextSizeEleven>
              </ApplyButton>
            </BlackBoxWrapper>
          </div>
          <div
            style={{
              width: "67%",
              height: "50%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <BlackBoxWrapper>
              <TextSizeEight>K-????????? ????????????</TextSizeEight>
              <TextSizeNine>????????????</TextSizeNine>
              <TextSizeTen>????????? ??? ????????? ????????? ??????</TextSizeTen>
              <ApplyButton>
                <TextSizeEleven>????????? ??????</TextSizeEleven>
              </ApplyButton>
            </BlackBoxWrapper>
            <BlackBoxWrapper>
              <TextSizeEight>K-????????? ????????????</TextSizeEight>
              <TextSizeNine>????????????</TextSizeNine>
              <TextSizeTen>?????? ????????? ????????? ????????????</TextSizeTen>
              <ApplyButton>
                <TextSizeEleven>????????? ??????</TextSizeEleven>
              </ApplyButton>
            </BlackBoxWrapper>
          </div>
        </div>
      </ContentsBoxFourContainer>
      <ContentsBoxFiveContainer>
        <div
          style={{
            width: "90%",
            height: "15vw",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <MiddleTextBox>
            <TextSizeTwelve>?????? ????????? ?????????</TextSizeTwelve>
            <TextSizeThirteen>10,000???</TextSizeThirteen>
          </MiddleTextBox>
          <MiddleTextBox>
            <TextSizeTwelve>?????????</TextSizeTwelve>
            <TextSizeThirteen>90%</TextSizeThirteen>
          </MiddleTextBox>
          <MiddleTextBox>
            <TextSizeTwelve>?????? ?????? ??????</TextSizeTwelve>
            <TextSizeThirteen>3,500??????</TextSizeThirteen>
          </MiddleTextBox>
          <MiddleTextBox>
            <TextSizeTwelve>?????? ?????? ??????</TextSizeTwelve>
            <TextSizeThirteen>1??????</TextSizeThirteen>
          </MiddleTextBox>
        </div>
      </ContentsBoxFiveContainer>
      <ContentsBoxSixContainer>
        <VideoPlayWrapper>
          <ReactPlayer
            url="https://youtu.be/dR8YaZLBmTQ"
            width="40vw"
            height="25vw"
          />
        </VideoPlayWrapper>
        <TextSizeFourteen>?????? ?????????</TextSizeFourteen>
        <TextSizeFifteen>KGA??? ???????????? ?????? ??????</TextSizeFifteen>
        <div
          style={{
            width: "70%",
            height: "25vw",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <ColorBoxWrapper color={"#b5fff3"}>
            <div
              style={{
                width: "1.5vw",
                height: "1.5vw",
                backgroundColor: "#101010",
                borderRadius: "2vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#f6f6f6",
              }}
            >
              1
            </div>
            <TextSizeSixteen>???????????? ????????? ????????????</TextSizeSixteen>
            <TextSizeSeventeen>????????? ?????? ????????????</TextSizeSeventeen>
            <div
              style={{
                width: "2vw",
                height: "0.2vw",
                backgroundColor: "#101010",
                marginTop: "1vw",
                marginBottom: "1vw",
              }}
            ></div>
            <TextSizeEightteen>
              ?????? ?????? ????????? ???????????? ?????????.
            </TextSizeEightteen>
            <TextSizeEightteen>
              KGA ???????????? 60%??? ?????????????????????.
            </TextSizeEightteen>
          </ColorBoxWrapper>
          <ColorBoxWrapper color={"#73ffe8"}>
            <div
              style={{
                width: "1.5vw",
                height: "1.5vw",
                backgroundColor: "#101010",
                borderRadius: "2vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#f6f6f6",
              }}
            >
              2
            </div>
            <TextSizeSixteen>????????? ?????? ??????</TextSizeSixteen>
            <TextSizeSeventeen>????????? ????????????</TextSizeSeventeen>
            <div
              style={{
                width: "2vw",
                height: "0.2vw",
                backgroundColor: "#101010",
                marginTop: "1vw",
                marginBottom: "1vw",
              }}
            ></div>
            <TextSizeEightteen>
              ????????? ?????? ???????????? ????????????.
            </TextSizeEightteen>
          </ColorBoxWrapper>
          <ColorBoxWrapper color={"#00ffd6"}>
            <div
              style={{
                width: "1.5vw",
                height: "1.5vw",
                backgroundColor: "#101010",
                borderRadius: "2vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#f6f6f6",
              }}
            >
              3
            </div>
            <TextSizeSixteen>????????? ?????????</TextSizeSixteen>
            <TextSizeSeventeen>???????????????</TextSizeSeventeen>
            <div
              style={{
                width: "2vw",
                height: "0.2vw",
                backgroundColor: "#101010",
                marginTop: "1vw",
                marginBottom: "1vw",
              }}
            ></div>
            <TextSizeEightteen>????????? ?????? ???????????????</TextSizeEightteen>
            <TextSizeEightteen>
              ???????????? ???????????? ????????? ????????????.
            </TextSizeEightteen>
          </ColorBoxWrapper>
        </div>
        <ApplyBlackButton>
          <text
            style={{
              color: "#f6f6f6",
              fontFamily: "SEBANG-Gothic-Bold",
              fontSize: "1.7vw",
            }}
          >
            ?????? ????????????
          </text>
          <text
            style={{
              color: "#f6f6f6",
              fontFamily: "SEBANG-Gothic-Bold",
              fontSize: "1.7vw",
              marginLeft: "1.5vw",
            }}
          >{`>`}</text>
        </ApplyBlackButton>
      </ContentsBoxSixContainer>
      <ContentsBoxSevenContainer>
        <MainReviewCarousel></MainReviewCarousel>
      </ContentsBoxSevenContainer>
      <ContentsBoxEightContainer>
        <TextSizeFifteen>KGA ????????? ???</TextSizeFifteen>
        <MapWrapper></MapWrapper>
        <TextSizeNineteen>
          ????????? ????????? ???????????? 651 ???????????? 4??? ????????????????????????
        </TextSizeNineteen>
        <TextSizeNineteen>
          ????????? 2??? ???????????? ?????? 20m | 02-479-4050
        </TextSizeNineteen>
      </ContentsBoxEightContainer>
      <ContentsBoxNineContainer>
        <TextSizeTwenty>IT ????????? ?????????</TextSizeTwenty>
        <TextSizeTwentyOne>KGA??? ???????????? ???????????????</TextSizeTwentyOne>
        <ApplyBlackButton>
          <text
            style={{
              color: "#f6f6f6",
              fontFamily: "SEBANG-Gothic-Bold",
              fontSize: "1.7vw",
            }}
          >
            ??????????????????
          </text>
          <text
            style={{
              color: "#f6f6f6",
              fontFamily: "SEBANG-Gothic-Bold",
              fontSize: "1.7vw",
              marginLeft: "1.5vw",
            }}
          >{`>`}</text>
        </ApplyBlackButton>
      </ContentsBoxNineContainer>
    </>
  );
};

export default Main;
