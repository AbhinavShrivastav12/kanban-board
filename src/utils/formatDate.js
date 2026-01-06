export const formatDateTime =  (iso) => {
    return new Date(iso).toLocaleString("en-IN",{
        dateStyle: "medium",
        timeStyle: "short"
    });
};