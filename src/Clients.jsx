import './styles/antd.css'
import React from 'react';
import { Table } from 'antd';

const data = [
  {
    key: '1',
    client: 'Alice Johnson',
    reviews: 'Great service, very professional!',
    mobile: '9876543210',
  },
  {
    key: '2',
    client: 'Brian Lee',
    reviews: 'Friendly staff and clean salon.',
    mobile: '9123456789',
  },
  {
    key: '3',
    client: 'Cathy Smith',
    reviews: 'Loved the facial! Will visit again.',
    mobile: '9988776655',
  },
];

const Clients = () => {
  const columns = [
    {
      title: 'Client Name',
      dataIndex: 'client',
      key: 'client',
    },
    {
      title: 'Reviews',
      dataIndex: 'reviews',
      key: 'reviews',
    },
    {
      title: 'Client Mobile Number',
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

export default Clients;