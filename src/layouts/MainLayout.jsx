import styled from "styled-components";

function MainLayout(props) {
  return (
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
  );
}

export default MainLayout;

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
