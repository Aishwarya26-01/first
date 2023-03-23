let myobj={
    name:"Aishwarya",
    age:24
}
//to get the object in a string format
let myobj_serialised=JSON.stringify(myobj);
localStorage.setItem("myobj",myobj_serialised);
//to get object in object format 
let myobj_deserialised=JSON.parse(localStorage.getItem("myobj"));
console.log(myobj_deserialised);