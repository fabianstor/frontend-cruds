import React, { useEffect, useState } from 'react';
import { Link  } from 'react-router-dom';
import { Card, Grid, CardContent, CardActionArea } from '@mui/material/';
import Typography from '@mui/material/Typography';
import mainOptions from '../utils/Negocio';

export const PrincipalMain = () => {

  const [optionsMain, setOptionsMain] = useState<any[]>([])

  useEffect(() => {
    setOptionsMain(mainOptions)
  }, [mainOptions])

  return (
    <Grid>
      <Card>
        <Link to='/products'>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Gestión de Productos
            </Typography>
          </CardContent>
        </Link>
      </Card>
      <Card>
        <Link to='/companies'>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Gestión de Empresas
            </Typography>
          </CardContent>
        </Link>
      </Card>
      <Card>
        <Link to='/persons'>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Gestión de Personas
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </Grid>
  )
}
