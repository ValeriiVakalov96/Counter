type PropsType = {
    uiNum: number
    maxValue: number
}


export const Display = (props: PropsType) => {
    return (
        <div className={props.uiNum === props.maxValue ? 'DisplayIncorrect' : 'Display'}>
            {/*props.uiNum === props.maxValue ? 'DisplayIncorrect' : 'Display'*/}
            {props.uiNum}
        </div>
    )
}