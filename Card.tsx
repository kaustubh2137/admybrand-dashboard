// components/Card.tsx
import { Box, Stat, StatLabel, StatNumber } from '@chakra-ui/react';

interface Props {
  label: string;
  value: string | number;
}
export default function Card({ label, value }: Props) {
  return (
    <Box p="5" shadow="md" borderWidth="1px" borderRadius="md" w="100%">
      <Stat>
        <StatLabel>{label}</StatLabel>
        <StatNumber>{value}</StatNumber>
      </Stat>
    </Box>
  );
}
