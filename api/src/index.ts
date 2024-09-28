import { Hono } from 'hono';
import downloads from './routes/downloads';
import pkg from './routes/pkg';
import search from './routes/search';

const app = new Hono();

app.get('/', ({ redirect }) => redirect('https://npkg.lorypelli.dev/'));
app.get('/search', search);
app.get('/downloads', downloads);
app.route('/pkg', pkg);

export default app;
