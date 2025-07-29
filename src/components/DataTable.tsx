// components/DataTable.tsx
'use client';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import type { User } from '@/lib/mockData';

interface Props {
  data?: User[]; // optional or make it required with `data: User[]`
}

export default function DataTable({ data = [] }: Props) {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Role</Th>
          <Th>Status</Th>
          <Th>Date</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((user, idx) => (
          <Tr key={idx}>
            <Td>{user.name}</Td>
            <Td>{user.email}</Td>
            <Td>{user.role}</Td>
            <Td>{user.status}</Td>
            <Td>{user.date}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
