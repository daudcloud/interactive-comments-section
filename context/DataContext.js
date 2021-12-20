import { useState, createContext, useEffect, useContext } from "react";

const CommentsContext = createContext();
const UpdateContext = createContext();
const UserContext = createContext();

export const useComments = () => {
  return [useContext(CommentsContext), useContext(UpdateContext)];
};

export const useUser = () => {
  return useContext(UserContext);
};

const DataProvider = ({ children }) => {
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState([]);
  useEffect(async () => {
    const res = await fetch("/api/data");
    const data = await res.json();
    setComments(data.comments);
    setUser(data.currentUser);
  }, []);
  return (
    <UserContext.Provider value={user}>
      <CommentsContext.Provider value={comments}>
        <UpdateContext.Provider value={setComments}>
          {children}
        </UpdateContext.Provider>
      </CommentsContext.Provider>
    </UserContext.Provider>
  );
};

export default DataProvider;
