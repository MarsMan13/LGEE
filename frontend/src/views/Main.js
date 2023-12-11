import TabLayout, {Tab} from '@enact/sandstone/TabLayout';
import {Header, Panel} from '@enact/sandstone/Panels';
import $L from '@enact/i18n/$L';
import Video from './Video';
import HomeScreen from '../views/HomeScreen'
import Account from './Account';
import HLSVideo from './HLSVideo';
import css from './Main.module.less';

const Main = (props) => {
	return (
		<Panel {...props}>
			<Header className={css.header} title={$L('Enact Template')} />
			<TabLayout orientation='vertical' collapsed={true}>
				<Tab title={$L('Home')} icon="home">
					<HomeScreen />
				</Tab>
				<Tab title={$L('Video Player')} icon="home">
					<Video src="http://media.w3.org/2010/05/sintel/trailer.mp4" />
				</Tab>
				<Tab title={$L('HLS Video Player')} icon="home">
					{/* <HLSVideo src="https://cdn-vos-ppp-01.vos360.video/Content/HLS_HLSCLEAR/Live/channel(PPP-LL-2HLS)/index.m3u8" /> */}
					<HLSVideo src="https://video-weaver.tyo05.hls.live-video.net/v1/playlist/Ct0FR0HILc1Dn8ezINTrPZA_urfvo4-3hVd1WPN-zp87jmQJ8Lo86Lt0SJvU38r35NeU_uUb0ngtKP_iyDmz9iJr6rDHA45qOdIIcUTt62hieIAh8hbn2JIKfVx4PyURj7cEQjezlPWPI6qEJXjL8w3oRukp4HjoSwN2xC_eqUegBGtwargI-PiF0WRa33bqCNBmTQTGYwtLGRp-eONgjwGWrdM0hG20NFqVbwbHC6N-aEhtHCnGySztSLorBMlFzU2Mv7N2sWd67A08Q9-nfV0dqwctgZyYJXtf9qNRJTpRVsm2XyCs105PPkdVqwT7ZImV1j-oU73xkjAbCuujYHSUKmGA-RT8WwHUL3LaYdptCb9Q64Ql3nGwyhW3YTdUDz42K_q04TltN57uIBhvs3DjoHScf6J5pDfm3msW_gZaz4YhPNQXiYHzBz_JEtF0qGpZgNMUCH_nmPb0rsR3m9sFSJ8iWo9ug3xyt0Hi-Y_O60DXKOhqmKxPyNv3tAjH-vflokdFNUQOrxyW8FUM91UGTCVAxZt35PSpmeuDe519OHpHolH7zqCT1yi6C1r1xsDhq-IT3I8TJEtUArE8BB4pDkCrIS4IgMuqscy29WkBNZAon3KwnKMt54rKl4kscoCS5ULCXubz7OB2QfCuGQFyQfPYIZaXLgHcGTUntILl82m5lw8hbYK1ecXJL7VUK1EvNrNgEXhQrsb22zQJU0pQ1fEp_u_qopvusPQGs9DRkVL5kXxG8w9LTr5U5Os15yJLg16YabGNE9ohHhqAXq7_qHet-xg8jKNqoi9X772tNBAoilgdzRqmiWe17dUD958HJV-4KG0ECS2FdJz82bNq8qdmIkKnq_JXbgkGgC1Po92vsP3O4C4vsFq8rQ-QP_O-DaJl_uCQSL9ehFOE_xIXFMNqi509xmI4lkBv3eRGMlX8aqLpC_m_-UQZ4VrlJDcqXX08u6wx7ruxQn6-ahoM9fFyhOvCk1YHBJ09IAEqCXVzLXdlc3QtMjCaCA.m3u8" />
				</Tab>
				<Tab title={$L('Account')} icon="gear">
					<Account />
				</Tab>
			</TabLayout>
		</Panel>
	);
};
export default Main;
