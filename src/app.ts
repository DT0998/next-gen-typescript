class Department {
  //   private readonly id: string;
  //   private name: string;
  static fiscalYear = 2020;
  protected employees: string[] = [];
  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    // console.log(Department.fiscalYear);
  }
  static createEmployee(name: string) {
    return { name: name };
  }
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  // getter
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }
  // setter
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReport() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee('Max')
console.log(employee1, Department.fiscalYear);



const it = new ITDepartment("d1", ["Max"]);
it.describe();

it.addEmployee("Max");
it.addEmployee("Manu");
// it.employees[2] = "Anna";
it.name = "NEW NAME";
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment("d2", []);

accounting.mostRecentReport = "Year End Report";
accounting.addReport("Something went wrong...");
console.log(accounting.mostRecentReport);

accounting.addEmployee("Manu");
accounting.addEmployee("Max");

accounting.printReport();
accounting.printEmployeeInformation();
// const accountingCopy = { name: "s", describe: accounting.describe };
// accountingCopy.describe();
