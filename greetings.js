
export function sayHello(name, time) {
    let message = "";

    if (time < 12) {
        message = `Good morning, ${name}!`;
    } else if (time < 18) {
        message = `Good afternoon, ${name}!`;
    } else {
        message = `Good evening, ${name}!`;
    }

    return message;
}
