import { Container, Header, ContentContainer } from './styles';
import poweredImage from '/assets/powered.png';
import { LeftSide } from './components/LeftSide/LeftSide';
import { RightSide } from './components/RightSide/RightSide';
import { observer } from 'mobx-react-lite';

import { GlobalStyles } from './globalStyles';

import { levels, calculateImc } from './helpers/imc';

const App = observer(() => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header>
          <img src={poweredImage} alt="" />
        </Header>
        <ContentContainer>
          <LeftSide />
          <RightSide />
        </ContentContainer>
      </Container>
    </>
  );
});

export default App;
