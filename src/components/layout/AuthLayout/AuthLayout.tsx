import { Box } from '@mui/material';

import { FooterVectors } from '@/components';

import styles from './styles';

import type { PropsWithChildren } from 'react';

const AuthLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.contentWrapper}>{children}</Box>
      <FooterVectors />
    </Box>
  );
};

export default AuthLayout;
