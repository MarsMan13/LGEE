import React, { useState } from 'react';
import VirtualList, { VirtualGridList } from '@enact/sandstone/VirtualList';
import { useSelector } from "react-redux";
import $L from '@enact/i18n/$L';
import LiveCard from '../components/LiveCard';

import liveCards from '../components/livecards.json'

const LikedVideos = (props) => {
  const user = useSelector((state) => { return state.user });
  
  const renderItem = (index, ...reset) => {
    return (
      <div style={{ display: 'flex' }}>
        <LiveCard key={index.index} liveInfo={liveCards[index.index]} />
      </div>
      );
  }
  return (
    <>
    <h3>{$L("좋아요 표시한 동영상")}</h3>
    <div className='livecards-container'>
      <VirtualGridList
        itemSize={{minWidth: 450, minHeight: 800}}
        dataSize={liveCards.length}
        itemRenderer={renderItem}
        key="native"
        // direction='horizontal'
        horizontalScrollbar="visible"
        // verticalScrollbar="hidden"
        // noScrollByWheel={true}
        // data={liveCards}
        hoverToScroll={true}
        spacing={0}
        // scrollMode='translate'
        style={{ height: '80vh' }} // Scroller의 높이
        />
    </div>
    </>
  );
};

export default LikedVideos;
