export const handleError = (err, customMessages = {}) => {
    const defaultMessages = {
        401: "يرجى تسجيل الدخول اولا",
        422: "البيانات المدخلة غير صحيحة",
        500: "خطأ في الخادم، الرجاء المحاولة لاحقاً",
        default: "خطأ غير معروف",
    };

    const messages = { ...defaultMessages, ...customMessages };

    if (err && err.status && messages[err.status]) {
        return messages[err.status];
    }

    return messages.default;
};
