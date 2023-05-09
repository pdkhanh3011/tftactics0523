import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Button from "./Button";
import { useState, } from "react";
import styled from "styled-components";

function Select(props) {
  const [showDropdown, setshowDropdown] = useState(false);
  const [data, setData] = useState(props.dropDownItems);
  function hanleClick() {
    setshowDropdown(!showDropdown);
  }
  function dropdownItemClass(isSelected) {
    if (isSelected) return "dropdown-item selected";
    return "dropdown-item";
  }
  function onClickItem(data) {
    setData(pre => {
      pre.forEach(item => {
        item.isSelected = false;
      });
      pre.find(item => item.value === data).isSelected = true;
      return pre;
    })
    props.handleSelect(data);
  }
  return (
    <SelectDefault
      className={props.className}
      id="default-select"
      onClick={hanleClick}
    >
      <div className="value">
        <span>{data?.find(item => item.isSelected === true)?.text}</span>
      </div>
      <div className="button-dropdown">
        <FontAwesomeIcon icon={solid("caret-down")} />
      </div>
      {showDropdown ? (
        <div className="dropdown">
          {data.map((item, index) => {
            return (
              <Button
                handleOnClick={onClickItem}
                className={dropdownItemClass(item?.isSelected)}
                btnText={item.text}
                value={item.value}
                key={item + index}
              />
            );
          })}
        </div>
      ) : (
        ""
      )}
    </SelectDefault>
  );
}

export default Select;

const SelectDefault = styled.div`
  position: relative;
  cursor: pointer;
  background-color: #123040;
  color: white;
  padding: 4px 12px;
  border-radius: 4px;
  min-width: 100px;
  width: max-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .value {
    span {
      margin-right: 25px;
      font-size: 14px;
    }
  }
  .dropdown {
    position: absolute;
    top: 100%;
    width: 100%;
    left: 0;
    background-color: #102531;
    z-index: 1;
    .dropdown-item {
      transition: all 0.3s;
      height: 40px;
      display: flex;
      align-items: center;
      &:hover {
        background-color: #112d3c;
      }
    }
    .dropdown-item.selected {
      background-color: #227aad;
    }
    #defaul-button {
      width: 100%;
    }
  }
`;
