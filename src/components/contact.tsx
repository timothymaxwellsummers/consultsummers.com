import { Stack, Button, Input, Textarea } from "@mui/joy"
import indexStyles from '../styles/index.module.css';
import { Send } from '@mui/icons-material';

export default function Contact() {
    return (
        <>
            <Stack direction={"row"} gap={4} alignItems="center" mb={5}>
                <div className={indexStyles.heading}>Get in Contact</div>
                <img src="/RedLine.svg" alt="Line" />
            </Stack>
            <Stack direction={"row"} gap={1} alignItems="center" mb={1}>
                <Input placeholder="Name" sx={{ width: "100%" }} />
                <Input placeholder="Email" sx={{ width: "100%" }} />
            </Stack>
            <Textarea placeholder="Message" sx={{ width: "100%", marginBottom: 1 }} minRows={4} />
            <Button sx={{ width: "100%", marginBottom: 8 }} startDecorator={<Send />}>Send</Button>
        </>
    )
}
