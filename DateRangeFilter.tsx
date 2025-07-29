'use client';

import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  onFilter: (range: { startDate: Date | null; endDate: Date | null }) => void;
}

export default function DateRangeFilter({ onFilter }: Props) {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleApply = () => {
    onFilter({ startDate, endDate });
  };

  return (
    <Flex gap={4} align="center" wrap="wrap" mb={4}>
      <Box>
        <Text fontSize="sm" mb={1}>Start Date</Text>
        <DatePicker
          selected={startDate ?? undefined}
          onChange={date => setStartDate(date)}
          selectsStart
          startDate={startDate ?? undefined}
          endDate={endDate ?? undefined}
          placeholderText="Select start date"
        />
      </Box>
      <Box>
        <Text fontSize="sm" mb={1}>End Date</Text>
        <DatePicker
          selected={endDate ?? undefined}
          onChange={date => setEndDate(date)}
          selectsEnd
          startDate={startDate ?? undefined}
          endDate={endDate ?? undefined}
          minDate={startDate ?? undefined}
          placeholderText="Select end date"
        />
      </Box>
      <Button onClick={handleApply} colorScheme="teal" mt={5}>
        Apply
      </Button>
    </Flex>
  );
}
