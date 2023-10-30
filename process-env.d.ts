// Define a custom namespace 'NodeJS' to provide type information for environment variables.
declare namespace NodeJS {
    // Create an interface 'ProcessEnv' to specify the shape of 'process.env' object.
    interface ProcessEnv {
        REACT_APP_OMDB_API_KEY: string;
    }
}
