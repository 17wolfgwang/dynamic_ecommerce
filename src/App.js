import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from './routes/shop/shop.component'
import Contact from './routes/contact/contact.component'
import CheckOut from "./routes/checkout/checkout.component";
import { setCurrentUser } from './store/user/user.action';
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  addCollectionAndDocuments
} from './utils/firebase/firebase.utils';
import SHOP_DATA from './assets/data/shop-data-new';



const App = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  useEffect(() => {
    addCollectionAndDocuments('categories', SHOP_DATA);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation userName={userName} />}>
        {/* index gets rendered when / where outlet is supposed be placed */}
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication setUserName={setUserName} />} />
        <Route path='checkout' element={<CheckOut />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
