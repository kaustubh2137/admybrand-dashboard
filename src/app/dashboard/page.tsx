'use client';

import { useState, useEffect } from 'react';
import {
  Box, Grid, Heading, Flex, Skeleton, SkeletonText,
  Input, Select, Button
} from '@chakra-ui/react';
import Card from '@/components/Card';
import { LineGraph, BarGraph, PieGraph } from '@/components/Chart';
import DataTable from '@/components/DataTable';
import ExportCSVButton from '@/components/ExportCSVButton';
import ExportPDFButton from '@/components/ExportPDFButton';
import { chartData, userTableData } from '@/lib/mockData';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [metrics, setMetrics] = useState({
    revenue: '$75,000',
    users: '8,200',
    conversions: '1,245',
    growth: '12.5%',
  });

  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filteredData, setFilteredData] = useState(userTableData);

  // simulate loading and real-time updates
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    const interval = setInterval(() => {
      setMetrics({
        revenue: `$${(Math.random() * 100000).toFixed(0)}`,
        users: (Math.random() * 10000).toFixed(0),
        conversions: (Math.random() * 1500).toFixed(0),
        growth: `${(Math.random() * 15).toFixed(2)}%`,
      });
    }, 5000);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const lower = (s: string) => s.toLowerCase();

    const filtered = userTableData.filter((user) => {
      const matchesSearch =
        lower(user.name).includes(lower(search)) ||
        lower(user.email).includes(lower(search));

      const matchesRole = roleFilter ? user.role === roleFilter : true;
      const matchesStatus = statusFilter ? user.status === statusFilter : true;

      const matchesDate =
        (!startDate || new Date(user.date) >= new Date(startDate)) &&
        (!endDate || new Date(user.date) <= new Date(endDate));

      return matchesSearch && matchesRole && matchesStatus && matchesDate;
    });

    setFilteredData(filtered);
  }, [search, roleFilter, statusFilter, startDate, endDate]);

  return (
    <Box p={8}>
      <Heading mb={6}>ADmyBRAND Insights</Heading>

      {/* Metrics */}
      <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6} mb={10}>
        {loading ? (
          Array(4).fill(0).map((_, i) => (
            <Skeleton key={i} height="100px" borderRadius="md" />
          ))
        ) : (
          <>
            <Card label="Revenue" value={metrics.revenue} />
            <Card label="Users" value={metrics.users} />
            <Card label="Conversions" value={metrics.conversions} />
            <Card label="Growth" value={metrics.growth} />
          </>
        )}
      </Grid>

      {/* Charts */}
      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={10}>
        {loading ? (
          Array(3).fill(0).map((_, i) => (
            <Skeleton key={i} height="250px" borderRadius="md" />
          ))
        ) : (
          <>
            <LineGraph data={chartData.line} />
            <BarGraph data={chartData.bar} />
            <PieGraph data={chartData.pie} />
          </>
        )}
      </Grid>

      {/* Table & Filters */}
      <Box mt={10}>
        <Flex justify="space-between" align="center" mb={4}>
          <Heading size="md">User Table</Heading>
          {!loading && (
            <Flex gap={2}>
              <ExportCSVButton />
              <ExportPDFButton />
            </Flex>
          )}
        </Flex>

        {/* Filters */}
        <Flex flexWrap="wrap" gap={4} mb={4}>
          <Input
            placeholder="Search name/email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            maxW="200px"
          />
          <Select
            placeholder="Filter by role"
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            maxW="200px"
          >
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="User">User</option>
          </Select>
          <Select
            placeholder="Filter by status"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            maxW="200px"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </Select>
          <Box>
  <DatePicker
    selected={startDate ? new Date(startDate) : null}
    onChange={(date) => setStartDate(date ? date.toISOString().split('T')[0] : '')}
    placeholderText="Start Date"
    dateFormat="yyyy-MM-dd"
  />
</Box>

<Box>
  <DatePicker
    selected={endDate ? new Date(endDate) : null}
    onChange={(date) => setEndDate(date ? date.toISOString().split('T')[0] : '')}
    placeholderText="End Date"
    dateFormat="yyyy-MM-dd"
    minDate={startDate ? new Date(startDate) : undefined}
  />
</Box>

          <Button onClick={() => {
            setSearch('');
            setRoleFilter('');
            setStatusFilter('');
            setStartDate('');
            setEndDate('');
          }}>
            Clear Filters
          </Button>
        </Flex>

        {loading ? (
          <Box borderWidth="1px" borderRadius="md" p={4}>
            <SkeletonText mt="4" noOfLines={8} spacing="4" />
          </Box>
        ) : (
          <DataTable data={filteredData} />
        )}
      </Box>
    </Box>
  );
}
