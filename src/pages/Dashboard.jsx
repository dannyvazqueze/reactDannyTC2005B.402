import { useState, useEffect } from 'react';
import {
  Box, Typography, Grid, Card, CardContent,
  CircularProgress, Avatar, Chip, Divider, Paper
} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import RefreshIcon from '@mui/icons-material/Refresh';
import CustomButton from '../components/CustomButton';

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState({ total: 0, ciudades: 0 });

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUsers(data);
      const ciudades = new Set(data.map((u) => u.address.city)).size;
      setStats({ total: data.length, ciudades });
    } catch {
      console.error('Error al cargar usuarios');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchUsers(); }, []);

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 1000, mx: 'auto' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4, flexWrap: 'wrap', gap: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          📊 Dashboard
        </Typography>
        <CustomButton
          label={loading ? 'Cargando...' : 'Actualizar'}
          onClick={fetchUsers}
          icon={<RefreshIcon />}
          disabled={loading}
          sx={{ background: 'linear-gradient(135deg, #1a1a2e, #0f3460)', color: '#fff' }}
        />
      </Box>

      {/* Stats */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {[
          { label: 'Usuarios', value: stats.total, icon: '👥', color: '#667eea' },
          { label: 'Ciudades', value: stats.ciudades, icon: '🏙️', color: '#e94560' },
          { label: 'Tecnología', value: 'React', icon: '⚛️', color: '#43b89c' },
        ].map((stat) => (
          <Grid item xs={12} sm={4} key={stat.label}>
            <Paper sx={{ p: 3, borderRadius: 3, textAlign: 'center', borderLeft: `4px solid ${stat.color}` }}>
              <Typography variant="h3">{stat.icon}</Typography>
              <Typography variant="h5" sx={{ fontWeight: 800, color: stat.color }}>{stat.value}</Typography>
              <Typography variant="body2" color="text.secondary">{stat.label}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Users list */}
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
        <PeopleIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
        Usuarios del sistema
      </Typography>

      {loading ? (
        <Box sx={{ textAlign: 'center', py: 6 }}>
          <CircularProgress size={48} />
        </Box>
      ) : (
        <Grid container spacing={2}>
          {users.map((u) => (
            <Grid item xs={12} sm={6} md={4} key={u.id}>
              <Card sx={{ borderRadius: 3, transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 30px rgba(0,0,0,0.15)' } }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                    <Avatar sx={{ bgcolor: `hsl(${u.id * 37}, 60%, 50%)` }}>
                      {u.name[0]}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>{u.name}</Typography>
                      <Typography variant="caption" color="text.secondary">@{u.username}</Typography>
                    </Box>
                  </Box>
                  <Divider sx={{ my: 1 }} />
                  <Typography variant="caption" color="text.secondary">{u.email}</Typography>
                  <Box sx={{ mt: 1 }}>
                    <Chip label={u.address.city} size="small" sx={{ fontSize: 10 }} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
