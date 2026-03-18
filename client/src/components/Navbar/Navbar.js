import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { 
  Flex, 
  Box, 
  Button, 
  IconButton, 
  CloseButton,
  useColorModeValue,
  useDisclosure 
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const NAV_ITEMS = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        bg="rgba(10, 10, 15, 0.95)"
        backdropFilter="blur(20px)"
        borderBottomWidth={1}
        borderBottomColor="transparent"
        transition="all 0.35s ease"
        boxShadow={scrolled ? "0 4px 30px rgba(0,0,0,0.5)" : "none"}
        py={scrolled ? 3 : 4}
        px="5vw"
      >
        <Flex align="center" justify="space-between">
          {/* Logo */}
          <Link to="/" onClick={onClose} fontFamily="heading" fontSize="xl" fontWeight="extrabold" color="white">
            DevCo<span style={{ background: 'linear-gradient(135deg, #e2e8f0, #34d399, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Soft</span>.ai
          </Link>

          {/* Desktop Links */}
          <Flex display={{ base: 'none', lg: 'flex' }} align="center" gap="10">
            {NAV_ITEMS.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                color="gray.400"
                fontSize="sm"
                fontWeight="medium"
                _hover={{ color: 'white' }}
                _activeLink={{ color: 'cyan.400' }}
                px={3}
              >
                {label}
              </NavLink>
            ))}
          </Flex>

          {/* Desktop CTA */}
          <Button
            as={Link}
            to="/contact"
            display={{ base: 'none', lg: 'flex' }}
            variant="outline"
            color="cyan.400"
            borderColor="green.400"
            _hover={{ bgGradient: 'linear(to-r, cyan.500, green.400)', color: 'gray.900' }}
          >
            Get Started →
          </Button>

          {/* Mobile Hamburger */}
          <IconButton
            display={{ base: 'flex', lg: 'none' }}
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            color="white"
            onClick={onToggle}
            aria-label="Toggle navigation"
          />
        </Flex>
      </Box>

      {isOpen && (
        <Box
          position="fixed"
          inset={0}
          zIndex={999}
          bg="rgba(10, 10, 15, 0.98)"
          backdropFilter="blur(30px)"
          display="flex"
          flexDir="column"
          align="center"
          justify="center"
          gap="10"
        >
          <CloseButton position="absolute" top="6" right="8" color="white" size="lg" onClick={onClose} />
          {NAV_ITEMS.map(({ label, path }) => (
            <Link key={path} to={path} onClick={onClose} fontSize="4xl" fontWeight="bold" color="white" _hover={{ color: 'cyan.400' }}>
              {label}
            </Link>
          ))}
          <Button
            as={Link}
            to="/contact"
            variant="solid"
            colorScheme="green"
            size="lg"
            onClick={onClose}
          >
            Get Free Consultation
          </Button>
        </Box>
      )}
    </>
  );
};

      {isOpen && (
        <Box
          position="fixed"
          inset={0}
          zIndex={999}
          bg="rgba(10, 10, 15, 0.98)"
          backdropFilter="blur(30px)"
          display="flex"
          flexDir="column"
          align="center"
          justify="center"
          gap="10"
        >
          <CloseButton position="absolute" top="6" right="8" color="white" size="lg" onClick={onClose} />
          {NAV_ITEMS.map(({ label, path }) => (
            <Link key={path} to={path} onClick={onClose} fontSize="4xl" fontWeight="bold" color="white" _hover={{ color: 'cyan.400' }}>
              {label}
            </Link>
          ))}
          <Button
            as={Link}
            to="/contact"
            variant="solid"
            colorScheme="green"
            size="lg"
            onClick={onClose}
          >
            Get Free Consultation
          </Button>
        </Box>
      )}
    </>
  );
};

export default Navbar;
