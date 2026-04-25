import { useState } from 'react';
import {
  Box, Typography, Paper, Chip, Grid, Card, CardContent, Divider
} from '@mui/material';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useAuth } from '../context/AuthContext';
import CustomButton from '../components/CustomButton';
import { useCounter } from '../hooks/useCounter';

const frases = [
  '¡El conocimiento es poder! 💡',
  '¡Sigue aprendiendo todos los días! 📚',
  '¡Cada línea de código cuenta! 💻',
  '¡React es increíble! ⚛️',
  '¡Tú puedes lograrlo! 🚀',
  '¡La práctica hace al maestro! 🎯',
];

export default function Home() {
  const { user } = useAuth();
  const { count, increment, decrement, reset } = useCounter(0);
  const [fraseIndex, setFraseIndex] = useState(0);

  const cambiarFrase = () => {
    setFraseIndex((i) => (i + 1) % frases.length);
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 900, mx: 'auto' }}>
      {/* Bienvenida */}
      <Paper
        sx={{
          p: 4, mb: 4, borderRadius: 4,
          background: 'linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)',
          color: '#fff',
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Hola, {user?.name || user?.username} 👋
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, opacity: 0.7 }}>
          Bienvenido a tu aplicación React con Vite + Material UI
        </Typography>
        <Chip label={`@${user?.username}`} sx={{ mt: 2, bgcolor: '#e94560', color: '#fff' }} />
      </Paper>

      <Grid container spacing={3}>
        {/* Card: Párrafo con variable dinámica */}
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: 4, height: '100%', boxShadow: '0 8px 30px rgba(0,0,0,0.1)' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                💬 Frase del día
              </Typography>
              <Divider sx={{ mb: 2 }} />
              {/* Párrafo con variable */}
              <Paper sx={{ p: 2, bgcolor: '#f0f4ff', borderRadius: 2, mb: 3, minHeight: 60, display: 'flex', alignItems: 'center' }}>
                <Typography variant="body1" sx={{ fontStyle: 'italic', color: '#1a1a2e', fontWeight: 500 }}>
                  {frases[fraseIndex]}
                </Typography>
              </Paper>
              {/* Botón que actualiza la variable */}
              <CustomButton
                label="Nueva frase"
                onClick={cambiarFrase}
                icon={<AutorenewIcon />}
                fullWidth
                sx={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', color: '#fff' }}
              />
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1, textAlign: 'center' }}>
                Frase {fraseIndex + 1} de {frases.length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card: Contador con hook personalizado */}
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: 4, height: '100%', boxShadow: '0 8px 30px rgba(0,0,0,0.1)' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                🔢 Contador (useCounter hook)
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Box sx={{ textAlign: 'center', py: 2 }}>
                <Typography variant="h2" sx={{ fontWeight: 800, color: count < 0 ? '#e94560' : '#0f3460' }}>
                  {count}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Valor actual del contador
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                <CustomButton label="-1" onClick={decrement} icon={<RemoveIcon />} color="error" variant="outlined" sx={{ flex: 1 }} />
                <CustomButton label="Reset" onClick={reset} icon={<RestartAltIcon />} color="warning" variant="outlined" sx={{ flex: 1 }} />
                <CustomButton label="+1" onClick={increment} icon={<AddIcon />} color="success" variant="outlined" sx={{ flex: 1 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
