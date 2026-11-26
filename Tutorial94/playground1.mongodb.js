// Select the database to use.
use("Sigma");

// Insert a few documents into the courses collection.
db.getCollection("courses").insertMany([
  {
    name: "Java",
    Price: 20000,
    Instructor: "Harry",
  },
  {
    name: "Python",
    Price: 18000,
    Instructor: "Aarav",
  },
  {
    name: "JavaScript",
    Price: 15000,
    Instructor: "Priya",
  },
  {
    name: "C++",
    Price: 16000,
    Instructor: "Rohan",
  },
  {
    name: "Web Development",
    Price: 22000,
    Instructor: "Harry",
  },
  {
    name: "Data Science",
    Price: 25000,
    Instructor: "Sneha",
  },
  {
    name: "Machine Learning",
    Price: 28000,
    Instructor: "Vikram",
  },
  {
    name: "React",
    Price: 17000,
    Instructor: "Neha",
  },
  {
    name: "Node.js",
    Price: 17500,
    Instructor: "Kabir",
  },
  {
    name: "MongoDB",
    Price: 14000,
    Instructor: "Ananya",
  },
  {
    name: "SQL",
    Price: 12000,
    Instructor: "Siddharth",
  },
  {
    name: "TypeScript",
    Price: 16500,
    Instructor: "Meera",
  },
  {
    name: "Flutter",
    Price: 21000,
    Instructor: "Arjun",
  },
  {
    name: "DevOps",
    Price: 26000,
    Instructor: "Divya",
  },
  {
    name: "Cybersecurity",
    Price: 24000,
    Instructor: "Rahul",
  },
]);

// Print a message to the output window.
console.log(`done inserting data`);
