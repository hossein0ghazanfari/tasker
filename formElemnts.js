export function formElements (form) { 
    let element = Array.from(form.elements).filter((el) => el.name);
    let a = element.map((i) => ({ key: i.tagName, value: i.name }));
    console.log(a);
    return a
}
