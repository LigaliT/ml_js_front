import React, {useEffect, useState} from 'react';
import Header from "./Components/Header";
import SubmitForm from "./Components/SubmitForm";
import {instance} from "./Utils/instance";
import {initialState, potableWater} from "./Utils/initialState";
import {IResponse} from "./Utils/utils";
import DataContainer from "./Components/DataContainer";

function App() {
    const [state, setState] = useState(initialState);
    const [response, setResponse] = useState<IResponse | undefined>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setState(prevState => ({
        ...prevState,
        [e.target.name]: e.target.value,
    }))

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const res = await instance.post('water_classifier/predict?version=0.0.7', state);
        const data = await res.data;
        setResponse(data);
        setState(initialState);
    }
    const handlePotableWater = () => {
        setState(potableWater)
    }

    const handleReturn = () => {
        setState(initialState);
        setResponse(undefined);
    }

    useEffect(()=>{
        document.title="Прогнозирование качества воды"
    },[])

    return (
        <div>
            <Header/>
            <SubmitForm state={state} response={response} handleChange={handleChange} handleSubmit={handleSubmit}
                        handlePotableWater={handlePotableWater}/>
            <DataContainer response={response} handleReturn={handleReturn}/>
        </div>
    );
}

export default App;
