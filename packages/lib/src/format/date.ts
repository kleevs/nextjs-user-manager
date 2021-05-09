export function parseDate(date: string) : Date {
    var pattern = /^(\d+)\/(\d+)\/(\d+)$/;
    var strDate = (date || "").toString().trim();
    var jsFormat = strDate.replace(pattern, '$3-$2-$1');
    if (jsFormat !== strDate) {
        var splitted = jsFormat.split("-");
        if (splitted[0].length === 4) {
            return new Date(+splitted[0], +splitted[1] - 1, +splitted[2]);
        }
    }

    return null;
}

export function dateToString(date: Date, input: string): string {
    try {
        const month = date.getMonth() + 1;
        return `${date.getDate()}/${month > 9 ? '' : '0'}${month}/${date.getFullYear()}`;
    } catch (e) {
        return input;
    }
}

export function formatDate(date: string) {
    return date;
}