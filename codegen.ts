import { CodegenConfig } from '@graphql-codegen/cli';
 
const config: CodegenConfig = {
  schema: 'https://corebridge.loca.lt/graphql',
  documents: ['src/**/*.tsx'],
  generates: {
    './src/graphql/types.ts': {
      plugins: ['typescript'],
    }
  },
  ignoreNoDocuments: true,
};
export default config;