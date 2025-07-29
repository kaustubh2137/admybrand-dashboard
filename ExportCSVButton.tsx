'use client';

import { Button } from '@chakra-ui/react';
import { analyticsData } from '@/mock/dashboardData';

export default function ExportCSVButton() {
  const handleExport = () => {
    const csvRows = [
      Object.keys(analyticsData[0]).join(','), // headers
      ...analyticsData.map(row => Object.values(row).join(',')), // values
    ];

    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'analytics_data.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <Button colorScheme="blue" onClick={handleExport}>
      Export CSV
    </Button>
  );
}
