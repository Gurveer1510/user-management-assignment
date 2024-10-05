import { createContext, useState } from "react";
import UserType from "../types";


interface UserContextType {
    users: UserType[];
    addUsers: (user: UserType[]) => void;
    addNewUser: (user: UserType) => void;
    deleteUser: (id: string) => void;
    updateUser: (id: string, updatedUser: UserType) => void;
}

const UserContext = createContext<UserContextType>({
    users: [],
    addUsers: () => { },
    addNewUser: () => { },
    deleteUser: () => { },
    updateUser: () => { }
})

const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [users, setUsers] = useState<UserType[]>([])
    const addUsers = (users: UserType[]) => {
        setUsers(users)
    }
    const addNewUser = (newUser: UserType) => {
        setUsers(prev => [...prev, newUser])
    }

    const deleteUser = (id: string) => {
        setUsers(
            users.filter((user) => {
                return user.id !== id
            })
        )
    }

    const updateUser = (id: string, updatedUser: UserType) => {
        const updatedUsers = users.map((user) =>
            user.id === id
                ? { ...user, ...updatedUser, address: { ...user.address, ...updatedUser.address } }
                : user
        );
        setUsers(updatedUsers);
    };


    return (
        <UserContext.Provider value={{ users, addUsers, addNewUser, deleteUser, updateUser }}>
            {children}
        </UserContext.Provider>
    )
}

export {
    UserContext, UserProvider
}
