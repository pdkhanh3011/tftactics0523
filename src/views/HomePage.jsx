import React from "react";
import styled from "styled-components";
import { WEB_NAME } from "config/constant";

function HomePage() {
  return (
    <HomePageWrap id="root-layout">
      <Landing className="col-12 home-header">
        <div className="background-header">
          <div className="text-header">
            <h1 className="text-white text-center fw-bolder">{WEB_NAME}</h1>
            <h3
              className="orange text-center fw-bold"
              style={{ margin: "10px" }}
            >
              Đồng hành cùng bạn trong DTCL!
            </h3>
            <p
              className="grey text-center"
              style={{ maxWidth: "600px", margin: "20px auto" }}
            >
              Cùng nhau leo rank, xây dựng đội hình, trang bị chuẩn, khám phá
              những đội hình Top đầu Meta và còn nhiều hơn thế nữa...
            </p>
          </div>
        </div>
      </Landing>

      <Banner className="wrapper">
        <a
          className="version-update"
          href="https://github.com/khanh3118/tftactics0523"
          target="_blank"
          rel="noreferrer"
        >
          <div className="update-title">Thấy thú vị và bổ ích?</div>
          <div className="update-subtitle">
            Cho mình 1 sao trên github nhé ^^
          </div>
        </a>
      </Banner>

      <div className="col-12 home-app">
        <div className="row">
          <div className="col-12 col-lg-6 app-image left">
            <img
              className="image-full"
              src="https://scontent.fhan14-4.fna.fbcdn.net/v/t1.15752-9/341862417_1101244321266082_6763746593041229608_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=JudyRlMU5qEAX-dgveo&_nc_oc=AQm7RZgRGEsv9ydgXK8e6fwn1L0DqvbJ5zg7hWyeu0MJKRHEfYdmDhbywDu85Zb74KsPotENNMYYS4Tm79c0sp6b&_nc_ht=scontent.fhan14-4.fna&oh=03_AdSvEMp9qlaXu1X-uJF8nGomCSVidF71xeg63rAnvQtlKQ&oe=6475E9C4"
              width={"65%"}
              alt="comps-full"
            />
            <img
              className="image-crop"
              src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.15752-9/341855635_1458277454914415_5727580885085758782_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=ihjYrxH7WXUAX8q0-fX&_nc_ht=scontent.fhan14-2.fna&oh=03_AdTaBWUfZy62LkruUaMuYB2cetjSBRVp8DdHvpg_uHgTkg&oe=6475DB2B"
              width={"65%"}
              alt="comps-crop"
            />
          </div>
          <div className="col-12 col-lg-6 app-image right app-info">
            <h2 className="text-white fw-bold">Xây dựng đội hình</h2>
            <p className="grey" style={{ maxWidth: "450px" }}>
              Xây dựng những đội hình mạnh hơn bằng cách lên kế hoạch cho đội
              hình của bạn hoặc chọn một trong những đội hình vượt trội trong
              Meta hiện tại.
            </p>
          </div>
        </div>
      </div>

      <div className="col-12 home-app">
        <div className="row">
          <div className="col-12 col-lg-6 app-image left app-info">
            <h2 className="text-white fw-bold">Truy tìm anh hùng</h2>
            <p className="grey" style={{ maxWidth: "450px" }}>
              Tra cứu danh sách các tướng DTCL, chỉ số cơ bản, kỹ năng, Tộc/Hệ
              và nhiều thứ khác...
            </p>
          </div>
          <div className="col-12 col-lg-6 app-image right">
            <img
              className="image-full"
              src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.15752-9/341831495_548417414133138_7003062662206718136_n.png?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=RAHFDH0ijiQAX8IRbCt&_nc_ht=scontent.fhan14-2.fna&oh=03_AdTUgJAhY1rDltB8_x9SQsgMmEfHPyGSJ3aFmDsb9X9-NA&oe=6474A5A9"
              width={"65%"}
              alt="list-full"
            />
            <img
              className="image-crop"
              src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.15752-9/341808132_781344967002089_4111522620184356945_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=FetYNzB_RzsAX-aVCb5&_nc_oc=AQkI_wTrhYJsyPBkE4SkfedJKuj-mVtaQWzNpxfK3TtmT7IJl264pxZZyfDiGwVXqlugayiXkUoHv3wEWfDkQqA0&_nc_ht=scontent.fhan14-2.fna&oh=03_AdQHDh7v3R6GpLGVSWHPRE6USp8bmyYTmw8yRp-BFWRtMg&oe=64748C53"
              width={"65%"}
              alt="champion-crop"
            />
          </div>
        </div>
      </div>

      <div className="col-12 home-app">
        <div className="row">
          <div className="col-12 col-lg-6 app-image left">
            <img
              className="image-full"
              src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.15752-9/343904514_627313385920131_6790464048876253050_n.png?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=O3ZZqxUMK0sAX9OYgml&_nc_ht=scontent.fhan14-2.fna&oh=03_AdTbBi5d1B816guZ06lm_yt2wpCLcevR2uedUE6S25q-nw&oe=6474BC02"
              width={"65%"}
              alt="list-full"
            />
            <img
              className="image-crop"
              src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.15752-9/343849717_164387819911917_982670899922784349_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=mOJJuBkMGUYAX_bzfAM&_nc_ht=scontent.fhan14-1.fna&oh=03_AdT6ZEJA84qun2jEGasGpZqkOeSG9Cpgy0K4hfNScmD5fA&oe=64749E5B"
              height={"85%"}
              alt="item-crop"
            />
          </div>
          <div className="col-12 col-lg-6 app-image right app-info">
            <h2 className="text-white fw-bold">Lựa chọn trang bị chuẩn</h2>
            <p className="grey" style={{ maxWidth: "450px" }}>
              Tìm những món đồ, trang bị chuẩn dành cho những vị tướng DTCL. Tra
              cứu cách kết hợp và các thành phần của chúng.
            </p>
          </div>
        </div>
      </div>

      <div className="row dark" id="technologies">
        <div className="container" id="tech-container">
          <div className="col-12 home-app features">
            <div className="row">
              <div className="col-12 features-title">
                <h2 className="text-white fw-bold">Công nghệ tích hợp</h2>
              </div>
              <div className="col-12 col-lg app-features">
                <h4>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                    alt="React"
                  />
                  React
                </h4>
                <p>
                  React.js là một thư viện UI phát triển tại Facebook để hỗ trợ
                  việc xây dựng những thành phần UI có tính tương tác cao, có
                  trạng thái và có thể sử dụng lại được. React còn được sử dụng
                  tại Facebook trong production và Instagram.
                </p>
              </div>
              <div className="col-12 col-lg app-features">
                <h4>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png"
                    alt="Bootstrap"
                  />
                  Bootstrap
                </h4>
                <p>
                  Bootstrap là 1 framework HTML, CSS, và JavaScript cho phép lập
                  trình viên thiết kế website theo 1 chuẩn nhất định, tạo các
                  website thân thiện với mọi thiết bị và đa nền tảng.
                </p>
              </div>
              <div className="col-12 col-lg app-features">
                <h4>
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/free-firebase-3521427-2944871.png"
                    alt="Firebase"
                  />
                  Firebase
                </h4>
                <p>
                  Firebase chính là một dịch vụ cơ sở dữ liệu được hoạt động ở
                  trên nền tảng đám mây, bao gồm các API đơn giản và mạnh mẽ. Đi
                  kèm với đó là một máy chủ mạnh mẽ của Google có bảo mật cực
                  cao.
                </p>
              </div>
              <div className="col-12 col-lg app-features">
                <h4>
                  <img
                    src="https://lh3.googleusercontent.com/illfpW97yh9TtvtmtN-BiNcpomys5gzAj4nw8Je6Ydby814PRquAPcvsP2tAV43Iqe8logzjUnjp7tN5Dvk"
                    alt="Firebase-hosting"
                  />
                  &nbsp;Firebase Hosting
                </h4>
                <p>
                  Firebase Hosting là một nền tảng API có tính chất như một dịch
                  vụ lưu trữ cơ sở dữ liệu hoạt động thực trên nền tảng Cloud -
                  điện toán đám mây. Được tích hợp sử dụng kèm theo cùng lúc với
                  hệ thống máy chủ mạnh mẽ của chính Google.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 home-app no-margin-bottom">
        <div className="row">
          <div className="col-12 col-lg-6 app-info contact">
            <h2>Liên hệ</h2>
            <p>
              Nếu bạn gặp phải bất kỳ sự cố hoặc lỗi nào trong quá trình trải
              nghiệm hay đơn giản là muốn trang web được cải thiện hơn, vui lòng
              cho chúng mình biết bằng cách chọn một số liên kết phía dưới. Bọn
              mình luôn đánh giá cao ý kiến ​​đóng góp của bạn và sẽ phản hồi
              nhanh nhất có thể để giải quyết mọi vấn đề đã được báo cáo. Cảm ơn
              bạn đã tham gia đóng góp để giúp cho {WEB_NAME} được hoàn thiện
              hơn!
            </p>
            <hr style={{ color: "#17313A", opacity: "1" }}></hr>
            <a
              href="https://github.com/khanh3118/tftactics0523/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              Báo cáo lỗi | Tạo Issue tại Github{" "}
              <img
                src="https://rerollcdn.com/home/arrow-link.svg"
                alt="arrow-link"
              />{" "}
            </a>
            <a
              href="https://github.com/khanh3118/tftactics0523/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yêu cầu cải thiện | Tạo Issue tại Github{" "}
              <img
                src="https://rerollcdn.com/home/arrow-link.svg"
                alt="arrow-link"
              />{" "}
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100008397931030"
              target="_blank"
              rel="noopener noreferrer"
            >
              Liên hệ | Facebook (Phan Đình Khánh)
              <img
                src="https://rerollcdn.com/home/arrow-link.svg"
                alt="arrow-link"
              />{" "}
            </a>
            <a
              href="https://facebook.com/ch1mmm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Liên hệ | Facebook (Hoàng Xuân Lâm)
              <img
                src="https://rerollcdn.com/home/arrow-link.svg"
                alt="arrow-link"
              />{" "}
            </a>
          </div>
          <div className="d-none d-lg-block col-6 app-image right">
            <img
              className="ezreal"
              src="https://rerollcdn.com/home/Ezreal.png"
              alt="Riot Ezreal"
            />
          </div>
        </div>
      </div>
    </HomePageWrap>
  );
}

