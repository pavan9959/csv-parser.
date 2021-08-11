import React from "react"

const Report=(props)=>{
    const {data}=props
    console.log(data)

    const host=()=>{
        let result
        data.map((ele)=>{
            if(ele.guest==="No"){
                result=ele.name
            }
        })
        return result
    }

    const find=()=>{
        const result=data.find((ele)=>{
            if (ele.guest==="No")
                    {return ele}
        })
        return result.duration
    }

    const time=(t)=>{
        let num=t
        let hours=(num/60)
        let remaining_hr=Math.floor(hours)
        let minutes=(hours-remaining_hr)*60
        let remaining_min=Math.round(minutes)
        return `${num} minutes (${remaining_hr} hour and ${remaining_min} minutes)`
    }

    return <div>
                <h1>Report</h1>
                <h3>Host-{host()}</h3>
                <h3>Total participants-{data.length}</h3>
                <h3>Duration-{time(find())}</h3><hr/>
               
        </div>
}

export default Report