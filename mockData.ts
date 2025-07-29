// lib/mockData.ts
export const metrics = {
  revenue: "$12,345",
  users: 850,
  conversions: 412,
  growth: "12.5%",
};

export const chartData = {
  line: [
    { date: "Jan", value: 1200 },
    { date: "Feb", value: 1900 },
    { date: "Mar", value: 1500 },
    { date: "Apr", value: 2200 },
  ],
  bar: [
    { source: "Facebook", users: 300 },
    { source: "Google", users: 500 },
    { source: "Email", users: 150 },
  ],
  pie: [
    { type: "Purchase", percent: 40 },
    { type: "Signup", percent: 30 },
    { type: "Bounce", percent: 30 },
  ],
};
export interface User {
  name: string;
  email: string;
  role: string;
  status: string;
  date: string; // ISO string (yyyy-mm-dd)
}
export const userTableData: User[] = [
  {
    name: 'Alice',
    email: 'alice@example.com',
    role: 'Admin',
    status: 'Active',
    date: '2024-07-01',
  },
  {
    name: 'Bob',
    email: 'bob@example.com',
    role: 'User',
    status: 'Inactive',
    date: '2024-07-15',
  },
  // more...
];
