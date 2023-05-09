import { collection, getDocs } from "firebase/firestore";

async function getAllChampions(db) {
  const res = await getDocs(collection(db, "champions"));
  return res.docs.map((doc) => doc.data());
}

const services = {
  getAllChampions,
};

export default services;
