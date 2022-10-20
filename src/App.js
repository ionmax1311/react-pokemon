import React from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PokemonPage from "./pages/PokemonPage";
import PokemonsPage from "./pages/PokemonsPage";
import PokemonTypePage from "./pages/PokemonTypePage";

function App() {
	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/pokemons' element={<PokemonsPage />} />
				<Route path='/pokemon/:name' element={<PokemonPage />} />
				<Route path='/pokemon/type/:id' element={<PokemonTypePage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
