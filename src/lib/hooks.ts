export interface Course {
  name: string;
  description: string;
}

export interface Courses {
  courses: Course;
}

export async function getCourses(): Promise<Courses> {
  let courses = await fetch("https://raw.githubusercontent.com/ilaicraftYT/learnstack-content/main/courses_info.json")
  return await courses.json()
}