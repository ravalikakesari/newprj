/*let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
  };
  console.log(user.name);
  console.log(user.age);*/
  let user = {
    name: "John",
    age: 30
  };
  let key = prompt("What do you want to know about the user?", "name");
  
  // access by variable
  console.log( user[key]); // John (if enter "name")