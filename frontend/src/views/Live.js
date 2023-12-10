import { Panels, Panel, Header, Title } from '@enact/sandstone/Panels';
import { ThemeDecorator } from '@enact/sandstone/ThemeDecorator';
import css from './Live.module.less';
import ProductList from '../components/ProductList';
import Video from '../components/Video';
import Chat from '../components/Chat';
import VideoPlayer from '@enact/sandstone/VideoPlayer';


const Live = (props) => {
  const products = [
    { id: 1, name: "퍼슈즈", price: '12000', image: 'https://static-resource.mlb-korea.com/cdn-cgi/image/format=auto,width=828,height=828,quality=85/images/goods/thnail/m/20230913/3AMUPSF36-50CAD-110612674613891910.png' },
    { id: 2, name: "퍼슈즈", price: '12000', image: 'https://static-resource.mlb-korea.com/cdn-cgi/image/format=auto,width=828,height=828,quality=85/images/goods/thnail/m/20230913/3AMUPSF36-50CAD-110612674613891910.png' },
  ];

  return (
    <div className={css.videoContainer}>
      <video autoPlay muted loop>
        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
      </video>
      <Panels className={css.panels} style={{ position: 'absolute', background: 'transparent'}}>
        <Panel {...props} style={{ height: "100%" }}>
          <Header title="[슈펜] 겨울 필수템 퍼슈즈/패딩화/롱부츠 특가전" subtitle="LIVE: 86,103" />
          <div>
            <Chat></Chat>
          </div>
        </Panel>
      </Panels>
    </div>
  );


  return <div>
    <VideoPlayer style={{ position: 'relative', width: '100%' }}>
      <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
      <Chat></Chat>
    </VideoPlayer>
  </div>;

  return (
    <Panels style={{ height: "100%", }}>
      <Panel {...props} style={{ height: "100%" }}>
        <Header title="[슈펜] 겨울 필수템 퍼슈즈/패딩화/롱부츠 특가전" subtitle="LIVE: 86,103" />
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <ProductList products={products}></ProductList>
          </div>
          <div style={{ flex: 1 }}>
            <Video></Video>
          </div>
          <div style={{ flex: 1 }}>
            <Chat></Chat>
          </div>
        </div>
      </Panel>
    </Panels>
  );
};

export default ThemeDecorator(Live);