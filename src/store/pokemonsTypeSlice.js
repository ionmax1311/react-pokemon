import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2";

export const getPokemonsType = createAsyncThunk(
	"pokemonsType/getPokemonsType",
	async function (id) {
		try {
			const response = await axios.get(`${baseUrl}/type/${id}`);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	},
);

const pokemonsTypeSlice = createSlice({
	name: "pokemonsType",
	initialState: {
		pokemonsType: {},
		isLoading: false,
		hasError: false,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getPokemonsType.pending, (state, action) => {
				state.isLoading = true;
				state.hasError = false;
			})
			.addCase(getPokemonsType.fulfilled, (state, action) => {
				state.pokemonsType = action.payload;
				state.isLoading = false;
				state.hasError = false;
			})
			.addCase(getPokemonsType.rejected, (state, action) => {
				state.hasError = true;
				state.isLoading = false;
			});
	},
});

export default pokemonsTypeSlice.reducer;
