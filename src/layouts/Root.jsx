import Header from "layouts/Header";
import TopNavigation from "layouts/TopNavigation";
import Content from "layouts/Content";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Footer from "layouts/Footer";
import { useDispatch } from "react-redux";
import { getData } from "store/slices/apiSlice";
import { useSelector } from "react-redux";

function RootLayout() {
  const location = useLocation();
  const pathName = location.pathname;
  const [isOpenNaviagtion, setIsOpenNaviagtion] = useState(false);
  const { isLoading } = useSelector((state) => state.api);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <RootLayoutWrap id="root-layout">
      <div className="my-content">
        --- Tftactics clone use ReactJs, Firebase 13/05/2023 ---
      </div>
      <Header
        hanleClickNavigationBtn={() => setIsOpenNaviagtion((pre) => !pre)}
      />
      <TopNavigation
        isOpenNaviagtion={isOpenNaviagtion}
        hanleClickLink={() => setIsOpenNaviagtion(false)}
      />
      <Content>
        {pathName === "/" ? <Outlet /> : isLoading || <Outlet />}
      </Content>
      <Footer />
    </RootLayoutWrap>
  );
}

export default RootLayout;

const RootLayoutWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  color: white;
  .my-content {
    background-color: #d47559;
    text-align: center;
    padding: 3px 0;
    a {
      text-decoration: none;
      color: #12407c;
    }
  }
  @media only screen and (max-width: 520px) {
    .my-content {
      font-size: 14px !important;
    }
  }
`;
