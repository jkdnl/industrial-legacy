import { Link } from '@tanstack/react-router';
import { ObjectCard } from '../../entities/object/ObjectCard';
import { ObjectCardCompact } from '../../entities/object/CompactCard';
import { Flex } from '@radix-ui/themes';
import { AppGrid } from '../../shared/ui/AppGrid';

export function ObjectList({ objects, variant = 'hero' }) {
  if (variant === 'compact') {
    return (
      <AppGrid
        columns={{
          initial: '1',
          sm: '1',
          lg: '2',
        }}
      >
        {objects?.map((obj) => (
          <Link
            key={obj.id}
            to="/objects/$objectId"
            params={{ objectId: obj.id }}
          >
            <ObjectCardCompact object={obj} />
          </Link>
        ))}
      </AppGrid>
    );
  }

  return (
    <Flex direction={'column'} width={'100%'}>
      {objects?.map((obj, i) => (
        <Link
          key={obj.id}
          to="/objects/$objectId"
          params={{ objectId: obj.id }}
        >
          <ObjectCard obj={obj} index={i} />
        </Link>
      ))}
    </Flex>
  );
}
