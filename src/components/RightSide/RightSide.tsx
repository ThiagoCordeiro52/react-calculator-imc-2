import { levels } from '../../helpers/imc';
import { GridItem } from '../GridItem/GridItem';
import { Container } from './styles';

export function RightSide() {
  return (
    <Container>
      <div>
        {levels.map((item, key) => {
          return <GridItem key={key} item={item} />;
        })}
      </div>
    </Container>
  );
}
