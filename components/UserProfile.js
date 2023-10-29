import { useQuery } from "react-query";
import { userAchievements } from "../utils/queries";
import { Avatar, Container, Group, LoadingOverlay, Stack, Text, Anchor } from "@mantine/core";

export default function UserProfile({ id }) {
    const { data, isLoading } = useQuery(['feed', id], () => userAchievements(id))
    if (isLoading) return <LoadingOverlay visible />;
    return (
        <Container size="xl">
            <Stack>
                {data.map(entry => {
                    const achievement = entry.achievement;
                    return (
                        <Group noWrap key={achievement.id}>
                            <Avatar src={"https://api.gh-stats.app" + achievement.image} size={94} radius="md" />
                            <div>
                                <Text size="xs" sx={{ textTransform: 'uppercase' }} weight={700} color="dimmed">
                                </Text>

                                <Text size="lg" weight={500}>
                                    {achievement.name}
                                </Text>

                                <Text size="xs" color="dimmed">
                                    {achievement.description}
                                </Text>

                                <Text size="xs" color="dimmed">
                                    <Anchor href={`https://github.com/search?q=${entry.commitId}&type=commits`} target="_blank">
                                        {entry.commitId.substr(1, 16)}&hellip;
                                    </Anchor>
                                </Text>
                                <Text size="xs" color="dimmed">
                                    {entry.unlockedAt}
                                </Text>
                            </div>
                        </Group>
                    )
                })}

            </Stack>
        </Container>
    )
}
