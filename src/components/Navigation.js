import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../assets/img/logo.png";

const Navigation = () => {
	const location = useLocation();
	const { pathname } = location;
	const splitLocation = pathname.split("/");

	return (
		<nav className='flex justify-center  shadow-md bg-gray-500 text-white'>
			<div className='container flex justify-between items-center h-[50px] px-5'>
				<NavLink to='/' title='Home' className='w-24'>
					<img src={logo} alt='Home' />
				</NavLink>
				<ul className='flex items-center h-full'>
					<li
						className={
							splitLocation[1] === ""
								? "h-full bg-gray-700"
								: "h-full hover:bg-gray-400"
						}>
						<NavLink
							to='/'
							title='Home'
							className='h-full flex items-center px-3'>
							Home
						</NavLink>
					</li>
					<li
						className={
							splitLocation[1] === "pokemons"
								? "h-full bg-gray-700"
								: "h-full hover:bg-gray-400"
						}>
						<NavLink
							to='/pokemons?page=1'
							title='Pokemons'
							className='h-full flex items-center px-3'>
							Pokemons
						</NavLink>
					</li>
					<li
						className={
							splitLocation[2] === "type"
								? "h-full bg-gray-700"
								: "h-full hover:bg-gray-400"
						}>
						<NavLink
							to='/pokemon/type/normal'
							title='Types'
							className='h-full flex items-center px-3'>
							Type
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;
