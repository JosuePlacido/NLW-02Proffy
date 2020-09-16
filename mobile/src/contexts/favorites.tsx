import React, { createContext, useState, useEffect, useContext } from "react";
import { AsyncStorage } from "react-native";
import * as auth from "../services/auth";
import api from "../services/api";
import Favorites from "../pages/favorites";
import { Favorite } from "../models/favorites";
export interface FavoriteContextData {
	addFavorite(user: number, course: number): Promise<number>;
	remove(user: number, course: number): Promise<void>;
	favorites: Favorite[];
	favoritesId: number[];
	LoadFavorites(user: number): Promise<void>;
}
export const FavoriteProvider: React.FC = ({ children }) => {
    const [favorites,setFavorites] = useState<Favorite[]>([]);
    const [classIds,setClassIds] = useState<number[]>([]);
	async function LoadFavorites(user:number) {
		const response = await api.get('favorites',{
			params: {
				user
			}
		});
		setFavorites(response.data);
		setClassIds([...favorites.map((favorite) => favorite.class)]);
	};
	async function addFavorite(user: number, course: number) {
		setClassIds([...favorites.map((favorite) => favorite.class),course]);
		const response = await api.post("favorites",{user,class:course});
		let teacher = response.data.proffy[0];
		teacher.schedules = response.data.schedules;
		const newFavorite = {
			id: response.data.id[0],
			user,
			class: course,
			item: teacher,
		};
		setFavorites([...favorites, newFavorite]);
		return newFavorite.id;
	}
	async function remove(user: number, course: number) {
		setClassIds([...classIds.filter((id) => id !== course)]);
		setFavorites([
			...favorites.filter(
				(favorite) =>
					favorite.class !== course && favorite.user !== user
			),
		]);
		api.delete("favorites", { params: { user, classId: course } });
	}
	return (
		<FavoriteContext.Provider
			value={{ favorites,favoritesId:classIds,addFavorite,remove, LoadFavorites }}
		>
			{children}
		</FavoriteContext.Provider>
	);
};

const FavoriteContext = createContext<FavoriteContextData>({} as FavoriteContextData);
export function useFavorites() {
	const context = useContext(FavoriteContext);
	return context;
}
