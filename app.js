"use strict";
// Basic types
// ========== Primitives and Reference ==========
// Reference: [], {}, () ----> Ye lag gaye means parent per changing hogi
// let a = 12; // ----> Primitive
// let b = [1,2,3,4,5]; // ----> Reference
// ========== Tuples ==========
// let arr:[string, number] = ["kaif", 12]; // -----> Tuples
// let array:[number, string, boolean] = [233, "kaif", true];
// =========== Enums ===========
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["USER"] = "user";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
const user = UserRoles.USER;
console.log(user);
