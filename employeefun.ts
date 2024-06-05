const employees = [
    {
      name: "Srivani",
      id: 2840,
      lead: {
        name: "Bhavani",
        age: 30,
      },
    },
    {
      name: "Manisha",
      id: 2841,
      lead: {
        name: "Keerthana",
        id: 2842,
        lead: {
          name: "Sai meghana",
          id: 2843,
        },
      },
    },
  ];
  
  function isLead(employeeName: string, employees: any[]): boolean {
    for (const emp of employees) {
      if (emp.lead && emp.lead.name === employeeName) {
        return true;
      }
      if (emp.lead && isLead(employeeName, [emp.lead])) {
        return true;
      }
    }
    return false;
  }
  
  const testEmployees = ["Srivani", "Bhavani", "Manisha", "Keerthana", "Sai meghana"];
  
  testEmployees.forEach(emp => {
    console.log(`Is ${emp} a lead? ${isLead(emp, employees)}`);
  });

