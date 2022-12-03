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

export const CreateCompanyForm = (props:any) => {

    const [nombre, setNombre] = useState('')
    const [nit, setNit] = useState('')

    const saveCompany = async (event: any) => {
        event.preventDefault()
        await serverAPI.post(`/empresas`, {
            nombre,
            nit
        });
        props.getCompanies()
    }

    return (
        <form
            onSubmit={saveCompany}
            style={{ width: '100%' }}
        >
            <Grid item container lg={12} spacing={2}>

                <Grid item lg={5} xs={12}>
                    <TextField
                        type="text"
                        fullWidth
                        placeholder="Ingrese el nombre"
                        label="Nombre de la empresa"
                        required
                        sx={{ border: 'none', mb: 2 }}
                        name='nombre'
                        value={nombre}
                        onChange={event => {
                            setNombre(event.target.value)
                        }}
                    />
                </Grid>
                <Grid item lg={5} xs={12}>
                    <TextField
                        type="text"
                        fullWidth
                        placeholder="Ingrese el NIT"
                        label="NIT"
                        required
                        sx={{ border: 'none', mb: 2 }}
                        name='nit'
                        value={nit}
                        onChange={event => {
                            setNit(event.target.value)
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
