export class Employee
{
  employeeid:string;
  name:string;
  address:string;
  phonenumber:string;
   
  constructor(id:string,name:string,address:string,phonenumber:string)
  {
    this.employeeid=id,
    this.name=name,
    this.address=address,
    this.phonenumber=phonenumber
  }

}