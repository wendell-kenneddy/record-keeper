import { Stack, Title } from "@mantine/core";
import Link from "next/link";
import linkStyles from "@/styles/link.module.css";

interface ArtistPreviewProps {
  id: number;
  name: string;
}

export function ArtistPreview({ id, name }: ArtistPreviewProps) {
  return (
    <Stack
      pl="xs"
      pb="xs"
      pt="xs"
      align="flex-start"
      style={{ borderLeft: "4px solid var(--mantine-color-teal-6)" }}
    >
      <Title order={3}>
        <Link href={`/artists/${id}`} className={linkStyles.unstyled}>
          {name}
        </Link>
      </Title>
    </Stack>
  );
}
