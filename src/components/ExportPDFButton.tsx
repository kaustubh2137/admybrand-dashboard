'use client';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Button } from '@chakra-ui/react';
import { userTableData } from '@/lib/mockData';

export default function ExportPDFButton() {
  const handleExportPDF = () => {
    const doc = new jsPDF();

    doc.text('User Data Export', 14, 16);

    const tableData = userTableData.map(user => [
      user.name,
      user.email,
      user.role,
      user.status,
    ]);

    autoTable(doc, {
      head: [['Name', 'Email', 'Role', 'Status']],
      body: tableData,
      startY: 24,
    });

    doc.save('user-data.pdf');
  };

  return (
    <Button onClick={handleExportPDF} colorScheme="red" variant="outline">
      Export PDF
    </Button>
  );
}
