import SelectDropdown from "components/common/SelectDropdown";
import SearchOrigin from "components/common/SearchOrigin";
import Button from "components/common/Button";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useDispatch } from "react-redux";
import { updateVersion } from "store/slices/versionSlice";
import { getData } from "store/slices/apiSlice";
import { WEB_NAME } from "config/constant";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import Logo from "assets/icons/logo.png";

function Header(props) {
  const { versionName } = useSelector((state) => state.version);

  const dispatch = useDispatch();
  function selectVersion(value) {
    localStorage.setItem("version", value);
    dispatch(updateVersion(value));
    dispatch(getData());
  }
  return (
    <HeaderWrap id="root-header">
      <div className="wrapper">
        <div className="icon-version">
          <div className="icon" title={WEB_NAME}>
            <Link to="/">
              <img alt={WEB_NAME} src={Logo} />
            </Link>
          </div>
          <div className="version">
            <SelectDropdown
              dropDownItems={[
                {
                  text: "Set 7.5",
                  value: "set7",
                  isSelected: versionName === "set7",
                },
                {
                  text: "Set 8.5",
                  value: "set85",
                  isSelected: versionName === "set85",
                },
              ]}
              handleSelect={selectVersion}
              className="version-dropdown"
            />
          </div>
        </div>
        <div className="search-bar">
          <SearchOrigin
            dropdown={[{ text: "NA", isSelected: true }, { text: "EU" }]}
            leftContentPlaceholder="NA"
            placeholder="Search Summoner Name..."
          />
        </div>
        <div className="download">
          <Button className="download-btn" btnText="download app" />
        </div>
        <FontAwesomeIcon
          onClick={() => props.hanleClickNavigationBtn()}
          className="navigation-btn"
          icon={solid("bars")}
          size="xl"
        />
      </div>
    </HeaderWrap>
  );
}

export default Header;

const HeaderWrap = styled.div`
  width: 100%;
  background-color: #0d202b;
  .wrapper {
    width: 100%;
    max-width: 1200px;
    height: 50px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
    .icon-version {
      display: flex;
      align-items: center;
      margin-right: 5px;
      .icon {
        margin-right: 15px;
        img {
          height: 32px;
          vertical-align: middle;
        }
      }
    }
    .search-bar {
      flex-grow: 1;
      margin: 0 150px;
    }
    .download {
      .download-btn {
        background-color: rgb(64, 128, 176);
        border-radius: 4px;
        span {
          text-transform: uppercase;
        }
      }
    }
    .navigation-btn {
      display: none;
    }
  }
  @media only screen and (max-width: 1280px) {
    .wrapper {
      padding: 0 30px;
    }
  }
  @media only screen and (max-width: 1024px) {
    padding-left: 45px;
    padding-right: 45px;
    .wrapper {
      padding: 0;
      .search-bar {
        margin: 0 30px 0 15px;
      }
      .download {
        display: none;
      }
      .navigation-btn {
        display: block;
      }
    }
  }
  @media only screen and (max-width: 520px) {
    padding: 0;
    .icon-version {
      margin: 0 20px;
    }
    .search-bar {
      display: none;
    }
    .wrapper .navigation-btn {
      margin: 0 20px;
    }
  }
`;
