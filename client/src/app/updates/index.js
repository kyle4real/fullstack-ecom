export const returnErrorHandler = (error) => {
    if (error.response) return error.response.data.error || error.response.data;
    else return error.message;
};
