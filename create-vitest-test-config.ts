import { loadEnv } from "vite";
import { InlineConfig } from "vitest";

export const createVitestTestConfig = (testingType: string): InlineConfig => {
  return {
    root: "./",
    globals: true,
    isolate: false,
    passWithNoTests: true,
    include: [`tests/${testingType}/**/*.test.ts`],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/coverage/**',
      '**/postgres/**',
      '**/postgres_data/**',
      '**/pgadmin_data/**'
    ],
    env: loadEnv("test", process.cwd(), ""),
    coverage: {
      provider: "istanbul",
      reporter: ["text", "json", "html"],
      reportsDirectory: `coverage/${testingType}`,
      include: ["src/**/*.ts"],
      exclude: ["src/main.ts"],
    },
  };
};
