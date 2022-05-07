import { getUsers, saveUsers } from "src/db/users";

export default function handler(req, res) {
    const { id } = req.query;
    const users = getUsers();

    if(req.method === 'POST') {
        const body = req.body;
        users.push(body);
        body.id = body.id || Math.max.apply(Math, users.map(u => u.id)) + 1;
        res.status(200).json(body.id);
    } else if(req.method === 'GET') {
        const user = users.find(u => u.id === +id);
        res.status(200).json(user);
    } else if(req.method === 'DELETE') {
        saveUsers(users.filter(u => u.id !== +id));
        res.status(200).json(true);
    }
}