const instructorWithLongestName = function(instructors) {
  var longest = instructors[0];
  for (i = 1; i < instructors.length; i++) {
    if (longest.name.length < instructors[i].name.length) {
      longest = instructors[i];
    } else if (longest.name.length < instructors[i].name.length) {
      longest = longest;
    }
  }
  return longest;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" }
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" }
  ])
);
