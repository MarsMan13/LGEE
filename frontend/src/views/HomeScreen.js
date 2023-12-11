// HomeScreen.js
import React, {useMemo} from 'react';
import LiveCardGroup from '../components/LiveCardGroup';
import Scroller from '@enact/sandstone/Scroller';
import $L from '@enact/i18n/$L';

const HomeScreen = () => {
    const cardGroupStyle = useMemo(() => ({display: 'flex', flexDirection: 'column'}), [])

    return (
        <Scroller verticalScrollbar='visible'>
            <div style={{cardGroupStyle}}>
                <h3>{$L("추천 라이브")}</h3>
                <LiveCardGroup />
                <h3>{$L("핫딜")}</h3>
                <LiveCardGroup />
                <h3>{$L("실시간 인기 라이브")}</h3>
                <LiveCardGroup />
                <h3>{$L("실시간 라이브")}</h3>
                <LiveCardGroup />
            </div>
        </Scroller>
    );
};

export default HomeScreen;
