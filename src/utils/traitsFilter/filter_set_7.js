export default function getTraitsBonus(
  allItem,
  uniqueTraits,
  synergysData,
  newMembers
) {
  // add trait from item
  allItem.forEach((item) => {
    switch (item) {
      case "Lagoon Emblem":
        !uniqueTraits.includes("Lagoon") && uniqueTraits.push("Lagoon");
        break;
      case "Dragonmancer Emblem":
        !uniqueTraits.includes("Dragonmancer") &&
          uniqueTraits.push("Dragonmancer");
        break;
      case "Mage Emblem":
        !uniqueTraits.includes("Mage") && uniqueTraits.push("Mage");
        break;
      case "Shimmerscale Emblem":
        !uniqueTraits.includes("Shimmerscale") &&
          uniqueTraits.push("Shimmerscale");
        break;
      case "Swiftshot Emblem":
        !uniqueTraits.includes("Swiftshot") && uniqueTraits.push("Swiftshot");
        break;
      case "Cavalier Emblem":
        !uniqueTraits.includes("Cavalier") && uniqueTraits.push("Cavalier");
        break;
      case "Mirage Emblem":
        !uniqueTraits.includes("Mirage") && uniqueTraits.push("Mirage");
        break;
      case "Darkflight Emblem":
        !uniqueTraits.includes("Darkflight") && uniqueTraits.push("Darkflight");
        break;
      case "Assassin Emblem":
        !uniqueTraits.includes("Assassin") && uniqueTraits.push("Assassin");
        break;
      case "Bruiser Emblem":
        !uniqueTraits.includes("Bruiser") && uniqueTraits.push("Bruiser");
        break;
      case "Cannoneer Emblem":
        !uniqueTraits.includes("Cannoneer") && uniqueTraits.push("Cannoneer");
        break;
      case "Evoker Emblem":
        !uniqueTraits.includes("Evoker") && uniqueTraits.push("Evoker");
        break;
      case "Jade Emblem":
        !uniqueTraits.includes("Jade") && uniqueTraits.push("Jade");
        break;
      case "Mystic Emblem":
        !uniqueTraits.includes("Mystic") && uniqueTraits.push("Mystic");
        break;
      case "Scalescorn Emblem":
        !uniqueTraits.includes("Scalescorn") && uniqueTraits.push("Scalescorn");
        break;
      case "Warrior Emblem":
        !uniqueTraits.includes("Warrior") && uniqueTraits.push("Warrior");
        break;
      case "Whispers Emblem":
        !uniqueTraits.includes("Whispers") && uniqueTraits.push("Whispers");
        break;
      case "Guild Emblem":
        !uniqueTraits.includes("Guild") && uniqueTraits.push("Guild");
        break;
      case "Ragewing Emblem":
        !uniqueTraits.includes("Ragewing") && uniqueTraits.push("Ragewing");
        break;
      case "Tempest Emblem":
        !uniqueTraits.includes("Tempest") && uniqueTraits.push("Tempest");
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
      if (a.champion_class.includes(item) || a.champion_origin.includes(item)) {
        if (
          a.is_dragon === "true" &&
          item !== "Dragon" &&
          item !== "Mystic" &&
          item !== "Shapeshifter" &&
          item !== "Guardian" &&
          item !== "Evoker" &&
          item !== "Mage" &&
          item !== "Bruiser"
        ) {
          count += 3;
        } else {
          count += 1;
        }
      }
    });

    // count trait from item
    allItem.forEach((i) => {
      switch (i) {
        case "Lagoon Emblem":
          if (item === "Lagoon") count = count + 1;
          break;
        case "Dragonmancer Emblem":
          if (item === "Dragonmancer") count = count + 1;
          break;
        case "Mage Emblem":
          if (item === "Mage") count = count + 1;
          break;
        case "Shimmerscale Emblem":
          if (item === "Shimmerscale") count = count + 1;
          break;
        case "Swiftshot Emblem":
          if (item === "Swiftshot") count = count + 1;
          break;
        case "Cavalier Emblem":
          if (item === "Cavalier") count = count + 1;
          break;
        case "Mirage Emblem":
          if (item === "Mirage") count = count + 1;
          break;
        case "Darkflight Emblem":
          if (item === "Darkflight") count = count + 1;
          break;
        case "Assassin Emblem":
          if (item === "Assassin") count = count + 1;
          break;
        case "Bruiser Emblem":
          if (item === "Bruiser") count = count + 1;
          break;
        case "Cannoneer Emblem":
          if (item === "Cannoneer") count = count + 1;
          break;
        case "Evoker Emblem":
          if (item === "Evoker") count = count + 1;
          break;
        case "Jade Emblem":
          if (item === "Jade") count = count + 1;
          break;
        case "Mystic Emblem":
          if (item === "Mystic") count = count + 1;
          break;
        case "Scalescorn Emblem":
          if (item === "Scalescorn") count = count + 1;
          break;
        case "Warrior Emblem":
          if (item === "Warrior") count = count + 1;
          break;
        case "Whispers Emblem":
          if (item === "Whispers") count = count + 1;
          break;
        case "Guild Emblem":
          if (item === "Guild") count = count + 1;
          break;
        case "Ragewing Emblem":
          if (item === "Ragewing") count = count + 1;
          break;
        case "Tempest Emblem":
          if (item === "Tempest") count = count + 1;
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
      item === "Bard" ||
      item === "Monolith" ||
      item === "Prodigy" ||
      item === "Spell-Thief" ||
      item === "Starcaller"
    )
      bonus_level = 3;
    return { name: item, count, lvls, bonus_level };
  });
  return data;
}
