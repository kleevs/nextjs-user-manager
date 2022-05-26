export function format(input: string, params: {[k: string]: string|number}) {
    for (var k in params) {
        var regex = new RegExp(`:${k}`, "gi");
        input = input?.replace(regex, params[k] !== undefined && params[k] !== null ? `${params[k]}` : '');
    }

    return input;
}