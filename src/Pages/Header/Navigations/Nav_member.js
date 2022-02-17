//외부 import
import axios from "axios";
import styled from "styled-components";

//내부 import
import { myTheme } from "style";
import { API_URL } from "config/constants";
import { NavButton, SubscribeButton, BookContainer } from "./Nav_buttons/index";

//메인
function MemberNav({ isMember }) {
  const onLogout = () => {
    AxiosToLogout();
  };

  return (
    <Nav>
      <LeftContainer>
        <BookContainer />
        <User>{`${isMember.name}님`}</User>

        <SubscribeButton />
      </LeftContainer>
      <RightContainer>
        <NavButton moveTo="/mypage">내정보</NavButton>
        <NavButton onClick={onLogout}>로그아웃</NavButton>
      </RightContainer>
    </Nav>
  );
}

export default MemberNav;

//함수

const AxiosToLogout = () => {
  axios
    .get(`${API_URL}/logout`, { withCredentials: true })
    .then((result) => {
      console.log("AXIOS LOGOUT: SUCCESS");
      console.log("로그아웃....", result.data);
      window.location.replace("/");
    })
    .catch((err) => {
      console.log("AXIOS LOGOUT: ERROR");
    });
};

//스타일

const { fonts, colors } = myTheme;

const Nav = styled.div`
  height: 4rem;
  padding: 1rem;
  background-color: white;
  border-bottom: 1px solid ${colors.gray};
  display: flex;
  justify-content: space-between;
`;

const User = styled.div`
  text-align: center;
  color: ${colors.d1};
  font-family: ${fonts.m};
  font-size: 1.2rem;
  height: 1.2rem;
  margin: 0.3rem 0.5rem;
  padding-right: 0.5rem;
  border-right: 2px solid ${colors.d1};
`;
const LeftContainer = styled.div`
  display: flex;
`;
const RightContainer = styled.div``;
