import { collection, getDocs } from "firebase/firestore";

async function getAllTeamComps(db) {
  const res = await getDocs(collection(db, "teamcomps"));
  return res.docs.map((doc) => doc.data());
}

const services = {
  getAllTeamComps,
};

export default services;
