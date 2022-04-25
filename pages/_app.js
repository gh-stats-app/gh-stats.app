import { MantineProvider } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import Head from 'next/head'
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
    const preferredColorScheme = useColorScheme();
    const [colorScheme, setColorScheme] = useState(preferredColorScheme);
    const toggleColorScheme = (value) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    return (
        <>
            <Head>
                <title>gh-stats.app</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
                <meta name="description" content="Github achievements system and missing github-actions analytics!"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <MantineProvider withGlobalStyles
                             withNormalizeCSS
                             theme={{ colorScheme: 'light' }}
                             toggleColorScheme={toggleColorScheme}>
                <QueryClientProvider client={queryClient}>
                    <Component {...pageProps} />
                </QueryClientProvider>
            </MantineProvider>
        </>
    );
}