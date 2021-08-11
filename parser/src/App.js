import React, { useState } from 'react'
import CSVReader from 'react-csv-reader'
import { Button } from 'semantic-ui-react'
import Table from "./Table"
import Chart from "./Chart"
import Report from './Report'


const Upload = (props) => {

    const [data,setData]=useState([])
    let arr
    
    
    const loadFiles=(cvs_data)=>{
      
        const result=cvs_data.map((ele)=>{
            return { ...{name:ele["Name (Original Name)"]},
                     ...{email:ele["User Email"]},
                     ...{duration:ele["Total Duration (Minutes)"]},
                     ...{guest:ele["Guest"]} 
                  }
        }) 
        arr=result
    } 
    
    const handelclick=(arr)=>{
      setData(arr)
    }

    return (
        <div style={{marginTop:'40px'}}>
             <div style={{display:'flex',justifyContent:'center'}}>

                <CSVReader
                    inputStyle={{color: 'blue',width:'200px'}}
                    inputId="selectFile"
                    parserOptions={{ header: true }}
                    onFileLoaded={loadFiles}
                />
                <button onClick={()=>{handelclick(arr)}}>upload</button><hr/>
                </div>

                {data.length>0 && <Report data={data}/>}

                <div style={{display:'flex'}} >
                {data.length>0 && <Table data={data} />}
                {data.length>0 && <Chart data={data}/>}
                </div>
 
             
        </div>
    )
}

export default Upload