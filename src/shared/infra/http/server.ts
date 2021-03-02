import app from './app';

const PORT = process.env.PORT ?? 9354;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
