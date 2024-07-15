import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote',
  exposes: {
    './Routes': 'apps/remote/src/app/app.routes.ts',
    "./RemoteEntryComponent": "apps/remote/src/app/remote-entry/entry.component.ts",
  },
};

export default config;
