import { Center, Group, Text } from "@mantine/core";
import Link from "next/link";

interface ReleaseSongPreviewProps {
  id: number;
  title: string;
  index: number;
}

export function ReleaseSongPreview({ id, title, index }: ReleaseSongPreviewProps) {
  return (
    <Group gap="xs">
      <Center p="xs" bg="teal" miw={42}>
        <Text size="lg" fw="bold">
          {index}
        </Text>
      </Center>

      <Link href={`/songs/${id}`} style={{ color: "var(--mantine-text-color)" }}>
        <Text fw="bold" size="lg">
          {title}{" "}
          <Text component="span" fw="inherit" opacity={0.6} c="inherit">
            (Letra)
          </Text>
        </Text>
      </Link>
    </Group>
  );
}
