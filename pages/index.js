import { Box, Card, Container, Grid, Image, LoadingOverlay, Text, Title, useMantineTheme } from '@mantine/core';
import { useQuery } from 'react-query';
import { achievements, API_URL } from '../utils/queries';

export default function Home() {
    const theme = useMantineTheme();
    const { isLoading, data } = useQuery('achievements', achievements)

    if (isLoading) {
        return <LoadingOverlay/>
    }

    return (
        <Container size="xl">
            <Box sx={{ paddingTop: theme.spacing.sm, paddingBottom: theme.spacing.sm }}>
                <Title order={1}>Available achievements</Title>
            </Box>
            <Grid>
                {data.map(achievement => (
                    <Grid.Col md={3} key={achievement.id}>
                        <Card key={achievement.id} shadow="sm" p="lg">
                            <Image src={`${API_URL}${achievement.image}`}
                                   style={{ padding: theme.spacing.sm }} alt={achievement.id}/>
                            <Text weight={500} align="center"
                                  style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>{achievement.id}</Text>
                        </Card>
                    </Grid.Col>
                ))}
            </Grid>
        </Container>
    )
}
