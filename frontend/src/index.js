import { createRoot } from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './App/App';
import { isBrowser } from './libs/utils';
import store from './store/store';


let appElement = (<Provider store={store}>
	<App />
</Provider>);

if (isBrowser()) {
	const root = document.getElementById('root');
	createRoot(root).render(appElement);
	appElement = null;
}

export default appElement;
