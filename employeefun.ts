class Employees {
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

class Leads extends Employees {
    team: Employees[];

    constructor(id: number, name: string, position: string) {
        super(id, name, position);
        this.team = [];
    }

    addEmployee(employee: Employees): void {
        this.team.push(employee);
    }

    getTeamDetails(): string {
        return this.team.map(empl => empl.getDetails()).join('\n');
    }
}


function printLeadStatus(employees: Employees[]): void {
    employees.forEach(employee => {
        if (employee instanceof Leads) {
            console.log(`${employee.name} is a Leads`);
        } else {
            console.log(`${employee.name} is not a Leads`);
        }
    });
}


const leads1 = new Leads(2840, "Bhavani", "Team Leads");
const leads2 = new Leads(2841, "Karthik", "Senior Team Leads");

const empl1 = new Employees(2843, "Charan", "Developer");
const empl2 = new Employees(2844, "Shiva", "Designer");

leads1.addEmployee(empl1);
leads2.addEmployee(empl2);


const employees: Employees[] = [leads1, empl1, leads2, empl2];

printLeadStatus(employees);
