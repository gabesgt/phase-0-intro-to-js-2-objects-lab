const employee = {
    name: 'Mike',
    streetAddress: '11 Broadway',
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.streetAddress = "12 Broadway";
    return employee;

};
function deleteFromEmployeeByKey (employee, key) {
    const newEmployee = {employee};
    employee[key] = 'Sam';

    return newEmployee;

};
function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key];
    return employee;
}













