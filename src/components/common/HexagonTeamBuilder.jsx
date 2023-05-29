import styled from "styled-components";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useState } from "react";
import { HEXAGON_BUILDER_BORDER_COLORS } from "config/color";
import { clearSelected } from "utils/helper";
import { useSelector } from "react-redux";

export default function Hexagon({
  className,
  data,
  hanle_change_level,
  hanle_on_drop,
  position,
  traits_bonus,
}) {
  const { championsData, itemsData, synergysData } = useSelector(
    (state) => state.api
  );
  const [levelVisible, setLevelsVisible] = useState(false);

  let championDetail = championsData.find((c) => c.champion_name === data.name);

  let championTraits = [];

  if (championDetail) {
    championTraits = synergysData.filter(
      (s) =>
        championDetail?.champion_class.includes(s.synergy_name) ||
        championDetail?.champion_origin.includes(s.synergy_name)
    );
    championTraits = championTraits.map((championTrait) => {
      return {
        ...championTrait,
        traits_bonus: traits_bonus.find(
          (traitBonus) => traitBonus.name === championTrait.synergy_name
        ).bonus_level,
      };
    });
  }

  function getItemImage(item_name) {
    return itemsData.find((i) => i.item_name === item_name)?.item_image;
  }
  function addActive(is_max_level) {
    if (is_max_level) return "active";
    return "";
  }
  function onDragStartItem(e, item_index) {
    clearSelected();
    e.stopPropagation();
    e.dataTransfer.setData("drag_item_index", item_index);
    e.dataTransfer.setData("drag_item_position", position);
  }
  function onDragStartCharacter(e) {
    clearSelected();
    if (data.cost) e.dataTransfer.setData("drag_from_position", position);
  }
  function getBonusColor(bonus_level) {
    return `bonus-level-${bonus_level}`;
  }
  return (
    <HexagonWrap
      draggable={data.cost && true}
      backgroud_image={championDetail?.champion_img_link}
      border_color={HEXAGON_BUILDER_BORDER_COLORS[data?.cost]}
      className={className}
      onMouseOver={() => setLevelsVisible(true)}
      onMouseOut={() => setLevelsVisible(false)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => hanle_on_drop(e, position, data.cost ? false : true)}
      onDragStart={(e) => onDragStartCharacter(e)}
    >
      <div className="character-items">
        {data.items !== undefined &&
          data.items.map((item, index) => {
            return (
              <img
                key={item}
                className="character-item"
                src={getItemImage(item)}
                draggable={true}
                alt="hehe"
                onDragStart={(e) => onDragStartItem(e, index)}
              />
            );
          })}
      </div>
      {championDetail?.champion_name && (
        <span className="character-name">{championDetail.champion_name}</span>
      )}
      {championTraits.length > 0 && (
        <div className="character-traits">
          {championTraits.map((t) => (
            <span
              className={getBonusColor(t.traits_bonus)}
              key={t.synergy_name}
            >
              <img src={t.synergy_image} alt="" />
            </span>
          ))}
        </div>
      )}
      {data?.max_level !== undefined && (
        <div
          onClick={() => hanle_change_level(data.position, data.max_level)}
          className="character-levels"
        >
          {(levelVisible || data.max_level) && (
            <Fragment>
              <FontAwesomeIcon
                className={addActive(data.max_level)}
                size="xs"
                icon={solid("star")}
              />
              <FontAwesomeIcon
                className={addActive(data.max_level)}
                size="xs"
                icon={solid("star")}
              />
              <FontAwesomeIcon
                className={addActive(data.max_level)}
                size="xs"
                icon={solid("star")}
              />
            </Fragment>
          )}
        </div>
      )}
      <div className="hexTop"></div>
      <div className="hexBottom"></div>
    </HexagonWrap>
  );
}

