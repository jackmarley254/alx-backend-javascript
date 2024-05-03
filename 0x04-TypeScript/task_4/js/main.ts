// Constants for subjects
export const cpp: string = "C++";
export const java: string = "Java";
export const react: string = "React";

// Teacher object
export const cTeacher: { experienceTeachingC: number } = {
  experienceTeachingC: 10
};

// Methods for subjects
const getRequirements = (subject: string): string => {
  return `Here are the requirements for ${subject} subjects.`;
};

const getAvailableTeacher = (subject: string, teacher: { experienceTeachingC: number }): string => {
  if (subject === cpp && teacher.experienceTeachingC > 0) {
    return `Available Teacher: ${teacher} has ${teacher.experienceTeachingC} years of experience teaching ${subject}.`;
  } else {
    return `No available teacher for ${subject} at the moment.`;
  }
};

// Print outputs
console.log(cpp);
console.log(getRequirements(cpp));
console.log(getAvailableTeacher(cpp, cTeacher));

console.log(java);
console.log(getRequirements(java));
console.log(getAvailableTeacher(java, cTeacher));

console.log(react);
console.log(getRequirements(react));
console.log(getAvailableTeacher(react, cTeacher));

