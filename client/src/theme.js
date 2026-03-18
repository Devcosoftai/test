import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    bg: '#0a0a0f',
    bg2: '#101018',
    surface: 'rgba(20, 20, 30, 0.75)',
    cyan: '#e2e8f0',
    green: '#34d399',
    purple: '#a78bfa',
    amber: '#fbbf24',
    rose: '#fb7185',
    text: '#f8fafc',
    muted: '#94a3b8',
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'md',
        fontWeight: 'semibold',
      },
      variants: {
        primary: {
          bgGradient: 'linear(to-r, cyan.500, green.400, purple.500)',
          color: 'gray.900',
          _hover: {
            bgGradient: 'linear(to-r, cyan.400, green.300, purple.400)',
          },
        },
        outline: {
          borderColor: 'whiteAlpha.400',
          color: 'white',
          _hover: {
            bg: 'whiteAlpha.200',
          },
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'bg',
        color: 'text',
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
      },
    },
  },
});

export default theme;

