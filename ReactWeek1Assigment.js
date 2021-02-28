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
    }
    const S1 = new Student("John", "j@j.com");
    const S2 = new Student("Molly", "m@m.com");
    const S3 = new Student("Dave", "d@d.com");
    
    registerStudent(newStudent) {
        this.students.map((existingStudent) => {
        console.log(existingStudent);
        if (newStudent.email === existingStudent.email) {
        console.log(
        `Student with email ${newStudent.email} is already registered`
               );
             } else {
               this.students.push(newStudent);
               console.log(`Successfully registered ${newStudent.email}`);
             }
           });
           return this.students;

           const johnsBootcamp = new Bootcamp("John's Bootcamp", "2 - react", [
            s1,
            s2,
            s3,
          ]);
          console.log(johnsBootcamp);
          const s4 = new Student("Brian", "b@b.com", "react");
    
          johnsBootcamp.registerStudent(s4);