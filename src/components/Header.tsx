// components/Header.tsx
import { Typography, Stack, Button } from "@mui/joy"
import indexStyles from '../styles/index.module.css';
import { LinkedIn, Mail} from '@mui/icons-material';


export default function Header() {
  return (
    <div className={indexStyles.stickyHeader}>
      <Stack direction="column" sx={{ mt: "5px", width: ["95%", "95%", "95%", "90%"], maxWidth: "1200px"}} alignContent={"flex-start"}>
        <Stack direction="row" alignItems={"center"} alignContent={"flex-start"} sx={{mb: "5px"}}>
          <img src="/dad_logo.png" className={indexStyles.imageWidth}/>
          <div style={{ flexGrow: 1 }} />
          <a href="mailto:clive@consultsummers.com" style={{textDecoration: "none"}}>
          <Button color="primary" variant="plain" endDecorator={<Mail />} size='sm' sx={{mr:[1,3,3,3]}}>Email</Button>
          </a>
          <a href="https://www.linkedin.com/in/clive-summers-7b554214/" style={{textDecoration: "none"}} target="_blank">
          <Button endDecorator={<LinkedIn />} color="primary" >LinkedIn</Button>
          </a>
        </Stack>
        <img src="/DadLine.svg" alt="Line" height={"1px"}/>   
      </Stack> 
    </div>
  )
}
