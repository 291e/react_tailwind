import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

export default function App() {
  return (
    <Container maxWidth="sm">
      <div className="my-4">
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI Vite example with Tailwind CSS in TypeScript
        </Typography>
        <Slider
          className="my-4"
          defaultValue={30}
          classes={{ active: "shadow-none" }}
          slotProps={{ thumb: { className: "hover:shadow-none" } }}
        />
      </div>
    </Container>
  );
}
