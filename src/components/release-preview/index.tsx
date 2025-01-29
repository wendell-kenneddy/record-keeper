import { Group, Stack, Text, Title } from "@mantine/core";
import Link from "next/link";
import linkStyles from "@/styles/link.module.css";
import { Calendar } from "lucide-react";
import { ReleaseType } from "@/data/types";

interface ReleasePreviewProps {
  id: number;
  title: string;
  artist: string;
  artistId: number;
  releaseType: ReleaseType;
  releaseDate: string;
  songCount: number;
}

export function ReleasePreview({
  id,
  title,
  artist,
  artistId,
  releaseType,
  releaseDate,
  songCount,
}: ReleasePreviewProps) {
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
        <Link href={`/releases/${id}`} className={linkStyles.unstyled}>
          {title}
        </Link>{" "}
        por{" "}
        <Link href={`/artists/${artistId}`} className={linkStyles.unstyled}>
          {artist}
        </Link>
      </Title>

      <Group align="center">
        {releaseType != "single" && <Text>{songCount} música(s)</Text>}

        <Group align="center" color="white" gap="xs">
          <Calendar size={16} />

          <Text>{releaseDate}</Text>
        </Group>
      </Group>
    </Stack>
  );
}
