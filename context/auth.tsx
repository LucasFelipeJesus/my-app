import { router } from "expo-router";
import { createContext, ReactNode, useContext, useState } from "react";

interface IUserLogin {
    email: string;
    password: string;
}

interface IAuthContext {
    user: IUserLogin;
    setUser: (user: IUserLogin) => void;
    handleLogin: () => void;
}

interface IAuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {

    const [user, setUser] = useState<IUserLogin>({ email: '', password: '' });

    const handleLogin = () => {
        if (user.email === 'Admin' && user.password === 'Admin') {
            setUser(user);
            router.push('/profile');  // Redirect to home page
        } else {
            alert('Email ou senha inválidos');
        }
    }

    return (<AuthContext.Provider value={{ user, setUser, handleLogin }}>
        {children}
    </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}
