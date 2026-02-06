import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
    const httpLink = new HttpLink({
        uri: process.env.NEXT_PUBLIC_SERVER_URL || "https://server.cliffenglish.co.kr/graphql",
        // Opt-out of Next.js fetch caching
        fetchOptions: { cache: "no-store" },
    });

    return new ApolloClient({
        cache: new InMemoryCache(),
        link: httpLink,
    });
});
