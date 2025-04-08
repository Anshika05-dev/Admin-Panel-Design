import './styles/antd.css'
import React from 'react';
import { Table } from 'antd';

const data = [
  {
    key: '1',
    client: 'Alice Johnson',
    salon: 'Glamour Studio',
    mobile: '9876543210',
  },
  {
    key: '2',
    client: 'Brian Lee',
    salon: 'Urban Glow',
    mobile: '9123456789',
  },
  {
    key: '3',
    client: 'Cathy Smith',
    salon: 'Nail Nest',
    mobile: '9988776655',
  },
];

const Bookings = () => {
  const columns = [
    {
      title: 'Client Name',
      dataIndex: 'client',
      key: 'client',
    },
    {
      title: 'Salon Booked',
      dataIndex: 'salon',
      key: 'salon',
    },
    {
      title: 'Mobile Number',
      dataIndex: 'mobile',
      key: 'mobile',
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default Bookings;
