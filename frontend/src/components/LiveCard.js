// components/LiveCard.js
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import ImageItem from '@enact/sandstone/ImageItem';
import {changePath} from '../store/store';
import { useDispatch} from 'react-redux';

const LiveCard = ({ thumbnail }) => {
  // thumbnail이 없는 경우를 처리
  let dispatch = useDispatch();

  const { id: id, title: title, thumbnail: thumbnailUrl } = thumbnail;

  const goLive = useCallback(()=>{
    dispatch(changePath(thumbnail.id));
  }, []);

  return (
    <div style={{ marginRight: '30px' }} onClick={goLive}>
      <ImageItem
        src={thumbnailUrl}
        label={title}
        alt={title}
        style={{ width: '10.8rem', height: '19.2rem' }}
      />
    </div>
  );
};

LiveCard.propTypes = {
  thumbnail: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }),
};

export default LiveCard;
