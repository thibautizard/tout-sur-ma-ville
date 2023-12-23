"use client";

import React from "react";
import { Input } from "./Input";
import { gql, useQuery } from "@apollo/client";

const QUERY_TEST = gql(`
  query Test {
    hello
  }
`);

export const Searchbar = () => {
  const { loading, error, data } = useQuery(QUERY_TEST);

  return (
    <div>
      <Input />
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};
