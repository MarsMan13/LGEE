import TabLayout, {Tab} from '@enact/sandstone/TabLayout';
import {Header, Panel} from '@enact/sandstone/Panels';
import $L from '@enact/i18n/$L';
import Video from './Video';
import Account from './Account';
import HLSVideo from './HLSVideo';
import css from './Main.module.less';
import { useSelector } from "react-redux";
import {useCallback, useMemo} from 'react';
import {useDispatch} from 'react-redux';
import {changePath} from '../store/store';
import HomeScreen from './HomeScreen';
import LikedVideos from './LikedVideos'
import Live from './Live';

const Main = (props) => {
	const user = useSelector((state) => {return state.user});
	const path = useSelector((state) => {return state.path});
	let dispatch = useDispatch();
	
	const liveCloseHandler = useCallback(()=>{
		console.log("check");
    dispatch(changePath(-1));
	}, []);
	console.log("liveId",path.liveId);
	const mainScreen = useMemo(() => (
		<Panel {...props}>
			<Header className={css.header} title={$L('LGEE')} />
			<TabLayout orientation='vertical' collapsed={true}>
				<Tab title={$L('Home')} icon="home">
					<HomeScreen />
				</Tab>
				<Tab title={$L('Liked Videos')} icon="heart">
					<LikedVideos />
				</Tab>
				<Tab title={$L('HLS Video Player')} icon="home">
					<HLSVideo src="https://cdn-vos-ppp-01.vos360.video/Content/HLS_HLSCLEAR/Live/channel(PPP-LL-2HLS)/index.m3u8" />
					{/* <HLSVideo src="" /> */}
				</Tab>
				<Tab title={$L('Account')} icon="gear">
					<Account />
				</Tab>
			</TabLayout>
		</Panel>
	), [user]);
	if(path.liveId === -1){
		return mainScreen;
	}
	return <Live onBack={liveCloseHandler} onClose={liveCloseHandler} id={path.liveId}/>
};
export default Main;
