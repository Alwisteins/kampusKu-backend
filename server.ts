import app from "./api";

const PORT: string | 88 = process.env.PORT !== undefined ? process.env.PORT : 88;

app.listen(PORT, () => {
  console.log(`server listening at http://localhost:${PORT}`);
});
