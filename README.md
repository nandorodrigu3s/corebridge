# corebridge

<p align="center">
  <img src="https://github.com/nandorodrigu3s/corebridge-server-api/blob/main/logo/logo_612.png" />
</p>

<p>It's a React Native + TS Application with NestJS + GraphQL Rest API created to simulate
a "NFT E-commerce" where you can find basic features like List NFT's, Add & Remove to the cart,
List added itens into the cart and finalize the purchase simulation, sending your choosen itens to a virtual
wallet. After finished the buy flow, you will be able to see your bought itens in a Wallet.</p>

This project is integrated with OpenSea public [API](https://docs.opensea.io/reference/api-overview).

# Requirements:
> 1. You need to configure the server API to finish this setup.

To set up the server API, please follow this link: [API Repository](https://github.com/nandorodrigu3s/corebridge-server-api)


# Follow these steps below to setup the App

1- [download ZIP](https://github.com/nandorodrigu3s/corebridge/archive/refs/heads/main.zip) or clone repository

```bash
git clone https://github.com/nandorodrigu3s/corebridge.git
```

2- Install packages
```bash
 npm install
```
or
```bash
 yarn install
```

2.1 - If you're going to run this project into iOS devices or simulators
```bash
 cd ios && pod install
```

> If you're facing any issue to run into macOS environment, please follow this docs [Official macOS Docs](https://help.apple.com/xcode/mac/current/#/devfd9e28378)


3- In this tutorial I'm providing a localtunnel default configuration, but you can do your own configuration
> For the first time that you run this command, it will ask you for some agreements, just set is as Y (Yes)
```bash
 npx localtunnel --subdomain corebridge --port 3001
```
![expected output](https://github.com/nandorodrigu3s/corebridge/blob/main/imgs/core_host.png)

4- If you did any change in the default configuration, then you'll need to edit file "codegen.ts" to let the schema URL pointing to the server API URL. Below is the default configuration (see *Requirements* above)
```python
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
```

5- Run Codegen script for GraphQL types and start server
```bash
 yarn run generate:schema
```
or
```bash
 npm run generate:schema
```

# # That's it!

You are now able to connect your real device and run the application
or use a simulator to test it!

If you have any doubt, issue or you are learning RN, please see docs below to learn how to run RN applications
> [Official Documentation](https://reactnative.dev/docs/running-on-device)