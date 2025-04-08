import './styles/antd.css'
import React from 'react';
import { Table } from 'antd';

const data = [
  {
    key: '1',
    recent: 'Haircut - 2 hrs ago',
    customer: 'Alice Johnson',
    salon: 'Glamour Studio',
  },
  {
    key: '2',
    recent: 'Facial - 1 day ago',
    customer: 'Brian Lee',
    salon: 'Urban Glow',
  },
  {
    key: '3',
    recent: 'Manicure - 3 days ago',
    customer: 'Cathy Smith',
    salon: 'Nail Nest',
  },
];

const Sales = () => {
  const columns = [
    {
      title: 'Recent Bookings',
      dataIndex: 'recent',
      key: 'recent',
    },
    {
      title: 'Customer Name',
      dataIndex: 'customer',
      key: 'customer',
    },
    {
      title: 'Salon Name',
      dataIndex: 'salon',
      key: 'salon',
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

export default Sales;
