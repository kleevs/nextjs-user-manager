import { getUsers } from "src/db/users";

export default function handler(req, res) {
    res.status(200).json(getUsers());
}