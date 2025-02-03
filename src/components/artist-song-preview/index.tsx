import { Group, Stack, Text, Title } from "@mantine/core";
import { Calendar } from "lucide-react";
import Link from "next/link";

import linkStyles from "@/styles/link.module.css";

interface ArtistSongPreviewProps {
  id: number;
  title: string;
  release: string;
  releaseId: number;
  releaseDate: string;
}

export function ArtistSongPreview({
  id,
  title,
  release,
  releaseDate,
  releaseId,
}: ArtistSongPreviewProps) {
  return (
    <Stack
      gap="xs"
      pl="xs"
      pb="sm"
      pt="sm"
      align="flex-start"
      style={{ borderLeft: "4px solid var(--mantine-color-teal-6)" }}
    >
      <Title order={3}>
        <Link href={`/songs/${id}`} className={linkStyles.unstyled}>
          {title}
        </Link>{" "}
        <Text component="span" fw="bold" size="xl" opacity={0.6}>
          Letra
        </Text>
      </Title>

      <Group align="center">
        <Text>
          De{" "}
          <Link href={`/releases/${releaseId}`} className={linkStyles.unstyled}>
            {release}
          </Link>
        </Text>

        <Group align="center" color="white" gap="xs">
          <Calendar size={16} />

          <Text>{releaseDate}</Text>
        </Group>
      </Group>
    </Stack>
  );
}
