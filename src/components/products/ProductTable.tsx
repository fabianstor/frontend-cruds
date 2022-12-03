import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams, GridRowId } from '@mui/x-data-grid';
import { Typography, Stack, IconButton, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import serverAPI from '../../api/serverAPI';
import { CreateProductForm } from './CreateProductForm';
import {BackButton} from '../BackButton';

export const ProductTable = () => {

  const [products, setProducts] = useState<any>([]);
  const getProducts = async () => {
    const { data } = await serverAPI.get('/productos');
    setProducts(data.productos);
  }

  const deleteProduct = async (id: GridRowId) => {
    await serverAPI.delete(`/productos/${id}`);
    getProducts()
  }

  useEffect(() => {
    getProducts()
  }, [])

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'categoria', headerName: 'Categoria', width: 130 },
    { field: 'descripcion', headerName: 'Descripción', width: 130 },
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
        Gestionar Productos
      </Typography>

      <Grid sx={{ mb: 3, mt: 3 }}>
        <CreateProductForm getProductos={getProducts} />
      </Grid>

      <DataGrid
        rows={products}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  )
}
