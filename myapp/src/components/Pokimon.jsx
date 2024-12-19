import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Pokomon = () => {
  const [ab, setab] = useState([]);

  useEffect(() => {
    axios.get("https://dummyapi.online/api/pokemon")
      .then((response) => {
        console.log(response.data);
        setab(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array to run once on mount

  return (
    <div>
      <Grid container spacing={2}>
        {ab.map((aa) => (
          <Grid item xs={8} key={aa.id}> {/* Add a unique key for each item */}
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={aa.image_url}
                title={Pokomon.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {aa.name} {/* Display the Pokémon's name */}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {aa.description} {/* Assuming there's a description field */}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Pokomon;