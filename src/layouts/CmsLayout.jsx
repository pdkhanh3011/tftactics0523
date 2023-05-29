import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "store/slices/apiSlice";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function CmsLayout() {
  const { isLoading } = useSelector((state) => state.api);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <CmsLayoutWrap>
      <Navigation>
        {" "}
        <NavLink to="../curd/origins" className="header-item">
          Add origins
        </NavLink>
        ||
        <NavLink to="../curd/champions" className="header-item">
          Add champions
        </NavLink>
        ||
        <NavLink to="../curd/teamcomps" className="header-item">
          Add teamcomps
        </NavLink>
        ||
        <NavLink to="../curd/items" className="header-item">
          Add items
        </NavLink>
      </Navigation>
      {isLoading || <Outlet />}
    </CmsLayoutWrap>
  );
}

export default CmsLayout;

const CmsLayoutWrap = styled.div`
  padding: 40px 0;
`;

const Navigation = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;
