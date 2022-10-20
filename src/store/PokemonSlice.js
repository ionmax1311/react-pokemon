import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/pokemon";

export const getPokemon = createAsyncThunk(
	"pokemon/getPokemon",
	async function (name) {
		try {
			const response = await axios.get(`${baseUrl}/${name}`);

			return response.data;
		} catch (error) {
			console.error(error);
		}
	},
);

const pokemonSlice = createSlice({
	name: "pokemon",
	initialState: {
		pokemon: {},
		isLoading: false,
		hasError: false,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getPokemon.pending, (state, action) => {
				state.isLoading = true;
				state.hasError = false;
			})
			.addCase(getPokemon.fulfilled, (state, action) => {
				state.pokemon = action.payload;
				state.isLoading = false;
				state.hasError = false;
			})
			.addCase(getPokemon.rejected, (state, action) => {
				state.hasError = true;
				state.isLoading = false;
			});
	},
});

export default pokemonSlice.reducer;
