import { useState } from 'react';
import Home from '../views/Home';
import Live from '../views/Live';
import NotFound from '../views/NotFound';
import { useBackHandler, useCloseHandler, useDocumentEvent } from './AppState';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { isDevServe } from '../libs/utils';

/* istanbul ignore next*/
if (isDevServe()) {
	window.webOSSystem = {
		highContrast: 'off',
		close: () => { },
		platformBack: () => { },
		PmLogString: () => { },
		screenOrientation: 'landscape',
		setWindowOrientation: () => { }
	};
}

const App = props => {
	const [skinVariants, setSkinVariants] = useState({ highContrast: false });
	const handleBack = useBackHandler();
	const handleClose = useCloseHandler();
	useDocumentEvent(setSkinVariants);

	return (
		<div className="App" style={{height: "100%"}}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/live" element={<Live />}></Route>
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;