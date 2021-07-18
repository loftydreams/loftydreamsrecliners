import { firestore } from "../firebase";

const sp = (price, dis) => {
  return price - (price * dis) / 100;
};

export const updatedItems = async (cartItems) => {
  let updatedItems = [];

  await Promise.all(
    cartItems.map(async (item) => {
      const docRef = firestore.collection("products").doc(item.id);
      const doc = await docRef.get();

      if (doc.exists) {
        const { name, price, discount } = doc.data();
        const updatedItem = {
          ...item,
          name: name,
          price: sp(price, discount),
        };
        updatedItems.push(updatedItem);
      } else {
        console.log("No such document!");
      }
    })
  );

  return updatedItems;
};
