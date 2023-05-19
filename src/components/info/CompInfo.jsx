import styled from "styled-components";
import TierStatus from "components/common/TierStatus";
import CharacterInfo from "components/info/CharacterInfo";
import { capitalize } from "utils/helper";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Status from "components/common/Status";
import React, { useState, lazy, Suspense, memo } from "react";
import { BONUS_LEVEL_COLOR } from "config/color";
import { useSelector } from "react-redux";

const SynergyInfo = lazy(() => import("components/info/SynergyInfo"));
const ItemInfo = lazy(() => import("components/info/ItemInfo"));
const MiniMap = lazy(() => import("components/common/MiniMap"));

const TeamComp = memo((props) => {
  const { itemsData } = useSelector((state) => state.api);
  const [expand, setExpand] = useState(false);

  const allItem = props.team_detail.members.reduce((all, cur) => {
    return all.concat(cur.items);
  }, []);
  function hanleClickComp() {
    setExpand(!expand);
  }

  function getSubItem(name) {
    let recipes = itemsData.filter((item) => {
      return (
        item.is_combined === "true" &&
        (item.recipe_1 === name.toLowerCase() ||
          item.recipe_2 === name.toLowerCase())
      );
    });
    let subItemName = "";
    for (let i = 0; i < recipes.length; i++) {
      if (allItem.includes(recipes[i].item_name)) {
        subItemName = recipes[i].item_name;
        break;
      }
    }
    return subItemName;
  }

  return (
    <TeamCompWrap is_opened={expand}>
      <div
        onClick={hanleClickComp}
        key={props.team_detail.name}
        className="team-comps-item"
      >
        <div className="team-comps-item-line-1">
          {props.status && (
            <div className="team-comps-item-line-1-compstatus">
              <Status status={props.status} />
            </div>
          )}
          <div className="item-line-1-name">
            <div className="item-line-1-name-tier">
              <TierStatus tier={props.team_detail.tier} />
            </div>
            <div className="item-line-1-name-info">
              <div className="info-name">{props.team_detail.name}</div>
              <div className="info-tier">
                <button>{capitalize(props.team_detail.type)}</button>
              </div>
            </div>
          </div>
          <div className="item-line-1-member">
            {props.team_detail.members.map((member) => {
              return (
                <div key={member.name} className="member">
                  <CharacterInfo
                    max_level={member.max_level}
                    items_equip={member.items}
                    className="member-image"
                    width="45px"
                    height="45px"
                    champion_name={member.name}
                  />
                  <span className="member-name">{member.name}</span>
                </div>
              );
            })}
          </div>
          <div className="item-line-1-btn">
            <FontAwesomeIcon
              className="open-icon"
              size="xs"
              icon={solid("chevron-down")}
            />
          </div>
        </div>
        {expand && (
          <div className="team-comps-item-line-2">
            <div className="team-comps-item-line-2-item">
              <div className="line-2-item-title">
                <span>Early Comp</span>
              </div>
              <div className="line-2-item-early-comps">
                {props.team_detail.early_comp.map((item) => {
                  return (
                    <div key={item} className="early-member">
                      <CharacterInfo
                        width="35px"
                        height="35px"
                        champion_name={item}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="team-comps-item-line-2-item">
              <div className="line-2-item-title">
                <span>Traits</span>
              </div>
              <div className="team-comps-item-line-2-synergy-icon-wrapper">
                {props.team_detail.traits
                  .sort(
                    (a, b) => b.bonus_level - a.bonus_level || b.count - a.count
                  )
                  .map((item) => {
                    return (
                      item.bonus_level >= 1 && (
                        <SynergyInfoWrap
                          key={item.name}
                          bonus_level_color={
                            BONUS_LEVEL_COLOR[item.bonus_level]
                          }
                        >
                          <Suspense>
                            <SynergyInfo
                              width="20px"
                              height="20px"
                              count={item.count}
                              hide_name={true}
                              synergy_name={item.name}
                              bonus_level={item.bonus_level}
                            />
                          </Suspense>
                        </SynergyInfoWrap>
                      )
                    );
                  })}
              </div>
            </div>
            <div className="team-comps-item-line-2-item">
              <div className="line-2-item-title">
                <span>Carousel</span>
              </div>
              <div className="line-2-item-carousel">
                {props.team_detail.carousel.map((itemName, index) => {
                  return (
                    <React.Fragment key={itemName}>
                      <div className="carousel-item-wrapper">
                        <Suspense>
                          <ItemInfo
                            width="32px"
                            height="32px"
                            item_name={itemName}
                          />
                          <ItemInfo
                            className="carousel-sub-item"
                            width="18px"
                            height="18px"
                            item_name={getSubItem(itemName)}
                          />
                        </Suspense>
                      </div>
                      {index < props.team_detail.carousel.length - 1 && (
                        <FontAwesomeIcon
                          className="coin"
                          icon={solid("chevron-right")}
                        />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        {expand && (
          <div className="team-comps-item-line-3">
            <div className="team-comps-item-line-3-item">
              <div className="line-3-item-title">
                <span>Options</span>
              </div>
              <div className="line-3-item-options">
                {props.team_detail.options.map((option, index) => {
                  return (
                    <div key={index} className="line-3-item-options-item">
                      <div className="line-3-item-options-item-from">
                        {option.replace_from.map((i) => {
                          return i !== "lvlup" ? (
                            <CharacterInfo
                              key={i}
                              className="options-avatar-champion"
                              height="35px"
                              width="35px"
                              champion_name={i}
                            />
                          ) : (
                            <button key={i} className="lvlup-btn">
                              lvl up
                            </button>
                          );
                        })}
                      </div>
                      <FontAwesomeIcon
                        className="coin"
                        icon={solid("chevron-right")}
                      />
                      <div className="line-3-item-options-item-to">
                        {option.replace_to.map((i) => {
                          return (
                            i !== "lvlup" && (
                              <CharacterInfo
                                key={i}
                                className="options-avatar-champion"
                                height="35px"
                                width="35px"
                                champion_name={i}
                              />
                            )
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="team-comps-item-line-3-item">
              <div className="line-3-item-title">
                <span>Positioning</span>
              </div>
              <div className="line-3-item-title" id="hexagon-mini">
                <Suspense>
                  <MiniMap members={props.team_detail.members} />
                </Suspense>
              </div>
            </div>
          </div>
        )}
      </div>
    </TeamCompWrap>
  );
});

export default TeamComp;

const SynergyInfoWrap = styled.div`
  margin-right: 5px;
  margin-bottom: 10px;
  height: min-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bonus_level_color};
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  padding: 0 5px 0 4px;
  position: relative;
  margin-bottom: 25px;
  &::before {
    content: "";
    position: absolute;
    width: 0;
    left: 0;
    border-left: 14px solid transparent;
    border-right: 14px solid transparent;
    z-index: 1;
    bottom: 100%;
    border-bottom: 6.93px solid ${(props) => props.bonus_level_color};
  }
  &::after {
    content: "";
    position: absolute;
    width: 0;
    left: 0;
    border-left: 14px solid transparent;
    border-right: 14px solid transparent;
    z-index: 1;
    top: 100%;
    border-top: 6.93px solid ${(props) => props.bonus_level_color};
  }
`;

const TeamCompWrap = styled.div`
  .team-comps-item {
    cursor: pointer;
    margin-bottom: 10px;
    border: 1px solid;
    border-color: ${(props) => (props.is_opened ? "#227aad" : "#17313a")};
    background-color: #102531;
    .line-2-item-title,
    .line-3-item-title {
      margin-bottom: 5px;
      span {
        color: #88a0a7;
        font-size: 13px;
        font-weight: 400;
      }
      .team-comps-item-line-3-item:nth-child(2) div {
      @media only screen and (max-width: 660px) {
        position: relative;
        left: 15px;
      }
    }
    @media only screen and (max-width: 1024px) {
      margin: 0 auto;
      width: max-content;
    }
    }
    .team-comps-item-line-3 {
      @media only screen and (max-width: 660px) {
        display: flex;
        flex-direction: column;
      }
      display: grid;
      border-top: 1px solid #17313a;
      grid-template-columns: repeat(2, 1fr);
      .team-comps-item-line-3-item {
        @media only screen and (max-width: 660px) {
          border-bottom: 1px solid #17313a;
        }
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        &:nth-child(1) {
          border-right: 1px solid #17313a;
        }
        .line-3-item-options {
          display: flex;
          flex-direction: column;
          .line-3-item-options-item {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 10px;
            .options-avatar-champion {
              margin: 0 4px;
            }
            .line-3-item-options-item-from {
              display: flex;
              align-items: center;
              .lvlup-btn {
                border: none;
                border-radius: 4px;
                text-transform: uppercase;
                color: white;
                font-size: 18px;
                background-color: #123040;
                font-size: 14px;
                padding: 4px 10px;
                font-weight: 600;
              }
            }
            .line-3-item-options-item-to {
              display: flex;
              align-items: center;
            }
            svg {
              margin: 0 10px;
              color: #88a0a7;
            }
          }
        }
      }
    }
    .team-comps-item-line-2 {
      @media only screen and (max-width: 660px) {
        display: flex;
        flex-direction: column;
      }
      display: grid;
      border-top: 1px solid #17313a;
      grid-template-columns: repeat(3, 1fr);
      .team-comps-item-line-2-item {
        @media only screen and (max-width: 660px) {
          border-bottom: 1px solid #17313a;
        }
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .line-2-item-carousel {
          display: flex;
          align-items: center;
          @media only screen and (max-width: 660px) {
            margin-bottom: 15px;
          }
          .carousel-item-wrapper {
            position: relative;
            .carousel-sub-item {
              z-index: 1000;
              position: absolute;
              bottom: 0;
              right: 0;
              transform: translateX(43%) translateY(35%);
            }
          }
          svg {
            margin: 0 10px;
            color: #88a0a7;
          }
        }
        &:nth-child(1),
        &:nth-child(2) {
          border-right: 1px solid #17313a;
        }
        .team-comps-item-line-2-synergy-icon-wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 10px;
        }
      }
      .line-2-item-early-comps {
        display: flex;
        .early-member {
          padding: 5px;
        }
      }
    }
    .team-comps-item-line-1 {
      @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
      }
      display: grid;
      grid-template-columns: 30% 67% 3%;
      position: relative;
      .team-comps-item-line-1-compstatus {
        width: 22px;
        height: 22px;
        border: 1px solid #17313a;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        background-color: #0d202b;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: center;
        align-items: center;
        @media only screen and (max-width: 768px) {
          top: 20%;
        }
        @media only screen and (max-width: 541px) {
          top: 15%;
        }
        .legend-down {
          transform: translateY(-3px) translateX(-2px);
        }
      }
      .item-line-1-name {
        display: flex;
        align-items: center;
        padding: 10px 10px 10px 20px;
        .item-line-1-name-tier {
          display: flex;
          align-items: center;
          margin-right: 15px;
        }
        .item-line-1-name-info {
          .info-name {
          }
          .info-tier {
            margin-top: 2px;
            button {
              padding: 2px 4px;
              border: none;
              background-color: #123040;
              color: #88a0a7;
              border-radius: 4px;
              width: max-content;
              font-size: 12px;
            }
          }
        }
      }
      .item-line-1-member {
        padding: 10px 0;
        display: flex;
        .member {
          padding: 5px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .member-image {
          }
          .member-name {
            margin-top: 3px;
            font-size: 11px;
            width: 45px;
            min-height: 15px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: center;
            color: #88a0a7;
            line-height: 1.3em;
            transition: all .3s;
          }
        }
      }
      .item-line-1-btn {
        display: flex;
        align-items: center;
        @media (max-width: 768px) {
          display: block;
          margin: 0 auto;
        }
        .open-icon {
          cursor: pointer;
          color: #88a0a7;
        }
      }
    }
  }
  @media (max-width: 1024px) {
    .item-line-1-member {
      flex-wrap: wrap;
      margin: 0 10px;
    }
  }
  #hexagon-mini {
    @media only screen and (max-width: 660px) {
      position: relative;
      left: 15px;
      margin-bottom: 20px;
    }
    @media only screen and (max-width: 365px) {
      transform: scale(0.85);
      margin-bottom: 20px;
    }
    @media only screen and (max-width: 350px) {
      transform: scale(0.7);
      margin: 0;
    }
`;
