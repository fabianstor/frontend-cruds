import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid, GridColDef, GridValueGetterParams, GridRowId } from '@mui/x-data-grid';
import { Typography, Stack, IconButton, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import serverAPI from '../../api/serverAPI';
import { CreateCompanyForm } from './CreateCompanyForm';
import {BackButton} from '../BackButton';

export const CompaniesTable = () => {

  const [companies, setCompanies] = useState<any>([]);
  const getCompanies = async () => {
    const { data } = await serverAPI.get('/empresas');
    console.log(data)
    setCompanies(data.empresas);
  }

  const deleteCompany = async (id: GridRowId) => {
    await serverAPI.delete(`/empresas/${id}`);
    getCompanies()
  }

  useEffect(() => {
    getCompanies()
  }, [])

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nombre', headerName: 'Nombre', width: 130 },
    { field: 'nit', headerName: 'NIT', width: 130 },
    {
      field: 'actions',
      headerName: 'Acciones',
      sortable: false,
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Stack direction="row" spacing={1}>
              <IconButton onClick={() => deleteCompany(params.id)}>
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
        Gestión de Empresas
      </Typography>

      <Grid sx={{ mb: 3, mt: 3 }}>
        <CreateCompanyForm getCompanies={getCompanies} />
      </Grid>

      <DataGrid
        rows={companies}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  )
}
