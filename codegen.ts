import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  // schema: "https://occasional-person-mime-lite.trycloudflare.com/graphql",
  schema: "https://admin.wirc-icai.org/graphql",
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
