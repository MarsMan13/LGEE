import {useRef, useEffect, useCallback} from 'react';
import Button from '@enact/sandstone/Button'
import Hls from 'hls.js';

const HLSVideo = (props) => {
	const videoRef = useRef(null);
	const hlsRef = useRef(null);

	useEffect(() => {
		if (Hls.isSupported()) {
			const video = videoRef.current;
			const hls = new Hls();
			hls.loadSource(props.src);
			hls.attachMedia(video);

			// triggered when the loaded manifest is parsed.s
			hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
				console.log(
					'>>>>>>>>>>>> manifest loaded, found ' +
						data.levels.length +
						' quality level'
				);
				video.play();
			});
			hlsRef.current = hls;

			// triggered when a new segment (fragment) is loaded.
			// eslint-disable-next-line
			hls.on(Hls.Events.FRAG_LOADED, function (event, data) {
				console.log(
					'========================================================='
				);
				console.log(
					'>>>>>>>>>>>> Estimated bandwidth:',
					hls.bandwidthEstimate + ' bps'
				);

				const index = hls.currentLevel;
				const level = hls.levels[index];

				console.log('>>>>>>>>>>>> currentLevel:', hls.currentLevel);
				console.log('>>>>>>>>>>>> levels:', hls.levels);
				console.log('>>>>>>>>>>>> loadLevel:', hls.loadLevel);

				if (level) {
					if (level.height) {
						console.log(
							'>>>>>>>>>>>> Selected resolution:',
							level.height + 'p'
						);
					}
					if (level.bitrate) {
						console.log(
							'>>>>>>>>>>>> Selected bandwidth:',
							Math.round(level.bitrate / 1000) + ' kbps'
						);
						if (index !== -1 && index >= 0) {
							console.log(
								'>>>>>>>>>>>> Selected bandwidth:',
								hls.levels[index].attrs.BANDWIDTH + ' bps'
							);
						}
					}
				}
			});
		}
	}, [props.src]);

	const handleZeroClick = useCallback(() => {
		console.log('Button clicked!');
		hlsRef.current.currentLevel = 0;
	}, []);

	const handleAutoClick = useCallback(() => {
		console.log('Button clicked!');
		hlsRef.current.currentLevel = -1; // Auto resolution switching
	}, []);
	
	const handleHighClick = useCallback(() => {
		console.log('Button clicked!');
		hlsRef.current.currentLevel = 5; // Auto resolution switching
	}, []);

	return (
		<div style={{display: "flex", flexDirection: "column", justifyContent: "start"}}>
			<video ref={videoRef} controls height={720}/>
		<div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
				<Button className="btn" onClick={handleZeroClick} size="small">
					Low
				</Button>
				<Button className="btn" onClick={handleAutoClick} size="small">
					Auto
				</Button>
				<Button className="btn" onClick={handleHighClick} size="small">
					high
				</Button>
				<Button icon="playspeed" size="small" />
			</div>
		</div>
	);
};

export default HLSVideo;
