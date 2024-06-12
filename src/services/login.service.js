import axios from "axios";
export default function checkAuth() {
    return axios.post("https://test.temacode.ru/api/form", { age: 14 });
}
