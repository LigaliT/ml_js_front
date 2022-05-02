import React from 'react';
import {Box, Button, TextField} from "@mui/material";
import {IDataContainerProps} from "../Utils/utils";

const DataContainer = ({response, handleReturn}: IDataContainerProps) => {
    return ((response !== undefined &&
            <Box sx={{
                mt: '10%',
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                }}
                >
                    <TextField sx={{width:"20%"}} variant="filled" color="secondary" focused value={response?.label} name="label"
                               label="Пригодность"/>
                    <TextField sx={{width:"20%"}} variant="filled" color="secondary" focused value={response?.probability} name="probability"
                               label="Точность определения"/>
                    <Button onClick={handleReturn} variant="contained" color="error">
                        Вернуться
                    </Button>
                </Box>
            </Box>) || <div style={{display: "none"}}/>
    );
};

export default DataContainer;