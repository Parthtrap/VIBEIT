import React, { useRef } from "react";

function NewSong(props) {
	const nameRef = useRef(document.createElement("input"));
	const artistRef = useRef(document.createElement("input"));
	const fileRef = useRef(document.createElement("input"));

	function onSongChange(e) {
		const s = URL.createObjectURL(e.target.files[0]);
		// console.log(e.target.files[0]);
		// console.log(s);
		// const audio = new Audio(s);
		// audio.addEventListener("loadedmetadata", (e) => {
		// 	console.log(audio.duration);
		// });
		// audio.play();
	}

	return (
		<div className="bg-light-bg w-[80vw] h-full p-4">
			<label
				htmlFor="formFile"
				className="form-label inline-block mb-2 text-white"
			>
				Upload Song
			</label>
			<input
				className="mx-10 rounded-full border-r-2 w-[60vw]"
				type="file"
				accept=".mp3"
				id="formFile"
				onChange={onSongChange}
				ref={fileRef}
			/>
		</div>
	);
}

export default NewSong;
