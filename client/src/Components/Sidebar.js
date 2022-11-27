import React from "react";

function Sidebar({ onTabChange }) {
	return (
		<div className="bg-mid-bg text-gray-500 w-[20vw] h-full">
			<div>TITLE</div>
			<div
				onClick={() => {
					onTabChange("Search");
				}}
			>
				Search
			</div>
			<div
				onClick={() => {
					onTabChange("NewSong");
				}}
			>
				New Song
			</div>
			<div>PlayList</div>
		</div>
	);
}

export default Sidebar;
