import Header from "layouts/Header";
import TopNavigation from "layouts/TopNavigation";
import Content from "layouts/Content";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Footer from "layouts/Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getData } from "store/slices/apiSlice";
import { useSelector } from "react-redux";

function RootLayout() {
  const [isOpenNaviagtion, setIsOpenNaviagtion] = useState(false);
  const { isLoading } = useSelector((state) => state.api);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getData());
    if (window.location.pathname === "/") navigate("/teamcomps");
  });
  return (
    <RootLayoutWrap id="root-layout">
<<<<<<< HEAD
      <div className="my-content">
        --- Tftactics clone use ReactJs, Firebase 13/05/2023 ---
      </div>
      <Header
        hanleClickNavigationBtn={() => setIsOpenNaviagtion((pre) => !pre)}
      />
=======
      {/* <div className="my-content">
        --- Tftactics clone use ReactJs, Firebase 10/05/2023 --- 
      </div> */}
      <Header hanleClickNavigationBtn={() => setIsOpenNaviagtion((pre) => !pre)} />
>>>>>>> f351856e50be0ded6a85e9422eb5c059a7df7bd1
      <TopNavigation
        isOpenNaviagtion={isOpenNaviagtion}
        hanleClickLink={() => setIsOpenNaviagtion(false)}
      />
      <Content>{isLoading || <Outlet />}</Content>
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
`;
