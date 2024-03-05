    import React, {useState} from 'react';
    import { Container, TextField, Button, Box, Typography, Grid, IconButton, InputAdornment} from '@mui/material';
    import { Link } from 'gatsby'
    import { Visibility, VisibilityOff } from '@mui/icons-material';

    interface AdminUIProps {
        handleSave: (name: string, data: string) => void;
        handleLogOut: () => void;
        handleToSite: () => void;
    }

    const AdminUI: React.FC<AdminUIProps> = ({ handleSave, handleLogOut, sendMonoToken }) => {

            interface FormData {
            email: string;
            telegram: string;
            tokenTelegramBot: string;
            password: { 
                        currentPassword: string; 
                        newPassword: string 
                    };
        }
        
        const fieldsTitles = {
            email: "Змінити електронну адресу",
            telegram: "Змінити телеграм канал",
            tokenTelegramBot: "Змінити телеграм бота.",
            tokenMonobank: "Змінити рахунок монобанк",
            password: "Змінити пароль"
        }

        const fieldsDescription = {
            email: "Напишіть нову електронну адресу для входа в адміністративну панель.",
            telegram: "Змінити телеграм канал",
            tokenTelegramBot: "Токен телеграм бота необхідно отримати у @botFather.",
            tokenMonobank: "Вcтавте в поле токен з власного кабінета в Монобанк - https://api.monobank.ua/",
            password: "Змінити пароль"
        }

        const [formData, setFormData] = React.useState<FormData>({
            email: "",
            telegram: "",
            tokenTelegramBot: "",
            tokenMonobank: "",
            password: { 
                        currentPassword: "", 
                        newPassword: "" 
                    },
        })

                
        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            if (name === 'currentPassword' || name === 'newPassword') {
                setFormData(prevState => ({
                    ...prevState,
                    password: {
                        ...prevState.password,
                        [name]: value
                    }
                }));
            } else {
                setFormData(prevState => ({
                    ...prevState,
                    [name]: value
                }));
            }
        }

        const handleSaveClick = (e: React.MouseEvent<HTMLButtonElement>, name: string) => {
            console.log(e)
            console.log(formData[name]);
            console.log(name)
            handleSave(name, formData[name]);
        };

        const [showPassword, setShowPassword] = useState(false);
        const [showNewPassword, setShowNewPassword] = useState(false);

        const handleTogglePasswordVisibility = () => {
                setShowPassword(!showPassword);
            };

            const handleToggleNewPasswordVisibility = () => {
                setShowNewPassword(!showNewPassword);
            };  

        return (
            <Container>
                <Box textAlign="center">
                    <Typography variant="h4" gutterBottom>
                        Адміністративна панель
                    </Typography>
                </Box>
                <Box mt={2} display="flex" flexDirection="column">
                    
                    <Grid container spacing={2} alignItems="center">
                        {Object.entries(formData).map(([key, value]) => (
                            key !== "password" && key !== "tokenMonobank" && (
                                <React.Fragment key={key}>
                                    <Grid item xs={12}>
                                        <Typography>
                                            {fieldsDescription[key]}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <TextField
                                            fullWidth
                                            label={key}
                                            name={key}
                                            variant="outlined"
                                            size="standard"
                                            value={value}
                                            onChange={handleInputChange}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        onClick={(e) => handleSaveClick(e, key)} 
                                        sx={{ marginLeft: 0 }} 
                                        size="large"
                                        style={{ width: '100%' }}
                                    >
                                        Зберегти
                                    </Button>
                                    </Grid>
                                </React.Fragment>
                            )
                        ))}

                        
                        {/* Password fields */}
                        <Grid item xs={12}>
                            <Typography>
                                {fieldsDescription.password}
                            </Typography>
                        </Grid>

                        <Grid item xs={4}>
                            <TextField
                                fullWidth
                                label="Поточний пароль"
                                name="currentPassword"
                                variant="outlined"
                                size="standard"
                                type={showPassword ? 'text' : 'password'}
                                value={formData.password.currentPassword}
                                onChange={handleInputChange}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={handleTogglePasswordVisibility}>
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                fullWidth
                                label="Новий пароль"
                                name="newPassword"
                                variant="outlined"
                                size="standard"
                                type={showNewPassword ? 'text' : 'password'}
                                value={formData.password.newPassword}
                                onChange={handleInputChange}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={handleToggleNewPasswordVisibility}>
                                                {showNewPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={3} >
                            <Button 
                                variant="contained" 
                                color="primary" 
                                onClick={(e) => handleSaveClick(e, "password")} 
                                sx={{ marginLeft: 0 }} 
                                size="large"
                                style={{ width: '100%' }}
                            >
                                Зберегти
                            </Button>
                        </Grid>

                        {/* --- monobank --- */}
                        <Grid item xs={12}>
                            <Typography>
                                {fieldsDescription.tokenMonobank}
                            </Typography>
                        </Grid>                        
                        <Grid item xs={9}>
                            <TextField
                                fullWidth
                                label="Токен Монобанк"
                                name={"tokenMonobank"}
                                variant="outlined"
                                size="standard"
                                value={formData.tokenMonobank}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={3}>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={(e) => sendMonoToken(formData.tokenMonobank)} 
                            sx={{ marginLeft: 0 }} 
                            size="large"
                            style={{ width: '100%' }}
                        >
                            Відправити
                        </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Box display="flex" width="100%">
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    onClick={handleLogOut} 
                                    size="large"
                                    fullWidth  // Встановлює кнопку на всю доступну ширину Box
                                >
                                    Вийти
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box display="flex" width="100%">
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    
                                    size="large"
                                    fullWidth  // Встановлює кнопку на всю доступну ширину Box
                                >
                                    <Link to='/'>
                                        До сайту
                                    </Link>
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                    
                    
                    
                </Box>
            </Container>
        );
    };

    export default AdminUI;
