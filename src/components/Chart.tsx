// src/components/Chart.tsx
'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  ResponsiveContainer,
} from 'recharts';

// Define reusable types
export type LineDataType = {
  date: string;
  value: number;
};

export type BarDataType = {
  source: string;
  users: number;
};

export type PieDataType = {
  type: string;
  percent: number;
};

// Define props interfaces
interface LineGraphProps {
  data: LineDataType[];
}

interface BarGraphProps {
  data: BarDataType[];
}

interface PieGraphProps {
  data: PieDataType[];
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export function LineGraph({ data }: LineGraphProps) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function BarGraph({ data }: BarGraphProps) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <XAxis dataKey="source" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="users" fill="#3182CE" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function PieGraph({ data }: PieGraphProps) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie data={data} dataKey="percent" nameKey="type" outerRadius={100} label>
          {data.map((_, i) => (
            <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length] || '#ccc'} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
