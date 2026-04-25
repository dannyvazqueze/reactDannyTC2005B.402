import { Box, Typography, Paper, Chip, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const features = [
  'React 18 con Hooks (useState, useEffect, useContext)',
  'Vite como bundler ultrarrápido',
  'React Router DOM para navegación SPA',
  'Material UI v5 para componentes visuales',
  'Contexto de autenticación (AuthContext)',
  'Rutas protegidas con ProtectedRoute',
  'Hook personalizado (useCounter)',
  'Componente personalizado (CustomButton)',
  'Conexión con API externa (JSONPlaceholder)',
  'Navbar responsivo con logout',
  'Footer en todas las vistas autenticadas',
];

export default function About() {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 800, mx: 'auto' }}>
      <Paper sx={{ p: 4, borderRadius: 4, background: 'linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)', color: '#fff', mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>ℹ️ Acerca de</Typography>
        <Typography variant="body1" sx={{ mt: 1, opacity: 0.7 }}>
          Esta aplicación fue creada como proyecto de la materia de Desarrollo Web.
        </Typography>
      </Paper>

      <Paper sx={{ p: 4, borderRadius: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Tecnologías utilizadas</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
          {['React', 'Vite', 'MUI v5', 'React Router', 'JavaScript ES6+'].map((t) => (
            <Chip key={t} label={t} color="primary" variant="outlined" />
          ))}
        </Box>
        <Divider sx={{ mb: 3 }} />
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>Funcionalidades implementadas</Typography>
        <List dense>
          {features.map((f) => (
            <ListItem key={f} sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <CheckCircleIcon color="success" fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={f} primaryTypographyProps={{ variant: 'body2' }} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
