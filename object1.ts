function concatKeysAndValues(obj: { [key: string]: string }): string {
    let result = '';
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (result !== '') {
                result += ', ';
            }
            result += `${key}: ${obj[key]}`;
        }
    }
    return result;
}

const InputObj = {
    name: "nagu",
    email: "nagu@gmail.com"
};

const Output = concatKeysAndValues(InputObj);
console.log(Output); 