// Basic types

// ========== Primitives and Reference ==========

// Reference: [], {}, () ----> Ye lag gaye means parent per changing hogi

// let a = 12; // ----> Primitive
// let b = [1,2,3,4,5]; // ----> Reference

// ========== Tuples ==========

// let arr:[string, number] = ["kaif", 12]; // -----> Tuples
// let array:[number, string, boolean] = [233, "kaif", true];

// =========== Enums ===========

// enum UserRoles {
//   ADMIN = "admin",
//   USER = "user",
//   SUPER_ADMIN = "super_admin",
// }

// const user:string = UserRoles.USER;

// console.log(user);

// ========= Type Inference =========

// let a = 12; -------> Automatic detects the type

// =========== Type Annotations ========

// let a: number = 12;

// =============== Interfaces ===========

// interface User {
//     name: string,
//     email: string,
//     password: string,
//     age: number,
//     gender?: string // optional with ?
// }

// function getObj(obj: User){

//   console.log(obj);

// }

// getObj({name: "kaif", email: "kaif@gmail.com", password: "123", age: 20});

//  =============== Extends ===================

// interface User {
//   name: string;
//   email: string;
//   password: string;
// }

// interface Admin extends User {
//   admin: boolean;
// }

// function showAdmin(admin: Admin) {
//   console.log(admin);
// }

// showAdmin({
//   name: "kaif",
//   email: "kaif@gmail.com",
//   password: "123",
//   admin: true,
// });
