import './styles/antd.css';
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
  Select,
} from 'antd';

const { Option } = Select;

const initialData = [
  {
    key: '1',
    name: 'Haircut',
    artist: 'Alex',
    category: 'Hair',
    price: 30,
    duration: '30 mins',
    status: 'Active',
  },
  {
    key: '2',
    name: 'Manicure',
    artist: 'Bella',
    category: 'Nails',
    price: 25,
    duration: '45 mins',
    status: 'Inactive',
  },
  {
    key: '3',
    name: 'Facial',
    artist: 'Chris',
    category: 'Skincare',
    price: 50,
    duration: '1 hour',
    status: 'Active',
  },
];

const Catalogs = () => {
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

  const showEditModal = (record) => {
    setIsEditing(true);
    setEditingKey(record.key);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  const handleDelete = (key) => {
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
    { title: 'Service Name', dataIndex: 'name', key: 'name' },
    { title: 'Artist', dataIndex: 'artist', key: 'artist' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (text) => `$${text}`,
    },
    { title: 'Duration', dataIndex: 'duration', key: 'duration' },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <span style={{ color: status === 'Active' ? 'green' : 'red' }}>
          {status}
        </span>
      ),
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
    <div className="p-6">
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={showAddModal}>Add Service</Button>
      </div>

      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
      />

      <Modal
        title={isEditing ? 'Edit Service' : 'Add New Service'}
        open={isModalVisible}
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
            name="category"
            label="Category"
            rules={[{ required: true, message: 'Please enter a category' }]}
          >
            <Input placeholder="e.g. Hair, Skincare" />
          </Form.Item>

          <Form.Item
            name="price"
            label="Price ($)"
            rules={[{ required: true, message: 'Please enter the price' }]}
          >
            <Input type="number" placeholder="e.g. 30" />
          </Form.Item>

          <Form.Item
            name="duration"
            label="Duration"
            rules={[{ required: true, message: 'Please enter the duration' }]}
          >
            <Input placeholder="e.g. 30 mins" />
          </Form.Item>

          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: 'Please select a status' }]}
          >
            <Select placeholder="Select status">
              <Option value="Active">Active</Option>
              <Option value="Inactive">Inactive</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Catalogs;
