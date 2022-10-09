export const environment = {
  production: true,
  name: (globalThis as any).environment.name as string,
  apiUrl: (globalThis as any).environment.apiUrl as string,
  timeout: (globalThis as any).environment.timeout as number,
  customFeatureEnabled: (globalThis as any).environment.customFeatureEnabled as boolean
};
