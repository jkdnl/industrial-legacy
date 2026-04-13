import { createFileRoute } from '@tanstack/react-router';
import { Box, Flex, Text } from '@radix-ui/themes';

import { Section } from '../shared/ui/Section';

export const Route = createFileRoute('/contacts')({
  component: ContactsPage,
});

function ContactsPage() {
  return (
    <Section
      eyebrow="Контакты"
      title="Связь с проектом"
      description="Здесь позже можно разместить рабочую почту, форму обратной связи, ссылки на соцсети и другие каналы коммуникации."
    >
      <Flex direction={{ initial: 'column', lg: 'row' }} gap="6">
        <Box className="industrial-panel" style={{ flex: 1, padding: '24px 20px' }}>
          <Text className="industrial-eyebrow">Основной контакт</Text>
          <Text
            size="3"
            style={{
              display: 'block',
              marginTop: 16,
              color: 'var(--app-text-secondary)',
              lineHeight: 1.8,
            }}
          >
            В этом блоке можно добавить основную почту проекта, имя
            ответственного человека и короткую пометку о том, по каким вопросам
            лучше писать сюда.
          </Text>
        </Box>

        <Box className="industrial-panel" style={{ flex: 1, padding: '24px 20px' }}>
          <Text className="industrial-eyebrow">Партнёрства и медиа</Text>
          <Text
            size="3"
            style={{
              display: 'block',
              marginTop: 16,
              color: 'var(--app-text-secondary)',
              lineHeight: 1.8,
            }}
          >
            Здесь можно разместить отдельный контакт для партнёрств, заявок на
            сотрудничество, медиа-запросов и предложений по новым объектам или
            материалам.
          </Text>
        </Box>
      </Flex>

      <Box className="industrial-panel" style={{ padding: '24px 20px' }}>
        <Text className="industrial-eyebrow">Дополнительные сведения</Text>
        <Text
          size="3"
          style={{
            display: 'block',
            marginTop: 16,
            color: 'var(--app-text-secondary)',
            lineHeight: 1.8,
          }}
        >
          Ниже позже можно вставить ссылки на социальные сети, мессенджеры,
          форму обратной связи, юридические данные, адрес для корреспонденции
          или любые другие полезные контакты.
        </Text>
      </Box>
    </Section>
  );
}
