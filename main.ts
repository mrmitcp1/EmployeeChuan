import {Employee, Gender} from "./empolyee";
import {EmployeeList} from "./employeeList";

let employee1=new Employee('asas',Gender.MALE,new Date('20.03.1994'),'rrrrrr','3434',1)
let employee2=new Employee('afff',Gender.FEMALE,new Date('22.04.1933'),'rvwef','33111',2)
let employee3=new Employee('verg',Gender.OTHER,new Date('12.11.1992'),'23fdf','32218',3)
let employeeList = new EmployeeList()
employeeList.add(employee1)
employeeList.add(employee2)
employeeList.add(employee3)
// employeeList.delete(1)
employeeList.upDate(1,'oantalavan')
console.log(employeeList.getList())