import { useState } from 'react';
import { Stack, Button, Input, Textarea } from "@mui/joy";
import indexStyles from '../styles/index.module.css';
import { Send } from '@mui/icons-material';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        alert('Error sending email.');
      }
    } catch (error) {
      alert('Error sending email.');
    }
  };

  return (
    <>
      <Stack direction={{ xs: 'column', sm: 'row' }} gap={4} alignItems={{ xs: "start", sm: "center" }} mb={5}>
        <div className={indexStyles.heading}>Get in Contact</div>
        <img src="/RedLine.svg" alt="Line" />
      </Stack>
      <form onSubmit={handleSubmit}>
        <Stack direction={"row"} gap={1} alignItems="center" mb={1}>
          <Input name="name" placeholder="Name" sx={{ width: "100%" }} value={formData.name} onChange={handleChange} />
          <Input name="email" placeholder="Email" sx={{ width: "100%" }} value={formData.email} onChange={handleChange} />
        </Stack>
        <Textarea name="message" placeholder="Message" sx={{ width: "100%", marginBottom: 1 }} minRows={4} value={formData.message} onChange={handleChange} />
        <Button type="submit" sx={{ width: "100%", marginBottom: [5,8,8,8] }} startDecorator={<Send />}>Send</Button>
      </form>
    </>
  );
}
