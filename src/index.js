// Reading a file using file object.
const fs = require("fs");
fs.readFile("/sandbox/myTextFile.txt", function(err, data) {
  if (!err) {
    console.log(data.toString());
  } else {
    // log the error
    console.log(err);
    return;
  }
});

// File reading using utf-8 as argument and it not required to use of .toString() for data.
fs.readFile("/sandbox/myTextFile.txt", "utf-8", function(err, data) {
  if (!err) {
    console.log(data);
  } else {
    // log the error
    console.log(err);
    return;
  }
});

// Array methods and its operations...
/*
          const marks = ["english", "maths", "physics"];

          const lenghtOfMark = marks.map(function(m, mi) {
            return m.length;
          });

          console.log(lenghtOfMark);

          // Adding item to the front of the array...
          marks.unshift("Tamil");
          console.log(marks);

          // adding item to the end of the array
          marks.push("Commerce");
          console.log(marks);

          // Add an item to the index of the array...

          marks.splice(2, 0, "Chemistry");
          console.log(marks);

          // Get the subjects which is length more than 6

          const lenOfMarks = marks.filter(function(m, ind) {
            if (m.length > 6) {
              return true;
            }
            return false;
          });

          console.log(lenOfMarks);
          */
/*
// these methods does not modify the original array
    filter
    map
    reduce
    find


// These below methods can be modify the Array
    push
    pop
    slice
    unshift
    splice

*/

/*
const marks = [86, 56, 68, 35, 57];

const newMark = marks.map(function(m, mi) {
  return m + 10;
});

console.log(newMark);
*/

/*
var http = require("http");

//create a server object:
http
  .createServer(function(req, res) {
    res.write("Hello World! This is my first server request..."); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080


  */
