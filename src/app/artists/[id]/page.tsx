import { ArtistReleasePreview } from "@/components/artist-release-preview";
import { ArtistSongPreview } from "@/components/artist-song-preview";
import { SearchBar } from "@/components/search-bar";
import { Stack, Text, Title, VisuallyHidden } from "@mantine/core";
import { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

const SEARCH_OPTIONS = [
  { label: "Músicas", value: "songs" },
  { label: "Lançamentos (Álbuns, EP's, Singles)", value: "releases" },
];

export const metadata: Metadata = {
  title: "Record Keeper | Bring Me The Horizon",
  description: "Confira a discografia de Bring Me The Horizon.",
};

export default async function ArtistPage({}: Props) {
  return (
    <Stack component="main" align="flex-start" gap="lg">
      <Stack w="100%" gap={4} align="flex-start">
        <Text c="teal" size="sm" fw="bold" style={{ textTransform: "uppercase" }}>
          artista
        </Text>

        <Title fw="bolder">Bring Me The Horizon</Title>

        <SearchBar searchOptions={SEARCH_OPTIONS} />
      </Stack>

      <Stack gap={0} align="flex-start">
        <VisuallyHidden>
          <Title order={2}>Músicas</Title>
        </VisuallyHidden>

        <ArtistSongPreview
          id={1}
          title="Shadow Moses"
          release="Sempiternal"
          releaseDate="2013"
          releaseId={1}
        />
        <ArtistSongPreview
          id={1}
          title="Crooked Young"
          release="Sempiternal"
          releaseDate="2013"
          releaseId={1}
        />
        <ArtistSongPreview
          id={1}
          title="Sleepwalking"
          release="Sempiternal"
          releaseDate="2013"
          releaseId={1}
        />
        <ArtistReleasePreview
          id={1}
          title="Sempiternal"
          releaseType="album"
          releaseDate="2013"
          songCount={11}
        />
        <ArtistReleasePreview
          id={1}
          title="From Zero"
          releaseType="ep"
          releaseDate="2024"
          songCount={6}
        />
        <ArtistReleasePreview
          id={1}
          title="Melt Away"
          releaseType="single"
          releaseDate="2024"
          songCount={1}
        />
      </Stack>
    </Stack>
  );
}
