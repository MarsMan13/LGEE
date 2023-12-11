// components/LiveCardGroup.js
import React, { useState } from 'react';
import Scroller from '@enact/sandstone/Scroller';
import LiveCard from './LiveCard';
import VirtualList, { VirtualGridList } from '@enact/sandstone/VirtualList';

import thumbnails from './tumbnails.json'

// const LiveCardGroup = () => {
//   return (
//     <div className='thumbnail-list-container'>
//     <Scroller direction='horizontal' horizontalScrollbar="auto" noScrollByWheel={true}>
//       <div style={{ display: 'flex' }}>
//         {thumbnails.map((thumbnail, index) => (
//           <LiveCard key={index} thumbnail={thumbnail} />
//         ))}
//       </div>
//     </Scroller>
//     </div>
//   );
// };

const LiveCardGroup = () => {
  const renderItem = (index, ...reset) => {
    // console.log(thumbnails[index.index])
    return (
      <div style={{ display: 'flex' }}>
        <LiveCard key={index.index} thumbnail={thumbnails[index.index]} />
      </div>
      );
  }
  return (
    <div className='thumbnail-list-container'>
      <VirtualGridList
        itemSize={{minWidth: 450, minHeight: 800}}
        dataSize={thumbnails.length}
        itemRenderer={renderItem}
        key="native"
        direction='horizontal'
        horizontalScrollbar="visible"
        noScrollByWheel={true}
        // data={thumbnails}
        hoverToScroll={true}
        spacing={10}
        // scrollMode='translate'
        // noAffordance={true}
        style={{ height: '20rem' }} // Scroller의 높이
        />
        {/* <div style={{ display: 'flex' }}>
          {thumbnails.map((thumbnail, index) => (
            <LiveCard key={index} thumbnail={thumbnail} />
          ))}
        </div>
      </VirtualList> */}
    </div>
  );
};

export default LiveCardGroup;
