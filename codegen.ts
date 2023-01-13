import { CodegenConfig } from '@graphql-codegen/cli';
 
const config: CodegenConfig = {
  schema: 'http://localhost:3001/graphql',
  documents: ['src/**/*.tsx'],
  generates: {
    './src/graphql/types.ts': {
      plugins: ['typescript'],
    }
  },
  ignoreNoDocuments: true,
};
export default config;