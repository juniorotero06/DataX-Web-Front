import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "../utils/SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";

const Nav = styled.div`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0px 10px 10p x #bfbfbf;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavImg = styled.img`
  width: 95%;
  height: 10%;
  display: flex;
  padding-left: 10px;
`;

const SidebarNav = styled.nav`
  background: #ececec;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = (props) => {
  const location = useLocation();
  const newLocation = location.pathname.slice(1);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  function capitalizarPrimeraLetra(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  React.useEffect(() => {
    console.log(location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <IconContext.Provider value={{ color: "#737170" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <h3>{capitalizarPrimeraLetra(newLocation)}</h3>
          <NavIcon>
            <AiIcons.AiOutlineUser />
          </NavIcon>
          <h3>{props.user}</h3>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            <NavImg src="https://atxel.com/wp-content/uploads/2020/11/logoATXEL.png" />
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

function mapStateToProps(state) {
  return {
    authToken: state.authToken,
    user: state.user,
  };
}

export default connect(mapStateToProps)(Sidebar);
