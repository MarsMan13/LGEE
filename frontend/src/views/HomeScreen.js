// HomeScreen.js
import React, {useMemo} from 'react';
import LiveCardGroup from '../components/LiveCardGroup';
import Scroller from '@enact/sandstone/Scroller';
import $L from '@enact/i18n/$L';
import css from './HomeScreen.module.less';

const HomeScreen = () => {
    const cardGroupStyle = useMemo(() => ({display: 'flex', flexDirection: 'column'}), [])
    return (
        <Scroller className={css.home} verticalScrollbar='visible'>
            <div style={{cardGroupStyle}}>
                <h3>{$L("추천 컨텐츠")}</h3>
                <LiveCardGroup id={1}/>
                <h3>{$L("핫딜")}</h3>
                <LiveCardGroup id={2}/>
                <h3>{$L("실시간 인기 라이브")}</h3>
                <LiveCardGroup id={3}/>
                <h3>{$L("실시간 라이브")}</h3>
                <LiveCardGroup id={4}/>
            </div>
        </Scroller>
    );
};

export default HomeScreen;
