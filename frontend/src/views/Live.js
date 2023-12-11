import { Panels, Panel, Header } from '@enact/sandstone/Panels';
import { ThemeDecorator } from '@enact/sandstone/ThemeDecorator';
import { Button } from '@enact/sandstone/Button';
import css from './Live.module.less';
import CommentWidget from '../components/Comment';
import { useEffect } from 'react';
import { changePath } from '../store/store';
import { useDispatch } from 'react-redux';
import BodyText from '@enact/sandstone/BodyText';
import Slottable from "@enact/ui/Slottable";
import Skinnable from "@enact/ui/Skinnable";
import Heading from '@enact/sandstone/Heading';
import VideoPlayer from '@enact/sandstone/VideoPlayer';
import HLSVideoPlayer from './HLSVideoPlayer';

const Live = ({ id, onBack, onClose, ...rest }) => {
  let dispatch = useDispatch();
  const products = [
    { id: 1, name: "퍼슈즈", price: '12000', image: 'https://static-resource.mlb-korea.com/cdn-cgi/image/format=auto,width=828,height=828,quality=85/images/goods/thnail/m/20230913/3AMUPSF36-50CAD-110612674613891910.png' },
    { id: 2, name: "퍼슈즈", price: '12000', image: 'https://static-resource.mlb-korea.com/cdn-cgi/image/format=auto,width=828,height=828,quality=85/images/goods/thnail/m/20230913/3AMUPSF36-50CAD-110612674613891910.png' },
  ];

  useEffect(() => {
    return () => {
      dispatch(changePath(-1));
    }
  }, []);
  console.log("check");
  return (
    <Panels onBack={onBack} onClose={onClose}>
      <Panel {...rest}>
        <Header title="[슈펜] 겨울 필수템 퍼슈즈/패딩화/롱부츠 특가전" subtitle="LIVE: 86,103" />
        <div style={{ padding: "1rem" }}>
          <HLSVideoPlayer id={id} src="https://cdn-vos-ppp-01.vos360.video/Content/HLS_HLSCLEAR/Live/channel(PPP-LL-2HLS)/index.m3u8" ></HLSVideoPlayer>
        </div>
      </Panel>
    </Panels>
  );
};

export default ThemeDecorator(Live);