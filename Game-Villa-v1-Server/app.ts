const PORT = 3000 || process.env.PORT;
import app from "./index";

app.listen(PORT, () => {
	console.log(`Server online and listening on port ${PORT}`);
});
