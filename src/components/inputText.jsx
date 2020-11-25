import React from 'react';


const InputText = props => {
    return (
        <React.Fragment>
            <div className='containeur'>
                <div className='ligne'>
                    <div className='col'>
                        <label htmlFor="{props.name}">{props.label}</label>
                    </div>
                </div>
                <div className="col">
                    <input type="text" name={props.name} value={props.value} onChange={evt => props.onChange(evt, props.name)}/>
                </div>
            </div>
        </React.Fragment>
    );
};
export default InputText;
