import { Box, Typography, Divider } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: 3,
        px: 4,
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        color: 'rgba(255,255,255,0.7)',
        textAlign: 'center',
      }}
    >
      <Divider sx={{ mb: 2, borderColor: 'rgba(255,255,255,0.1)' }} />
      <Typography variant="body2">
        © {new Date().getFullYear()} MyApp — Proyecto React con Vite + MUI
      </Typography>
      <Typography variant="caption" sx={{ opacity: 0.5 }}>
        Hecho con ❤️ para la tarea escolar
      </Typography>
    </Box>
  );
}
