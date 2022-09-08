import { Container, Header, ContentContainer } from './styles';
import poweredImage from '../public/assets/powered.png';

function App() {
  return (
    <Container>
      <Header>
        <img src={poweredImage} alt="" />
      </Header>
      <ContentContainer>
        <div className="leftSide">...</div>
        <div className="rightSide">...</div>
      </ContentContainer>
    </Container>
  );
}

export default App;
