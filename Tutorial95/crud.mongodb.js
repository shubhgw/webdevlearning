use("CRUDdb");

// console.log(db)

db.createCollection("courses");
// db.courses.insertOne({
//   name: "Shubhams web dev journey",
//   price: 0,
//   assignments: 12,
//   projects: 45,
// });

// db.courses.insertMany([
//   {
//     name: "Shubhams web dev journey",
//     price: 0,
//     assignments: 12,
//     projects: 45,
//   },
//   {
//     name: "Full Stack JavaScript Bootcamp",
//     price: 1999,
//     assignments: 24,
//     projects: 15,
//   },
//   {
//     name: "Python for Data Science",
//     price: 1499,
//     assignments: 18,
//     projects: 10,
//   },
//   {
//     name: "DSA Mastery in C++",
//     price: 2499,
//     assignments: 50,
//     projects: 5,
//   },
//   {
//     name: "Frontend UI/UX Design Fundamentals",
//     price: 999,
//     assignments: 10,
//     projects: 20,
//   },
//   {
//     name: "Node.js & Express Backend Track",
//     price: 1799,
//     assignments: 16,
//     projects: 12,
//   },
//   {
//     name: "React & Next.js Complete Guide",
//     price: 2199,
//     assignments: 20,
//     projects: 18,
//   },
//   {
//     name: "Linux & DevOps Essentials",
//     price: 0,
//     assignments: 15,
//     projects: 8,
//   },
//   {
//     name: "MongoDB & Database Architecture",
//     price: 1299,
//     assignments: 14,
//     projects: 9,
//   },
//   {
//     name: "Open Source & Git Workflow",
//     price: 0,
//     assignments: 8,
//     projects: 6,
//   },
// ]);

// let withZeroPrice = db.courses.find({ price: 0 });
// console.log(withZeroPrice.count());
// console.log(withZeroPrice.toArray());

db.courses.updateOne({ price: 0 }, { $set: { price: 100 } });
