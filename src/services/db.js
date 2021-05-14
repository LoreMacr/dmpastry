import firebase from "firebase/app";
import "firebase/firestore";

let db;
function getDb() {
  if (!db) {
    db = firebase.firestore();
  }
  return db;
}

const formatResponse = (success, data) => {
  return { success, data }
}

export async function createObjectById(collection, object, id) {
  try {
    const db = getDb();
    await db.collection(collection).doc(id).set(object);
    return formatResponse(true);
  } catch (error) {
    return formatResponse(false);
  }
}
export async function createObject(collection, object) {
  try {
    const db = getDb();
    const docRef = await db.collection(collection).add(object);
    return formatResponse(true, docRef.id);
  } catch (error) {
    return formatResponse(false);
  }
}

export async function getObjectById(collection, id) {
  try {
    const db = getDb();
    const doc = await db.collection(collection).doc(id).get();
    if (doc.exists) {
      const data = doc.data();
      return formatResponse(true, { ...data, id: doc.id });
    }
  } catch (error) {
    return formatResponse(false);
  }
}

export async function listCollection(collection) {
    try {
      const db = getDb();
      const querySnapshot = await db.collection(collection).get();
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() })  
      });
      return { success: true, data };
  
    } catch(error) {
      console.log('IMTCHLG ~ file: db.js ~ line 52 ~ listCollection ~ error', error);
      return { success: false };
    }
  }

  export async function getDocsByQuery (collection, field, value ) {
    try {
      const db = getDb();
      const querySnapshot = await db.collection(collection).where(field, "==" , value).get();
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() })  
      });
      return { success: true, data };
  
    } catch(error) {
      console.log('IMTCHLG ~ file: db.js ~ line 52 ~ listCollection ~ error', error);
      return { success: false };
    }
  }
  export async function listCart(userId) {
    try {
      const db = getDb();
      let query = await db.collection('orders')
      query = query.where('userId', '==', userId)
      const querySnapshot = await query.get();
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      })
      return formatResponse(true, data);
    } catch (error) {
      return formatResponse(false);
    }
  }

  export async function removeProduct(productId) {
    try {
      const db = getDb();
      await db.collection('orders').doc(productId).delete();
      return formatResponse(true);
    } catch(error) {
    }
  }