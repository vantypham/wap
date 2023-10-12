/**
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == 'rockstar') ok();
    else fail();
}

let user = {
    name: 'John',

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    },
};
//askPassword(user.loginOk, user.loginFail);
askPassword(()=>user.loginOk.call(user), ()=>user.loginFail.call(user));
*/
/** Question 2 */
let group = {
    title: "Our Group",
    students: [
        "John", "Peter", "Alice"
    ],

    showList: function() {
        this.students.forEach(
            helper.bind(group) //bind to group object
        );
    }
};
//helper method
let helper = function(student) {
    console.log(this.title + ":" + student);
};
group.showList();
