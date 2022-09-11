import { level } from '../../helpers/imc';
import { Container, GridIcon, GridInfo, GridTitle } from './styles';

import upImage from '/assets/up.png';
import downImage from '/assets/down.png';

interface GridItemProps {
  item: level;
}

export function GridItem({ item }: GridItemProps) {
  return (
    <Container background={item.color}>
      <GridIcon>
        {item.icon === 'up' ? (
          <img src={upImage} alt="Cool" />
        ) : (
          <img src={downImage} alt="Not cool" />
        )}
      </GridIcon>
      <GridTitle>{item.title}</GridTitle>
      <GridInfo>
        IMC está entre <strong>{item.imc[0]}</strong> e{' '}
        <strong>{item.imc[1]}</strong>
      </GridInfo>
    </Container>
  );
}
