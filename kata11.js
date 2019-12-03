//FUNCTION IMPLEMENTATION
const organizeInstructors = function(instructors) {
  let result = {};
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i]['course'] === instructors[i + 1]['course']) {
      let newKey = instructors[i]['name'];
      let count = 0;
      result[newKey] = [];

      count += 1;
    }
  }
  return result;
};


// TESTING
console.log(organizeInstructors([{
    name: "Samuel",
    course: "iOS"
  },
  {
    name: "Victoria",
    course: "Web"
  },
  {
    name: "Karim",
    course: "Web"
  },
  {
    name: "Donald",
    course: "Web"
  }
]));

console.log(organizeInstructors([{
    name: "Brendan",
    course: "Blockchain"
  },
  {
    name: "David",
    course: "Web"
  },
  {
    name: "Martha",
    course: "iOS"
  },
  {
    name: "Carlos",
    course: "Web"
  }
]));


// EXPECTED OUPUT
//   {
//     iOS: ["Samuel"],
//     Web: ["Victoria", "Karim", "Donald"]
//   }
//   {
//     Blockchain: ["Brendan"],
//     Web: ["David", "Carlos"],
//     iOS: ["Martha"]
//   }