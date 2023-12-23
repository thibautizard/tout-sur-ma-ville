"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  let origin = "";

  if (typeof window !== "undefined") {
    origin = window.location.origin;
  }

  const apolloClient = new ApolloClient({
    uri: `${origin}/api/graphql`,
    cache: new InMemoryCache(),
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    </QueryClientProvider>
  );
};

export default Providers;
