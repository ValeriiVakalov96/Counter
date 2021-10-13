import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Display} from './Display';
import {Animation} from './Animation';
import {Button} from './Button';
import {Setting} from './Setting';


function App() {
    let buttonsData = {
        buttonTitle: {
            inc: 'Inc',
            reset: 'Reset',
            apply: 'Confirm',
        },
        className: {
            incButton: 'IncButton',
            ResetButton: 'ResetButton',
            confirmButton: 'ConfirmButton',
        },
        buttonDisabled: {
            confirm: false,
            inc: false,
            reset: false,
        },
    }

/*    let buttonsData = [
        {buttonTitle: {
                inc: 'Inc',
                reset: 'Reset',
                apply: 'Confirm',
            }},
        {className: {
                incButton: 'IncButton',
                ResetButton: 'ResetButton',
                confirmButton: 'ConfirmButton',
            }},
        {buttonDisabled: {
                confirm: false,
                inc: false,
                reset: false,
            }}
    ]*/

    let [num, setNum] = useState<number>(0)
    let [uiNumber, setUiNumber] = useState<number>(0)
    let [startValue, setStartValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)

    let confirm = () => {
        setNum(startValue)
        setUiNumber(startValue)
    }

    let inc = () => {
        if (uiNumber < maxValue) {
            setUiNumber(uiNumber + 1)
        }
    }
    let reset = () => {
        setUiNumber(num)
    }


    let onIncClickHandler = () => {
        inc()
    }

    let onResetClickHandler = () => {
        reset()
    }
    let onConfirmClickHandler = () => {
        confirm()
    }

    let onStartValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
    }
    let onMaxValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
    }


    return (
        <div className={'App'}>
            <Animation/>
            <Display uiNum={uiNumber}
                     maxValue={maxValue}
            />
            <Setting onStartValueChangeHandler={onStartValueChangeHandler}
                     onMaxValueChangeHandler={onMaxValueChangeHandler}
                     startValue={startValue}
                     maxValue={maxValue}

            />

            <Button
                buttonTitle={buttonsData.buttonTitle.apply}
                nameForDiv={buttonsData.className.confirmButton}
                disabled={buttonsData.buttonDisabled.confirm}
                onClickHandler={onConfirmClickHandler}
            />
            <Button
                buttonTitle={buttonsData.buttonTitle.inc}
                nameForDiv={buttonsData.className.incButton}
                disabled={buttonsData.buttonDisabled.inc}
                onClickHandler={onIncClickHandler}
            />

            <Button
                buttonTitle={buttonsData.buttonTitle.reset}
                nameForDiv={buttonsData.className.ResetButton}
                disabled={buttonsData.buttonDisabled.reset}
                onClickHandler={onResetClickHandler}
            />

        </div>
    )
}

export default App;
