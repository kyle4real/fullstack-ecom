export const onVariantEdit = (prevState, e, product) => {
    const value = Number(e.target.value);
    const [id, name] = e.target.name.split("-");
    if (prevState === null) return { [id]: { [name]: value } };
    if (prevState.hasOwnProperty(id)) {
        if (prevState[id].hasOwnProperty(name)) {
            const initialValue = product.variants.find((item) => item._id === id)[name];
            if (value !== initialValue) {
                return { ...prevState, [id]: { ...prevState[id], [name]: value } };
            } else {
                const prevStateProductCpy = { ...prevState[id] };
                delete prevStateProductCpy[name];
                if (!Object.keys(prevStateProductCpy).length) {
                    const prevStateCpy = { ...prevState };
                    delete prevStateCpy[id];
                    if (!Object.keys(prevStateCpy).length) return null;
                    else return prevStateCpy;
                } else {
                    return { ...prevState, [id]: prevStateProductCpy };
                }
            }
        } else {
            return { ...prevState, [id]: { ...prevState[id], [name]: value } };
        }
    } else {
        return { ...prevState, [id]: { [name]: value } };
    }
};

export const onProductEdit = (prevState, { target: { name, value } }, product) => {
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