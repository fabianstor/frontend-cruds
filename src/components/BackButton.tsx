import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const BackButton = () => {
    return (
        <IconButton>
            <Link to='/'>
                <ArrowBackIcon />
            </Link>
        </IconButton>
    )
}
