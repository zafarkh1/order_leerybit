import { useState, useEffect } from 'react'
import { apiGet } from './api'

function ReadData() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await apiGet();
        setData(userData);
      } catch (err) {
        console.error("Fetch data error: ", err);
      }
    }

    fetchData().catch(err => console.log(err))
  }, []);
  return { data, setData }
}

export default ReadData
