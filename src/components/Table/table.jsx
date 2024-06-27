import React, {useCallback, useMemo, useState} from 'react';
import {Table} from "@iqueue/ui-kit";
import UserModal from '../Modal/userModal'
import readData from "../../fetch/readData";

function MyTable({addOpen, addClose}) {
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [userData, setUserData] = useState([])
  const [userId, setUserId] = useState('')
  const { data } = readData()
  function prop(p, obj) {
    return p.split('.').reduce((o, i) => (o ? o[i] : undefined), obj);
  }

  const sortText = useCallback((direction, p, a, b) => {
    let [c, d] = direction === 'ASC' ? [b, a] : [a, b]
    return ('' + prop(p, c)).localeCompare(prop(p, d))
  }, []);

  const schema = useMemo(() => [
    {
      key: 'firstName',
      title: 'First name',
      width: '15rem',
      render: a => <h6>{a}</h6>,
      center: true,
      sort: sortText,
      filter: (val, item) => item.firstName.toLowerCase().includes(val.toLowerCase())
    },
    {
      key: 'lastName',
      title: 'Last name',
      width: '15rem',
      render: b => <h6>{b}</h6>,
      center: true
    },
    {
      key: 'gender',
      title: 'Gender',
      width: '10rem',
      render: (a) => <h6>{a}</h6>,
      filterItems: ['male', 'female', 'other'],
      filterItemRender: (value) => ({
        key: value,
        title: value,
        inputTitle: value[0]
      }),
      filter: (val, item) => {
        if (val.length === 0) return true;
        return val.includes(item.gender);
      },
      center: true
    },
    {
      key: 'createdAt',
      title: 'Created Date',
      render: d => <h6>{d}</h6>,
      center: true
    },
    {
      key: 'eventAttendance',
      title: 'Event Attendance',
      width: '10rem',
      render: e => <h6>{e}</h6>,
      center: true
    },
    {
      key: 'dinnerParty',
      title: 'Dinner Party',
      width: '10rem',
      render: f => <h6>{f}</h6>,
      center: true
    },
    {
      key: 'coffeeBreak',
      title: 'Coffee Break',
      width: '10rem',
      render: e => <h6>{e}</h6>,
      center: true
    },
    {
      key: 'others',
      title: 'Others',
      width: '10rem',
      render: h => <h6>{h}</h6>,
      center: true
    }
  ], [sortText])
  return <>
    <Table
      entries={data}
      minWidth={'100rem'}
      schema={schema}
      indexable
      onRowClick={(item) => {
        setUserData(item)
        setIsEditOpen(true)
        setUserId(item.id)
      }}
    />

    <UserModal
      item={userData}
      addOpen={addOpen}
      addClose={addClose}
      editOpen={isEditOpen}
      editClose={setIsEditOpen}
      userId={userId}
    />
  </>
}

export default MyTable;
