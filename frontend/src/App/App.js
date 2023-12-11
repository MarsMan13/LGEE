import { useState, useCallback } from 'react';
import Main from '../views/Main';
import Account from '../views/Account';
import { Panels } from '@enact/sandstone/Panels';
import { useBackHandler, useCloseHandler, useDocumentEvent } from './AppState';
import { isDevServe } from '../libs/utils';
import { useSelector } from "react-redux";
import { ThemeDecorator } from '@enact/sandstone/ThemeDecorator';

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

const App = (props) => {
	// const init = () => new LS2Request().send(
	// 	{
	// 		service: 'luna://com.webos.service.sm',
	// 		method: 'deviceid/getIDs',
	// 		onSuccess: function (inResponse) {
	// 			console.log('Result: ' + JSON.stringify(inResponse));

	// 		},
	// 		onFailure: function (inError) {
	// 			console.log('Failed to get system ID information');
	// 			console.log('[' + inError.errorCode + ']: ' + inError.errorText);
	// 			// To-Do something
	// 			return;
	// 		},
	// 	});
	// useEffect(() => {
	// 	init()
	// }, []);
	const [skinVariants, setSkinVariants] = useState({ highContrast: false });
	const handleBack = useBackHandler();
	const handleClose = useCloseHandler();
	useDocumentEvent(setSkinVariants);
	const user = useSelector((state) => { return state.user });
	console.log(user);
	if (user.userId === -1) {
		return (
			<Panels {...props} skinVariants={skinVariants}>
				<Account />
			</Panels>
		);
	}
	return (
		<Panels
			{...props}
			skinVariants={skinVariants}
			onBack={handleBack}
			onClose={handleClose}
		>
			<Main userId={user.userId} />
		</Panels>
	);
};

export default ThemeDecorator(App);