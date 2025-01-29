import { ArtistPreview } from "@/components/artist-preview";
import { ReleasePreview } from "@/components/release-preview";
import { SearchBar } from "@/components/search-bar";
import { SongPreview } from "@/components/song-preview";
import { Stack } from "@mantine/core";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Record Keeper",
  description: "Um acervo de trduções feitas com o carinho que merecem.",
};

export default function Home() {
  return (
    <Stack component="main" align="flex-start" gap="xl">
      <SearchBar />

      <Stack gap={0}>
        <ReleasePreview
          title="Sempiternal"
          artist="Bring Me The Horizon"
          artistId={1}
          id={1}
          releaseDate="20/01/2025"
          releaseType="album"
          songCount={1}
        />

        <ReleasePreview
          title="Melt Away"
          artist="Taeyeon"
          artistId={1}
          id={1}
          releaseDate="20/01/2025"
          releaseType="single"
          songCount={1}
        />

        <ReleasePreview
          title="From Zero"
          artist="Linkin Park"
          artistId={1}
          id={1}
          releaseDate="20/01/2025"
          releaseType="ep"
          songCount={1}
        />

        <SongPreview
          title="Shadow Moses"
          release="Sempiternal"
          artist="Bring Me The Horizon"
          artistId={2}
          id={1}
          releaseId={1}
          releaseDate="01/01/2025"
        />

        <ArtistPreview name="Tayeon" id={1} />
        <ArtistPreview name="Tayeon" id={1} />
        <ArtistPreview name="Tayeon" id={1} />
      </Stack>
    </Stack>
  );
}
