import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

function TodoItem({ todo, getDetailsOfCurrentTodo }) {
  return (
    <Card
      sx={{
        maxWidth: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography variant="h5" color={"text.secondary"}>
          {todo?.todo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{
            backgroundColor: "#000000",
            color: "#fff",
            opacity: 0.75, //transparency
            "&:hover": {
              backgroundColor: "#000000",
              color: "#fff",
              opacity: 1, //transparency
            },
          }}
          onClick={() => {
            getDetailsOfCurrentTodo(todo?.id);
          }}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
}
export default TodoItem;
