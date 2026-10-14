"use client";
import { Card, Group, Badge, Button, Text } from "@mantine/core";

type EventCardProps = {
  title: string;
  badge?: string;
  description: string;
  button: { text: string; onClick: () => void };
};

export default function EventCard({
  title,
  badge,
  description,
  button,
}: EventCardProps) {
  return (
    <Card
      w="100%"
      shadow="sm"
      padding="lg"
      withBorder
      bg="rgba(24, 35, 72, 0.6)"
      style={{ borderColor: "rgba(163, 167, 179, 0.25)" }}
    >
      <Group justify="space-between" mt="md" mb="xs">
        <Text ff="heading" fz="xl" fw={600} c="silver.0">
          {title}
        </Text>
        {badge && <Badge variant="light">{badge}</Badge>}
      </Group>

      <Text size="sm" c="dimmed">
        {description}
      </Text>

      <Button onClick={button.onClick} radius="xl" fullWidth mt="md">
        {button.text}
      </Button>
    </Card>
  );
}
