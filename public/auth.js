import axios from "axios";

export const authenticate = async () => {
    const result = await axios.get("/api/user/auth");
    if (result.data.authenticated) {
        return result.data.authenticated
    } else {
        return false
    };
};

export const logout = async () => {
    const result = await axios.get("/api/user/logout");
    if (result.data.success) {
        return true
    } else {
        return false
    }
};

export const getUser = async () => {
    const result = await axios.get("/api/user/auth");
    console.log("here")
    console.log(result.name);
    return result?.data.name
}
