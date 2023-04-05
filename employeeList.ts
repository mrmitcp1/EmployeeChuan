import {Employee} from "./empolyee";

export class EmployeeList {
    employeeList : Employee[]=[]
    constructor() {
    }
    add(employee:Employee):void{
        this.employeeList.push(employee)
    }
    findEmployee(ID : number){
        // @ts-ignore
        return this.employeeList.find((employee)=>employee.ID===ID)
    }
    delete(ID:number){
    this.employeeList=this.employeeList.filter((employee)=>employee.ID!==ID)
    }
    getList() : Employee[] {
        return this.employeeList
    }
    upDate(ID:number,newName:string){
        let employee = this.findEmployee(ID);
        if (employee){
            employee.fullName = newName
        }
    }
}