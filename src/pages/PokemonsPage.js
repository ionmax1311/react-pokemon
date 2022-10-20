import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getPokemons } from "../store/pokemonsSlice";
import Pagination from "../components/Pagination";
import { useNavigate } from "react-router-dom";
import { getPokemon } from "../store/PokemonSlice";
import { idPokemon } from "../helpers/helpers";
import Loader from "../components/Loader";
import close from "../assets/img/close.png";
import GoTopButton from "../components/GoTopButton";

const PokemonsPage = () => {
	const pokemons = useSelector((state) => state.pokemonList.pokemons.results);
	const pokemonsCount = useSelector(
		(state) => state.pokemonList.pokemons.count,
	);
	const isLoading = useSelector((state) => state.pokemonList.isLoading);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [searchParams] = useSearchParams();
	const page = Number(searchParams.get("page"));
	const [pokemonsToRender, setPokemonsToRender] = useState("");
	const [searchPokemon, setSearchPokemon] = useState("");

	useEffect(() => {
		dispatch(getPokemons(page));
	}, [dispatch, page]);

	useEffect(() => {
		setPokemonsToRender(pokemons);
	}, [pokemons]);

	useEffect(() => {
		let filteredData = {};
		if (pokemons?.length) {
			filteredData = (pokemons || []).filter((pokemon) =>
				pokemon.name
					.toLowerCase()
					.includes(`${searchPokemon}`.toLowerCase()),
			);

			setPokemonsToRender(filteredData);
		}
	}, [pokemons, searchPokemon]);

	const handlePokemon = (e) => {
		dispatch(getPokemon(e.name));
		navigate(`/pokemon/${e.name}`);
	};

	if (isLoading) return <Loader />;

	return (
		<div className='py-12 flex justify-center'>
			<div className='container'>
				<div className='px-5 relative'>
					<input
						className='py-1 px-3 border-solid border-2 border-gray-400  rounded  w-full max-w-[200px]'
						type='text'
						placeholder='Search pokemon'
						onChange={(e) => setSearchPokemon(e.target.value)}
						value={searchPokemon || ""}
					/>
					{searchPokemon.length > 0 && (
						<img
							src={close}
							onClick={() => setSearchPokemon("")}
							alt='close'
							className='absolute w-[20px] left-[190px] top-[8px] cursor-pointer'
						/>
					)}
				</div>
				<ul className='flex flex-wrap mt-12'>
					{pokemonsToRender?.length > 0 ? (
						pokemonsToRender.map((pokemon) => (
							<li
								key={pokemon.name}
								onClick={() => handlePokemon(pokemon)}
								className=' w-full md:w-1/2 my-4 px-5 lg:w-1/3'>
								<div className='w-full h-full bg-slate-300 block p-3 rounded hover:bg-slate-400 cursor-pointer'>
									<span className='pr-2'>
										{`#${idPokemon(pokemon.url)}`}
									</span>
									<span className='font-bold'>
										{pokemon.name}
									</span>
								</div>
							</li>
						))
					) : (
						<div className='font-bold pl-5'>No data!</div>
					)}
				</ul>

				<Pagination page={page} count={pokemonsCount} />
			</div>
			<GoTopButton />
		</div>
	);
};

export default PokemonsPage;
