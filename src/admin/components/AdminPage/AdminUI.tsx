import React from 'react';
import { Container, TextField, Button, Box, Typography } from '@mui/material';

interface AdminUIProps {
    handleSave: (name: string) => void;
    handleLogOut: () => void;
}

const AdminSettings: React.FC<AdminUIProps> = ({ handleSave, handleLogOut }) => {


    const [email, setEmail] = React.useState("")

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmail(value);
    };

    const handleSaveClick = () => {
        console.log(email)
        handleSave(email);
      };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Адміністративні налаштування
            </Typography>
            <Box mt={2} display="flex" flexDirection="column">
            <Box display="flex" alignItems="center" mb={2}>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      onClick={handleLogOut} 
                      sx={{ marginLeft: 2 }} 
                      size="large"
                    >
                        Вийти
                    </Button>
                </Box>
                <Box display="flex" alignItems="center" mb={2}>
                    <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        variant="outlined"
                        size="standard"
                        value={email}
                        onChange={handleInputChange}
                    />
                    <Button 
                      variant="contained" 
                      color="primary" 
                      onClick={handleSaveClick} 
                      sx={{ marginLeft: 2 }} 
                      size="large"
                    >
                        Зберегти
                    </Button>
                </Box>
                
                
                {/* <Box display="flex" alignItems="center" mb={2}>
                    <TextField
                        fullWidth
                        label="ID Telegram"
                        name="idTelegram"
                        variant="outlined"
                        value={formData.idTelegram}
                        onChange={handleInputChange}
                    />
                    <Button 
                      variant="contained" 
                      color="primary" 
                      onClick={handleSaveClick} 
                      sx={{ marginLeft: 2 }} 
                      size="large"
                    >
                        Зберегти
                    </Button>
                </Box>
                <Box display="flex" alignItems="center" mb={2}>
                    <TextField
                        fullWidth
                        label="Token Telegram Bot"
                        name="tokenTelegramBot"
                        variant="outlined"
                        value={formData.tokenTelegramBot}                    
                        onChange={handleInputChange}
                    />
                    <Button 
                      variant="contained" 
                      color="primary" 
                      onClick={handleSaveClick} 
                      sx={{ marginLeft: 2 }} 
                      size="large"
                    >
                        Зберегти
                    </Button>
                </Box>
                <Box display="flex" alignItems="center">
                    <TextField
                        fullWidth
                        label="Token Monobank"
                        name="tokenMonobank"
                        variant="outlined"
                        value={formData.tokenMonobank}
                        onChange={handleInputChange}                    
                    />
                    <Button 
                      variant="contained" 
                      color="primary" 
                      onClick={handleSaveClick} 
                      sx={{ marginLeft: 2 }} 
                      size="large"
                    >
                        Зберегти
                    </Button>
                </Box> */}
            </Box>
        </Container>
    );
};

export default AdminSettings;
