import { Card, CardContent, Grid, Link } from "@material-ui/core";
import { DemoIndexData } from "../demoIndex";
import React from "react";

type DemoLinkProps = {
  demoIndexData: DemoIndexData
}

export default function DemoLink(props: DemoLinkProps) {
  const {
    name,
    path,
  } = props.demoIndexData;

  return <Grid item xs={12}>
    <Card>
      <CardContent>
        <Link
          href={path}
          variant="h4"
        >{name}</Link>
      </CardContent>
    </Card>
  </Grid>
}
