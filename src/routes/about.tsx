import { createFileRoute } from '@tanstack/react-router';
import { Box, Flex, Text } from '@radix-ui/themes';

import { Section } from '../shared/ui/Section';

export const Route = createFileRoute('/about')({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <Section
      eyebrow="О проекте"
      title="Как устроен этот архив"
      description="Заготовка для будущего текста о проекте, его задачах, методологии и людях, которые занимаются сбором и публикацией материалов."
    >
      <Flex direction="column" gap="6">
        <Box className="industrial-panel" style={{ padding: '24px 20px' }}>
          <Text className="industrial-eyebrow">О проекте</Text>
          <Text
            size="3"
            style={{
              display: 'block',
              marginTop: 16,
              color: 'var(--app-text-secondary)',
              lineHeight: 1.8,
            }}
          >
            Здесь можно разместить основное описание проекта: зачем он создан,
            какую территорию или тему исследует, как собирает материалы и что
            хочет показать через каталог объектов, событий и публикаций.
          </Text>
        </Box>

        <Flex direction={{ initial: 'column', lg: 'row' }} gap="6">
          <Box className="industrial-panel" style={{ flex: 1, padding: '24px 20px' }}>
            <Text className="industrial-eyebrow">Методология</Text>
            <Text
              size="3"
              style={{
                display: 'block',
                marginTop: 16,
                color: 'var(--app-text-secondary)',
                lineHeight: 1.8,
              }}
            >
              Этот блок подойдёт для краткого описания принципов отбора
              объектов, работы с архивами, полевых исследований, интервью и
              других источников информации.
            </Text>
          </Box>

          <Box className="industrial-panel" style={{ flex: 1, padding: '24px 20px' }}>
            <Text className="industrial-eyebrow">Команда и партнёры</Text>
            <Text
              size="3"
              style={{
                display: 'block',
                marginTop: 16,
                color: 'var(--app-text-secondary)',
                lineHeight: 1.8,
              }}
            >
              Позже здесь можно разместить состав команды, партнёрские
              организации, благодарности, ссылки на дополнительные материалы и
              логотипы участников проекта.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Section>
  );
}
