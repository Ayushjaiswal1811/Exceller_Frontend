var Status;
(function (Status) {
    Status["PENDING"] = "pending";
    Status["DOING"] = "Doing";
    Status["COMPLETED"] = "Completed";
})(Status || (Status = {}));
function isStatus(status) {
    return Object.values(Status).includes(status);
}
console.log(isStatus('pending'));
//primitive data
var username = 'rahul';
var age = 23;
var isAdmin = true;
//Array and tuple
var numbers = [1, 2, 3];
var user = ["Rishi", 22];
var useState = [1, function () { return console.log("user name.....state"); }];
//Any,Unknown,void,never
var data;
var value;
function log() { }
{
    console.log("Void Function.....");
}
;
data = 10;
data = 'name';
data = true;
console.log(data);
value = 10;
value = 'name';
console.log(value);
function count(value) {
    return value;
}
function countStr(value) {
    return 'ababab';
}
function crash() {
    throw new Error("boom");
}
// crash()
var city = 'dff';
var id;
id = 123;
var strLen = id.length;
console.log(strLen);
console.log(String(id).length);
