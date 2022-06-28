import axios from "axios";

export const authenticate = async () => {
    const result = await axios.get("/api/user/auth");
    return result.data.authenticated
};

export const logout = async () => {
    const result = await axios.get("/api/user/logout");
    if (result.data.success) {
        return true
    } else {
        return false
    }
}