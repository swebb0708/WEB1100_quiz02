class Student{
    constructor(firstName, lastName, id){
        this.firstName = firstName
        this.lastName = lastName
        this.id = id
    }
}


class Assignment{
    constructor(id, url, type, grade){
        this.id = id
        this.url = url 
        this.type = type
        this.grade = grade 
    }
}

class Gradebook{
    constructor(courseCode, courseID, instructor){
        this.courseCode = courseCode;
        this.courseID = courseID;
        this.instructor = instructor;
        this.assignments = [];
    }
}