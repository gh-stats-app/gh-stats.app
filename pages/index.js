import { ActionIcon, Box, Container, createStyles, Image, List, Text, TextInput, Title } from '@mantine/core';
import { IconArrowRight, IconSearch } from '@tabler/icons-react';
import { useForm } from "@mantine/form";
import { AchievementDefinitions } from "../components/AchievementDefinitions";
import { openModal } from "@mantine/modals";
import UserProfile from "../components/UserProfile";
import { AchievementFeed } from "../components/AchievementFeed";

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
    const form = useForm({
        initialValues: { username: '' }
    });
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
                <form onSubmit={form.onSubmit((values) => {
                    openModal({
                        title: `${values.username} unlocked achievements`,
                        children: (
                            <UserProfile id={values.username}/>
                        ),
                    });
                    form.reset();
                })}>
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
            <AchievementDefinitions/>
            <Title className={classes.title} style={{ fontSize: 36 }}>
                Recently unlocked
            </Title>
            <AchievementFeed/>
        </Container>
    )
}
