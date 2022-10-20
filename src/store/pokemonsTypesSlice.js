import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2";

export const getPokemonsTypes = createAsyncThunk(
	"pokemonsTypes/getPokemonsTypes",
	async function () {
		try {
			const response = await axios.get(`${baseUrl}/type`);

			return response.data.results;
		} catch (error) {
			console.error(error);
		}
	},
);

const pokemonsTypesSlice = createSlice({
	name: "pokemonsTypes",
	initialState: {
		pokemonsTypes: {},
		isLoading: false,
		hasError: false,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getPokemonsTypes.pending, (state, action) => {
				state.isLoading = true;
				state.hasError = false;
			})
			.addCase(getPokemonsTypes.fulfilled, (state, action) => {
				state.pokemonsTypes = action.payload;
				state.isLoading = false;
				state.hasError = false;
			})
			.addCase(getPokemonsTypes.rejected, (state, action) => {
				state.hasError = true;
				state.isLoading = false;
			});
	},
});

export default pokemonsTypesSlice.reducer;
