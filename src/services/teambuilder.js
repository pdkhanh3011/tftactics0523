import { collection, addDoc, getDoc, doc } from "firebase/firestore";

async function saveTeam(team, db) {
  let id;
  try {
    const docRef = await addDoc(collection(db, "teambuilders"), {
      members: team,
    });
    id = docRef.id;
  } catch (error) {
    throw new Error(error);
  }
  return id;
}

async function getTeamById(id, db) {
  let data = [];
  try {
    const docSnap = await getDoc(doc(db, "teambuilders", id));
    data = docSnap.data().members;
  } catch (error) {
    throw new Error(error);
  }
  return data;
}

const services = {
  saveTeam,
  getTeamById,
};

export default services;
