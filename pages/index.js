import {
    ActionIcon,
    Box,
    Card,
    Container,
    createStyles,
    Grid,
    Image,
    List,
    LoadingOverlay,
    Text,
    TextInput,
    Title
} from '@mantine/core';
import { useQuery } from 'react-query';
import { achievements, API_URL } from '../utils/queries';
import { IconArrowRight, IconSearch } from '@tabler/icons-react';
import { useForm } from "@mantine/form";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: theme.spacing.xl * 4,
        paddingBottom: theme.spacing.xl,
    },

    content: {
        maxWidth: 480,
        marginRight: theme.spacing.xl * 3,

        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
            marginRight: 0,
        },
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontSize: 44,
        lineHeight: 1.2,
        fontWeight: 900,
        [theme.fn.smallerThan('xs')]: {
            fontSize: 28,
        },
    },

    image: {
        flex: 1,
        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },

    highlight: {
        position: 'relative',
        backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
        borderRadius: theme.radius.sm,
        padding: '4px 12px',
    },
}));


export default function Home() {
    const { classes } = useStyles();
    const router = useRouter()
    const { isLoading, data } = useQuery('achievements', achievements);
    const form = useForm({
        initialValues: { username: '' }
    });
    if (isLoading) return <LoadingOverlay visible/>

    return (
        <Container>
            <div className={classes.inner}>
                <div className={classes.content}>
                    <Title className={classes.title}>
                        A <span className={classes.highlight}>happy</span> place <br/> for developers
                    </Title>
                    <Text color="dimmed" mt="md">
                        Feel encouraged to push more commits.
                    </Text>
                    <List mt={30} spacing="sm" size="sm">
                        <List.Item>
                            <strong>Earn</strong> badges for your contributions!
                        </List.Item>
                        <List.Item>
                            <strong>Celebrate</strong> your team&apos;s achievements and motivate them to continue
                            delivering high-quality code with our easy-to-use Slack bot.
                        </List.Item>
                    </List>
                </div>
                <Image alt="hero-image" src="https://ui.mantine.dev/_next/static/media/image.9a65bd94.svg"
                       className={classes.image}/>
            </div>
            <Box my={20}>
                <form onSubmit={form.onSubmit((values) => router.push('/user/' + values.username))}>
                    <TextInput
                        icon={<IconSearch size={18} stroke={1.5}/>}
                        radius="xl"
                        size="md"
                        rightSection={
                            <ActionIcon type="submit" size={32} radius="xl" variant="filled">
                                <IconArrowRight size={18} stroke={1.5}/>
                            </ActionIcon>
                        }
                        placeholder="Search user"
                        rightSectionWidth={42}
                        {...form.getInputProps('username')}
                    />
                </form>
            </Box>
            <Title className={classes.title} style={{ fontSize: 36 }}>
                Possible achievements:
            </Title>
            <Grid>
                {data.map(achievement => (
                    <Grid.Col md={3} key={achievement.id}>
                        <Card key={achievement.id} p="lg">
                            <Image src={`${API_URL}${achievement.image}`}
                                   sx={(theme) => ({ padding: theme.spacing.sm })} alt={achievement.id}/>
                            <Text weight={500} align="center" sx={(theme) => ({
                                marginBottom: 5, marginTop: theme.spacing.sm
                            })}>{achievement.id}</Text>
                        </Card>
                    </Grid.Col>
                ))}
            </Grid>
        </Container>
    )
}
