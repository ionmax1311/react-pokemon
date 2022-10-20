export const idPokemon = (url) => {
	let paths = url.split("/").filter((entry) => entry !== "");
	return paths[paths.length - 1];
};
