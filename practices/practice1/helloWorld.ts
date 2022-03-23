/* eslint-disable @typescript-eslint/ban-ts-comment */

const handler = async (event: any, context: any) : Promise<void> => {
    // @ts-ignore
    console.log(event);
    // @ts-ignore
    console.log(context.functionName);
    // @ts-ignore
    console.log('Hello world lambda');
};

export { handler };
