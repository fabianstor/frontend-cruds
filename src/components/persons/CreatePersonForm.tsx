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

export const CreatePersonForm = (props:any) => {

    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState('')

    const savePerson = async (event: any) => {
        event.preventDefault()
        await serverAPI.post(`/personas`, {
            nombre,
            edad
        });
        props.getPersons()
    }

    return (
        <form
            onSubmit={savePerson}
            style={{ width: '100%' }}
        >
            <Grid item container lg={12} spacing={2}>

                <Grid item lg={5} xs={12}>
                    <TextField
                        type="text"
                        fullWidth
                        placeholder="Ingrese el nombre"
                        label="Nombre"
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
                        type="number"
                        fullWidth
                        placeholder="Ingrese la edad"
                        label="Edad"
                        required
                        sx={{ border: 'none', mb: 2 }}
                        name='edad'
                        value={edad}
                        onChange={event => {
                            setEdad(event.target.value)
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
