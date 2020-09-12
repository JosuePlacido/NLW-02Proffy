import React, { createContext, useState, useEffect, useContext,Dispatch, useReducer } from "react";
import { Class } from "../models/class";
import { User } from "../models/user";
import { SubjectAction, subjectReducer } from "../reducers/profile";
export interface ProfileContextData {
	user: User;
	subjects: Class[];
}
type ProfileReducer = {
	state: InitialStateType;
	dispatch: Dispatch<SubjectAction>;
};
type InitialStateType = {
	subjects: Class[];
};
const initialState = {
	subjects:[]
};

const mainReducer = (
  { subjects }: InitialStateType,
  action: SubjectAction
) => ({
  subjects: subjectReducer(subjects, action)
});

const ProfileProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useState();

  return (
		<ProfileContext.Provider value={{ state, dispatch }}>
			{children}
		</ProfileContext.Provider>
  );
};
const ProfileContext = createContext<ProfileReducer>({
  state: initialState,
  dispatch: () => null
});

export { ProfileProvider, ProfileContext };
export function useProfileContext(){
    const context = useContext(ProfileContext);
    return context;
}