// src/data/students.ts

export type Course = {
  id: string;
  title: string;
  duration: string;
  category: string; // VD: Programming, Design, Math, Business, Science
};

export type Student = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  courses: Course[];
};

export const students: Student[] = [
  {
    id: "1",
    name: "Nguyen Van A",
    email: "a.nguyen@example.com",
    avatar: "https://i.pravatar.cc/150?img=1",
    courses: [
      { id: "c1", title: "React Native Basics", duration: "3 months", category: "Programming" },
      { id: "c2", title: "Advanced JavaScript", duration: "2 months", category: "Programming" },
      { id: "c3", title: "UI/UX Design Principles", duration: "1.5 months", category: "Design" },
    ],
  },
  {
    id: "2",
    name: "Tran Thi B",
    email: "b.tran@example.com",
    avatar: "https://i.pravatar.cc/150?img=2",
    courses: [
      { id: "c4", title: "Python for Beginners", duration: "3 months", category: "Programming" },
      { id: "c5", title: "Linear Algebra", duration: "4 months", category: "Math" },
      { id: "c6", title: "Graphic Design Tools", duration: "2 months", category: "Design" },
    ],
  },
  {
    id: "3",
    name: "Le Van C",
    email: "c.le@example.com",
    avatar: "https://i.pravatar.cc/150?img=3",
    courses: [
      { id: "c7", title: "Data Structures", duration: "3 months", category: "Programming" },
      { id: "c8", title: "Calculus I", duration: "5 months", category: "Math" },
      { id: "c9", title: "Figma for Beginners", duration: "1 month", category: "Design" },
    ],
  },
  {
    id: "4",
    name: "Pham Van D",
    email: "d.pham@example.com",
    avatar: "https://i.pravatar.cc/150?img=4",
    courses: [
      { id: "c10", title: "Business Management 101", duration: "6 months", category: "Business" },
      { id: "c11", title: "Marketing Fundamentals", duration: "3 months", category: "Business" },
      { id: "c12", title: "Statistics for Data Science", duration: "4 months", category: "Math" },
    ],
  },
  {
    id: "5",
    name: "Do Thi E",
    email: "e.do@example.com",
    avatar: "https://i.pravatar.cc/150?img=5",
    courses: [
      { id: "c13", title: "Introduction to Machine Learning", duration: "5 months", category: "Programming" },
      { id: "c14", title: "Probability Theory", duration: "4 months", category: "Math" },
      { id: "c15", title: "Photoshop Essentials", duration: "2 months", category: "Design" },
    ],
  },
  {
    id: "6",
    name: "Nguyen Van F",
    email: "f.nguyen@example.com",
    avatar: "https://i.pravatar.cc/150?img=6",
    courses: [
      { id: "c16", title: "Physics I", duration: "5 months", category: "Science" },
      { id: "c17", title: "Chemistry Basics", duration: "3 months", category: "Science" },
      { id: "c18", title: "HTML & CSS Fundamentals", duration: "2 months", category: "Programming" },
    ],
  },
  {
    id: "7",
    name: "Tran Van G",
    email: "g.tran@example.com",
    avatar: "https://i.pravatar.cc/150?img=7",
    courses: [
      { id: "c19", title: "iOS Development with Swift", duration: "4 months", category: "Programming" },
      { id: "c20", title: "Algebra II", duration: "3 months", category: "Math" },
      { id: "c21", title: "Adobe Illustrator Basics", duration: "2 months", category: "Design" },
    ],
  },
  {
    id: "8",
    name: "Hoang Thi H",
    email: "h.hoang@example.com",
    avatar: "https://i.pravatar.cc/150?img=8",
    courses: [
      { id: "c22", title: "Project Management", duration: "6 months", category: "Business" },
      { id: "c23", title: "Business Analytics", duration: "5 months", category: "Business" },
      { id: "c24", title: "Advanced Statistics", duration: "4 months", category: "Math" },
    ],
  },
  {
    id: "9",
    name: "Nguyen Van I",
    email: "i.nguyen@example.com",
    avatar: "https://i.pravatar.cc/150?img=9",
    courses: [
      { id: "c25", title: "Java Programming", duration: "4 months", category: "Programming" },
      { id: "c26", title: "Operating Systems", duration: "5 months", category: "Programming" },
      { id: "c27", title: "Discrete Mathematics", duration: "3 months", category: "Math" },
    ],
  },
  {
    id: "10",
    name: "Pham Thi J",
    email: "j.pham@example.com",
    avatar: "https://i.pravatar.cc/150?img=10",
    courses: [
      { id: "c28", title: "Entrepreneurship Basics", duration: "3 months", category: "Business" },
      { id: "c29", title: "Digital Marketing", duration: "2 months", category: "Business" },
      { id: "c30", title: "Presentation Skills", duration: "1 month", category: "Design" },
    ],
  },
  {
    id: "11",
    name: "Nguyen Van K",
    email: "k.nguyen@example.com",
    avatar: "https://i.pravatar.cc/150?img=11",
    courses: [
      { id: "c31", title: "Cloud Computing Basics", duration: "4 months", category: "Programming" },
      { id: "c32", title: "Database Systems", duration: "3 months", category: "Programming" },
      { id: "c33", title: "Business Law", duration: "5 months", category: "Business" },
    ],
  },
  {
    id: "12",
    name: "Tran Thi L",
    email: "l.tran@example.com",
    avatar: "https://i.pravatar.cc/150?img=12",
    courses: [
      { id: "c34", title: "Digital Illustration", duration: "2 months", category: "Design" },
      { id: "c35", title: "Creative Writing", duration: "3 months", category: "Design" },
      { id: "c36", title: "Linear Regression", duration: "2 months", category: "Math" },
    ],
  },
  {
    id: "13",
    name: "Le Van M",
    email: "m.le@example.com",
    avatar: "https://i.pravatar.cc/150?img=13",
    courses: [
      { id: "c37", title: "C++ Programming", duration: "4 months", category: "Programming" },
      { id: "c38", title: "Algorithms", duration: "5 months", category: "Programming" },
      { id: "c39", title: "Project Finance", duration: "3 months", category: "Business" },
    ],
  },
  {
    id: "14",
    name: "Pham Van N",
    email: "n.pham@example.com",
    avatar: "https://i.pravatar.cc/150?img=14",
    courses: [
      { id: "c40", title: "Environmental Science", duration: "5 months", category: "Science" },
      { id: "c41", title: "Sustainable Development", duration: "3 months", category: "Science" },
      { id: "c42", title: "Ethics in Business", duration: "2 months", category: "Business" },
    ],
  },
  {
    id: "15",
    name: "Nguyen Thi O",
    email: "o.nguyen@example.com",
    avatar: "https://i.pravatar.cc/150?img=15",
    courses: [
      { id: "c43", title: "SQL Fundamentals", duration: "2 months", category: "Programming" },
      { id: "c44", title: "Data Visualization", duration: "3 months", category: "Design" },
      { id: "c45", title: "Statistics II", duration: "4 months", category: "Math" },
    ],
  },
  {
    id: "16",
    name: "Do Van P",
    email: "p.do@example.com",
    avatar: "https://i.pravatar.cc/150?img=16",
    courses: [
      { id: "c46", title: "Deep Learning", duration: "6 months", category: "Programming" },
      { id: "c47", title: "Neural Networks", duration: "5 months", category: "Programming" },
      { id: "c48", title: "Big Data Analytics", duration: "4 months", category: "Business" },
    ],
  },
  {
    id: "17",
    name: "Tran Van Q",
    email: "q.tran@example.com",
    avatar: "https://i.pravatar.cc/150?img=17",
    courses: [
      { id: "c49", title: "Mobile App Design", duration: "2 months", category: "Design" },
      { id: "c50", title: "Advanced UX Research", duration: "3 months", category: "Design" },
      { id: "c51", title: "Startup Finance", duration: "3 months", category: "Business" },
    ],
  },
  {
    id: "18",
    name: "Le Thi R",
    email: "r.le@example.com",
    avatar: "https://i.pravatar.cc/150?img=18",
    courses: [
      { id: "c52", title: "Organic Chemistry", duration: "5 months", category: "Science" },
      { id: "c53", title: "Molecular Biology", duration: "6 months", category: "Science" },
      { id: "c54", title: "Genetics", duration: "4 months", category: "Science" },
    ],
  },
  {
    id: "19",
    name: "Pham Thi S",
    email: "s.pham@example.com",
    avatar: "https://i.pravatar.cc/150?img=19",
    courses: [
      { id: "c55", title: "Web Development Bootcamp", duration: "6 months", category: "Programming" },
      { id: "c56", title: "Agile Methodologies", duration: "2 months", category: "Business" },
      { id: "c57", title: "UI Prototyping with Figma", duration: "2 months", category: "Design" },
    ],
  },
  {
    id: "20",
    name: "Nguyen Van T",
    email: "t.nguyen@example.com",
    avatar: "https://i.pravatar.cc/150?img=20",
    courses: [
      { id: "c58", title: "Cybersecurity Basics", duration: "4 months", category: "Programming" },
      { id: "c59", title: "Network Fundamentals", duration: "3 months", category: "Programming" },
      { id: "c60", title: "Critical Thinking", duration: "2 months", category: "Business" },
    ],
  },
];
