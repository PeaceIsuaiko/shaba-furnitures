 import { db } from '../firebase';
  import { collection, query, where, getDocs } from 'firebase/firestore';

  const searchExternalProducts = async (queryText, searchType) => {
    try {
      const productsRef = collection(db, 'products');
      const q = query(
        productsRef,
        where(searchType, '>=', queryText),
        where(searchType, '<=', queryText + '\uf8ff')
      );
      const querySnapshot = await getDocs(q);
      const results = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      return results;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  };

  export { searchExternalProducts };
