let username =prompt("enter the name");
let companyname =prompt("enter the companyname");
let lpa =prompt("enter the package");
let domain =prompt("enter the domain");
let date =prompt("enter the joining date")

let obj={
    name:username,
    company:companyname,
    package:lpa,
    designation:domain,
    joiningdate:date,
}
console.log(`${obj.name} got placed in ${obj.company} as a ${obj.designation} with ${obj.package} and joining date on ${obj.joiningdate} `)