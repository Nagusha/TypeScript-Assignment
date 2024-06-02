type RecursiveObject = {
    [key: string]: string | RecursiveObject;
};

function flattenObject(obj: RecursiveObject, result: string[] = []): string[] {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if (typeof value === 'string') {
                result.push(`${key}: ${value}`);
            } else {
                flattenObject(value, result);
            }
        }
    }
    return result;
}

function objectToString(obj: RecursiveObject): string {
    const flattenedArray = flattenObject(obj);
    return flattenedArray.join(', ');
}

const input = {
    name: "Nagu",
    email: "Nagu@gmail.com",
    address: {
        city: "Hanumankonda",
        state: "Telangana"
    }
};

const output = objectToString(input);
console.log(output);  
