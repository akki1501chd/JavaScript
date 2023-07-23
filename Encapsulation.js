class Employee{
    setEmpDetails(Name, Id, PhoneNo){
        this.Name = Name;
        this.Id = Id;
        this.PhoneNo = PhoneNo;

    }

    getEmpName(){
        return this.Name
    }
    getEmpId(){
        return this.Id
    }
    getEmpPhoneNo(){
        return this.PhoneNo
    }
}

let emp1 = new Employee();

emp1.setEmpDetails('John', 1001,993949244);

console.log(emp1.getEmpName());
console.log(emp1.getEmpId());
console.log(emp1.getEmpPhoneNo());