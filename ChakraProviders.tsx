'use client';

import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/theme/theme'; // adjust relative path

export function ChakraProviders({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
