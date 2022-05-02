export interface IState {
    ph:number,
    Hardness:number,
    Solids:number,
    Chloramines:number,
    Sulfate:number,
    Conductivity:number,
    Organic_carbon:number,
    Trihalomethanes:number,
    Turbidity:number,
}

export interface IResponse{
    label:string,
    probability:number,
    request_id:number,
    status:string
}

export interface ISubmitFormProps {
    state: IState,
    response: IResponse | undefined,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (data:any) => void,
    handlePotableWater: () => void,
}

export interface IDataContainerProps{
    response: IResponse | undefined,
    handleReturn: () => void,
}