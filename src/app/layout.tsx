'use client';

import './globals.css';
import { ChakraProviders } from '@/components/ChakraProviders';
import { ColorModeScript, Flex } from '@chakra-ui/react';
import theme from '@/theme/theme';
import ColorModeSwitcher from '@/components/ColorModeSwitcher';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      </head>
      <body>
        <ChakraProviders>
          {/* This wraps the whole page and places the toggle in the top-right */}
          <Flex direction="column" minH="100vh">
            <Flex justify="flex-end" p={4}>
              <ColorModeSwitcher />
            </Flex>
            <main style={{ flex: 1 }}>{children}</main>
          </Flex>
        </ChakraProviders>
      </body>
    </html>
  );
}
