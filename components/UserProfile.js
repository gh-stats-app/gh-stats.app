import { useQuery } from "react-query";
import { userAchievements } from "../utils/queries";
import { Avatar, Container, Group, LoadingOverlay, Stack, Text } from "@mantine/core";

export default function UserProfile({ id }) {
    const { data, isLoading } = useQuery(['feed', id], () => userAchievements(id))
    if (isLoading) return <LoadingOverlay visible/>;
    return (
        <Container size="xl">
            <Stack>
                {data.map(entry => (
                    <Group noWrap key={entry.id}>
                        <Avatar src={"https://api.gh-stats.app" + entry.image} size={94} radius="md"/>
                        <div>
                            <Text size="xs" sx={{ textTransform: 'uppercase' }} weight={700} color="dimmed">
                            </Text>

                            <Text size="lg" weight={500}>
                                {entry.name}
                            </Text>

                            <Group noWrap spacing={10} mt={3}>
                                <Text size="xs" color="dimmed">
                                    {entry.description}
                                </Text>
                            </Group>

                            <Group noWrap spacing={10} mt={5}>
                                <Text size="xs" color="dimmed">
                                    8c4a8d55c5dc605f70bc14b9fc176b38c27a2937
                                </Text>
                            </Group>
                        </div>
                    </Group>
                ))}

            </Stack>
        </Container>
    )
}
