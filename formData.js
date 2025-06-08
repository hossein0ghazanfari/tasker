import { formElements } from "./formElemnts.js";
export function formData(form) {
    let ex = [];

    let a = formElements(form);

    for (const item of a) {
        let radiorep = form.elements[item.value].value;
        if (!ex.includes(radiorep)) {
            ex.push(radiorep);
        }
    }

    return ex.some((item) => item === "")
        ? (console.log(" فیلد نمی‌تواند خالی باشد!"), null)
        : ex;
}
