import { Avatar, Container, Progress, Text, Timeline } from "@mantine/core";
import { API_URL, feed } from "../utils/queries";
import { useQuery } from "react-query";
import { formatDistanceToNow } from 'date-fns'

export function AchievementFeed() {
    const { isLoading, data } = useQuery('achievements-feed', feed);

    if (isLoading) return (<Progress/>);
    return (
        <Container py="xl">
            <Timeline active={1} bulletSize={24} lineWidth={2}>
                {data.map(entry => {
                    const achievementDefinition = entry.achievementDefinition;
                    return (
                        <Timeline.Item key={entry.unlockedAt}
                                       bullet={
                                           <Avatar
                                               size={32}
                                               radius="xl"
                                               src={`${API_URL}${achievementDefinition.icon}`}
                                           />}>
                            <Text color="dimmed"
                                  size="sm">{entry.userName.value} unlocked <strong>{achievementDefinition.name}</strong> achievement</Text>
                            <Text size="xs" mt={4}>
                                {formatDistanceToNow(Date.parse(entry.unlockedAt), { addSuffix: true })}
                            </Text>
                        </Timeline.Item>
                    );
                })}
            </Timeline>
        </Container>
    )
}
