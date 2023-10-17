import { Stack, Card, Typography, CardOverflow, AspectRatio, Box, Input, Textarea, Button } from "@mui/joy"
import indexStyles from '../styles/index.module.css';
import { FlightTakeoff, AssignmentTurnedIn, Language, Info, RocketLaunch, Send } from '@mui/icons-material';
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Stack direction={"column"} alignItems="center" sx={{ position: "relative", zIndex: "100" }}>
        <Stack direction={"column"} sx={{ mt: "10px", width: ["90%", "80%", "80%", "700px"] }} pt={5}>
          <Stack direction={"row"} gap={4} alignItems="center" mb={4}>
            <div className={indexStyles.heading}>Welcome to Clive Summers Consulting</div>
            <img src="/RedLine.svg" alt="Line" />
          </Stack>
          <Stack direction={"row"} gap={2} alignItems="center" mb={11}>
            <Card sx={{ width: '23%' }}>
              <CardOverflow>
                <AspectRatio objectFit="fill" ratio="1/1" variant="plain">
                  <img src="/dadtrans.png" alt="Line" />
                </AspectRatio>
              </CardOverflow>
            </Card>
            <Card sx={{ width: '77%' }}>
              <Typography startDecorator={<FlightTakeoff />}>40+ years experience in the aerospace industry</Typography>
              <Typography startDecorator={<AssignmentTurnedIn />}>Gainined contracts on 80 different aircraft platforms in 7 different systems, either directly with the airframers, or indirectly with tier one or tier two suppliers</Typography>
              <Typography startDecorator={<Language />}>Creation of a global Product Support Network</Typography>
            </Card>
          </Stack>
          <Stack direction={"row"} gap={4} alignItems="center" mb={5}>
            <div className={indexStyles.heading}>Previous Partners Include</div>
          </Stack>
          <Stack direction={"column"} gap={1} alignItems="center">
            <Stack direction={"row"} gap={5} alignItems="center" mb={3}>
              <Box sx={{ maxWidth: ["210px"] }}>
                <img src="/boeing.png" alt="Line" style={{ maxWidth: "100%", opacity: "0.7" }} />
              </Box>
              <Box sx={{ maxWidth: ["210px"] }}>
                <img src="/dalogo.png" alt="Line" style={{ maxWidth: "100%" }} />
              </Box>
            </Stack>
            <Stack direction={"row"} gap={5} alignItems="center" mb={11}>
              <Box sx={{ maxWidth: ["160px"] }}>
                <img src="/gkntrans.png" alt="Line" style={{ maxWidth: "100%", opacity: "0.8" }} />
              </Box>
              <Box sx={{ maxWidth: ["130px"] }}>
                <img src="/airbuslogo.png" alt="Line" style={{ maxWidth: "100%", opacity: "0.6" }} />
              </Box>
              <Box sx={{ maxWidth: ["160px"] }}>
                <img src="/samtrans.png" alt="Line" style={{ maxWidth: "100%", opacity: "0.6" }} />
              </Box>
            </Stack>
          </Stack>
          <Stack direction={"row"} gap={4} alignItems="center" mb={5}>
            <div className={indexStyles.heading}>About Me</div>
          </Stack>
          <Card sx={{ marginBottom: 3 }}>
          <Typography startDecorator={<Info />}><b>My Profile</b></Typography>
          <Typography>Education forms my professional foundation. With extensive experience in aviation and metal processing, I've built a robust industry network. As a skilled marketing professional, I communicate ideas effectively and excel in tactful negotiations. Building strong relationships and inspiring others are my passions.</Typography>
          </Card>
          <Card sx={{ marginBottom: 11  }}>
          <Typography startDecorator={<RocketLaunch />}><b>40 years at Sitec Aerospace</b></Typography>
          <Typography>In 40 years, I played a vital role in the company's growth, overseeing processes and achieving significant milestones. At Sitec Aerospace, we participated in 80 aircraft platforms across 7 systems, through direct and indirect contracts with airframers and suppliers.</Typography>
          </Card>
          <div id="contact">
          <Contact />
          </div>
        </Stack>
      </Stack>
    </>
  )
}
