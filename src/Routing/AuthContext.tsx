import React, {createContext, ReactNode, useContext, useState} from "react";


interface AuthContextProps {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
}
interface User{
    username: string;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null)

    const logout = () => setUser(null)
    const login = (userData: User) => {
        setUser(userData)
    }
    return(
        <AuthContext.Provider value={{ user, logout, login }}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = ():AuthContextProps =>{
    const context = useContext(AuthContext)
    if(!context){
        throw new Error('useAuth must be used within the AuthProvider')
    }
    return context
}