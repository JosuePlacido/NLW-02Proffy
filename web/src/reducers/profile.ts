import { Class } from "../models/class";

type ActionMap<M extends { [index: string]: any }> = {
	[Key in keyof M]: M[Key] extends undefined
	? {
		type: Key;
	}
	: {
		type: Key;
		payload: M[Key];
	}
};

export enum Types {
	Create = "CREATE_SSCHEDULE",
	Delete = "DELETE_SCHEDULE",
	Update = "UPDATE_SCHEDULE",
	Price = "UPDATE_COST"
}
type SubjectPayload = {
	[Types.Create]: {
		id: number;
		name: string;
		price: number;
	};
	[Types.Delete]: {
		id: number;
	};
	[Types.Update]: {
		id: number;
		field:string;
		value:any;
	};
	[Types.Price]: {
		id: number;
		cost: number;
	};
};
export type SubjectAction = ActionMap<SubjectPayload>[keyof ActionMap<
	SubjectPayload
>];
export const subjectReducer = (
	state: Class[],
	action: SubjectAction
) => {
	console.log(action);
	switch (action.type) {
		case Types.Create:
			return [
				...state,
				{
					id: action.payload.id,
					name: action.payload.name,
					price: action.payload.price
				}
			];
		case Types.Update:
			return [
				...state.map(product => {
					if (product.id === action.payload.id){
						return {...product,[action.payload.field]:action.payload.value}
					}
					return product;
				})
			]
		case Types.Price:
			return [...state.filter(product => product.id !== action.payload.id)];
		case Types.Delete:
			return [...state.filter(product => product.id !== action.payload.id)];
		default:
			return state;
	}
};