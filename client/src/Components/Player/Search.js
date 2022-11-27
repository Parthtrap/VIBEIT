import React, { useRef } from "react";

function Search(props) {
	const searchRef = useRef(document.createElement("input"));
	function SearchSubmit(e) {
		e.preventDefault();
		console.log(searchRef.current.value);
	}

	return (
		<div className="bg-light-bg w-[80vw] h-full">
			<form className="w-full p-4" onSubmit={SearchSubmit}>
				<div className="relative">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
					<input
						type="text"
						placeholder="Search Song"
						ref={searchRef}
						className="w-full py-3 pl-12 pr-4 border rounded-full outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
					/>
				</div>
			</form>
			<div className="p-4">Display Items</div>
		</div>
	);
}

export default Search;
