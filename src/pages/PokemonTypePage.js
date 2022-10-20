import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectType from "../components/SelectType";
import { getPokemonsType } from "../store/pokemonsTypeSlice";
import { getPokemonsTypes } from "../store/pokemonsTypesSlice";
import { useNavigate } from "react-router-dom";
import { getPokemon } from "../store/PokemonSlice";
import { idPokemon } from "../helpers/helpers";
import Loader from "../components/Loader";
import close from "../assets/img/close.png";
import GoTopButton from "../components/GoTopButton";

const PokemonTypePage = () => {
	const [statePokemonsType, setStatePokemonsType] = useState({});
	const [searchPokemon, setSearchPokemon] = useState("");
	const url = window.location.href;
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const pokemonsType = useSelector(
		(state) => state.pokemonsType.pokemonsType,
	);
	const pokemonsTypes = useSelector(
		(state) => state.pokemonsTypes.pokemonsTypes,
	);
	const isLoading = useSelector((state) => state.pokemonsType.isLoading);

	useEffect(() => {
		dispatch(getPokemonsType(idPokemon(url)));
		dispatch(getPokemonsTypes());
		setStatePokemonsType(pokemonsType);
	}, []);

	useEffect(() => {
		setStatePokemonsType(pokemonsType);
	}, [pokemonsType]);

	const handlePokemonType = (e) => {
		navigate(`/pokemon/type/${idPokemon(e.target.value)}`);
		dispatch(getPokemonsType(idPokemon(e.target.value)));
	};

	useEffect(() => {
		let filteredData = [];
		if (pokemonsType?.pokemon?.length) {
			filteredData = pokemonsType?.pokemon?.filter((item) =>
				item?.pokemon.name
					.toLowerCase()
					.includes(`${searchPokemon}`.toLowerCase()),
			);

			const newPokemonsType = { ...pokemonsType, pokemon: filteredData };
			setStatePokemonsType(newPokemonsType);
		}
	}, [pokemonsType, searchPokemon]);

	const handlePokemon = (e) => {
		dispatch(getPokemon(e.pokemon.name));
		navigate(`/pokemon/${e.pokemon.name}`);
	};

	if (isLoading) return <Loader />;

	return (
		<div className='py-12 flex justify-center'>
			<div className='container'>
				<div className='px-5 flex justify-between relative'>
					<SelectType
						pokemonsTypes={pokemonsTypes}
						handlePokemonType={handlePokemonType}
						name={statePokemonsType.name}
					/>
					<input
						className='py-1 px-3 ml-2.5 border-solid border-2 border-gray-400 w-full max-w-[200px] rounded'
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
							className='absolute w-[20px] right-[25px] top-[8px] cursor-pointer'
						/>
					)}
				</div>
				<ul className='flex flex-wrap mt-12'>
					{statePokemonsType?.pokemon?.length > 0 ? (
						statePokemonsType.pokemon.map((pokemon) => (
							<li
								key={pokemon.pokemon.name}
								onClick={() => handlePokemon(pokemon)}
								className=' w-full md:w-1/2 my-4 px-5 lg:w-1/3 cursor-pointer'>
								<div className='w-full h-full bg-slate-300 block p-3 rounded hover:bg-slate-400 cursor-pointer'>
									<span className='pr-2'>
										{`#${idPokemon(pokemon.pokemon.url)}`}
									</span>
									<span className='font-bold'>
										{pokemon.pokemon.name}
									</span>
								</div>
							</li>
						))
					) : (
						<div className='font-bold pl-5'>No data!</div>
					)}
				</ul>
			</div>
			<GoTopButton />
		</div>
	);
};

export default PokemonTypePage;
