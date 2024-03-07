    import React, {useState, useEffect} from 'react';
    import {    Container, 
                TextField, 
                Button, 
                Box, 
                Typography,
                Grid, 
                IconButton, 
                InputAdornment, 
                List, 
                ListItem, 
                ListItemText, 
                CircularProgress,
                Alert
            } from '@mui/material';
    import { Link } from 'gatsby'
    import { Visibility, VisibilityOff } from '@mui/icons-material';
    import Snackbar from '@mui/material/Snackbar';

    interface AdminUIProps {
        handleSave: (name: string, data: string) => void;
        handleLogOut: () => void;
        handleToSite: () => void;
        sendMonoToken: () => void;
        monoJars: {id: string; title: string;}[];
        isLoading: { [key: string]: boolean };
        isJarsLoading: boolean;
        isJarIdLoading: {[key: string]: boolean}
        sendJarId: (id: string) => void;
        snackbarData: {open: boolean; text: string; isSuccess: boolean};
        setSnackbarData: () => void;
    }

    const AdminUI: React.FC<AdminUIProps> = ({  handleSave, 
                                                handleLogOut, 
                                                sendMonoToken, 
                                                monoJars, 
                                                isLoading, 
                                                isJarsLoading,
                                                isJarIdLoading,
                                                sendJarId,
                                                snackbarData,
                                                setSnackbarData
                                            }) => {
        
        // login of jars loading
        
        const [dataLoaded, setDataLoaded] = useState(false);

        useEffect(() => {
            if (monoJars) {
                setDataLoaded(monoJars.length > 0);
            }
        }, [monoJars]);

        const fieldsTitles = {
            email: "Змінити електронну адресу",
            telegram: "Змінити телеграм канал",
            tokenTelegramBot: "Змінити телеграм бота",
            tokenMonobank: "Змінити рахунок монобанк",
            password: "Змінити пароль"
        }

        const fieldsDescription = {
            email: "Напишіть нову електронну адресу для входа в адміністративну панель",
            telegram: "Змінити телеграм канал",
            tokenTelegramBot: "Токен телеграм бота необхідно отримати у @botFather",
            tokenMonobank: (
                <span>
                    Вставте в поле токен з власного кабінета в Монобанк - <a href="https://api.monobank.ua/" target="_blank">https://api.monobank.ua/</a>
                </span>
            ),
            password: "Введіть поточний і новий пароль"
        }

        interface FormData {
            email: string;
            telegram: string;
            tokenTelegramBot: string;
            tokenMonobank: string;
            password: { 
                        currentPassword: string; 
                        newPassword: string 
                    };
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

    

        const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
            if (reason === 'clickaway') {
            return;
            }
            setSnackbarData({...snackbarData, open:false})
        }

        return (
            <Container>
                <Box textAlign="center">
                    <Typography variant="h4" gutterBottom>
                        Адміністративна панель
                    </Typography>
                </Box>
                    
                <Grid container spacing={2} alignItems="center">
                    
                    {/* Block of usual forms */}
                    {Object.entries(formData).map(([key, value]) => (
                        key !== "password" && key !== "tokenMonobank" && (
                            <React.Fragment key={key}>
                                {/* Title and text */}
                                <Grid item xs={12}>
                                    <Typography variant="h5">
                                        {fieldsTitles[key]}
                                    </Typography>
                                    <Typography variant="body2">
                                        {fieldsDescription[key]}
                                    </Typography>
                                </Grid>
                                
                                {/* Form */}
                                <Grid item xs={12} md={9}>
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
                                
                                {/* Button */}
                                <Grid item xs={12} md={3}>
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        onClick={(e) => handleSaveClick(e, key)} 
                                        sx={{ marginLeft: 0 }} 
                                        size="large"
                                        style={{ width: '100%' }}
                                        disabled={isLoading[key]}
                                        // startIcon={isLoading[key] ? <CircularProgress size={20} color="inherit" /> : null}
                                    >
                                        {isLoading[key] ? 'Завантаження...' : 'Зберегти'}
                                    </Button>
                                </Grid>
                            </React.Fragment>
                        )
                    ))}
                    
                    {/* Password fields */}
                    <Grid item xs={12}>
                        <Typography variant="h5">
                            {fieldsTitles.password}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2">
                            {fieldsDescription.password}
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={9}>
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
                    
                    
                    
                    <Grid item xs={12} md={9}>
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
                    <Grid item xs={12} md={3} >
                        <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={(e) => handleSaveClick(e, "password")} 
                            sx={{ marginLeft: 0 }} 
                            size="large"
                            style={{ width: '100%' }}
                            disabled={isLoading["password"]}
                        >
                            {isLoading["password"] ? 'Завантаження...' : 'Зберегти'}
                        </Button>
                    </Grid>

                    {/* --- monobank --- */}
                    <Grid item xs={12}>
                        <Typography variant="h5">
                            {fieldsTitles.tokenMonobank}
                        </Typography>
                        <Typography variant="body2">
                            {fieldsDescription.tokenMonobank}
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={9}>
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
                    <Grid item xs={12} md={3}>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={(e) => sendMonoToken(formData.tokenMonobank)} 
                            sx={{ marginLeft: 0 }} 
                            size="large"
                            style={{ width: '100%' }}
                            disabled={isJarsLoading}
                        >
                            {isJarsLoading ? 'Завантаження...' : 'Відправити'}
                        </Button>
                    </Grid>

                    <Grid container style={{ 
                                            marginTop: '20px',
                                            paddingLeft: '16px' 
                                            }}
                    >
                        <Grid item xs={12}>
                            {monoJars && monoJars.length>0 && (
                                <Typography variant="h5">
                                    Виберіть яку банку відображати на сайті
                                </Typography>
                            )}
                                
                        </Grid>
                        {monoJars.map((jar) => (
                                <Grid container sx={{ marginTop: '10px' }}>
                                    <Grid item xs={8}>
                                        <Typography>{jar.title}</Typography>
                                    </Grid>
                                    <Grid item xs={4} >
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            onClick={() => sendJarId(jar.id)}
                                            disabled={isJarIdLoading[jar.id]}
                                            startIcon={
                                            isJarIdLoading[jar.id] ? (
                                                <CircularProgress size={20} color="inherit" />
                                            ) : null
                                            }
                                        >
                                            Обрати
                                        </Button>
                                    </Grid>
                                </Grid>
                        ))}
                        </Grid>
                </Grid>

                <Grid sx={{ marginTop: 2 }} container spacing={2} rowSpacing={1} columnSpacing={1} alignItems="center">
                        <Grid item xs={6}>
                            <Box display="flex" width="100%">
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    onClick={handleLogOut} 
                                    size="large"
                                    fullWidth 
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
                                    sx = {{
                                        '&: visited': {
                                            color: 'inherit',
                                            }
                                    }}
                                    size="large"
                                    fullWidth 
                                >
                                    <Link 
                                        to='/'
                                        style={{ color: 'inherit', textDecoration: 'inherit' }}
                                    >
                                        До сайту
                                    </Link>
                                </Button>
                            </Box>
                        </Grid>
                </Grid>
                
                <Snackbar
                    open={snackbarData.open}
                    onClose={handleClose}
                    anchorOrigin={{ vertical:"top", horizontal:"center"}}
                    autoHideDuration={3000}
                >
                    <Alert
                        onClose={handleClose}
                        severity={snackbarData.isSuccess ? "success" : "error"}
                    >
                        {snackbarData.text}
                    </Alert>
                </Snackbar>
            </Container>
        );
    };

    export default AdminUI;