const HexagonWrap = styled.div`
  display: inline-block;
  text-align: left;
  position: relative;
  width: 72px;
  height: 42px;
  margin: 20px 5px;
  background-color: #102531;
  background-size: auto 80px;
  background-position: 50%;
  border-left: 3px solid #17313a;
  border-right: 3px solid #17313a;
  background-image: url(${({ backgroud_image }) => backgroud_image});
  border-right-color: ${({ border_color }) => border_color};
  border-left-color: ${({ border_color }) => border_color};
  cursor: pointer;
  .hexTop,
  .hexBottom {
    position: absolute;
    z-index: 1;
    overflow: hidden;
    transform: scaleY(0.5774) rotate(-45deg);
    background: inherit;
    width: 50px;
    height: 50px;
    left: 8px;
    &::after {
      content: "";
      position: absolute;
      transform-origin: 0 0;
      background: inherit;
      width: 64.5px;
      height: 41px;
      transform: rotate(45deg) scaleY(1.7) translateY(-20.5px);
    }
  }
  .hexTop {
    top: -25px;
    border-top: 4px solid #17313a;
    border-right: 4px solid #17313a;
    border-top-color: ${({ border_color }) => border_color};
    border-right-color: ${({ border_color }) => border_color};
    &::after {
      background-position: top;
    }
  }
  .hexBottom {
    bottom: -25px;
    border-bottom: 4px solid #17313a;
    border-left: 4px solid #17313a;
    border-bottom-color: ${({ border_color }) => border_color};
    border-left-color: ${({ border_color }) => border_color};
    &::after {
      content: "";
      display: block;
      padding-bottom: 90%;
      background-position: bottom;
    }
  }
  .character-items,
  .character-levels,
  .character-name,
  .character-traits {
    position: absolute;
    display: flex;
    z-index: 999;
    left: 50%;
    transform: translateX(-50%);
  }
  .character-items {
    bottom: -20px;
    justify-content: center;
    .character-item {
      width: 22px;
      height: 22px;
      border: 1px solid #17313a;
    }
  }
  .character-levels {
    top: 5px;
    .active {
      color: orange;
    }
    svg {
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
  }
  .character-name {
    top: 25px;
    font-size: 12px;
    font-weight: 600;
    line-height: 1;
    color: rgb(255, 255, 255);
    white-space: nowrap;
    text-shadow: rgb(0, 0, 0) -1px 0px, rgb(0, 0, 0) 0px 1px,
      rgb(0, 0, 0) 1px 0px, rgb(0, 0, 0) 0px -1px;
    text-align: center;
  }
  .character-traits {
    top: -17px;
    span {
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      position: relative;
      width: 20px;
      background-color: #123040;
      display: inherit;
      height: 13px;
      margin: 0 1px;
      align-items: center;
      justify-content: center;
      img {
        z-index: 10;
        height: 125%;
      }
      &::before {
        content: "";
        position: absolute;
        width: 0;
        left: 0;
        border-left: 10.5px solid transparent;
        border-right: 10.5px solid transparent;
        z-index: 1;
        bottom: 100%;
        border-bottom: 5px solid #123040;
      }
      &::after {
        content: "";
        position: absolute;
        width: 0;
        left: 0;
        border-left: 10.5px solid transparent;
        border-right: 10.5px solid transparent;
        z-index: 1;
        top: 100%;
        border-top: 5px solid #123040;
      }
    }
    span.bonus-level-1 {
      background-color: #a0715e;
      &::before {
        border-bottom: 5px solid #a0715e;
      }
      &::after {
        border-top: 5px solid #a0715e;
      }
    }
    span.bonus-level-2 {
      background-color: #7c8f92;
      &::before {
        border-bottom: 5px solid #7c8f92;
      }
      &::after {
        border-top: 5px solid #7c8f92;
      }
    }
    span.bonus-level-3 {
      background-color: #bd9a38;
      &::before {
        border-bottom: 5px solid #bd9a38;
      }
      &::after {
        border-top: 5px solid #bd9a38;
      }
    }
    span.bonus-level-4 {
      background-color: #ad1457;
      &::before {
        border-bottom: 5px solid #ad1457;
      }
      &::after {
        border-top: 5px solid #ad1457;
      }
    }
    span.bonus-level-5 {
      background-color: #ad1457;
      &::before {
        border-bottom: 5px solid #ad1457;
      }
      &::after {
        border-top: 5px solid #ad1457;
      }
    }
    span.bonus-level-6 {
      background-color: #ad1457;
      &::before {
        border-bottom: 5px solid #ad1457;
      }
      &::after {
        border-top: 5px solid #ad1457;
      }
    }
    span.bonus-level-7 {
      background-color: #ad1457;
      &::before {
        border-bottom: 5px solid #ad1457;
      }
      &::after {
        border-top: 5px solid #ad1457;
      }
    }
    span.bonus-level-8 {
      background-color: #ad1457;
      &::before {
        border-bottom: 5px solid #ad1457;
      }
      &::after {
        border-top: 5px solid #ad1457;
      }
    }
  }
`;
