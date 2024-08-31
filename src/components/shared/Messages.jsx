import React, { useEffect, useState } from "react";
import Message from "../shared/Message";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../../redux/appSlice";

const Messages = () => {
  const dispatch = useDispatch();
  const { emails, searchtext } = useSelector((store) => store.appSlice);
  const [tempEmail, setTempEmails] = useState(emails);

  useEffect(() => {
    const q = query(collection(db, "email"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(setEmail(allEmails));
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const filterEmail = emails?.filter((email) => {
      return (
        email?.subject?.toLowerCase().includes(searchtext.toLowerCase()) ||
        email?.to?.toLowerCase().includes(searchtext.toLowerCase())
      );
    });
    setTempEmails(filterEmail);
  }, [searchtext, emails]);

  return (
    <div>
      {tempEmail && tempEmail?.map((email) => <Message email={email} />)}
    </div>
  );
};

export default Messages;