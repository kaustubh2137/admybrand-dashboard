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
  ResponsiveContainer
} from 'recharts';

type LineDataType = {
  date: string;
  value: number;
};

type BarDataType = {
  source: string;
  users: number;
};

type PieDataType = {
  type: string;
  percent: number;
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export function LineGraph({ data }: { data: LineDataType[] }) {
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

export function BarGraph({ data }: { data: BarDataType[] }) {
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

export function PieGraph({ data }: { data: PieDataType[] }) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie data={data} dataKey="percent" nameKey="type" outerRadius={100} label>
          {data.map((_, i) => (
            <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
