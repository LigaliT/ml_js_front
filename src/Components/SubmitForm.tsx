import React from 'react';
import {Box, Button, TextField} from "@mui/material";
import {IState, ISubmitFormProps} from "../Utils/utils";
import { russianWaterCharacteristic } from "../Utils/initialState"

const SubmitForm = ({state, response, handleChange, handleSubmit, handlePotableWater}: ISubmitFormProps) => {
    let objKeys = Object.keys(state) as Array<keyof IState>;
    return ((response === undefined &&
            <Box sx={{
                display:"flex",
                flexFlow:"column nowrap",
                alignItems:"center",
                mt: '7%',
            }}>
                <Button variant="outlined" onClick={handlePotableWater}>Питьевая вода</Button>
                <Box sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    width:"50%",
                    justifyContent:"center",
                    gap:"10px",
                    mt:"15px",
                }}
                     component="form"
                     onSubmit={handleSubmit}
                >
                    {
                        objKeys.map((s, key) => <TextField
                            sx={{
                                flex:"1 0 32%",
                            }
                            }
                            type="number"
                            required={true}
                            key={key}
                            name={s}
                            label={russianWaterCharacteristic[key]}
                            placeholder={`Enter ${s}`}
                            value={state[`${s}`]}
                            onChange={handleChange}
                        />)
                    }
                    <Button type="submit" variant="contained">
                        Узнать Качество
                    </Button>
                </Box>
            </Box>) || <div style={{display: 'none'}}/>
    );
};

export default SubmitForm;