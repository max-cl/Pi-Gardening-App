// TODO: IMPROVE IT
const baseURI = "http://localhost:3001/api";

export const ApiRequestUtil = async (URI, method, body) => {
    const rawResponse = await fetch(`${baseURI}${URI}`, {
        method: `${method}`,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    const result = await rawResponse.json();

    return result;
};
