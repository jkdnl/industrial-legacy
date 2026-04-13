import { useState } from 'react';
import { Box, Flex, Heading, IconButton, Text } from '@radix-ui/themes';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

import { parseMediaUrls } from './media';

export function ObjectHero({ object }) {
  const mediaUrls = parseMediaUrls(object.headline_img_url);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const activeMedia = mediaUrls[activeMediaIndex];
  const relatedEvents = object.events ?? [];

  const nextSlide = () => {
    setActiveMediaIndex((current) =>
      mediaUrls.length === 0 ? current : (current + 1) % mediaUrls.length,
    );
  };

  const previousSlide = () => {
    setActiveMediaIndex((current) =>
      mediaUrls.length === 0
        ? current
        : (current - 1 + mediaUrls.length) % mediaUrls.length,
    );
  };

  return (
    <Flex direction="column" gap="6">
      <Box
        className="industrial-panel"
        style={{
          minHeight: 540,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: activeMedia
              ? `url(${activeMedia})`
              : 'linear-gradient(135deg, var(--app-surface-subtle), transparent)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(0.3) contrast(1.05)',
          }}
        />
        <Box
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(10, 10, 10, 0.12) 0%, rgba(10, 10, 10, 0.82) 100%)',
          }}
        />

        <Flex
          direction="column"
          justify="end"
          px={{ initial: '4', md: '7' }}
          py={{ initial: '5', md: '7' }}
          style={{ height: '100%', position: 'relative', zIndex: 1 }}
        >
          <Text
            size="1"
            style={{
              color: 'rgba(255,255,255,0.76)',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
            }}
          >
            Паспорт объекта
          </Text>
          <Heading
            size="9"
            style={{
              color: 'white',
              marginTop: 12,
              textTransform: 'uppercase',
              letterSpacing: '-0.05em',
              maxWidth: 640,
            }}
          >
            {object.name}
          </Heading>
          <Text
            size="3"
            style={{
              color: 'rgba(255,255,255,0.82)',
              marginTop: 16,
              maxWidth: 560,
              lineHeight: 1.7,
            }}
          >
            Исторический объект, связанный с промышленным развитием города и его современной трансформацией.
          </Text>
        </Flex>

        {mediaUrls.length > 1 && (
          <Flex
            align="center"
            justify="between"
            style={{
              position: 'absolute',
              left: 20,
              right: 20,
              bottom: 20,
              zIndex: 2,
            }}
          >
            <Flex gap="2">
              <IconButton variant="solid" onClick={previousSlide} aria-label="Предыдущее изображение">
                <ChevronLeftIcon />
              </IconButton>
              <IconButton variant="solid" onClick={nextSlide} aria-label="Следующее изображение">
                <ChevronRightIcon />
              </IconButton>
            </Flex>

            <Flex gap="2">
              {mediaUrls.map((url, index) => (
                <button
                  key={`${url}-${index}`}
                  type="button"
                  onClick={() => setActiveMediaIndex(index)}
                  aria-label={`Перейти к изображению ${index + 1}`}
                  style={{
                    width: 12,
                    height: 12,
                    border: '1px solid rgba(255,255,255,0.7)',
                    background:
                      index === activeMediaIndex ? 'var(--app-accent)' : 'rgba(255,255,255,0.18)',
                    cursor: 'pointer',
                  }}
                />
              ))}
            </Flex>
          </Flex>
        )}
      </Box>

      <Flex direction={{ initial: 'column', lg: 'row' }} gap="6">
        <Flex
          className="industrial-panel"
          direction="column"
          gap="4"
          px={{ initial: '4', md: '6' }}
          py={{ initial: '5', md: '6' }}
          style={{
            flex: 1.05,
          }}
        >
          <Text className="industrial-eyebrow">Историческая справка</Text>

          <Box className="industrial-meta">
            <Box className="industrial-meta-item">
              <Text className="industrial-meta-label">Текущее состояние</Text>
              <Text className="industrial-meta-value">
                {object.statusRef?.name || 'Уточняется'}
              </Text>
            </Box>
            <Box className="industrial-meta-item">
              <Text className="industrial-meta-label">Тип объекта</Text>
              <Text className="industrial-meta-value">
                {object.typeRef?.name || 'Уточняется'}
              </Text>
            </Box>
            <Box className="industrial-meta-item">
              <Text className="industrial-meta-label">Город</Text>
              <Text className="industrial-meta-value">
                {object.cityRef?.name || 'Уточняется'}
              </Text>
            </Box>
          </Box>

          <Text
            size="3"
            style={{
              color: 'var(--app-text-secondary)',
              lineHeight: 1.8,
              marginTop: 8,
              whiteSpace: 'pre-wrap',
            }}
          >
            {object.desc ||
              'Подробное описание объекта, его истории и этапов трансформации будет добавлено после уточнения архивных данных.'}
          </Text>
        </Flex>

        <Flex
          className="industrial-panel"
          direction="column"
          gap="4"
          px={{ initial: '4', md: '6' }}
          py={{ initial: '5', md: '6' }}
          style={{
            flex: 0.95,
          }}
        >
          <Text className="industrial-eyebrow">Современное использование</Text>
          <Text
            size="3"
            style={{
              color: 'var(--app-text-secondary)',
              lineHeight: 1.8,
            }}
          >
            Отдельные сведения о современном проекте, этапах адаптации
            территории, публикациях и внешних материалах будут добавляться по
            мере пополнения карточки объекта.
          </Text>

          <Text className="industrial-eyebrow" style={{ marginTop: 12 }}>
            Связанные мероприятия
          </Text>
          {relatedEvents.length > 0 ? (
            <Flex direction="column" gap="3">
              {relatedEvents.map((event) => (
                <Box
                  key={event.id}
                  style={{
                    paddingTop: 12,
                    borderTop: '1px solid var(--app-border)',
                  }}
                >
                  <Text
                    size="2"
                    style={{
                      color: 'var(--app-text-primary)',
                      display: 'block',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {event.name || 'Мероприятие'}
                  </Text>
                  <Text size="2" style={{ color: 'var(--app-text-secondary)', display: 'block', marginTop: 6 }}>
                    {event.start_at
                      ? new Date(event.start_at).toLocaleDateString('ru-RU')
                      : 'Дата уточняется'}
                    {event.address ? ` • ${event.address}` : ''}
                  </Text>
                  {event.desc && (
                    <Text size="2" style={{ color: 'var(--app-text-secondary)', display: 'block', marginTop: 6 }}>
                      {event.desc}
                    </Text>
                  )}
                </Box>
              ))}
            </Flex>
          ) : (
            <Text size="3" style={{ color: 'var(--app-text-secondary)', lineHeight: 1.8 }}>
              Для этого объекта пока не привязаны отдельные события в базе.
            </Text>
          )}

          <Text className="industrial-eyebrow" style={{ marginTop: 12 }}>
            Источники и материалы
          </Text>
          <Text size="3" style={{ color: 'var(--app-text-secondary)', lineHeight: 1.8 }}>
            Ссылки на публикации, архивные документы, сайт проекта и дополнительные
            медиа будут опубликованы в этой секции после верификации материалов.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
