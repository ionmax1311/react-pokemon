import React from "react";
import { NavLink } from "react-router-dom";

const Pagination = ({ page, count }) => {
	const countPages = Math.ceil(count / 20);

	return (
		<div>
			<div className='flex justify-center mt-8 gap-4'>
				<NavLink to={`/pokemons?page=${page - 1}`}>
					<button
						type='button'
						disabled={page === 1}
						className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-25'>
						Prev
					</button>
				</NavLink>
				<NavLink to={`/pokemons?page=${page + 1}`}>
					<button
						type='button'
						disabled={page === countPages}
						className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-25'>
						Next
					</button>
				</NavLink>
			</div>
			<div className='flex justify-center mt-5 font-bold'>
				Page {page}/{countPages}
			</div>
		</div>
	);
};

export default Pagination;
