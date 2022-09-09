import { Container, Header, ContentContainer } from './styles';
import poweredImage from '/assets/powered.png';
import { LeftSide } from './components/LeftSide';
import { RightSide } from './components/RightSide';
import { observer } from 'mobx-react-lite';

const App = observer(() => {
  return (
    <Container>
      <Header>
        <img src={poweredImage} alt="" />
      </Header>
      <ContentContainer>
        <LeftSide />
        <RightSide />
      </ContentContainer>
    </Container>
  );
});

export default App;
