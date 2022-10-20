import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import noImage from "../assets/img/no-img.png";
import arrowLeft from "../assets/img/arrow.png";
import Loader from "../components/Loader";
import { idPokemon } from "../helpers/helpers";
import { getPokemon } from "../store/PokemonSlice";

const PokemonPage = () => {
	const navigate = useNavigate();
	const pokemon = useSelector((state) => state.pokemon.pokemon);
	const isLoading = useSelector((state) => state.pokemon.isLoading);
	const dispatch = useDispatch();
	const url = window.location.href;

	useEffect(() => {
		dispatch(getPokemon(idPokemon(url)));
	}, []);

	if (isLoading) return <Loader />;

	return (
		<div className='container m-auto px-5 mt-8'>
			<div
				className='inline-flex items-center group cursor-pointer'
				onClick={() => navigate(-1)}>
				<img src={arrowLeft} alt='Back' className='' />
				<span className='font-bold ml-4 border-b-2 border-b-black group-hover:border-transparent'>
					Back
				</span>
			</div>

			<div className='flex justify-center h-full'>
				{pokemon.name && (
					<div className='w-full md:w-1/2 mt-8 lg:w-1/3 bg-slate-300 rounded p-5 shadow-lg'>
						<div>
							<img
								src={
									pokemon?.sprites["front_default"] || noImage
								}
								alt={pokemon?.name}
								className='mx-auto mb-6'
							/>
						</div>
						<div className='pb-4 pt-4 border-b-2 border-gray-400'>
							<span>Name:</span>
							<span className='font-bold pl-2'>
								{pokemon?.name}
							</span>
						</div>
						<div className='pb-4 pt-4 border-b-2 border-gray-400'>
							<span>Type:</span>
							{pokemon.types.map((item) => (
								<span
									key={item.type.name}
									className='font-bold pl-2'>
									{item.type.name}
								</span>
							))}
						</div>
						<div className='pb-4 pt-4 border-b-2 border-gray-400'>
							<span>Stats:</span>
							{pokemon.stats.map((item) => (
								<span
									key={item.stat.name}
									className='font-bold pl-2'>
									{item.stat.name}
								</span>
							))}
						</div>
						<div className='pb-4 pt-4 border-b-2 border-gray-400'>
							<span>Order:</span>
							<span className='font-bold pl-2'>
								{pokemon?.order}
							</span>
						</div>
						<div className=' pt-4 '>
							<span>Weight:</span>
							<span className='font-bold pl-2'>
								{pokemon?.weight}
							</span>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default PokemonPage;
