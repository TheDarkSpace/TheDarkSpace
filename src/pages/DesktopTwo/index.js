import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Button,
  Line,
  List,
  Stack,
  Slider,
  PagerIndicator,
} from "components";

const DesktopTwoPage = () => {
  function handleNavigate1() {
    window.location.href = "https://twitter.com/login/";
  }

  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column className="bg-white_A700 font-poppins items-end justify-end mx-[auto] lg:pt-[21px] xl:pt-[24px] pt-[28px] 3xl:pt-[33px] w-[100%]">
        <Column className="items-end w-[95%]">
          <Row className="items-center w-[95%]">
            <Img
              src="images/img_group.png"
              className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] w-[12%]"
              alt="Group"
            />
            <Text className="font-medium lg:ml-[465px] xl:ml-[531px] ml-[598px] 3xl:ml-[718px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]">
              Home Cricket How it works About Contact
            </Text>
            <Button
              className="font-medium lg:ml-[38px] xl:ml-[44px] ml-[50px] 3xl:ml-[60px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[10%]"
              shape="RoundedBorder19"
              size="md"
              variant="OutlineGray900"
            >
              Join now
            </Button>
          </Row>
          <div className="lg:mt-[59px] xl:mt-[67px] mt-[76px] 3xl:mt-[91px] overflow-auto overflow-x-auto w-[97%]">
            <Row className="items-center justify-between w-[100%]">
              <Button
                className="font-bold lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-center w-[13%]"
                variant="GradientBluegray700Black900"
              >
                Cricket
              </Button>
              <Button className="font-bold lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-center w-[13%]">
                Kabaddi
              </Button>
              <Button className="font-bold lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-center w-[13%]">
                Shuttle
              </Button>
              <Button className="font-bold lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-center w-[13%]">
                E-Sports
              </Button>
              <Button className="font-bold lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-center w-[13%]">
                Ko-Koo
              </Button>
              <Button className="font-bold lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-center w-[13%]">
                Ko-Koo
              </Button>
            </Row>
          </div>
          <Row className="items-center 3xl:mt-[117px] lg:mt-[76px] xl:mt-[87px] mt-[98px] w-[95%]">
            <Column className="bg-gray_50 items-center lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] rounded-radius20 w-[39%]">
              <Row className="items-end xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[81%]">
                <Column className="w-[87%]">
                  <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                    10SCORE Gully Cricket League
                  </Text>
                  <Text className="font-medium xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                    Group stage - Matchday 2 of 10
                  </Text>
                </Column>
                <Text className="bg-red_700_19 font-semibold lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:px-[11px] xl:px-[13px] px-[15px] 3xl:px-[18px] py-[3px] rounded-radius4 xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-red_700 w-[55px]">
                  Live
                </Text>
              </Row>
              <Column className="items-center lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[78%]">
                <Row className="items-center w-[100%]">
                  <div className="bg-bluegray_100 lg:h-[62px] xl:h-[71px] h-[79px] 2xl:h-[80px] 3xl:h-[95px] rounded-radius50 lg:w-[61px] xl:w-[70px] w-[79px] 3xl:w-[94px]"></div>
                  <Text className="font-black italic lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-red_700 w-[auto]">
                    45/02
                  </Text>
                  <Text className="font-black italic lg:ml-[31px] xl:ml-[36px] ml-[41px] 3xl:ml-[49px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-black_900 w-[auto]">
                    V/S
                  </Text>
                  <Text className="font-black italic lg:ml-[35px] xl:ml-[40px] ml-[45px] 3xl:ml-[54px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-red_700 w-[auto]">
                    --/--
                  </Text>
                  <div className="bg-bluegray_100 lg:h-[62px] xl:h-[71px] h-[79px] 2xl:h-[80px] 3xl:h-[95px] lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] rounded-radius50 lg:w-[61px] xl:w-[70px] w-[79px] 3xl:w-[94px]"></div>
                </Row>
                <Row className="items-center justify-between lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] w-[99%]">
                  <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                    V Warriors
                  </Text>
                  <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                    A Warriors
                  </Text>
                </Row>
              </Column>
              <Line className="bg-black_900_19 h-[1px] lg:mt-[22px] xl:mt-[25px] mt-[29px] 3xl:mt-[34px] w-[1px]" />
              <Text className="font-medium xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900_d8 w-[auto]">
                {"View Scorecard >"}
              </Text>
            </Column>
            <Column
              className="bg-cover bg-repeat items-center lg:ml-[45px] xl:ml-[51px] ml-[58px] 3xl:ml-[69px] w-[57%]"
              style={{ backgroundImage: "url('images/img_group21.png')" }}
            >
              <div className="bg-gradient1  lg:h-[235px] xl:h-[268px] h-[301px] 2xl:h-[302px] 3xl:h-[362px] rounded-radius20 w-[100%]"></div>
            </Column>
          </Row>
          <Row className="items-center lg:mt-[63px] xl:mt-[72px] mt-[81px] 3xl:mt-[97px] w-[95%]">
            <Column className="bg-black_900 lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px] rounded-radius20 w-[39%]">
              <Row className="items-center justify-end lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] mt-[4px] w-[94%]">
                <Text className="font-bold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                  Points Table
                </Text>
                <Line className="bg-gradient2  h-[1px] lg:ml-[24px] xl:ml-[27px] ml-[31px] 3xl:ml-[37px] w-[1px]" />
              </Row>
              <Row className="items-center lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[88%]">
                <Text className="font-semibold xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                  Teams
                </Text>
                <Text className="font-semibold lg:ml-[152px] xl:ml-[174px] ml-[196px] 3xl:ml-[235px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                  M
                </Text>
                <Text className="font-semibold lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                  W
                </Text>
                <Text className="font-semibold lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                  L
                </Text>
                <Text className="font-semibold lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                  PTS
                </Text>
                <Text className="font-semibold lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                  NRR
                </Text>
              </Row>
              <List
                className="gap-[0] min-h-[auto] lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[89%]"
                orientation="vertical"
              >
                <Row className="items-center xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
                  <div className="bg-bluegray_100 lg:h-[21px] xl:h-[25px] h-[27px] 2xl:h-[28px] 3xl:h-[33px] rounded-radius50 lg:w-[21px] xl:w-[24px] w-[27px] 3xl:w-[32px]"></div>
                  <Text className="font-semibold lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    A Warriors
                  </Text>
                  <Text className="font-semibold xl:ml-[111px] ml-[125px] 3xl:ml-[150px] lg:ml-[97px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    2
                  </Text>
                  <Text className="font-semibold lg:ml-[21px] xl:ml-[24px] ml-[28px] 3xl:ml-[33px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    2
                  </Text>
                  <Text className="font-semibold lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    0
                  </Text>
                  <Text className="font-semibold lg:ml-[17px] xl:ml-[19px] ml-[22px] 3xl:ml-[26px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    4
                  </Text>
                  <Text className="font-semibold lg:ml-[29px] xl:ml-[33px] ml-[38px] 3xl:ml-[45px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    +1.25
                  </Text>
                </Row>
                <Row className="items-center xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
                  <div className="bg-bluegray_100 lg:h-[21px] xl:h-[25px] h-[27px] 2xl:h-[28px] 3xl:h-[33px] rounded-radius50 lg:w-[21px] xl:w-[24px] w-[27px] 3xl:w-[32px]"></div>
                  <Text className="font-semibold lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    A Warriors
                  </Text>
                  <Text className="font-semibold xl:ml-[111px] ml-[125px] 3xl:ml-[150px] lg:ml-[97px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    2
                  </Text>
                  <Text className="font-semibold lg:ml-[21px] xl:ml-[24px] ml-[28px] 3xl:ml-[33px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    2
                  </Text>
                  <Text className="font-semibold lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    0
                  </Text>
                  <Text className="font-semibold lg:ml-[17px] xl:ml-[19px] ml-[22px] 3xl:ml-[26px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    4
                  </Text>
                  <Text className="font-semibold lg:ml-[29px] xl:ml-[33px] ml-[38px] 3xl:ml-[45px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    +1.25
                  </Text>
                </Row>
                <Row className="items-center xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
                  <div className="bg-bluegray_100 lg:h-[21px] xl:h-[25px] h-[27px] 2xl:h-[28px] 3xl:h-[33px] rounded-radius50 lg:w-[21px] xl:w-[24px] w-[27px] 3xl:w-[32px]"></div>
                  <Text className="font-semibold lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    A Warriors
                  </Text>
                  <Text className="font-semibold xl:ml-[111px] ml-[125px] 3xl:ml-[150px] lg:ml-[97px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    2
                  </Text>
                  <Text className="font-semibold lg:ml-[21px] xl:ml-[24px] ml-[28px] 3xl:ml-[33px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    2
                  </Text>
                  <Text className="font-semibold lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    0
                  </Text>
                  <Text className="font-semibold lg:ml-[17px] xl:ml-[19px] ml-[22px] 3xl:ml-[26px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    4
                  </Text>
                  <Text className="font-semibold lg:ml-[29px] xl:ml-[33px] ml-[38px] 3xl:ml-[45px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    +1.25
                  </Text>
                </Row>
              </List>
              <Row className="items-center mb-[2px] lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[89%]">
                <div className="bg-bluegray_100 lg:h-[21px] xl:h-[25px] h-[27px] 2xl:h-[28px] 3xl:h-[33px] rounded-radius50 lg:w-[21px] xl:w-[24px] w-[27px] 3xl:w-[32px]"></div>
                <Text className="font-semibold lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                  A Warriors
                </Text>
                <Text className="font-semibold xl:ml-[111px] ml-[125px] 3xl:ml-[150px] lg:ml-[97px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                  2
                </Text>
                <Text className="font-semibold lg:ml-[21px] xl:ml-[24px] ml-[28px] 3xl:ml-[33px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                  2
                </Text>
                <Text className="font-semibold lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                  0
                </Text>
                <Text className="font-semibold lg:ml-[17px] xl:ml-[19px] ml-[22px] 3xl:ml-[26px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                  4
                </Text>
                <Stack className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[29px] xl:ml-[33px] ml-[38px] 3xl:ml-[45px] w-[7%]">
                  <Text className="absolute font-semibold xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    +1.25
                  </Text>
                  <Img
                    src="images/img_play.png"
                    className="absolute lg:h-[10px] xl:h-[11px] h-[12px] 2xl:h-[13px] 3xl:h-[15px] left-[3%] top-[6%] w-[58%]"
                    alt="play"
                  />
                </Stack>
              </Row>
            </Column>
            <Column className="bg-gray_50 items-center lg:ml-[45px] xl:ml-[51px] ml-[58px] 3xl:ml-[69px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] rounded-radius20 w-[57%]">
              <Row className="items-center lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] w-[81%]">
                <Column className="w-[85%]">
                  <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                    10SCORE Gully Cricket League
                  </Text>
                  <Text className="font-medium xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                    Group stage - Matchday 3 of 10
                  </Text>
                </Column>
                <Text className="bg-black_900_0c font-semibold xl:px-[10px] px-[12px] 3xl:px-[14px] lg:px-[9px] py-[3px] rounded-radius4 xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 w-[89px]">
                  Upcoming
                </Text>
              </Row>
              <Row className="items-center justify-between lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] w-[95%]">
                <Img
                  src="images/img_vector.png"
                  className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] w-[2%]"
                  alt="Vector"
                />
                <Img
                  src="images/img_vector_black_900.png"
                  className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] w-[2%]"
                  alt="Vector One"
                />
              </Row>
              <Column className="items-center lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[79%]">
                <Row className="justify-between w-[100%]">
                  <div className="bg-bluegray_100 lg:h-[62px] xl:h-[71px] h-[79px] 2xl:h-[80px] 3xl:h-[95px] mt-[2px] rounded-radius50 lg:w-[61px] xl:w-[70px] w-[79px] 3xl:w-[94px]"></div>
                  <Text className="font-black italic lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] lg:text-[31px] xl:text-[35px] text-[40px] 3xl:text-[48px] text-black_900 w-[auto]">
                    V/S
                  </Text>
                  <div className="bg-bluegray_100 lg:h-[62px] xl:h-[71px] h-[79px] 2xl:h-[80px] 3xl:h-[95px] mb-[2px] rounded-radius50 lg:w-[61px] xl:w-[70px] w-[79px] 3xl:w-[94px]"></div>
                </Row>
                <Row className="justify-between lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[99%]">
                  <Text className="font-semibold mt-[2px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                    V Warriors
                  </Text>
                  <Text className="font-semibold mb-[2px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                    A Warriors
                  </Text>
                </Row>
              </Column>
              <Line className="bg-black_900_19 h-[1px] lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] w-[1px]" />
              <Text className="font-medium lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900_d8 w-[auto]">
                {"View Match Deatils >"}
              </Text>
            </Column>
          </Row>
          <List
            className="gap-[100px] 3xl:gap-[120px] lg:gap-[77px] xl:gap-[88px] grid grid-cols-3 min-h-[auto] lg:mt-[63px] xl:mt-[72px] mt-[81px] 3xl:mt-[97px] w-[95%]"
            orientation="horizontal"
          >
            <Column className="bg-gray_50 items-center justify-end xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius15 w-[100%]">
              <Column className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[86%]">
                <Row className="items-end justify-evenly w-[100%]">
                  <Column className="w-[72%]">
                    <Text className="font-semibold xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                      10SCORE Gully Cricket League
                    </Text>
                    <Text className="font-medium lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-black_900 w-[auto]">
                      Group stage - Matchday 2 of 10
                    </Text>
                  </Column>
                  <Button
                    className="font-semibold mb-[3px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center w-[28%]"
                    shape="RoundedBorder4"
                    size="sm"
                    variant="FillBlack90019"
                  >
                    Completed
                  </Button>
                </Row>
                <Row className="justify-between lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[100%]">
                  <div className="bg-bluegray_100 lg:h-[62px] xl:h-[71px] h-[79px] 2xl:h-[80px] 3xl:h-[95px] rounded-radius50 lg:w-[61px] xl:w-[70px] w-[79px] 3xl:w-[94px]"></div>
                  <Text className="font-black italic lg:mt-[24px] xl:mt-[27px] mt-[31px] 3xl:mt-[37px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
                    V/S
                  </Text>
                  <div className="bg-bluegray_100 lg:h-[62px] xl:h-[71px] h-[79px] 2xl:h-[80px] 3xl:h-[95px] rounded-radius50 lg:w-[61px] xl:w-[70px] w-[79px] 3xl:w-[94px]"></div>
                </Row>
                <Row className="items-center justify-between lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] w-[99%]">
                  <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                    V Warriors
                  </Text>
                  <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                    V Warriors
                  </Text>
                </Row>
              </Column>
              <Line className="bg-black_900_19 h-[1px] lg:mt-[26px] xl:mt-[30px] mt-[34px] 3xl:mt-[40px] w-[1px]" />
              <Text className="font-medium xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900_d8 w-[auto]">
                {"View Scorecard >"}
              </Text>
            </Column>
            <Column className="bg-gray_50 items-center justify-end xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius15 w-[100%]">
              <Column className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[86%]">
                <Row className="items-end justify-evenly w-[100%]">
                  <Column className="w-[72%]">
                    <Text className="font-semibold xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                      10SCORE Gully Cricket League
                    </Text>
                    <Text className="font-medium lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-black_900 w-[auto]">
                      Group stage - Matchday 2 of 10
                    </Text>
                  </Column>
                  <Button
                    className="font-semibold mb-[3px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center w-[28%]"
                    shape="RoundedBorder4"
                    size="sm"
                    variant="FillBlack90019"
                  >
                    Completed
                  </Button>
                </Row>
                <Row className="justify-between lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[100%]">
                  <div className="bg-bluegray_100 lg:h-[62px] xl:h-[71px] h-[79px] 2xl:h-[80px] 3xl:h-[95px] rounded-radius50 lg:w-[61px] xl:w-[70px] w-[79px] 3xl:w-[94px]"></div>
                  <Text className="font-black italic lg:mt-[24px] xl:mt-[27px] mt-[31px] 3xl:mt-[37px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
                    V/S
                  </Text>
                  <div className="bg-bluegray_100 lg:h-[62px] xl:h-[71px] h-[79px] 2xl:h-[80px] 3xl:h-[95px] rounded-radius50 lg:w-[61px] xl:w-[70px] w-[79px] 3xl:w-[94px]"></div>
                </Row>
                <Row className="items-center justify-between lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] w-[99%]">
                  <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                    V Warriors
                  </Text>
                  <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                    V Warriors
                  </Text>
                </Row>
              </Column>
              <Line className="bg-black_900_19 h-[1px] lg:mt-[26px] xl:mt-[30px] mt-[34px] 3xl:mt-[40px] w-[1px]" />
              <Text className="font-medium xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900_d8 w-[auto]">
                {"View Scorecard >"}
              </Text>
            </Column>
            <Column className="bg-gray_50 items-center justify-end xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius15 w-[100%]">
              <Column className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[86%]">
                <Row className="items-end justify-evenly w-[100%]">
                  <Column className="w-[72%]">
                    <Text className="font-semibold xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                      10SCORE Gully Cricket League
                    </Text>
                    <Text className="font-medium lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-black_900 w-[auto]">
                      Group stage - Matchday 2 of 10
                    </Text>
                  </Column>
                  <Button
                    className="font-semibold mb-[3px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center w-[28%]"
                    shape="RoundedBorder4"
                    size="sm"
                    variant="FillBlack90019"
                  >
                    Completed
                  </Button>
                </Row>
                <Row className="justify-between lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[100%]">
                  <div className="bg-bluegray_100 lg:h-[62px] xl:h-[71px] h-[79px] 2xl:h-[80px] 3xl:h-[95px] rounded-radius50 lg:w-[61px] xl:w-[70px] w-[79px] 3xl:w-[94px]"></div>
                  <Text className="font-black italic lg:mt-[24px] xl:mt-[27px] mt-[31px] 3xl:mt-[37px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
                    V/S
                  </Text>
                  <div className="bg-bluegray_100 lg:h-[62px] xl:h-[71px] h-[79px] 2xl:h-[80px] 3xl:h-[95px] rounded-radius50 lg:w-[61px] xl:w-[70px] w-[79px] 3xl:w-[94px]"></div>
                </Row>
                <Row className="items-center justify-between lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] w-[99%]">
                  <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                    V Warriors
                  </Text>
                  <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                    V Warriors
                  </Text>
                </Row>
              </Column>
              <Line className="bg-black_900_19 h-[1px] lg:mt-[26px] xl:mt-[30px] mt-[34px] 3xl:mt-[40px] w-[1px]" />
              <Text className="font-medium xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900_d8 w-[auto]">
                {"View Scorecard >"}
              </Text>
            </Column>
          </List>
          <Stack className="lg:h-[478px] xl:h-[547px] h-[614px] 2xl:h-[615px] 3xl:h-[738px] 3xl:mt-[112px] lg:mt-[73px] xl:mt-[83px] mt-[94px] w-[95%]">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              slidesToShow={1}
              activeIndex={sliderState}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              ref={sliderRef}
              className="absolute w-[100%]"
              items={[...Array(4)].map(() => (
                <>
                  <Column className="bg-gray_50 lg:p-[25px] xl:p-[29px] p-[33px] 3xl:p-[39px] rounded-radius20">
                    <Text className="font-bold italic leading-[normal] lg:ml-[30px] xl:ml-[34px] ml-[39px] 3xl:ml-[46px] lg:text-[31px] xl:text-[35px] text-[40px] 3xl:text-[48px] text-black_900 w-[49%]">
                      Get to know the profiles of our
                      <br />
                      Champions.
                    </Text>
                    <Row className="items-center justify-between lg:mb-[37px] xl:mb-[42px] mb-[48px] 3xl:mb-[57px] lg:ml-[30px] xl:ml-[34px] ml-[39px] 3xl:ml-[46px] lg:mt-[40px] xl:mt-[46px] mt-[52px] 3xl:mt-[62px] w-[94%]">
                      <Img
                        src="images/img_rectangle78.png"
                        className="lg:h-[256px] xl:h-[292px] h-[328px] 2xl:h-[329px] 3xl:h-[394px] rounded-radius15 w-[20%]"
                        alt="RectangleSeventyEight"
                      />
                      <Img
                        src="images/img_rectangle79.png"
                        className="lg:h-[256px] xl:h-[292px] h-[328px] 2xl:h-[329px] 3xl:h-[394px] rounded-radius15 w-[20%]"
                        alt="RectangleSeventyNine"
                      />
                      <Img
                        src="images/img_rectangle80.png"
                        className="lg:h-[256px] xl:h-[292px] h-[328px] 2xl:h-[329px] 3xl:h-[394px] rounded-radius15 w-[20%]"
                        alt="RectangleEighty"
                      />
                      <Img
                        src="images/img_rectangle78.png"
                        className="lg:h-[256px] xl:h-[292px] h-[328px] 2xl:h-[329px] 3xl:h-[394px] rounded-radius15 w-[20%]"
                        alt="RectangleEightyTwo"
                      />
                    </Row>
                  </Column>
                </>
              ))}
              Indicator={({ isActive }) => {
                if (isActive) {
                  return (
                    <div className="inline-block cursor-pointer w-[18px] h-[10px] bg-black_900 relative rounded-radius5" />
                  );
                }
                return (
                  <div
                    className="inline-block cursor-pointer w-[30px] h-[10px] bg-bluegray_100 relative rounded-radius5"
                    role="button"
                    tabIndex={0}
                  />
                );
              }}
            />
            <PagerIndicator
              className="absolute bottom-[5%] h-[10px] right-[44%] w-[max-content]"
              count={4}
              activeCss="inline-block cursor-pointer w-[18px] h-[10px] bg-black_900 relative rounded-radius5"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer w-[30px] h-[10px] bg-bluegray_100 relative rounded-radius5"
              sliderRef={sliderRef}
              selectedWrapperCss="2xl:mx-[5px] 3xl:mx-[6px] inline-block lg:mx-[3px] mx-[5.00px] xl:mx-[4px]"
              unselectedWrapperCss="2xl:mx-[5px] 3xl:mx-[6px] inline-block lg:mx-[3px] mx-[5.00px] xl:mx-[4px]"
            />
          </Stack>
          <Text className="font-bold italic lg:mt-[52px] xl:mt-[60px] mt-[68px] 3xl:mt-[81px] lg:text-[31px] xl:text-[35px] text-[40px] 3xl:text-[48px] text-black_900 w-[auto]">
            Blog
          </Text>
          <List
            className="lg:gap-[31px] xl:gap-[36px] gap-[41px] 3xl:gap-[49px] grid grid-cols-2 min-h-[auto] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[95%]"
            orientation="horizontal"
          >
            <Row className="bg-gray_50 items-center justify-between rounded-radius20 w-[100%]">
              <Stack
                className="bg-cover bg-repeat lg:h-[299px] xl:h-[342px] h-[384px] 2xl:h-[385px] 3xl:h-[462px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[51%]"
                style={{ backgroundImage: "url('images/img_group22.png')" }}
              >
                <div className="absolute bg-black_900 lg:h-[20px] xl:h-[23px] h-[25px] 2xl:h-[26px] 3xl:h-[31px] left-[0] rounded-radius125 top-[1%] w-[22%]"></div>
                <Text className="absolute capitalize font-medium left-[3%] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 top-[0] w-[auto]">
                  Article
                </Text>
              </Stack>
              <Column className="w-[44%]">
                <Text className="font-bold leading-[140.00%] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_901 w-[100%]">
                  10SCORE Gully Cricket day
                  <br />
                  01 Match Deatils
                </Text>
                <Row className="xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[67%]">
                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_600 w-[auto]">
                    10SCORE
                  </Text>
                  <div className="bg-gray_600 h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] rounded-radius50 xl:w-[3px] lg:w-[3px] w-[4px]"></div>
                  <Text className="font-medium lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                    Augest 01,2022
                  </Text>
                </Row>
                <Text className="font-normal leading-[180.00%] lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_800 w-[93%]">
                  At accumsan condimentum donec dictumst eros, tempus in diam.
                  Ornare gravida quis eu blandit lectus vestibulum egestas.
                </Text>
                <Row className="items-center lg:mt-[33px] xl:mt-[38px] mt-[43px] 3xl:mt-[51px] w-[41%]">
                  <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                    Read more
                  </Text>
                  <Img
                    src="images/img_user.png"
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] ml-[2px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="user"
                  />
                </Row>
              </Column>
            </Row>
            <Row className="bg-gray_50 items-center justify-between pr-[1px] rounded-radius20 w-[100%]">
              <Stack
                className="bg-cover bg-repeat lg:h-[299px] xl:h-[342px] h-[384px] 2xl:h-[385px] 3xl:h-[462px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[51%]"
                style={{ backgroundImage: "url('images/img_group22.png')" }}
              >
                <div className="absolute bg-black_900 lg:h-[20px] xl:h-[23px] h-[25px] 2xl:h-[26px] 3xl:h-[31px] left-[0] rounded-radius125 top-[1%] w-[22%]"></div>
                <Text className="absolute capitalize font-medium left-[3%] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 top-[0] w-[auto]">
                  Article
                </Text>
              </Stack>
              <Column className="w-[44%]">
                <Text className="font-bold leading-[140.00%] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_901 w-[100%]">
                  10SCORE Gully Cricket day
                  <br />
                  02 Match Deatils
                </Text>
                <Row className="xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[66%]">
                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_600 w-[auto]">
                    10SCORE
                  </Text>
                  <div className="bg-gray_600 h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] rounded-radius50 xl:w-[3px] lg:w-[3px] w-[4px]"></div>
                  <Text className="font-medium lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                    Augest 01,2022
                  </Text>
                </Row>
                <Text className="font-normal leading-[180.00%] lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_800 w-[93%]">
                  At accumsan condimentum donec dictumst eros, tempus in diam.
                  Ornare gravida quis eu blandit lectus vestibulum egestas.
                </Text>
                <Row className="items-center lg:mt-[33px] xl:mt-[38px] mt-[43px] 3xl:mt-[51px] w-[41%]">
                  <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                    Read more
                  </Text>
                  <Img
                    src="images/img_user.png"
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] ml-[2px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="user One"
                  />
                </Row>
              </Column>
            </Row>
          </List>
          <Column
            className="bg-cover bg-repeat items-center xl:mt-[112px] mt-[127px] 3xl:mt-[152px] lg:mt-[98px] w-[95%]"
            style={{
              backgroundImage: "url('images/img_group22_230X1310.png')",
            }}
          >
            <Column className="bg-gradient3  items-end justify-center lg:p-[54px] xl:p-[62px] p-[70px] 3xl:p-[84px] rounded-radius20 w-[100%]">
              <Button
                className="font-semibold 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center w-[20%]"
                shape="RoundedBorder15"
                size="lg"
                variant="FillWhiteA700"
              >
                Contact us
              </Button>
            </Column>
          </Column>
        </Column>
        <Column className="font-inter items-center xl:mt-[112px] mt-[127px] 3xl:mt-[152px] lg:mt-[98px] w-[100%]">
          <footer className="bg-gray_902 w-[100%]">
            <Column className="lg:mb-[22px] xl:mb-[25px] mb-[29px] 3xl:mb-[34px] lg:mt-[35px] xl:mt-[40px] mt-[45px] 3xl:mt-[54px] mx-[auto] w-[86%]">
              <Row className="w-[92%]">
                <Img
                  src="images/img_group_red_700.png"
                  className="lg:h-[27px] xl:h-[31px] h-[34px] 2xl:h-[35px] 3xl:h-[41px] lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] w-[14%]"
                  alt="Group One"
                />
                <Text className="font-bold lg:ml-[362px] xl:ml-[414px] ml-[466px] 3xl:ml-[559px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-white_A700 w-[auto]">
                  Sport 01
                </Text>
                <Text className="font-bold ml-[105px] 3xl:ml-[126px] lg:ml-[81px] xl:ml-[93px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-white_A700 w-[auto]">
                  Sport 01
                </Text>
                <Text className="font-bold xl:ml-[101px] ml-[114px] 3xl:ml-[136px] lg:ml-[88px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-white_A700 w-[auto]">
                  Sport 01
                </Text>
              </Row>
              <Row className="items-center lg:mt-[22px] xl:mt-[25px] mt-[29px] 3xl:mt-[34px] w-[91%]">
                <Text className="font-normal leading-[normal] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700 w-[37%]">
                  <span className="text-white_A700 font-inter">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ornare cursus se
                  </span>
                  <span className="text-white_A700 font-inter">
                    d nunc eget dictum Sed ornare cursus sed nunc eget dictumd
                    nunc eget dictum Sed ornare cursus sed nunc eget dictum{" "}
                  </span>
                </Text>
                <Column className="items-center lg:ml-[160px] xl:ml-[183px] ml-[206px] 3xl:ml-[247px] w-[44%]">
                  <Row className="w-[100%]">
                    <Img
                      src="images/img_arrowright.png"
                      className="h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[4px] w-[1%]"
                      alt="arrowright"
                    />
                    <Text className="font-bold mb-[1px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                      Cricket
                    </Text>
                    <Img
                      src="images/img_arrowright.png"
                      className="h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] xl:ml-[111px] ml-[125px] 3xl:ml-[150px] lg:ml-[97px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[1%]"
                      alt="arrowright One"
                    />
                    <Text className="font-bold lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] mt-[1px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                      Cricket
                    </Text>
                    <Img
                      src="images/img_arrowright.png"
                      className="h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:ml-[104px] xl:ml-[119px] ml-[134px] 3xl:ml-[160px] mt-[4px] w-[1%]"
                      alt="arrowright Two"
                    />
                    <Text className="font-bold mb-[1px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                      Cricket
                    </Text>
                  </Row>
                  <Row className="lg:mt-[31px] xl:mt-[36px] mt-[41px] 3xl:mt-[49px] w-[100%]">
                    <Img
                      src="images/img_arrowright.png"
                      className="h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[4px] w-[1%]"
                      alt="arrowright Three"
                    />
                    <Text className="font-bold mb-[1px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                      Players
                    </Text>
                    <Img
                      src="images/img_arrowright.png"
                      className="h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] xl:ml-[111px] ml-[125px] 3xl:ml-[150px] lg:ml-[97px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[1%]"
                      alt="arrowright Four"
                    />
                    <Text className="font-bold lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] mt-[1px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                      Players
                    </Text>
                    <Img
                      src="images/img_arrowright.png"
                      className="h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:ml-[104px] xl:ml-[119px] ml-[134px] 3xl:ml-[160px] mt-[4px] w-[1%]"
                      alt="arrowright Five"
                    />
                    <Text className="font-bold mb-[1px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                      Players
                    </Text>
                  </Row>
                  <Row className="lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[98%]">
                    <Img
                      src="images/img_arrowright.png"
                      className="h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[4px] w-[1%]"
                      alt="arrowright Six"
                    />
                    <Text className="font-bold mb-[1px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                      About
                    </Text>
                    <Img
                      src="images/img_arrowright.png"
                      className="h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:ml-[104px] xl:ml-[119px] ml-[134px] 3xl:ml-[160px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[1%]"
                      alt="arrowright Seven"
                    />
                    <Text className="font-bold lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] mt-[1px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                      About
                    </Text>
                    <Img
                      src="images/img_arrowright.png"
                      className="h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:ml-[111px] xl:ml-[127px] ml-[143px] 3xl:ml-[171px] mt-[4px] w-[1%]"
                      alt="arrowright Eight"
                    />
                    <Text className="font-bold mb-[1px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                      About
                    </Text>
                  </Row>
                </Column>
              </Row>
              <Row className="items-end lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] w-[91%]">
                <Img
                  src="images/img_camera.png"
                  className="lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] w-[2%]"
                  alt="camera"
                />
                <Img
                  src="images/img_play_white_A700.png"
                  className="lg:h-[17px] xl:h-[19px] h-[21px] 2xl:h-[22px] 3xl:h-[26px] lg:mb-[10px] xl:mb-[12px] mb-[14px] 3xl:mb-[16px] lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] mt-[3px] w-[3%]"
                  alt="play One"
                />
                <Img
                  src="images/img_twitter.png"
                  className="common-pointer lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] lg:mb-[10px] xl:mb-[11px] mb-[13px] 3xl:mb-[15px] lg:ml-[26px] xl:ml-[30px] ml-[34px] 3xl:ml-[40px] mt-[3px] w-[2%]"
                  onClick={handleNavigate1}
                  alt="twitter"
                />
                <Img
                  src="images/img_arrowright.png"
                  className="h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:ml-[367px] xl:ml-[419px] ml-[472px] 3xl:ml-[566px] lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] w-[5px]"
                  alt="arrowright Nine"
                />
                <Text className="font-bold mb-[1px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                  Contact
                </Text>
                <Img
                  src="images/img_arrowright.png"
                  className="h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mb-[4px] xl:ml-[106px] ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] w-[5px]"
                  alt="arrowright Ten"
                />
                <Text className="font-bold lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                  Contact
                </Text>
                <Img
                  src="images/img_arrowright.png"
                  className="h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:ml-[100px] xl:ml-[114px] ml-[129px] 3xl:ml-[154px] lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] w-[5px]"
                  alt="arrowright Eleven"
                />
                <Text className="font-bold mb-[1px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                  Contact
                </Text>
              </Row>
              <Line className="bg-white_A700 h-[1px] lg:mt-[35px] xl:mt-[40px] mt-[45px] 3xl:mt-[54px] w-[1px]" />
              <Text className="font-medium lg:ml-[378px] xl:ml-[433px] ml-[487px] 3xl:ml-[584px] lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]">
                Designed by RameshVelaga
              </Text>
            </Column>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default DesktopTwoPage;
