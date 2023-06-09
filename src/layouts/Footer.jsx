import styled from "styled-components";
import { Link } from "react-router-dom";
import { WEB_NAME } from "config/constant";
import { useTranslation } from "react-i18next";
import SelectDropdown from "components/common/SelectDropdown";
import { useSelector } from "react-redux";

export default function Footer() {
  const { i18n } = useTranslation();
  const { lang } = useSelector((state) => state.localStorage);

  function selectVersion(value) {
    localStorage.setItem("lang", value);
    i18n.changeLanguage(value);
  }

  return (
    <FooterWrapper>
      <div className="container">
        <div className="footer-links">
          <Link to="/privacy-policy">Chính sách bảo mật</Link>
          <a
            href="https://github.com/hoangxuanlam2007/TFTactician/blob/main/LICENSE"
            target="_blank"
            rel="noreferrer"
          >
            Giấy phép nguồn mở
          </a>
          <a
            href="https://github.com/hoangxuanlam2007/TFTactician"
            target="_blank"
            rel="noreferrer"
          >
            Mã nguồn
          </a>
          <a
            href="https://github.com/hoangxuanlam2007/TFTactician/issues"
            target="_blank"
            rel="noreferrer"
          >
            Báo lỗi
          </a>
          <div className="language-btn">
            <span className="language-btn-text">Ngôn ngữ</span>
            <div className="version">
              <div id="language-select">
                <SelectDropdown
                  dropDownItems={[
                    { text: "English", value: "en", isSelected: lang === "en" },
                    { text: "Tiếng việt", value: "vi", isSelected: lang === "vi" },
                  ]}
                  handleSelect={selectVersion}
                  className="version-dropdown"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="divider footer"></div>
        <p className="footer-about">
          {WEB_NAME} is not endorsed by Riot Games and does not reflect the
          views or opinions of Riot Games or anyone officially involved in
          producing or managing Riot Games properties. Riot Games and all
          associated properties are trademarks or registered trademarks of Riot
          Games, Inc.
        </p>
        <p className="footer-copyright">
          © {WEB_NAME} {new Date().getFullYear()}
        </p>
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-top: auto;
  font-size: 15px;
  padding: 30px 0;
  background: #102531;
  border-top: 1px solid #17313a;
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    .divider {
      margin: 0;
    }
    .divider.footer {
      margin: 20px 0;
    }
    .divider {
      background: #102531;
      margin: 20px 0;
    }
    .divider {
      display: block;
      width: 100%;
      height: 1px;
      background: #17313a;
      margin-top: 20px;
    }
    .footer-copyright {
      color: #88a0a7;
      font-size: 15px;
      margin-top: 10px;
      margin-bottom: 0;
      text-align: center;
      max-width: none;
    }
    .footer-about {
      color: hsla(0, 0%, 100%, 0.9);
      font-size: 15px;
      margin-bottom: 0;
      text-align: center;
      max-width: none;
      line-height: 25px;
    }
    .footer-links {
      display: flex;
      align-items: center;
      justify-content: center;
      align-content: center;
      flex-wrap: nowrap;
      flex-direction: row;
      a, .language-btn {
        text-align: center;
        color: #88a0a7;
        margin: 0 30px;
        margin-bottom: 10px;
        transition: all 0.3s;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        -ms-user-select: none;
      }
      a:hover {
        color: #fff;
      }
      .language-btn {
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: center;
        align-items: center;
        position: relative;
        .version {
          margin-left: 10px;
          .value {
            padding: 4px 12px;
            border-radius: 4px;
            background-color: #123040;
            span {
              font-size: 14px;
              font-weight: 400;
            }
          }
        }
      }
    }
  }
  @media (max-width: 1024px) {
    padding-left: 45px;
    padding-right: 45px;
  }
  @media only screen and (max-width: 1024px) {
    .container .footer-links {
      flex-wrap: wrap;
    }
  }

  @media only screen and (max-width: 768px) {
    .container .footer-links {
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

  @media only screen and (max-width: 520px) {
    .container .footer-links {
      flex-direction: column;
    }
    .container .footer-links a:first-child {
      margin-top: 0;
    }
    .container .footer-links a {
      margin-top: 10px;
    }
    .container .footer-links .language-btn {
      .language-btn-text {
        display: none;
      }
    }
  }
`;
