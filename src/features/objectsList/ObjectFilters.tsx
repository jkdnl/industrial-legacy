// features/object-list/ObjectFilters.tsx

import { Flex, TextField } from '@radix-ui/themes';
import { Tag } from '../../shared/ui/Tag';
import { MapPlaceholder } from '../../shared/ui/MapPlaceholder';
export function ObjectFilters({
  objectTypes,
  search,
  setSearch,
  activeTypes,
  toggleType,
}) {
  return (
    <Flex direction="column" gap="4">
      <TextField.Root
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Поиск по объектам"
      />

      <Flex gap="2" wrap="wrap">
        {objectTypes.map((item) => (
          <Tag
            key={item.id}
            active={activeTypes.includes(item.id)}
            onClick={() => toggleType(item.id)}
          >
            {item.name}
          </Tag>
        ))}
      </Flex>

      <MapPlaceholder />
    </Flex>
  );
}
