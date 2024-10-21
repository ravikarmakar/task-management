// localStorage.clear();

const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "1234",
    firstname: "Rahul", // Added Indian name
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Finish report",
        description: "Complete the quarterly report for project A.",
        date: "2024-10-20",
        category: "Report",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Team meeting",
        description: "Attend the project kickoff meeting.",
        date: "2024-10-15",
        category: "Meeting",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Submit proposal",
        description: "Submit the project proposal to the client.",
        date: "2024-10-10",
        category: "Proposal",
      },
    ],
    taskNumbers: {
      active: 1, // Counts active tasks
      newTask: 1, // Counts new tasks
      completed: 1, // Counts completed tasks
      failed: 1, // Counts failed tasks
    },
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "1234",
    firstname: "Amit", // Added Indian name
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Fix bugs",
        description: "Resolve bugs in the system before the next release.",
        date: "2024-10-21",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Design meeting",
        description: "Discuss the new app design with the UI/UX team.",
        date: "2024-10-13",
        category: "Meeting",
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "1234",
    firstname: "Sneha", // Added Indian name
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare documentation",
        description: "Write technical documentation for the new feature.",
        date: "2024-10-22",
        category: "Documentation",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Client feedback",
        description: "Incorporate client feedback into the design.",
        date: "2024-10-18",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Code review",
        description: "Complete the code review for team member A.",
        date: "2024-10-14",
        category: "Development",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Deploy to production",
        description: "Deploy the latest build to the production server.",
        date: "2024-10-23",
        category: "Deployment",
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "1234",
    firstname: "Priya", // Added Indian name
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Customer support",
        description: "Assist with customer inquiries via email.",
        date: "2024-10-20",
        category: "Support",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Training session",
        description: "Attend the team training session on new tools.",
        date: "2024-10-17",
        category: "Training",
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "1234",
    firstname: "Vikram", // Added Indian name
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: true,
        title: "Inventory check",
        description: "Conduct an inventory check in the warehouse.",
        date: "2024-10-19",
        category: "Operations",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Product demo",
        description: "Prepare a product demo for the marketing team.",
        date: "2024-10-24",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Presentation",
        description: "Give a presentation to the sales team.",
        date: "2024-10-16",
        category: "Sales",
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 1,
    },
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "1234",
    firstname: "Ravi", // Added Indian name for admin
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
