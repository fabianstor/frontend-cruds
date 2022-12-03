import React, {useState} from 'react';
import {
    Button,
    Grid,
    TextField,
    Alert,
    AlertTitle,
} from '@mui/material';

import { useForm } from '../../hooks/useForm';
import serverAPI from '../../api/serverAPI';

import { IProductos } from '../../interfaces/IProductos';

export const CreateProductForm = (props:any) => {

    const [categoria, setCategoria] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const saveProduct = async (event: any) => {
        event.preventDefault()
        await serverAPI.post(`/productos`, {
            categoria,
            descripcion
        });
        props.getProductos()
    }

    return (
        <form
            onSubmit={saveProduct}
            style={{ width: '100%' }}
        >
            <Grid item container lg={12} spacing={2}>

                <Grid item lg={5} xs={12}>
                    <TextField
                        type="text"
                        fullWidth
                        placeholder="Ingrese la categoría"
                        label="Categoría"
                        required
                        sx={{ border: 'none', mb: 2 }}
                        name='categoria'
                        value={categoria}
                        onChange={event => {
                            setCategoria(event.target.value)
                        }}
                    />
                </Grid>
                <Grid item lg={5} xs={12}>
                    <TextField
                        type="text"
                        fullWidth
                        placeholder="Ingrese la descripción"
                        label="Descripción"
                        required
                        sx={{ border: 'none', mb: 2 }}
                        name='descripcion'
                        value={descripcion}
                        onChange={event => {
                            setDescripcion(event.target.value)
                        }}
                    />
                </Grid>
                <Grid item lg={2} xs={12}>
                    <Button
                        variant="outlined"
                        type="submit"
                        sx={{ py: '14px' }}
                    >
                        Guardar
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}
