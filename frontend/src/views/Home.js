import BodyText from '@enact/sandstone/BodyText';
import {Panels, Panel, Header} from '@enact/sandstone/Panels';
import { ThemeDecorator } from '@enact/sandstone/ThemeDecorator';

const Home = (props) => {

  return (
    <Panels style={{height: "100%",}}>
      <Panel {...props} style={{height: "100%"}}>
        <Header title="Home"/>
        <BodyText>"test</BodyText>
      </Panel>
    </Panels>
  );
};

export default ThemeDecorator(Home);