import { COUNT_TOTAL_RESULT,
        FETCH_ERROR, 
        FETCH_JOBS_ID_SUCCESS,
         FETCH_LOADING, 
         FETCH_SUCCESS } from "./actionTypes"

const init = {
    isLoading :false,
    isError:false,
    searched:[],
    jobsById:{},
    totalCount:null
}




export const searchReducer = (state=init, {type,payload}) =>{
    switch(type){
        case FETCH_LOADING:
            return{
                ...state,
                isLoading:true,
                isError:false
            }
        case FETCH_ERROR:
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        case FETCH_SUCCESS:
            return{
                ...state,
                isLoading:false,
                isError:false,
                searched:payload
            }
        
        case COUNT_TOTAL_RESULT:
            return{
                ...state,
                totalCount:payload
            }

        case FETCH_JOBS_ID_SUCCESS:
            return{
                ...state,
                jobsById:payload
            }

        default:
            return state
    }
}