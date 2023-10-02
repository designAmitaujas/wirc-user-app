import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://occasional-person-mime-lite.trycloudflare.com/graphql",
  documents: "src/graphql/**/*.graphql",
  generates: {
    "src/gql/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
};

export default config;
