import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/pokemon";

export const getPokemons = createAsyncThunk(
	"pokemonList/getPokemons",
	async function (page) {
		try {
			const offset = (page - 1) * 20;
			const response = await axios.get(`${baseUrl}?offset=${offset}`);

			return response.data;
		} catch (error) {
			console.error(error);
		}
	},
);

const pokemonsSlice = createSlice({
	name: "pokemonList",
	initialState: {
		pokemons: {},
		isLoading: false,
		hasError: false,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getPokemons.pending, (state, action) => {
				state.isLoading = true;
				state.hasError = false;
			})
			.addCase(getPokemons.fulfilled, (state, action) => {
				state.pokemons = action.payload;
				state.isLoading = false;
				state.hasError = false;
			})
			.addCase(getPokemons.rejected, (state, action) => {
				state.hasError = true;
				state.isLoading = false;
			});
	},
});

export default pokemonsSlice.reducer;
