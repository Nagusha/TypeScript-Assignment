class Employee {
    id: number;
    name: string;
    position: string;

    constructor(id: number, name: string, position: string) {
        this.id = id;
        this.name = name;
        this.position = position;
    }

    getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}, Position: ${this.position}`;
    }
}

class Lead extends Employee {
    team: Employee[];

    constructor(id: number,
         name: string,
         position: string) {
        super(id, name, position);
        this.team = [];
    }

    addEmployee(employee: Employee): void {
        this.team.push(employee);
    }

    getTeamDetails(): string {
        return this.team.map(emp => emp.getDetails()).join('\n');
    }
}

const lead = new Lead(2840, "Bhavani", "software");
const emp1 = new Employee(2845, "Karthik", "Business");
const emp2 = new Employee(2849, "Charan", "Designer");

lead.addEmployee(emp1);
lead.addEmployee(emp2);

console.log("Lead Details:");
console.log(lead.getDetails());

console.log("\nTeam Members:");
console.log(lead.getTeamDetails());
