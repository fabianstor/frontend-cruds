import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams, GridRowId } from '@mui/x-data-grid';
import { Typography, Stack, IconButton, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import serverAPI from '../../api/serverAPI';
import { CreatePersonForm } from './CreatePersonForm';
import {BackButton} from '../BackButton';

export const PersonsTable = () => {

  const [persons, setPersons] = useState<any>([]);
  const getPersons = async () => {
    const { data } = await serverAPI.get('/personas');
    setPersons(data.personas);
  }

  const deleteProduct = async (id: GridRowId) => {
    await serverAPI.delete(`/personas/${id}`);
    getPersons()
  }

  useEffect(() => {
    getPersons()
  }, [])

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nombre', headerName: 'Nombre', width: 130 },
    { field: 'edad', headerName: 'Edad', width: 130 },
    {
      field: 'actions',
      headerName: 'Acciones',
      sortable: false,
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Stack direction="row" spacing={1}>
              <IconButton onClick={() => deleteProduct(params.id)}>
                <DeleteIcon />
              </IconButton>
            </Stack>
          </>
        );
      },
    },
  ];

  return (
    <div style={{ height: '90vh', width: '100%' }}>
      <Typography
        sx={{ flex: '1 1 100%' }}
        variant="h6"
      >
        <BackButton />
        Gestión de Personas
      </Typography>

      <Grid sx={{ mb: 3, mt: 3 }}>
        <CreatePersonForm getPersons={getPersons} />
      </Grid>

      <DataGrid
        rows={persons}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />

    </div>
  )
}
