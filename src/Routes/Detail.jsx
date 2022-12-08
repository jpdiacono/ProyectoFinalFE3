import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {

  let {odontologoid}= useParams()
  const [odonto, setOdonto] = useState([])
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${odontologoid}`)
    .then (res => setOdonto(res.data))
    .catch(err=> console.log(err))
  }, [])

  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>
        <tr>
          <td>{odonto.name}</td>
          <td>{odonto.email}</td>
          <td>{odonto.phone}</td>
          <td>{odonto.website}</td>
        </tr>
    </table>
    </>
  )
}

export default Detail