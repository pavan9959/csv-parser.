import React from "react"

const Table=(props)=>{
    const {data}=props

    const host=()=>{
        let result
        data.map((ele)=>{
            if(ele.guest==="No"){
                result=ele.name
            }
        })
        return result
    }

    return <div>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((ele,i)=>{
                            return <tr key={i}>
                                        <td>{ele.name}</td>
                                        <td>{ele.email}</td>
                                        <td>{ele.duration}</td>
                                   </tr>
                        })}
                    </tbody>
                </table>
        </div>
}

export default Table 