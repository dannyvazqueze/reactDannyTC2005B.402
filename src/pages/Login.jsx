import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box, Card, CardContent, TextField, Typography,
  Alert, CircularProgress, InputAdornment, IconButton
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useAuth } from '../context/AuthContext';
import CustomButton from '../components/CustomButton';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      setError('Por favor ingresa usuario y contraseña.');
      return;
    }
    setError('');
    setLoading(true);

    try {
      // ── Conexión con backend ──────────────────────────────────────────────
      // Cambia esta URL por la de tu propio backend real.
      // El backend debe recibir { username, password } y responder con
      // { token, username, ... } en éxito o un status >= 400 en error.
      //
      // Mientras no tengas backend propio, usamos JSONPlaceholder para
      // simular una llamada HTTP real:
      const response = await fetch('https://jsonplaceholder.typicode.com/users?username=' + username);
      const data = await response.json();

      // Simulación: si existe un usuario con ese username en la API pública
      // y la contraseña no está vacía, lo consideramos válido.
      if (data.length > 0 && password.length >= 3) {
        login({ username: data[0].username, name: data[0].name, token: 'fake-jwt-token' });
        navigate('/');
      } else {
        setError('Credenciales incorrectas. Intenta con: Bret, Antonette, Samantha… (contraseña ≥ 3 chars)');
      }
    } catch (err) {
      setError('Error de conexión con el servidor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        p: 2,
      }}
    >
      <Card
        sx={{
          maxWidth: 420,
          width: '100%',
          borderRadius: 4,
          boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
          background: 'rgba(255,255,255,0.05)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <CardContent sx={{ p: 5 }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h3" sx={{ fontSize: 48, mb: 1 }}>🚀</Typography>
            <Typography variant="h5" sx={{ color: '#fff', fontWeight: 700, letterSpacing: 1 }}>
              Bienvenido
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', mt: 0.5 }}>
              Inicia sesión para continuar
            </Typography>
          </Box>

          {error && (
            <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
              {error}
            </Alert>
          )}

          <TextField
            fullWidth
            label="Usuario"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ mb: 2, '& .MuiOutlinedInput-root': { color: '#fff', '& fieldset': { borderColor: 'rgba(255,255,255,0.2)' }, '&:hover fieldset': { borderColor: '#e94560' } }, '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.5)' } }}
            InputProps={{ startAdornment: <InputAdornment position="start"><PersonIcon sx={{ color: 'rgba(255,255,255,0.4)' }} /></InputAdornment> }}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
          />

          <TextField
            fullWidth
            label="Contraseña"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 3, '& .MuiOutlinedInput-root': { color: '#fff', '& fieldset': { borderColor: 'rgba(255,255,255,0.2)' }, '&:hover fieldset': { borderColor: '#e94560' } }, '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.5)' } }}
            InputProps={{
              startAdornment: <InputAdornment position="start"><LockIcon sx={{ color: 'rgba(255,255,255,0.4)' }} /></InputAdornment>,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end" sx={{ color: 'rgba(255,255,255,0.4)' }}>
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
          />

          <CustomButton
            label={loading ? 'Verificando...' : 'Iniciar Sesión'}
            onClick={handleLogin}
            fullWidth
            disabled={loading}
            icon={loading ? <CircularProgress size={18} color="inherit" /> : null}
            sx={{ background: 'linear-gradient(135deg, #e94560, #c23152)', color: '#fff', py: 1.5 }}
          />

          <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', mt: 3, color: 'rgba(255,255,255,0.3)' }}>
            Prueba con usuario: <strong style={{ color: '#e94560' }}>Bret</strong> y contraseña: <strong style={{ color: '#e94560' }}>123</strong>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
