import React, { useState } from "react";
import Footer from "../Components/Footer";
import NewSong from "../Components/Player/NewSong";
import Search from "../Components/Player/Search";
import Sidebar from "../Components/Sidebar";

function Player() {
	const [displayTab, setDisplayTab] = useState("Search");

	function onTabChange(newTab) {
		setDisplayTab(newTab);
	}

	return (
		<div>
			<div className="h-[85vh] flex">
				<Sidebar onTabChange={onTabChange} />
				{displayTab == "Search" ? (
					<Search />
				) : displayTab == "NewSong" ? (
					<NewSong />
				) : (
					<>How did you get here?</>
				)}
			</div>
			<Footer song={null} />
		</div>
	);
}

export default Player;
