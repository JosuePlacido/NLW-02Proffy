import React,{createContext,useState,useEffect,useContext} from 'react';
import {AsyncStorage} from 'react-native';
import * as auth from '../services/auth';
import api from '../services/api';
export interface User{
    email:string;
    name:string;
    surname:string;
    avatar:string;
}
export interface AuthContextData {
    loading:boolean;
    signed:boolean;
    signIn(email:string,password:string,remember:boolean):Promise<void>;
    signOut():void;
    user:User|null;
}
export const AuthProvider:React.FC = ({children}) => {
    const [user,setUser] = useState<User|null>(null);
    const [loading,setLoading] = useState(true);

    useEffect(() =>{
        async function loadStoragedData(){
            const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
            const storagedToken = await AsyncStorage.getItem('@RNAuth:token');
            if(storagedUser && storagedToken){
                setUser(JSON.parse(storagedUser));
                api.defaults.headers['Authorization'] = storagedToken;
            }
            await new Promise(resolve => setTimeout(resolve,2000));
            setLoading(false);
        }
        loadStoragedData();
    },[]);
    async function signIn(email:string,password:string,remember:boolean){
        const {user,token} = await auth.signIn(email,password);
        setUser(user);
        if(remember){
            await AsyncStorage.setItem('@RNAuth:user',JSON.stringify(user));
            await AsyncStorage.setItem('@RNAuth:token',token);
        }
        api.defaults.headers['Authorization'] = token;
    }
    async function signOut(){
        await AsyncStorage.clear();
        setUser(null);
    }
    return (
        <AuthContext.Provider value={{loading,signed:!!user,signIn,signOut,user}}>
            {children}
        </AuthContext.Provider>
    );
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}