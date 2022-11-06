import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography
  } from "@mui/material";

  
  export default function PostCard({ blog }) {
    const { title, body, userId, id } = blog;
    return (
      <Card key={id} sx={{ width: 275, height: 250 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {title.slice(0, 30)}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            User ID: {userId}
          </Typography>
          <Typography variant="body2">{body.slice(0,100)}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Edit</Button>
        </CardActions>
      </Card>
    );
  }
  