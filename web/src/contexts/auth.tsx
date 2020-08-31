import React,{createContext,useState,useEffect,useContext} from 'react';
import * as auth from '../services/auth';
import api,{setToken} from '../services/api';
export interface User {
	email: string;
	name: string;
	surname: string;
	avatar: string;
}
export interface AuthContextData {
    loading:boolean;
    signed:boolean;
    signIn(email:string,password:string,remember:boolean):Promise<void>;
    signOut():void;
	user:User|null;
}
export const TOKEN_KEY = "@auth-token";
export const USER_KEY = "@auth-user";
export const logout = () => {
	localStorage.removeItem(TOKEN_KEY);
};
export const getToken = () => {
	return localStorage.getItem(TOKEN_KEY);
};
export const AuthProvider:React.FC = ({children}) => {
    const [user,setUser] = useState<User|null>(null);
    const [loading,setLoading] = useState(true);

    useEffect(() =>{
        async function loadStoragedData(){
            const storagedUser = localStorage.getItem(USER_KEY);
			const storagedToken = localStorage.getItem(TOKEN_KEY);
            if(storagedUser && storagedToken){
				setUser(JSON.parse(storagedUser));
				setToken(storagedToken);
            }
            setLoading(false);
        }
        loadStoragedData();
    },[]);
    async function signIn(email:string,password:string,remember:boolean){
		const {user,token} = await auth.signIn(email,password);
        setUser(user);
		setToken(token);
        if(remember){
			localStorage.setItem(USER_KEY, JSON.stringify(user));
			localStorage.setItem(TOKEN_KEY, token);
		}
    }
    async function signOut(){
		localStorage.removeItem(USER_KEY);
		localStorage.removeItem(TOKEN_KEY);
        setUser(null);
		setToken('');
	}
    return (
		<AuthContext.Provider
			value={{
				loading,
				signed: !!user,
				signIn,
				signOut,
				user
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}