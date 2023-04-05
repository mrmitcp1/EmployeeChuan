export enum Gender {
    MALE,
    FEMALE,
    OTHER
}
export class Employee {
    ID :number
    fullName : string;
    gender : Gender = Gender.OTHER;
    birthDay? : Date;
    email : string;
    phoneNumber : string
    constructor(fullName:string,gender:Gender,birthDay:Date,email:string,phoneNumber:string,ID:number) {
        this.fullName = fullName;
        this.gender = gender;
        this.birthDay = birthDay;
        this.email = email;
        this.phoneNumber = phoneNumber
        this.ID =ID
    }
}
