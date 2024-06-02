type OriginalType = {
    id: number;
    name: string;
    age?: number;
    email?: string;
    isActive: boolean;
  };
  
  type RequiredType = {
    [P in keyof OriginalType]-?: OriginalType[P];
  };
  
  function printRequiredType(obj: RequiredType) {
    console.log(obj);
  }
  
  const example: RequiredType = {
    id: 2840,
    name: "Nagulu",
    age: 22,
    email: "nagu@gmail.com",
    isActive: true,
  
  };
  
  printRequiredType(example);
  
