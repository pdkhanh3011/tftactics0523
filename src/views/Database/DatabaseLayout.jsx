import MainLayout from "layouts/MainLayout";
import { Outlet, NavLink } from "react-router-dom";
import SearchOrigin from "components/common/SearchOrigin";
import styled from "styled-components";
import { useNavigate, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function DatabaseLayout() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (window.location.pathname === "/database")
      navigate("/database/championstats");
  }, []);
  function hanleSearch(searchText) {
    setSearchText(searchText);
  }
  return (
    <DatabaseWrap id="database-default">
      <MainLayout
        nameContent={
          <DatabaseLayoutTitle>
            <span className="database-layout-tile">Database</span>
          </DatabaseLayoutTitle>
        }
        sideContent={
          <div className="navigation-items">
            <ul>
              <li>
                <NavLink to="/database/championstats" className="header-item">
                  Champions Stats
                </NavLink>
              </li>
              <li className="active">
                <NavLink to="/database/champions" className="header-item">
                  Champions
                </NavLink>
              </li>
              <li>
                <NavLink to="/database/origins" className="header-item">
                  Origins
                </NavLink>
              </li>
              <li>
                <NavLink to="/database/classes" className="header-item">
                  Classes
                </NavLink>
              </li>
            </ul>
          </div>
        }
        titleContent={
          <Title className="title">
            <div className="title-1">
              <Routes>
                <Route
                  path="champions"
                  element={
                    <div className="name">TFT Champions Synergy List</div>
                  }
                />
                <Route
                  path="championstats"
                  element={<div className="name">TFT Champions Stats</div>}
                />
                <Route
                  path="origins"
                  element={<div className="name">TFT Origins List</div>}
                />
                <Route
                  path="classes"
                  element={<div className="name">TFT Classes List</div>}
                />
              </Routes>
            </div>
            <div className="title-2">
              <Routes>
                <Route
                  path="champions"
                  element={
                    <SearchOrigin
                      minWidth="300px"
                      reverse={true}
                      placeholder="Search for a champion..."
                      className="search"
                      hanleSearch={hanleSearch}
                    />
                  }
                />
                <Route
                  path="championstats"
                  element={
                    <SearchOrigin
                      minWidth="300px"
                      reverse={true}
                      placeholder="Search for a champion.."
                      className="search"
                      hanleSearch={hanleSearch}
                    />
                  }
                />
                <Route
                  path="origins"
                  element={
                    <SearchOrigin
                      minWidth="300px"
                      reverse={true}
                      placeholder="Search for an origin..."
                      className="search"
                      hanleSearch={hanleSearch}
                    />
                  }
                />
                <Route
                  path="classes"
                  element={
                    <SearchOrigin
                      minWidth="300px"
                      reverse={true}
                      placeholder="Search for a class..."
                      className="search"
                      hanleSearch={hanleSearch}
                    />
                  }
                />
              </Routes>
            </div>
          </Title>
        }
        mainContent={
          <MainContent className="main-content">
            <Outlet context={searchText} />
          </MainContent>
        }
      />
    </DatabaseWrap>
  );
}

export default DatabaseLayout;

const DatabaseLayoutTitle = styled.div`
  min-height: 35px;
  padding-bottom: 20px;
  border-bottom: 1px solid #17313a;
  span {
    display: block;
    min-height: 32px;
    font-size: 21px;
    font-weight: 600;
  }
`;

const DatabaseWrap = styled.div`
  @media only screen and (max-width: 840px) {
    .navigation {
      display: block !important;
      padding-right: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    max-width: 540px;
    margin: 0 auto;
  }
  .navigation-items {
    ul {
      list-style: none;
      li {
        position: relative;
        cursor: pointer;
        margin: 10px 0;
        &:hover a {
          color: white;
        }
        a {
          text-decoration: none;
          color: #88a0a7;
          font-size: 16px;
          font-weight: 400;
          padding: 4px 0 4px 0;
          width: 100%;
          display: inline-block;
        }
        a.active {
          padding-left: 20px;
          color: white;
          &::after {
            position: absolute;
            content: "";
            left: 0;
            background-color: #227aad;
            width: 4px;
            top: 0;
            bottom: 0;
          }
        }
      }
    }
    @media only screen and (max-width: 840px) {
      padding-bottom: 25px;
      margin-bottom: 50px;
      border-bottom: 2px solid #17313a;
      ul {
        li {
          border: 1px solid #17313a;
          margin: 0;
          a {
            text-align: center;
            padding: 12px 15px;
            &::after {
              display: none;
            }
          }
          .header-item.active {
            border: 2px solid #d47559;
            padding-left: 15px;
          }
        }
      }
    }
  }
  .content {
    padding-left: 30px;
    @media only screen and (max-width: 840px) {
      padding-left: 0;
    }
  }
`;

const MainContent = styled.div`
  padding-top: 20px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  min-width: 29px;
  border-bottom: 1px solid #17313a;
  .title-1 {
    display: flex;
    align-items: center;
    .name {
      margin-right: 30px;
      font-size: 21px;
      font-weight: 600;
    }
  }
  .title-2 {
    .search {
      border-radius: 0%;
      @media only screen and (max-width: 360px) {
        min-width: unset;
      }
    }
  }
  @media (max-width: 1024px) {
    flex-wrap: wrap;
    .title-1 {
      width: 100%;
      justify-content: space-between;
      margin-bottom: 10px;
      .name {
        margin-right: 0;
      }
    }
    .title-2 {
      width: 100%;
      .search {
        border-radius: 0%;
      }
    }
  }
`;
