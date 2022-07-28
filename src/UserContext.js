import  React from 'react'

const Usercontext =React.createContext('code react')
const UserProvider=Usercontext.Provider
const UserCousumer=Usercontext.Consumer

export { UserProvider,UserCousumer   }
export default Usercontext