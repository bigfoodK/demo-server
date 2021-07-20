import React from "react";
import { Card, CardContent, Container, Grid, Typography } from "@material-ui/core";
import { demoIndex } from "../demoIndex";
import DemoLink from "./DemoLink";

export default function App() {

  return <Container maxWidth="md">
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h3">Demo</Typography>
          </CardContent>
        </Card>
      </Grid>
      {demoIndex.map(demoIndexData => <DemoLink
        demoIndexData={demoIndexData}
        key={demoIndexData.name} />)}
    </Grid>
  </Container>
}
