
declare module "messageformat" {

    class MessageFormat {
        constructor(code: string);
        compile<T>(message:string): (obj:T) => string;
        compile(message:string): () => string;
    }

    export = MessageFormat;
}