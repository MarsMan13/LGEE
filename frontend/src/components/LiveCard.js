// components/LiveCard.js
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import ImageItem from '@enact/sandstone/ImageItem';
import {changePath} from '../store/store';
import { useDispatch} from 'react-redux';

const LiveCard = ({ liveInfo }) => {
  // thumbnail이 없는 경우를 처리
  let dispatch = useDispatch();

  const { id: id, title: title, liveCard: liveCardUrl } = liveInfo;

  const goLive = useCallback(()=>{
    dispatch(changePath(liveInfo.id));
  }, []);

  return (
    <div style={{ marginRight: '30px' }} onClick={goLive}>
      <ImageItem
        src={liveCardUrl}
        label={title}
        alt={title}
        style={{ width: '10.8rem', height: '19.2rem' }}
      />
    </div>
  );
};

LiveCard.propTypes = {
  liveInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    liveCard: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }),
};

export default LiveCard;
