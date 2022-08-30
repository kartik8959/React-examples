import {init} from '../utils/init';

export const reducer=(currData=init,newData)=>{
    switch(newData.type){
        case 'UPDATE_NAME':
            currData={
                ...currData,
                name:newData.name
            }
        break; 
        case 'UPDATE_LOC':
            currData={
                ...currData,
                loc:newData.loc
            }
        break; 
        case 'UPDATE_RUNS':
            currData={
                ...currData,
                runs:newData.runs
            }
        break; 
    }
  
    return currData;
}

