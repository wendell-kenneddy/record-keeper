import { ReleaseSongPreview } from "@/components/release-song-preview";
import { Stack, Text, Title, VisuallyHidden } from "@mantine/core";
import { Metadata } from "next";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  return {
    title: `Record Keeper | ${id}`,
    description: `Confira letra(s) traduzidas para o álbum ${id} de X.`,
  };
}

export default async function ReleasePage({}: Props) {
  const songs: { id: number; title: string; index: number }[] = [
    { id: 1, title: "Can You Feel My Heart", index: 1 },
    { id: 2, title: "The House Of Wolves", index: 2 },
    { id: 3, title: "Empire (Let Them Sing)", index: 3 },
    { id: 4, title: "Sleepwalking", index: 4 },
    { id: 5, title: "Go To Hell For Heaven's Sake", index: 5 },
    { id: 6, title: "Shadow Moses", index: 6 },
    { id: 7, title: "And The Snakes Start To Sing", index: 7 },
    { id: 8, title: "Seen It All Before", index: 8 },
    { id: 9, title: "Antivist", index: 9 },
    { id: 10, title: "Crooked Young", index: 10 },
    { id: 11, title: "Hospital For Souls", index: 11 },
  ];

  return (
    <Stack component="main" align="flex-start" gap="lg">
      <Stack gap={4} align="flex-start">
        <Text c="teal" size="sm" fw="bold" style={{ textTransform: "uppercase" }}>
          Álbum
        </Text>

        <Title fw="bolder">Sempiternal</Title>

        <Link href="/artists/1" style={{ color: "inherit" }}>
          <Text size="lg" fw="bold">
            Bring Me The Horizon
          </Text>
        </Link>

        <Text size="sm" fw="bold" opacity={0.6}>
          Lançado em 01/01/2025
        </Text>
      </Stack>

      <Stack gap={0} align="flex-start">
        <VisuallyHidden>
          <Title order={2}>Músicas</Title>
        </VisuallyHidden>

        {songs.map(({ id, title, index }) => (
          <ReleaseSongPreview key={id} id={id} title={title} index={index} />
        ))}
      </Stack>
    </Stack>
  );
}
