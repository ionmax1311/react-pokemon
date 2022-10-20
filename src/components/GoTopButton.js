import React, { useEffect, useState } from "react";
import top from "../assets/img/top.png";

const GoTopButton = () => {
	const [showGoTop, setShowGoTop] = useState(false);

	const handleVisibleButton = () => {
		setShowGoTop(window.pageYOffset > 200);
	};

	const handleScrollUp = () => {
		window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		window.addEventListener("scroll", handleVisibleButton);
	}, []);
	return (
		<div className={showGoTop ? "" : "hidden"} onClick={handleScrollUp}>
			<button
				type='button'
				className='fixed bottom-5 right-7 bg-blue-500 hover:bg-blue-700 p-2 rounded'>
				<img src={top} alt='top' className='w-7 h-7' />
			</button>
		</div>
	);
};

export default GoTopButton;
