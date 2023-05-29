import styled from "styled-components";

function Button(props) {
  return (
    <ButtonWrap
      id="defaul-button"
      className={props.className}
      onClick={() => props.handleOnClick(props.value)}
    >
      {props.children}
      <span>{props.btnText}</span>
    </ButtonWrap>
  );
}

export default Button;

const ButtonWrap = styled.div`
  padding: 7px 12px;
  display: flex;
  align-items: center;
  width: max-content;
  span {
    font-size: 14px;
    font-weight: 600;
  }
`;
