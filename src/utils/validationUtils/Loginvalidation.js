export const validateUsername = (username) => {
    if (!username) {
        return { isValid: false, errorMessage: "اسم المستخدم مطلوب!" };
    }
    return { isValid: true, errorMessage: "" };
};

export const validatePassword = (password) => {
    if (!password) {
        return { isValid: false, errorMessage: "كلمة المرور مطلوبة!" };
    }
    return { isValid: true, errorMessage: "" };
};

export const validateLoginForm = (fields) => {
    let isFormValid = true;
    const validationResults = {};

    for (const field in fields) {
        const { value, validator } = fields[field];
        const { isValid, errorMessage } = validator(value);
        validationResults[field] = { isValid, errorMessage };
        if (!isValid) {
            isFormValid = false;
        }
    }

    return { isFormValid, validationResults };
};
