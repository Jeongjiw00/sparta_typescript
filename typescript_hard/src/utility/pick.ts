interface User {
  firstName: string;
  lastName: string;
}

interface Student {
  user: User;
  isGraduated: boolean;
  school: string;
}

type StudentName = Pick<Student, "user" | "isGraduated">;
const studentName: StudentName = {
  user: {
    firstName: "winnie",
    lastName: "pooh",
  },
  isGraduated: true,
};
