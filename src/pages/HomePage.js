import React from "react";

const HomePage = () => {
	return (
		<div className='py-12 flex justify-center'>
			<div className='container'>
				<div className='px-5'>
					<h1 className='font-bold text-4xl text-center'>PokéAPI</h1>
					<p className='mt-12 text-lg text-center font-medium'>
						Simple app with search, type filter, pagination and
						getting data single Pokémon.
					</p>
					<ul className='mt-12 text-lg flex flex-wrap gap-2.5 justify-center font-medium'>
						<li className='h-full bg-slate-300  p-2 rounded cursor-default'>
							React
						</li>
						<li className='h-full bg-slate-300  p-2 rounded cursor-default'>
							Redux-toolkit
						</li>
						<li className='h-full bg-slate-300  p-2 rounded cursor-default'>
							React-router
						</li>
						<li className='h-full bg-slate-300  p-2 rounded cursor-default'>
							Axios
						</li>
						<li className='h-full bg-slate-300  p-2 rounded cursor-default'>
							Redux-thunk
						</li>
						<li className='h-full bg-slate-300  p-2 rounded cursor-default'>
							Tailwindcss
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
