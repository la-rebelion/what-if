import * as React from 'react';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import TwoSidedLayout from './TwoSidedLayout';
import HubSpotForm from './HubSpotForm';

export default function HeroHome() {
  return (
    <TwoSidedLayout reversed>
      <Chip size="lg" variant="outlined" color="neutral">
        What If In Alternative Reality
      </Chip>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        From an anthology standpoint What-If
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        What-If the sci-fi and thriller best seller books teach us how would be the world if things were different.
        Welcome to the ultimate destination for tech professionals seeking to elevate their skills.
      </Typography>
      <HubSpotForm divider={false} />
    </TwoSidedLayout>
  );
}