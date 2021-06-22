import React, { useState, useEffect } from 'react'
import { Spin, Row } from 'antd'
import StudentCard from './card/StudentCard'
import service from '../../utils';
import { getManyStudents } from '../../utils/drafts/student.utils';
const { student, login } = service

const Cards = (props:any) => {
    const [studentsArray, setStudentsArray] = useState([])
    const [token, setToken] = useState(localStorage.getItem('token'))

    const { querry } = props
    console.log(querry);
    
    useEffect(() => {
        const tokenHandler = async () => {
            if (token) {
                const resFromToken = await login.getUserUseToken(token)
                if (resFromToken.success) {
                    // const data = await student.getAllStudents()
                   const data = await student.getManyStudents({})
console.log(data)

                   const filteredStudents =  data.filter((studentObj:any) => studentObj.programmingLang.includes(querry))
                   console.log(filteredStudents);
                   filteredStudents?setStudentsArray(filteredStudents):setStudentsArray(data)
                }
            }
        }
        tokenHandler();
    }, [token,studentsArray])
    return (
        (studentsArray.length < 1) ?
        // suspence
            <Spin size="large" />
            :
            <div >
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    {studentsArray.map((student, index) => <StudentCard key={index} num={index}  {...student} />)}
                </Row>
            </div>
    )
}

export default Cards
