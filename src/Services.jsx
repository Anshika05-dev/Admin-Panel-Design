import './styles/antd.css'
import React, { useState } from 'react';
import {
  Table,
  Button,
  Space,
  Popconfirm,
  message,
  Modal,
  Form,
  Input,
} from 'antd';

const initialData = [
  {
    key: '1',
    name: 'Haircut',
    artist: 'Alex',
    duration: '30 mins',
  },
  {
    key: '2',
    name: 'Manicure',
    artist: 'Bella',
    duration: '45 mins',
  },
  {
    key: '3',
    name: 'Facial',
    artist: 'Chris',
    duration: '1 hour',
  },
];

const Services = () => {
  const [data, setData] = useState(initialData);
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingKey, setEditingKey] = useState(null);

  const showAddModal = () => {
    setIsEditing(false);
    form.resetFields();
    setIsModalVisible(true);
  };

  const showEditModal = record => {
    setIsEditing(true);
    setEditingKey(record.key);
    form.setFieldsValue({
      name: record.name,
      artist: record.artist,
      duration: record.duration,
    });
    setIsModalVisible(true);
  };

  const handleDelete = key => {
    setData(prev => prev.filter(item => item.key !== key));
    message.success('Service deleted');
  };

  const handleModalOk = () => {
    form
      .validateFields()
      .then(values => {
        if (isEditing) {
          setData(prev =>
            prev.map(item =>
              item.key === editingKey ? { ...item, ...values } : item
            )
          );
          message.success('Service updated');
        } else {
          const newKey = Date.now().toString();
          setData(prev => [...prev, { key: newKey, ...values }]);
          message.success('Service added');
        }
        form.resetFields();
        setIsModalVisible(false);
      })
      .catch(info => {
        console.log('Validation Failed:', info);
      });
  };

  const handleModalCancel = () => {
    form.resetFields();
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: 'Service Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Artist',
      dataIndex: 'artist',
      key: 'artist',
    },
    {
      title: 'Duration',
      dataIndex: 'duration',
      key: 'duration',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button type="link" onClick={() => showEditModal(record)}>Edit</Button>
          <Popconfirm
            title="Are you sure you want to delete this service?"
            onConfirm={() => handleDelete(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Button className='add_button' onClick={showAddModal}>Add Service</Button>
      </div>

      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
      />

<Modal
        title={isEditing ? 'Edit Service' : 'Add New Service'}
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        okText={isEditing ? 'Update' : 'Add'}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Service Name"
            rules={[{ required: true, message: 'Please enter the service name' }]}
          >
            <Input placeholder="e.g. Haircut" />
          </Form.Item>
          <Form.Item
            name="artist"
            label="Artist"
            rules={[{ required: true, message: 'Please enter the artist name' }]}
          >
            <Input placeholder="e.g. John Doe" />
          </Form.Item>
          <Form.Item
            name="duration"
            label="Duration"
            rules={[{ required: true, message: 'Please enter the duration' }]}
          >
            <Input placeholder="e.g. 30 mins" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Services;