import getTraitsBonus85 from "utils/traitsFilter/filter_set_8.5";
import getTraitsBonus7 from "utils/traitsFilter/filter_set_7";

const tftVersionConfig = {
  allApi: {
    set85: {
      version: "8.5",
      filter: getTraitsBonus85,
      firebaseProjectConfig: {
        apiKey: "AIzaSyBcO-VX-cMtdI0tDY6kvjViZ9d76o-MlwI",
        authDomain: "tftactics-gg-2.firebaseapp.com",
        databaseURL:
          "https://tftactics-gg-2-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "tftactics-gg-2",
        storageBucket: "tftactics-gg-2.appspot.com",
        messagingSenderId: "38082388668",
        appId: "1:38082388668:web:dd5204cb7adb1c3150a6b9",
      },
    },
    set7: {
      version: "7.0",
      filter: getTraitsBonus7,
      firebaseProjectConfig: {
        apiKey: "AIzaSyAADN2hQgDvRSAmPMbKWprz3u-R94UZqWo",
        authDomain: "tftactics-gg.firebaseapp.com",
        databaseURL:
          "https://tftactics-gg-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "tftactics-gg",
        storageBucket: "tftactics-gg.appspot.com",
        messagingSenderId: "778823484552",
        appId: "1:778823484552:web:45f54cce819328caa44b3d",
      },
    },
  },
};

export default tftVersionConfig;