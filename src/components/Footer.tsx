// components/Header.tsx
import { Typography, Stack, Button, SvgIcon } from "@mui/joy"
import indexStyles from '../styles/index.module.css';
import { Mail, Copyright } from '@mui/icons-material';
import { url } from "inspector";

export default function Footer() {
  return (
    <>
    <Stack direction="column" sx={{ mt: "10px", width: ["95%", "95%", "95%", "90%"], maxWidth: "1200px"}} alignContent={"flex-start"}>
    <img src="/DadLine.svg" alt="Line"/>   

    <Stack direction="row" alignItems={"center"} alignContent={"flex-start"} sx={{pb: "1em", pt: "1em"}}>
      <Typography level='body-sm' style={{ flexGrow: 1 }} startDecorator={<SvgIcon size='sm'><Copyright/></SvgIcon>}>Clive Maxwell Summers</Typography>
          <div style={{ flexGrow: 1 }} />
          <a href="mailto:clive@consultsummers.com" style={{textDecoration: "none"}}>
          <Button color="primary" variant="plain" startDecorator={<Mail />} size='sm'>clive@consultsummers.com</Button>
          </a>
    </Stack>
    </Stack> 
    </>
  )
}
