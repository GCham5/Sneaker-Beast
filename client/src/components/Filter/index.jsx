import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FilterListIcon from '@mui/icons-material/FilterList';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import './index.css'

export default function Filter(props) {

    const [options, setOptions] = useState({brand: '', size: '', rate: ''})

    const updateBrand = (event) => {
        setOptions({
            ...options,
            brand: event.target.value
        })
    };

    const updateSize = (event) => {
        setOptions({
            ...options,
            size: event.target.value
        })
    };

    const updateRate = (event) => {
        setOptions({
            ...options,
            rate: event.target.value
        })
    };

    useEffect(() => {
        props.changeOptions(options)
    },[options])

    return (
        <Grid container sx={{}}>
            <Grid item>
                <Typography variant="h4">
                    Recent Posting
                </Typography>
            </Grid>
            <Grid item container justifyContent="space-between">
                <Grid item xs={2}>
                    <FormControl fullWidth>
                        <InputLabel id="brand-select-input-label">Brand</InputLabel>
                        <Select
                            labelId="brand-select-input-label"
                            id="brand-select-input"
                            value={options.brand}
                            label="Brand"
                            onChange={updateBrand}
                        >
                            <MenuItem value={''}>None</MenuItem>
                            <MenuItem value={'adidas'}>Adidas</MenuItem>
                            <MenuItem value={'Nike'}>Nike</MenuItem>
                            <MenuItem value={'Jordan'}>Jordan</MenuItem>
                            <MenuItem value={'New Balance'}>New Balance</MenuItem>
                            <MenuItem value={'Reebok'}>Reebok</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <FormControl fullWidth>
                        <InputLabel id="size-select-input-label">Size</InputLabel>
                        <Select
                            labelId="size-select-input-label"
                            id="size-select-input"
                            value={options.size}
                            label="Size"
                            onChange={updateSize}
                        >
                            <MenuItem value={''}>None</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={11}>11</MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={13}>13</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={15}>15</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <FormControl fullWidth>
                        <InputLabel id="rate-select-input-label">Rate</InputLabel>
                        <Select
                            labelId="rate-select-input-label"
                            id="rate-select-input"
                            value={options.rate}
                            label="Rate"
                            onChange={updateRate}
                        >
                            <MenuItem value={''}>None</MenuItem>
                            <MenuItem value={1}>$0-$19</MenuItem>
                            <MenuItem value={2}>$20-$39</MenuItem>
                            <MenuItem value={3}>$40+</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Grid>
    )
};