export default HomePage;

const Banner = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  background-color: #0d202b;
  .version-update {
    position: relative;
    font-size: 21px;
    background: #102531;
    background-image: url(https://rerollcdn.com/partners-bg.png);
    background-position: 50%;
    background-size: cover;
    border: 1px solid #17313a;
    width: 100%;
    height: 100px;
    color: hsla(0, 0%, 100%, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    -webkit-filter: saturate(1);
    filter: saturate(1);
    cursor: pointer;
    transition: all 0.3s;
    margin: -490px 0 30px 0;
    text-decoration: none;
    &:hover {
      border-color: #227aad;
    }
    .update-title {
      font-weight: 600;
      font-size: 21px;
      margin-bottom: 7px;
    }
    .update-subtitle {
      font-size: 16px;
      color: #579dd4;
      font-weight: 400;
    }
  }
`;

const Landing = styled.div`
  min-height: 1000px;
  max-width: 100vw;
  background-color: #0d202b;
  @media (max-width: 1024px) {
    padding-left: 45px;
    padding-right: 45px;
  }
`;

const HomePageWrap = styled.div`
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
  .text-center {
    z-index: 2;
    position: relative;
  }

  .orange {
    color: #d47559 !important;
  }

  .grey {
    color: #88a0a7 !important;
    font-size: 16px !important;
    color: #88a0a7;
    line-height: 2em;
  }

  .background-header {
    height: 450px !important;
    width: 100%;
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
  }

  .background-header::before {
    content: "";
    background-image: url("https://cdn.gametv.vn/news_media/image/TFT-Set-8_0x0_1678155246.png");
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 100%;
    position: absolute;
    filter: brightness(0.4);
    background-attachment: fixed;
  }

  .text-header {
    z-index: 100;
    transform: translateY(-50%) !important;
    top: 50%;
    left: 0;
    right: 0;
    position: absolute;
    display: block;
    text-align: center;
    overflow: hidden !important;
  }

  .app-image {
    position: relative;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
  }

  .home-app {
    margin: 100px auto;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .home-app .app-info h2 {
    color: #fff;
    font-size: 28px;
    font-weight: 600;
    line-height: 1.3em;
    margin: 0 0 20px;
  }

  .home-app .app-info p {
    color: #88a0a7;
    line-height: 1.8em;
  }

  .image-full,
  .image-crop {
    filter: contrast(1.04);
  }

  .home-app .app-image.right .image-full {
    -webkit-transform: scale(1.05) perspective(2910px) rotateY(-12deg)
      rotateX(-3deg) rotate(2deg);
    transform: scale(1.05) perspective(2910px) rotateY(-12deg) rotateX(-3deg)
      rotate(2deg);
    box-shadow: 20px 20px 60px #0a1a23;
  }

  .home-app .app-image .image-crop,
  .app-image .image-full {
    box-shadow: 0 13px 27px -5px #102531, 0 8px 16px -8px #102531,
      0 -6px 16px -6px #102531;
    border: 1px solid #17313a;
    border-radius: 3px;
  }
  .home-app .app-image.right .image-crop {
    left: 0;
    -webkit-transform: translateY(-50%) scale(1.05) perspective(2910px)
      rotateY(-12deg) rotateX(-3deg) rotate(2deg);
    transform: translateY(-50%) scale(1.05) perspective(2910px) rotateY(-12deg)
      rotateX(-3deg) rotate(2deg);
    box-shadow: 10px 10px 30px #0a1a23;
  }

  .home-app .app-image .image-crop {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .home-app .app-image .image-crop,
  .app-image .image-full {
    box-shadow: 0 13px 27px -5px #102531, 0 8px 16px -8px #102531,
      0 -6px 16px -6px #102531;
    border: 1px solid #17313a;
    border-radius: 3px;
  }

  .home-app .app-image.left .image-full {
    -webkit-transform: scale(1.05) perspective(2910px) rotateY(12deg)
      rotateX(3deg) rotate(-2deg);
    transform: scale(1.05) perspective(2910px) rotateY(12deg) rotateX(3deg)
      rotate(-2deg);
    box-shadow: -20px 20px 60px #0a1a23;
  }

  .home-app .app-image .image-crop,
  .home-app .app-image .image-full {
    box-shadow: 0 13px 27px -5px #102531, 0 8px 16px -8px #102531,
      0 -6px 16px -6px #102531;
    border: 1px solid #17313a;
    border-radius: 3px;
  }

  .home-app .app-image.left .image-crop {
    right: 0;
    -webkit-transform: translateY(-50%) scale(1.05) perspective(2910px)
      rotateY(12deg) rotateX(3deg) rotate(-2deg);
    transform: translateY(-50%) scale(1.05) perspective(2910px) rotateY(12deg)
      rotateX(3deg) rotate(-2deg);
    box-shadow: -10px 10px 30px #0a1a23;
  }

  .home-app .app-image .image-crop {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .home-app .app-image .image-crop,
  .home-app .app-image .image-full {
    box-shadow: 0 13px 27px -5px #102531, 0 8px 16px -8px #102531,
      0 -6px 16px -6px #102531;
    border: 1px solid #17313a;
    border-radius: 3px;
  }

  .social-btn {
    height: 50px;
    display: flex;
    top: 0;
    right: 0;
    align-items: center;
    font-size: 15px;
    align-content: flex-end;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    position: absolute;
  }

  .social-icons {
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-right: 350px;
  }

  .btn-github,
  .btn-fb,
  .btn-ig,
  .btn-yt {
    color: #fff !important;
    background-color: #123040 !important;
    padding: 6px 10px !important;
    border: none !important;
    margin: 0 5px;
    font-size: 14px !important;
  }

  .btn-github:hover,
  .btn-fb:hover,
  .btn-ig:hover,
  .btn-yt:hover {
    color: #123040 !important;
    background-color: #f0f0f0 !important;
  }

  .col-12.home-app.features .row {
    max-width: 1200px !important;
    text-align: center;
    left: 0;
    right: 0;
    margin: auto;
  }

  .row.dark {
    background: #102531;
  }

  .home .home-app.features {
    padding: 80px 0;
  }

  .home .home-app .features-title {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .home-app .features-title h2 {
    color: #fff;
    font-size: 28px;
    font-weight: 600;
    line-height: 1.3em;
    margin: 0 0 10px;
  }

  .home-app .app-features {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: #123040;
    margin: 30px 10px 0;
    padding: 0;
    border-radius: 3px;
  }

  .home-app .app-features h4 {
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.3em;
    margin: 0;
    padding: 20px;
    width: 100%;
    border-bottom: #102531 solid 1px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  h4 img {
    height: 24px;
    align-self: center;
    vertical-align: middle;
    text-align: center;
    line-height: 1.3em;
    margin-right: 5px;
  }

  .home-app .app-features p {
    line-height: 1.8em;
    margin: 0;
    padding: 20px 20px 40px;
  }

  .home-app .app-info a {
    display: flex;
    align-items: center;
    color: #4080b0;
    font-weight: 600;
    margin: 2.5px 0;
    text-decoration: none !important;
    width: fit-content;
  }

  .home-app .app-info a:hover {
    color: #97bdd9;
  }

  .home-app .app-info a img {
    width: 10px;
    margin-top: 2px;
    margin-left: 8px;
  }

  .home-app .app-image .ezreal {
    width: 400px;
  }

  .no-margin-bottom {
    margin-bottom: 0 !important;
  }

  .col-12 h2,
  .col-12.col-lg-6.app-image .grey {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  .article h2 {
    display: inline-block;
    position: relative;
    padding: 0 10px 15px;
    margin: 0;
  }

  .article h2:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: #d47559;
  }

  .page-header h1 {
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: flex-start;
  }

  .article h1,
  .article h2,
  .article h3 {
    color: hsla(0, 0%, 100%, 0.9) !important;
  }

  .article hr {
    margin: 0 0 25px;
    border-top: 1px solid #17313a;
    opacity: 1 !important;
  }

  .page-header h1 {
    margin: 0;
    line-height: 1.5em;
    color: hsla(0, 0%, 100%, 0.9) !important;
    font-weight: 600;
    margin-top: 10px;
  }

  .article h1 {
    padding: 30px 0;
  }

  .page-header .version {
    display: inline-block;
  }

  .article ul {
    margin-bottom: 50px;
    padding-left: 50px;
  }

  .article ul li {
    color: #88a0a7;
    line-height: 1.8em;
    margin-bottom: 15px;
    list-style: initial;
  }

  .table-item .item-cost {
    color: #ffffff !important;
  }

  .text-header h3,
  .text-header h1,
  .text-header p {
    font-weight: 600 !important;
  }

  .popup-cost svg {
    color: #fff !important;
  }
  @media only screen and (max-width: 1024px) {
    .home-app .app-image.left {
      padding: 0;
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    }
    .home-app .app-info {
      order: -1;
      justify-content: center !important;
      margin-bottom: 10px;
    }
    .home-app .app-image.left {
      padding: 0;
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-wrap: nowrap;
      align-content: center;
    }
    .col-12.home-app.features {
      justify-content: center;
    }
  }

  @media only screen and (max-width: 768px) {
    .home-app .app-image.left {
      padding: 0;
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      flex-wrap: nowrap;
    }
    .home-app .app-info {
      order: -1;
      justify-content: center !important;
      margin-bottom: 10px;
    }
    .home-app .app-image.right {
      padding: 0;
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
    #tech-container .home-app .row {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      flex-wrap: wrap;
      align-items: center;
    }
    .home-app .app-info h2 {
      text-align: center;
    }
    .contact {
      padding: 0 50px !important;
    }
  }
  ol,
  p,
  ul {
    font-size: 16px;
    font-weight: 400;
  }

  p {
    color: #88a0a7;
    line-height: 2em;
    margin: 0 0 20px;
    max-width: 700px;
  }
`;
