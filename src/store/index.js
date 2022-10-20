import { configureStore } from "@reduxjs/toolkit";
import pokemonsSlice from "./pokemonsSlice";
import pokemonsTypesSlice from "./pokemonsTypesSlice";
import pokemonsTypeSlice from "./pokemonsTypeSlice";
import PokemonSlice from "./PokemonSlice";

export const store = configureStore({
	reducer: {
		pokemonList: pokemonsSlice,
		pokemon: PokemonSlice,
		pokemonsTypes: pokemonsTypesSlice,
		pokemonsType: pokemonsTypeSlice,
	},
});
