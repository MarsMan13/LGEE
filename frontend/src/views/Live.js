import { Panels, Panel, Header, Title } from '@enact/sandstone/Panels';
import { ThemeDecorator } from '@enact/sandstone/ThemeDecorator';
import css from './Live.module.less';
import CommentWidget from '../components/Comment';
import { useEffect } from 'react';
import {changePath} from '../store/store';
import { useDispatch} from 'react-redux';


const Live = ({id, onBack, onClose, ...rest}) => {
  let dispatch = useDispatch();
  const products = [
    { id: 1, name: "퍼슈즈", price: '12000', image: 'https://static-resource.mlb-korea.com/cdn-cgi/image/format=auto,width=828,height=828,quality=85/images/goods/thnail/m/20230913/3AMUPSF36-50CAD-110612674613891910.png' },
    { id: 2, name: "퍼슈즈", price: '12000', image: 'https://static-resource.mlb-korea.com/cdn-cgi/image/format=auto,width=828,height=828,quality=85/images/goods/thnail/m/20230913/3AMUPSF36-50CAD-110612674613891910.png' },
  ];

  useEffect(()=>{
    return ()=>{
      dispatch(changePath(-1));
    }
  }, []);

  return (
    <div className={css.videoContainer}>
      <video autoPlay muted loop>
        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
      </video>
      <Panels onBack={onBack} onClose={onClose} className={css.panels} style={{ position: 'absolute', background: 'transparent'}}>
        <Panel {...rest} style={{ height: "100%" }}>
          <Header title="[슈펜] 겨울 필수템 퍼슈즈/패딩화/롱부츠 특가전" subtitle="LIVE: 86,103" />
          <div>
            <CommentWidget liveId={id}></CommentWidget>
          </div>
        </Panel>
      </Panels>
    </div>
  );
};

export default ThemeDecorator(Live);