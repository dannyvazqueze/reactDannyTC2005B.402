import { Button } from '@mui/material';

/**
 * CustomButton — Componente botón personalizado reutilizable.
 * Props: label, onClick, color, variant, icon, disabled, fullWidth
 */
export default function CustomButton({
  label = 'Botón',
  onClick,
  color = 'primary',
  variant = 'contained',
  icon,
  disabled = false,
  fullWidth = false,
  sx = {},
}) {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      startIcon={icon}
      sx={{
        borderRadius: 3,
        fontWeight: 600,
        textTransform: 'none',
        px: 3,
        py: 1.2,
        boxShadow: variant === 'contained' ? '0 4px 15px rgba(0,0,0,0.2)' : 'none',
        transition: 'all 0.2s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
        },
        ...sx,
      }}
    >
      {label}
    </Button>
  );
}
