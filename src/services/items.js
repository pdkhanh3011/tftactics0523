import { collection, getDocs } from "firebase/firestore";

async function getAllItems(db) {
  const res = await getDocs(collection(db, "items"));
  return res.docs.map((doc) => doc.data());
}

const services = {
  getAllItems,
};

export default services;
