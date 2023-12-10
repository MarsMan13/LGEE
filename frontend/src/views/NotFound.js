import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import {Panels, Panel, Header} from '@enact/sandstone/Panels';

const NotFound = props => {
  return (
    <Panels onClose={()=>{}}>
      <Panel>
        <Header>Not Found1</Header>
      </Panel>
    </Panels>
  );
};

export default NotFound; 