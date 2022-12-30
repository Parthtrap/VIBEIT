import React, { useState } from "react";
import { useEffect } from "react";

function Footer(props) {
	const [SongDetails, setSongDetails] = useState(props);
	const [isRepeat, setIsRepeat] = useState(false);
	const [isShuffle, setIsShuffle] = useState(false);
	const [isPlay, setIsPlay] = useState(false);
	const [audio, setAudio] = useState(new Audio());
	const [time, setTime] = useState(Date.now());

	useEffect(() => {
		audio.src = SongDetails.songURL;
		audio.currentTime = 0;
		audio.play();
	}, [SongDetails]);

	useEffect(() => {
		const interval = setInterval(() => setTime(Date.now()), 1000);
		console.log(audio.currentTime);
	}, []);

	console.log(audio.currentTime);

	return (
		<div className="text-white h-[15vh] flex justify-between bg-dark-bg">
			<div className="flex h-full items-center">
				<img
					src={SongDetails.imgsrc}
					className="h-[10vh] mx-5 rounded-full"
				/>
				<div>
					<span className="font-extrabold">{SongDetails.name}</span>
					<br />
					<span className=" text-gray-600">{SongDetails.artist}</span>
				</div>
			</div>
			<div className="">Hello</div>
			<div className="">Volume</div>
		</div>
	);
}

export default Footer;
