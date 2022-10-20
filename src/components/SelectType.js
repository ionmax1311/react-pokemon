import React from "react";
const SelectType = ({ pokemonsTypes, handlePokemonType, name }) => {
	return (
		<select
			className='p-1 border-solid border-2 border-gray-400 w-40 rounded'
			value={name}
			onChange={(value) => handlePokemonType(value)}>
			{pokemonsTypes.length &&
				pokemonsTypes.map((type) => (
					<option key={type.name}>{type.name}</option>
				))}
		</select>
	);
};

export default SelectType;
