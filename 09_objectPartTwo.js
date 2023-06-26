var user = {
    firstName : "Firoz",
    lastName : "Uddin",
    role : "Admin",
    loginCount : 45,
    facebookSignedIn : true,
    courseList : [],

    buyCourse : function (courseName) {
        this.courseList.push(courseName);
    },

    getCourseCount : function () {
        return `${this.firstName} ${this.lastName} is enrolled in total of ${this.courseList.length} courses.`;
    },

    getInfo : function () {
        return `${this.firstName}
            ${this.lastName}
            ${this.role}
            ${this.loginCount}
            ${this.facebookSignedIn}
            ${this.courseList}`
    }

};

console.log(user.getCourseCount());
user.buyCourse("React Js Course");
user.buyCourse("Node Js Course");
user.buyCourse("Angular Course");
console.log(user.getCourseCount());
console.log(user.getInfo());

console.table(user);