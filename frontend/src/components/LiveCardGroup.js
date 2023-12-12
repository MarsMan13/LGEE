// components/LiveCardGroup.js
import React, { useState, useRef, useEffect } from 'react';
import Scroller from '@enact/sandstone/Scroller';
import LiveCard from './LiveCard';
import VirtualList, { VirtualGridList } from '@enact/sandstone/VirtualList';

import liveCards from './livecards.json'

// const LiveCardGroup = () => {
//   return (
//     <div className='thumbnail-list-container'>
//     <Scroller direction='horizontal' horizontalScrollbar="auto" noScrollByWheel={true}>
//       <div style={{ display: 'flex' }}>
//         {liveCards.map((thumbnail, index) => (
//           <LiveCard key={index} thumbnail={thumbnail} />
//         ))}
//       </div>
//     </Scroller>
//     </div>
//   );
// };

const LiveCardGroup = (props) => {
  const categoryId = props.id;
  const direction = props.direction
  const scrollHeight = props.scrollHeight
  const denyWheelScroll = props.denyWheelScroll
  const dataSize = (props.dataSize == -1) ? liveCards.length : props.dataSize
  const listRef = useRef(null);
  console.log(direction, scrollHeight, dataSize)
  
  useEffect(() => {
    // 화면에 보이는 썸네일이 자동으로 화면에 스크롤되도록
    if (listRef.current) {
        console.log("Raccoon")
      const focusedItemIndex = liveCards.findIndex((item) => item.focused);
      if (focusedItemIndex !== -1) {
        listRef.current.scrollToItem(focusedItemIndex, 'start');
      }
    }
  }, [liveCards]);
  
  const renderItem = (index, ...reset) => {
    // console.log(liveCards[index.index])
    return (
      <div style={{ display: 'flex' }}>
        <LiveCard key={index.index} liveInfo={liveCards[index.index]} />
      </div>
      );
  }
  return (
    <div className='livecards-container'>
      <VirtualGridList
        itemSize={{minWidth: 450, minHeight: 800}}
        dataSize={dataSize}
        itemRenderer={renderItem}
        key="native"
        direction='horizontal'
        horizontalScrollbar="visible"
        verticalScrollbar='hidden'
        noScrollByWheel={denyWheelScroll}
        // data={liveCards}
        hoverToScroll={false}
        spacing={0}
        scrollMode='native'
        // noAffordance={true}
        style={{ height: scrollHeight }} // Scroller의 높이
        // ref={listRef}
        />
    </div>
  );
};

export default LiveCardGroup;
