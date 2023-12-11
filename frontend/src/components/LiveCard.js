// components/LiveCard.js
import React from 'react';
import PropTypes from 'prop-types';
import ImageItem from '@enact/sandstone/ImageItem';
// import { Link } from 'react-router-dom';

const LiveCard = ({ thumbnail }) => {
  // thumbnail이 없는 경우를 처리
  if (!thumbnail) {
    return (
      <div>
        Raccoon
      </div>
    );
  }

  const { id: id, title: title, thumbnail: thumbnailUrl } = thumbnail;

  const norefcheck = () => {
    console.log("Raccoon")
  }

  return (
    // <Link to={`/live`} style={{ textDecoration: 'none' }}>
    // {/* <Link to={`/live/${id}`} style={{ textDecoration: 'none' }}> */}
    <div style={{ marginRight: '30px' }} onClick={norefcheck}>
      <ImageItem
        src={thumbnailUrl}
        label={title}
        alt={title}
        style={{ width: '10.8rem', height: '19.2rem' }}
        // style={{ width: '10rem', height: '15rem' }}
      />
    </div>
    // </Link>
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
