import styled from "styled-components";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const web_name = "TFTactician";

export default function Footer() {
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
            Ngôn ngữ
            <div className="version">
              <div id="language-select">
                <div className="value">
                  <span>Tiếng Việt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider footer"></div>
        <p className="footer-about">
          {web_name} is not endorsed by Riot Games and does not reflect the
          views or opinions of Riot Games or anyone officially involved in
          producing or managing Riot Games properties. Riot Games and all
          associated properties are trademarks or registered trademarks of Riot
          Games, Inc.
        </p>
        <p className="footer-copyright">
          © {web_name} {new Date().getFullYear()}
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
      a,
      .language-btn {
        text-align: center;
        color: #88a0a7;
        margin: 0 30px;
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
`;
