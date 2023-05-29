import { useEffect, lazy, Suspense, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import styled from "styled-components";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";

const CharacterInfo = lazy(() => import("components/info/CharacterInfo"));

function ChampionsStats() {
  const championsData = [...useSelector((state) => state.api.championsData)];

  const searchText = useOutletContext();
  const [level, setLevel] = useState(1);

  const [champion, setchampion] = useState(true);
  const [dps, setdps] = useState(false);
  const [health, sethealth] = useState(false);
  const [atkSpd, setatkSpd] = useState(true);
  const [mana, setmana] = useState(true);
  const [damage, setdamage] = useState(true);
  const [armor, setarmor] = useState(true);
  const [range, setrange] = useState(true);
  const [manaregen, setmanaregen] = useState(true);

  const [filterOptions, setFilterOptions] = useState({
    name: "dps",
    searchText: "",
    charType: "offense",
  });

  const [filteredData, setfilteredData] = useState(championsData);

  useEffect(() => {
    setFilterOptions({
      ...filterOptions,
      searchText,
    });
  }, [searchText]);

  const hanleLevel = useCallback((e, level) => {
    let svgs = document.querySelectorAll("#champions-stats .level svg");
    svgs.forEach((item) => {
      item.style.color = "white";
    });
    for (let i = 0; i < level; i++) {
      svgs[i].style.color = "orange";
    }
    setLevel(level);
  }, []);

  const changeToOffense = () => {
    if (filterOptions.charType !== "offense") {
      setdps(false);
      setFilterOptions({
        ...filterOptions,
        name: "dps",
        charType: "offense",
      });
    }
  };

  const changeToDefense = () => {
    if (filterOptions.charType !== "defense") {
      sethealth(false);
      setFilterOptions({
        ...filterOptions,
        name: "health",
        charType: "defense",
      });
    }
  };

  const activeFilterCLass = (filterName, state) => {
    if (filterOptions.name === filterName)
      return state ? "increase" : "decrease";
    return "";
  };

  const handleOnclickFilter = (filterName, setStateCallback) => {
    if (filterOptions.name === filterName) {
      setStateCallback((pre) => !pre);
    } else {
      setStateCallback(true);
    }
    setFilterOptions((pre) => {
      return { ...pre, name: filterName };
    });
  };

  useEffect(() => {
    setfilteredData([
      ...championsData
        .filter((item) =>
          item.champion_name.toLowerCase().includes(filterOptions.searchText)
        )
        .sort((a, b) => {
          if (filterOptions.name === "champion") {
            if (champion === true) {
              return a.champion_name.localeCompare(b.champion_name);
            } else {
              return b.champion_name.localeCompare(a.champion_name);
            }
          }
          if (filterOptions.name === "dps") {
            if (dps === true) {
              return (
                Number(a.champion_dps.split("/")[level - 1].trim()) -
                Number(b.champion_dps.split("/")[level - 1].trim())
              );
            } else {
              return (
                b.champion_dps.split("/")[level - 1].trim() -
                Number(a.champion_dps.split("/")[level - 1].trim())
              );
            }
          }
          if (filterOptions.name === "atkspd") {
            if (atkSpd === true) {
              return Number(a.champion_akt_spd) - Number(b.champion_akt_spd);
            } else {
              return Number(b.champion_akt_spd) - Number(a.champion_akt_spd);
            }
          }
          if (filterOptions.name === "damage") {
            if (damage === true) {
              return (
                Number(a.champion_damage.split("/")[level - 1]) -
                Number(b.champion_damage.split("/")[level - 1])
              );
            } else {
              return (
                Number(b.champion_damage.split("/")[level - 1].trim()) -
                a.champion_damage.split("/")[level - 1].trim()
              );
            }
          }
          if (filterOptions.name === "range") {
            if (range === true) {
              return Number(a.champion_range) - Number(b.champion_range);
            } else {
              return Number(b.champion_range) - a.champion_range;
            }
          }
          if (filterOptions.name === "health") {
            if (health === true) {
              return (
                Number(a.champion_health.split("/")[level - 1].trim()) -
                Number(b.champion_health.split("/")[level - 1].trim())
              );
            } else {
              return (
                Number(b.champion_health.split("/")[level - 1].trim()) -
                Number(a.champion_health.split("/")[level - 1].trim())
              );
            }
          }
          if (filterOptions.name === "mana") {
            if (mana === true) {
              return Number(a.champion_mana) - Number(b.champion_mana);
            } else {
              return Number(b.champion_mana) - Number(a.champion_mana);
            }
          }
          if (filterOptions.name === "armor") {
            if (armor === true) {
              return Number(a.champion_armor) - Number(b.champion_armor);
            } else {
              return Number(b.champion_armor) - Number(a.champion_armor);
            }
          }
          if (filterOptions.name === "manaregen") {
            if (manaregen === true) {
              return Number(a.champion_mr) - Number(b.champion_mr);
            } else {
              return Number(b.champion_mr) - Number(a.champion_mr);
            }
          }
        }),
    ]);
  }, [filterOptions]);

  return (
    <ChampionsStatsWrap id="champions-stats">
      <div className="wrapper">
        <div className="title">
          <p>
            Find a list of all the Champion stats in Teamfight Tactics including
            health, range, and dps.
          </p>
        </div>
        <div className="options">
          <div onClick={() => changeToOffense()} className="btn">
            <span>offense</span>
          </div>
          <div onClick={() => changeToDefense()} className="btn">
            <span>defense</span>
          </div>
          <div className="level">
            <FontAwesomeIcon
              onClick={(e) => hanleLevel(e, 1)}
              size="xl"
              icon={solid("star")}
            />
            <FontAwesomeIcon
              onClick={(e) => hanleLevel(e, 2)}
              size="xl"
              icon={solid("star")}
            />
            <FontAwesomeIcon
              onClick={(e) => hanleLevel(e, 3)}
              size="xl"
              icon={solid("star")}
            />
          </div>
        </div>
        <div className="table">
          <div className="table-header">
            <div
              onClick={() => handleOnclickFilter("champion", setchampion)}
              className={`table-header-item ${activeFilterCLass(
                "champion",
                champion
              )} `}
            >
              Champion
            </div>
            {filterOptions.charType === "offense" ? (
              <>
                <div
                  onClick={() => handleOnclickFilter("dps", setdps)}
                  className={`table-header-item ${activeFilterCLass(
                    "dps",
                    dps
                  )}`}
                >
                  DPS
                </div>
                <div
                  onClick={() => handleOnclickFilter("atkspd", setatkSpd)}
                  className={`table-header-item ${activeFilterCLass(
                    "atkspd",
                    atkSpd
                  )}`}
                >
                  Atk Spd
                </div>
                <div
                  onClick={() => handleOnclickFilter("damage", setdamage)}
                  className={`table-header-item ${activeFilterCLass(
                    "damage",
                    damage
                  )}`}
                >
                  Damage
                </div>
                <div
                  onClick={() => handleOnclickFilter("range", setrange)}
                  className={`table-header-item ${activeFilterCLass(
                    "range",
                    range
                  )}`}
                >
                  Range
                </div>
              </>
            ) : (
              <>
                <div
                  onClick={() => handleOnclickFilter("health", sethealth)}
                  className={`table-header-item ${activeFilterCLass(
                    "health",
                    health
                  )}`}
                >
                  Health
                </div>
                <div
                  onClick={() => handleOnclickFilter("mana", setmana)}
                  className={`table-header-item ${activeFilterCLass(
                    "mana",
                    mana
                  )}`}
                >
                  Mana
                </div>

                <div
                  onClick={() => handleOnclickFilter("armor", setarmor)}
                  className={`table-header-item ${activeFilterCLass(
                    "armor",
                    armor
                  )}`}
                >
                  Armor
                </div>
                <div
                  onClick={() => handleOnclickFilter("manaregen", setmanaregen)}
                  className={`table-header-item ${activeFilterCLass(
                    "manaregen",
                    manaregen
                  )}`}
                >
                  MR
                </div>
              </>
            )}
          </div>
          <div className="table-items">
            {filteredData.map((item) => {
              return (
                <div className="table-item" key={item.champion_name}>
                  <div className="item-name-img">
                    <Suspense>
                      <CharacterInfo
                        champion_name={item.champion_name}
                        width="40px"
                        height="40px"
                        className="item-name-img-l"
                      />
                    </Suspense>
                    <span className="item-name-image-span">
                      {item.champion_name}
                    </span>
                  </div>
                  <div className="item-stats">
                    {filterOptions.charType === "offense" ? (
                      <span>
                        {item.champion_dps.split("/")[level - 1].trim()}
                      </span>
                    ) : (
                      <span>
                        {item.champion_health.split("/")[level - 1].trim()}
                      </span>
                    )}
                  </div>
                  <div className="item-stats">
                    {filterOptions.charType === "offense" ? (
                      <span>{item.champion_akt_spd}</span>
                    ) : (
                      <span>{item.champion_mana}</span>
                    )}
                  </div>
                  <div className="item-stats">
                    {filterOptions.charType === "offense" ? (
                      <span>
                        {item.champion_damage.split("/")[level - 1].trim()}
                      </span>
                    ) : (
                      <span>{item.champion_armor}</span>
                    )}
                  </div>
                  <div className="item-stats">
                    {filterOptions.charType === "offense" ? (
                      <span>{item.champion_range}</span>
                    ) : (
                      <span>{item.champion_mr}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ChampionsStatsWrap>
  );
}

export default ChampionsStats;

const ChampionsStatsWrap = styled.div`
  .wrapper {
    .title {
      p {
        color: #88a0a7;
        font-size: 16px;
      }
      margin-bottom: 20px;
    }
    .options {
      display: flex;
      margin-bottom: 10px;
      align-items: center;
      .btn {
        transition: all 0.3s;
        cursor: pointer;
        padding: 10px 67px 11px 67px;
        background-color: #123040;
        border-radius: 0%;
        width: min-content;
        &:hover {
          background-color: #1d4e68;
        }
        &:nth-child(1) {
          margin-right: 30px;
        }
        span {
          text-transform: uppercase;
          font-size: 12px;
          color: white;
          font-weight: 600;
        }
        @media only screen and (max-width: 768px) {
          border-radius: 0%;
        }
        @media only screen and (max-width: 575px) {
          flex-grow: 1;
          padding-top: 5px;
          padding-bottom: 11px;
        }
        @media only screen and (max-width: 470px) {
          padding: 5px 0 11px 0;
          &:nth-child(1) {
            margin-right: 15px;
          }
        }
      }
      .level {
        margin-left: auto;
        height: 100%;
        svg {
          transition: all 0.3s;
          margin: 2px;
          cursor: pointer;
          &:nth-child(1) {
            color: orange;
          }
          &:hover {
            color: orange !important;
          }
        }
        svg.active {
          color: orange;
        }
        @media only screen and (max-width: 768px) {
          display: none;
        }
      }
    }
    .table {
      .table-header {
        display: grid;
        grid-template-columns: 24% 19% 19% 19% 19%;
        border: 1px solid #17313a;
        text-align: right;
        @media only screen and (max-width: 768px) {
          display: flex;
        }
        .table-header-item {
          position: relative;
          cursor: pointer;
          padding: 10px;
          font-size: 14px;
          color: #88a0a7;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          &:nth-child(1) {
            text-align: left;
            padding-left: 20px;
          }
          &:nth-child(5) {
            padding-right: 20px;
            @media only screen and (max-width: 768px) {
              display: none;
            }
          }
          @media only screen and (max-width: 768px) {
            flex-grow: 1;
          }
          @media only screen and (max-width: 575px) {
            text-align: center;
            width: 25%;
            &:nth-child(1) {
              text-align: center;
            }
          }
        }
        .table-header-item.increase {
          box-shadow: inset 0 2px 0 0 #d47559;
        }
        .table-header-item.decrease {
          box-shadow: inset 0 -2px 0 0 #d47559;
        }
      }
      .table-items {
        .table-item {
          display: grid;
          grid-template-columns: 24% 19% 19% 19% 19%;
          border-right: 1px solid #17313a;
          border-left: 1px solid #17313a;
          border-bottom: 1px solid #17313a;
          @media only screen and (max-width: 768px) {
            display: flex;
          }
          span {
            font-size: 15px;
            color: #6287a7;
            vertical-align: middle;
          }
          .item-name-img,
          .item-stats {
            display: flex;
            align-items: center;
            padding: 10px;
            @media only screen and (max-width: 768px) {
              flex-basis: 25%;
              max-width: 25%;
            }
            &:nth-child(5) {
              padding-right: 20px;
              @media only screen and (max-width: 768px) {
                display: none;
              }
            }
          }
          .item-name-img {
            width: max-content;
            padding-left: 20px;
            .item-name-image-span {
              margin-left: 15px;
              @media only screen and (max-width: 610px) {
                display: none;
              }
            }
          }
          .item-stats {
            justify-content: flex-end;
          }
          @media only screen and (max-width: 575px) {
            .item-stats,
            .item-name-img {
              justify-content: center;
            }
          }
        }
      }
    }
  }
`;
