import { useEffect, useMemo, useState } from 'react';
import { Button, Flex, Popover, Text, TextField } from '@radix-ui/themes';
import { MixerHorizontalIcon } from '@radix-ui/react-icons';

import { Tag } from '../../shared/ui/Tag';
import { MapPlaceholder } from '../../shared/ui/MapPlaceholder';

function toggleValue(list: number[], id: number) {
  return list.includes(id) ? list.filter((item) => item !== id) : [...list, id];
}

export function ObjectFilters({
  objectTypes,
  statuses,
  cities,
  search,
  onApply,
  onReset,
}) {
  const [draft, setDraft] = useState(search);

  useEffect(() => {
    setDraft(search);
  }, [search]);

  const activeCount = useMemo(
    () =>
      draft.typeIds.length +
      draft.statusIds.length +
      draft.cityIds.length +
      (draft.q.trim().length > 0 ? 1 : 0),
    [draft],
  );

  return (
    <Flex direction="column" gap="4">
      <Flex direction={{ initial: 'column', md: 'row' }} gap="3" align={{ md: 'center' }}>
        <TextField.Root
          value={draft.q}
          onChange={(event) =>
            setDraft((current) => ({
              ...current,
              q: event.target.value,
            }))
          }
          placeholder="Название, история, описание"
          style={{ flex: 1 }}
        />

        <Popover.Root>
          <Popover.Trigger>
            <Button
              variant="soft"
              style={{
                minWidth: 172,
                justifyContent: 'space-between',
                border: '1px solid var(--app-border)',
                background: 'var(--app-surface)',
                color: 'var(--app-text-primary)',
              }}
            >
              <span>Фильтры</span>
              <Flex gap="2" align="center">
                {activeCount > 0 && (
                  <Text size="1" style={{ color: 'var(--app-accent)' }}>
                    {activeCount}
                  </Text>
                )}
                <MixerHorizontalIcon />
              </Flex>
            </Button>
          </Popover.Trigger>

          <Popover.Content
            width="380px"
            style={{
              padding: 18,
              background: 'var(--app-surface-strong)',
              border: '1px solid var(--app-border)',
            }}
          >
            <Flex direction="column" gap="4">
              <Flex direction="column" gap="2">
                <Text className="industrial-eyebrow">Тип объекта</Text>
                <Flex gap="2" wrap="wrap">
                  {objectTypes.map((item) => (
                    <Tag
                      key={item.id}
                      active={draft.typeIds.includes(item.id)}
                      onClick={() =>
                        setDraft((current) => ({
                          ...current,
                          typeIds: toggleValue(current.typeIds, item.id),
                        }))
                      }
                    >
                      {item.name}
                    </Tag>
                  ))}
                </Flex>
              </Flex>

              <Flex direction="column" gap="2">
                <Text className="industrial-eyebrow">Состояние</Text>
                <Flex gap="2" wrap="wrap">
                  {statuses.map((item) => (
                    <Tag
                      key={item.id}
                      active={draft.statusIds.includes(item.id)}
                      onClick={() =>
                        setDraft((current) => ({
                          ...current,
                          statusIds: toggleValue(current.statusIds, item.id),
                        }))
                      }
                    >
                      {item.name}
                    </Tag>
                  ))}
                </Flex>
              </Flex>

              <Flex direction="column" gap="2">
                <Text className="industrial-eyebrow">Город</Text>
                <Flex gap="2" wrap="wrap">
                  {cities.map((item) => (
                    <Tag
                      key={item.id}
                      active={draft.cityIds.includes(item.id)}
                      onClick={() =>
                        setDraft((current) => ({
                          ...current,
                          cityIds: toggleValue(current.cityIds, item.id),
                        }))
                      }
                    >
                      {item.name}
                    </Tag>
                  ))}
                </Flex>
              </Flex>

              <Flex justify="between" gap="3" mt="2">
                <Button
                  variant="ghost"
                  onClick={() => {
                    const cleared = {
                      q: '',
                      typeIds: [],
                      statusIds: [],
                      cityIds: [],
                    };
                    setDraft(cleared);
                    onReset();
                  }}
                >
                  Сбросить
                </Button>
                <Button onClick={() => onApply(draft)}>Применить</Button>
              </Flex>
            </Flex>
          </Popover.Content>
        </Popover.Root>
      </Flex>

      <MapPlaceholder />
    </Flex>
  );
}
