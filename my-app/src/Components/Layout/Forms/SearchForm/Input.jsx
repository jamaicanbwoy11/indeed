import { Box } from '@material-ui/core';
import React, { useState , useRef, useEffect} from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';


function Input({classes,setValue,value,options}) {
    const [display,setDisplay] = useState(false); 
    
    const wrapperRef = useRef(null);

    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);
        return () => {
          window.removeEventListener("mousedown", handleClickOutside);
        };
      });

      const handleClickOutside = event => {
        const { current: wrap } = wrapperRef;
        if (wrap && !wrap.contains(event.target)) {
          setDisplay(false);
        }
      };
      
    return (
        <Box  ref={wrapperRef} className={classes.suggestionInput}>
                                <OutlinedInput
                                className={classes.input }
                                onClick={()=>setDisplay(!display)}
                                value={value}
                                onChange={event => setValue(event.target.value)}
                                />
                                {
                                    display && (
                                        <div style={{position:'absolute'}} className={classes.autocontainer}>
                                            {
                                                options.filter(option => option.toLowerCase().indexOf(value.toLowerCase()) > -1).map((option,index)=>{
                                                    return (
                                                        <div key={index}
                                                        onClick={()=>{
                                                            setValue(option)
                                                            setDisplay(false)
                                                        }}
                                                        style={{cursor:'pointer'}}
                                                        >
                                                            <span style={{marginLeft:'15px'}}>
                                                                {option}
                                                            </span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                }
                            </Box>
    );
}

export default Input;