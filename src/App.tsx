import { Container, Header, ContentContainer } from './styles';
import poweredImage from '/assets/powered.png';
import { LeftSide } from './components/LeftSide';
import { RightSide } from './components/RightSide';
import { observer } from 'mobx-react-lite';

import { GlobalStyles } from './globalStyles';

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
