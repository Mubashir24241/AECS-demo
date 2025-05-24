import React, { createContext, useState } from 'react';

export const DataContext = createContext();

const initialData = [
  { id: 1, name: 'Alice', points: 95, trainings: 3 },
  { id: 2, name: 'Bob', points: 90, trainings: 2 },
  { id: 3, name: 'Charlie', points: 88, trainings: 4 },
];

export const DataProvider = ({ children }) => {
  const [users, setUsers] = useState(initialData);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now() }]);
  };

  const updateUser = (id, updatedUser) => {
    setUsers(users.map((u) => (u.id === id ? { ...u, ...updatedUser } : u)));
  };

  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <DataContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;