import styled from "styled-components";

function MainLayout(props) {
  return (
    <Container>
      <VerisonUpdate className="version-update" href="/">
        <div className="update-title">
          Set 8.5 Update is now live on TFTactics!
        </div>
        <div className="update-subtitle">Click here to learn more</div>
      </VerisonUpdate>
      <Wrap>
        <Navigation>
          {props.nameContent}
          {props.sideContent}
        </Navigation>
        <div className="content">
          {props.titleContent}
          {props.mainContent}
        </div>
      </Wrap>
    </Container>
  );
}

export default MainLayout;

const Container = styled.div`
  padding-top: 45px;
  max-width: 1200px;
  margin: 0 auto;
`;

const VerisonUpdate = styled.div`
  position: relative;
  font-size: 21px;
  background: #102531;
  background-image: url(https://rerollcdn.com/update/set-7-5-update-bg.png);
  background-position: center 600px;
  background-size: cover;
  border: 1px solid #17313a;
  width: 100%;
  height: 100px;
  color: hsla(0, 0%, 100%, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  filter: saturate(1);
  cursor: pointer;
  transition: all 0.3s;
  margin: 0 auto 30px;
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
`;

const Wrap = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 27.8% auto;
  grid-template-rows: auto;
  padding-bottom: 30px;
`;

const Navigation = styled.div`
  border-right: 1px solid #17313a;
  padding-right: 30px;
`;
