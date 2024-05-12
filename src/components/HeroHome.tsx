import * as React from 'react';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import TwoSidedLayout from './TwoSidedLayout';
import { Link, Stack } from '@mui/joy';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function HeroHome() {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      // @TS-ignore
      if (window.hbspt) {
        // @TS-ignore
        window.hbspt.forms.create({
          region: "na1",
          portalId: "21339207",
          formId: "bc634838-af7c-412b-9b70-d2f1c617563e",
          target: '#hubspotForm'
        })
      }
    });
  }, []);
  // If filled out when the form is submitted, assume it was a bot and ignore or reject the submission.
  const [honeypot, setHoneypot] = React.useState('');
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();
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
        // component="form"
        sx={{
          display: 'flex',
          gap: 1,
          my: 2,
          alignSelf: 'stretch',
          flexBasis: '80%',
          flexDirection: 'column',
        }}
      >
        <Stack spacing={1}>

            <div>
              <div id="hubspotForm"></div>
            </div>
            <Typography fontSize={"xs"} textColor="text.secondary">
              By continuing you agree to our{' '}
              <Link color="neutral">
                <b>Privacy Policy</b>
              </Link>
            </Typography>
        </Stack>
      </Box>
    </TwoSidedLayout>
  );
}