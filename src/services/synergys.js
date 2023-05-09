import { collection, getDocs } from "firebase/firestore";

async function getAllSynergys(db) {
  const res = await getDocs(collection(db, "synergys"));
  return res.docs.map((doc) => doc.data());
}

const services = {
  getAllSynergys,
};

export default services;
