import { Box, Flex, Heading, Text } from '@radix-ui/themes';

export function Section({ title, eyebrow, description, children }) {
  return (
    <Flex direction="column" gap="6" className="app-section">
      {(title || eyebrow || description) && (
        <Box className="section-header">
          {eyebrow && (
            <Text as="span" className="section-kicker">
              {eyebrow}
            </Text>
          )}
          {title && (
            <Heading as="h2" className="section-title">
              {title}
            </Heading>
          )}
          {description && <Text className="section-copy">{description}</Text>}
        </Box>
      )}
      {children}
    </Flex>
  );
}
