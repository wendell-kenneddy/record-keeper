import { Group, Stack, Text, Title } from "@mantine/core";
import Link from "next/link";
import linkStyles from "@/styles/link.module.css";
import { Calendar } from "lucide-react";
import { LOCALIZED_RELEASE_TYPE_NAMES, ReleaseType } from "@/data/types";

interface ArtistReleasePreviewProps {
  id: number;
  title: string;
  releaseType: ReleaseType;
  releaseDate: string;
  songCount: number;
}

export function ArtistReleasePreview({
  id,
  title,
  releaseType,
  releaseDate,
  songCount,
}: ArtistReleasePreviewProps) {
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
        <Text component="span" fw="bold" size="xl" opacity={0.6}>
          {LOCALIZED_RELEASE_TYPE_NAMES[releaseType]}
        </Text>
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
