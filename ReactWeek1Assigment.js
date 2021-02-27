class Student {
counstructor(name, email, community) {
this.name = name;
this.email = email;
this.community = community;
    }
}
class Bootcamp {
constructor(name, level, students = []) {
    this.name = name;
    this.level = level;
    this.students = students;
    }
const S1 = new Student("John", "j@j.com", )

registerStudent(student) = this.students.map(s => {
if (student.email === s.email)
{
    console.log(`Unable to register ${this.student}`)
}else {
    this.students.push(student)
    console.log(`Successfully registered ${this.student}`);
    }
})
}

