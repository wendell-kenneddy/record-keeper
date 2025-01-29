import { Button, ComboboxData, Grid, GridCol, Select, TextInput } from "@mantine/core";

const SEARCH_OPTIONS: ComboboxData = [
  { label: "Música", value: "song" },
  { label: "EP", value: "ep" },
  { label: "Single", value: "single" },
  { label: "Álbum", value: "album" },
  { label: "Artista", value: "artist" },
];

export function SearchBar() {
  return (
    <Grid w="100%" component="form">
      <GridCol span={4}>
        <TextInput label="Título" name="title" />
      </GridCol>

      <GridCol span={4}>
        <Select
          label="O que está procurando?"
          name="searchTarget"
          defaultValue="song"
          data={SEARCH_OPTIONS}
        />
      </GridCol>

      <GridCol span={4} style={{ display: "flex", alignItems: "flex-end" }}>
        <Button type="submit" c="teal" variant="filled" w="100%">
          Procurar
        </Button>
      </GridCol>
    </Grid>
  );
}
