// import type { JestConfigWithTsJest } from 'ts-jest';
import { Config } from 'jest';

const jestConfig: Config = {
    extensionsToTreatAsEsm: ['.ts'],
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
    },
    // transform: {
    //     '^.+\\.tsx?$': [
    //         'ts-jest',
    //         {
    //             useESM: true,
    //         },
    //     ],
    // },
    transform: {
        '^.+\\.(t|j)sx?$': ['@swc-node/jest', {}],
    },
};

export default jestConfig;
