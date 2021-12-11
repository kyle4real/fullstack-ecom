import jwtDecode from "jwt-decode";

export const isTokenValid = (token) => {
    if (!token) return false;
    try {
        const { exp } = jwtDecode(token);
        if (Date.now() >= exp * 1000) return false;
        else return true;
    } catch (error) {
        return false;
    }
};

export const getUserRole = (token) => {
    if (!token) return null;
    try {
        const { role } = jwtDecode(token);
        return role;
    } catch {
        return null;
    }
};
export const getUserData = (token) => {
    if (!token) return null;
    try {
        const { role, id } = jwtDecode(token);
        return { role, id };
    } catch {
        return null;
    }
};
