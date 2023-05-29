export default function getTraitsBonus(
  allItem,
  uniqueTraits,
  synergysData,
  newMembers
) {
  // add trait from item
  allItem.forEach((item) => {
    switch (item) {
      case "A.D.M.I.N. Emblem":
        !uniqueTraits.includes("A.D.M.I.N.") && uniqueTraits.push("A.D.M.I.N.");
        break;
      case "Anima Squad Emblem":
        !uniqueTraits.includes("Anima Squad") &&
          uniqueTraits.push("Anima Squad");
        break;
      case "Duelist Emblem":
        !uniqueTraits.includes("Duelist") && uniqueTraits.push("Duelist");
        break;
      case "Heart Emblem":
        !uniqueTraits.includes("Heart") && uniqueTraits.push("Heart");
        break;
      case "InfiniTeam Emblem":
        !uniqueTraits.includes("InfiniTeam") && uniqueTraits.push("InfiniTeam");
        break;
      case "Mascot Emblem":
        !uniqueTraits.includes("Mascot") && uniqueTraits.push("Mascot");
        break;
      case "Ox Force Emblem":
        !uniqueTraits.includes("Ox Force") && uniqueTraits.push("Ox Force");
        break;
      case "Renegade Emblem":
        !uniqueTraits.includes("Renegade") && uniqueTraits.push("Renegade");
        break;
      default:
        break;
    }
  });

  // return this
  let data = [];

  // loop unique traits arr
  data = uniqueTraits.map((item) => {
    let count = 0; // count traits
    let lvls = []; // bonus level

    // get bonus level
    synergysData
      .find((s) => s.synergy_name.toLowerCase() === item.toLowerCase())
      ?.synergy_description_level.split("/")
      .forEach((i, index) => {
        if (index === 0) {
          lvls.push(i.split("$")[0]);
        } else {
          lvls.push(i.split("$")[0].split("\n")[1]);
        }
      });

    // count trait from character
    let championUnique = [];
    newMembers.forEach((c) => {
      if (!championUnique.find((i) => i?.champion_name === c.champion_name)) {
        championUnique.push(c);
      }
    });
    championUnique.forEach((a) => {
      if (a.champion_class.includes(item) || a.champion_origin.includes(item))
        count += 1;
    });

    // count trait from item
    allItem.forEach((i) => {
      switch (i) {
        case "A.D.M.I.N. Emblem":
          if (item === "A.D.M.I.N.") count = count + 1;
          break;
        case "Anima Squad Emblem":
          if (item === "Anima Squad") count = count + 1;
          break;
        case "Duelist Emblem":
          if (item === "Duelist") count = count + 1;
          break;
        case "Heart Emblem":
          if (item === "Heart") count = count + 1;
          break;
        case "InfiniTeam Emblem":
          if (item === "InfiniTeam") count = count + 1;
          break;
        case "Mascot Emblem":
          if (item === "Mascot") count = count + 1;
          break;
        case "Ox Force Emblem":
          if (item === "Ox Force") count = count + 1;
          break;
        case "Renegade Emblem":
          if (item === "Renegade") count = count + 1;
          break;
        default:
          break;
      }
    });

    // get bonus level
    let bonus_level = 0;
    lvls.forEach((lvl) => {
      if (count >= lvl) {
        bonus_level += 1;
      }
    });
    if (
      item === "Corrupted" ||
      item === "Forecaster" ||
      (item === "Parallel" && count === 2) ||
      (item === "Riftwalker" && count === 3) ||
      (item === "Supers" && count === 3)
    )
      bonus_level = 3;
    return { name: item, count, lvls, bonus_level };
  });
  return data;
}
