export const onCollectionEdit = (prevState, { target: { name, value } }, product) => {
    if (prevState === null) return { [name]: value };
    if (prevState.hasOwnProperty(name)) {
        const initialValue = product[name];
        if (value !== initialValue) {
            return { ...prevState, [name]: value };
        } else {
            const prevStateCpy = { ...prevState };
            delete prevStateCpy[name];
            if (!Object.keys(prevStateCpy).length) return null;
            else return prevStateCpy;
        }
    } else {
        return { ...prevState, [name]: value };
    }
};
