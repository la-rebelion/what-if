import * as React from 'react';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import TwoSidedLayout from './TwoSidedLayout';
import { Button, Link, Stack } from '@mui/joy';

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
        From an anthology standpoint What-If.
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        What-If the sci-fi and thriller best seller books teach us how would be the world if things were different.
        Welcome to the ultimate destination for tech professionals seeking to elevate their skills.
      </Typography>
      <Box
        component="form"
        sx={{
          display: 'flex',
          gap: 1,
          my: 2,
          alignSelf: 'stretch',
          flexBasis: '80%',
          flexDirection: 'column',
        }}
      >
        <form method="post" action="https://sendfox.com/form/1v98wy/mppx5d" className="sendfox-form" id="mppx5d" data-async="true" data-recaptcha="true">
        <Stack spacing={1}>
          <Input
            required
            name="email"
            type="email"
            size="lg"
            placeholder="Jump into the alternative reality"
            sx={{ alignSelf: 'stretch', mt: 2 }}
            id="sendfox_form_email"
          />
          <Button type="submit" size="lg"
            endDecorator={<ArrowForward fontSize="large" />}
            sx={{
              alignSelf: 'stretch'
            }}>
            Join
          </Button>
          <Typography fontSize={"xs"} textColor="text.secondary">
            By continuing you agree to our{' '}
            <Link color="neutral">
              <b>Privacy Policy</b>
            </Link>
          </Typography>
          {/* no botz please */}
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input type="text" 
              name="a_password" 
              tabIndex={-1} defaultValue={''} 
              autoComplete="off" readOnly 
            />
          </div>
        </Stack>
        </form>
      </Box>
    </TwoSidedLayout>
  );
}