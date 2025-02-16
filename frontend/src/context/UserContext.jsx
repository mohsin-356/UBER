import React, { createContext } from 'react'

export const UserDataContext=createContext();
const UserContext = ({children}) => {
    const user='Sarthak';

  return (
    <div>
        <UserDataContext.Provider value={user}>
          {children}
        </UserDataContext.Provider>
    </div>
  )
}

export default UserContext;