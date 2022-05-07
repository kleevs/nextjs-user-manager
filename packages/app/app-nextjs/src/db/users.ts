let users = [];

export function getUsers() {
    return users;
}

export function saveUsers(obj: unknown[]) {
    users = obj;
}