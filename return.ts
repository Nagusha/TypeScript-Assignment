const Lalitha = ["nagu", "abc"];
const number = [1, 2, 3];


type a = typeof Lalitha[number]

const a = 10;
const b = a === 10 ? true : false

type IsString<GivenType> = GivenType extends string ? GivenType[number] : GivenType

type Test1 = IsString<typeof Lalitha>; 
type Test2 = IsString<typeof number>; 
type Test3 = IsString<boolean>; 
type Test4 = IsString<any>; 


function checkType<GivenType>(input: GivenType): "yes" | "no" {
    return typeof input === "string" ? "yes" : "no";
}
console.log(checkType(Lalitha));
console.log(checkType(45));
console.log(checkType(true));
console.log(checkType({}));



