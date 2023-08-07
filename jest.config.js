export const moduleDirectories = ["node_modules", "src"];
export const moduleFileExtensions = ["js", "ts", "tsx", "json", "node"];
export const roots = ["src"];
export const testEnvironment = "node";
export const testMatch = ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"];
export const testPathIgnorePatterns = ["\\\\node_modules\\\\"];
export const transform = {
  "^.+\\.(ts|tsx)$": "ts-jest",
};
