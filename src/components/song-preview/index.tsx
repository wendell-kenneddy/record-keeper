import { Group, Stack, Text, Title } from "@mantine/core";
import Link from "next/link";
import linkStyles from "@/styles/link.module.css";
import { Calendar } from "lucide-react";

interface SongPreviewProps {
  id: number;
  title: string;
  artist: string;
  artistId: number;
  release: string;
  releaseId: number;
  releaseDate: string;
}

export function SongPreview({
  id,
  title,
  release,
  artist,
  artistId,
  releaseId,
  releaseDate,
}: SongPreviewProps) {
  return (
    <Stack
      gap="xs"
      pl="xs"
      pb="md"
      pt="md"
      align="flex-start"
      style={{ borderLeft: "4px solid var(--mantine-color-teal-6)" }}
    >
      <Title order={3}>
        <Link href={`/songs/${id}`} className={linkStyles.unstyled}>
          {title}
        </Link>{" "}
        por{" "}
        <Link href={`/artists/${artistId}`} className={linkStyles.unstyled}>
          {artist}
        </Link>{" "}
        <Text component="span" fw="bold" size="xl" opacity={0.6}>
          (Letra)
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
