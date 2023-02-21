import { Avatar, Container, Progress, Text, Timeline } from "@mantine/core";
import { API_URL, feed } from "../utils/queries";
import { useQuery } from "react-query";

export function AchievementFeed() {
    const { isLoading, data } = useQuery('achievements-feed', feed);

    if (isLoading) return (<Progress/>);
    return (
        <Container py="xl">
            <Timeline active={1} bulletSize={24} lineWidth={2}>
                {data.map(x => Object.entries(x)).map(entry => (
                    <Timeline.Item key={`${entry[0][0]}-${entry[0][1]}`}
                                   bullet={
                                       <Avatar
                                           size={32}
                                           radius="xl"
                                           src={`${API_URL}/img/${entry[0][1]}@6x.png`}
                                       />}>
                        <Text color="dimmed"
                              size="sm">{entry[0][0]} unlocked <strong>{entry[0][1]}</strong> achievement</Text>
                        <Text size="xs" mt={4}>2 hours ago</Text>
                    </Timeline.Item>
                ))}
            </Timeline>
        </Container>
    )
}
