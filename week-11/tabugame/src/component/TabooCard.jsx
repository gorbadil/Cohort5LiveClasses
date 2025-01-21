import { tabooCards } from "../data/tabooCards";
import { useGame } from "../context/GameContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function TabooCard() {
  const { currentCardIndex, setCurrentCardIndex, passCount } = useGame();
  return (
    <div>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            {tabooCards[currentCardIndex].word}
          </Typography>
          <hr />
          {tabooCards[currentCardIndex].forbiddenWords.map((item) => (
            <Typography variant="body2" component="p" key={item}>
              {item}
            </Typography>
          ))}
        </CardContent>
        <CardActions>
          <Button variant="contained" color="secondary" size="small">
            Doğru
          </Button>
          <Button variant="contained" color="secondary" size="small">
            Yanlış
          </Button>
          <Button variant="contained" color="secondary" size="small">
            Pas - {passCount}{" "}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default TabooCard;
