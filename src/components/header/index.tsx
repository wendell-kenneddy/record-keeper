import { Center, Flex, Group, Text } from "@mantine/core";
import Link from "next/link";
import linkStyles from "@/styles/link.module.css";

export function Header() {
  return (
    <Center w="full" h={64} bg="dark">
      <Flex w="100%" maw={1024} align="center" justify="space-between">
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Text>record.keeper</Text>
        </Link>

        <Group gap="xs">
          <Link href="/artists" className={linkStyles.navLink}>
            <Text>Artistas</Text>
          </Link>
        </Group>
      </Flex>
    </Center>
  );
}
