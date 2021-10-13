import React, {ChangeEvent} from 'react';

type PropsTypeSetting = {
    onMaxValueChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onStartValueChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    startValue: number
    maxValue: number
}

export function Setting(props: PropsTypeSetting) {
    return (
        <div>
            <div>
                <span>Max value</span>
                <input type="number" value={props.maxValue} onChange={props.onMaxValueChangeHandler}/>
            </div>
            <div>
                <span>Start value</span>
                <input type="number" value={props.startValue} onChange={props.onStartValueChangeHandler}/>
            </div>
        </div>
    )
}