import { Card, Grid, Image, Skeleton, Text } from "@mantine/core";
import { achievements, achievementsStats, API_URL } from "../utils/queries";
import { useQuery } from "react-query";

export function AchievementDefinitions() {
    const { isLoading, data: definitions } = useQuery('achievements', achievements);
    const { data: stats } = useQuery('achievements-stats', achievementsStats);

    if (isLoading) return (
        <Grid>
            <Grid.Col md={3}>
                <Card p="lg">
                    <Skeleton height={156} width={156} radius="sm"/>
                    <Skeleton
                        height={20}
                        width={156}
                        radius="sm"
                        sx={(theme) => ({
                            marginBottom: 5, marginTop: theme.spacing.sm
                        })}
                    />
                </Card>
            </Grid.Col>
            <Grid.Col md={3}>
                <Card p="lg">
                    <Skeleton height={156} width={156} radius="sm"/>
                </Card>
            </Grid.Col>
            <Grid.Col md={3}>
                <Card p="lg">
                    <Skeleton height={156} width={156} radius="sm"/>
                </Card>
            </Grid.Col>
            <Grid.Col md={3}>
                <Card p="lg">
                    <Skeleton height={156} width={156} radius="sm"/>
                </Card>
            </Grid.Col>
        </Grid>
    );
    return (
        <Grid>
            {definitions.map(achievement => (
                <Grid.Col md={3} key={achievement.id}>
                    <Definition achievement={achievement} stats={stats}/>
                </Grid.Col>
            ))}
        </Grid>
    );
}

function Definition({ achievement, stats = {} }) {
    return (
        <Card key={achievement.id} p="lg" display="flex" sx={{ flexDirection: "column" }}>
            <Image src={`${API_URL}${achievement.image}`}
                   sx={(theme) => ({ padding: theme.spacing.sm })} alt={achievement.id}/>
            <Text weight={500} align="center" sx={(theme) => ({
                marginBottom: 5, marginTop: theme.spacing.sm
            })}>
                {achievement.id}
            </Text>
            <Text size="xs" dimmed align="center">
                {stats[achievement.id] || "0"} unlocks
            </Text>
        </Card>
    );
}
