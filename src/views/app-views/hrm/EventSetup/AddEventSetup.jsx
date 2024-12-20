import React from 'react';
import { Form, Input, Button, DatePicker, Select, TimePicker, message, Row, Col } from 'antd';
import moment from 'moment';
import ReactQuill from 'react-quill'
const { Option } = Select;

const AddEventSetUp = ({ onAddEvent }) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
      const formattedData = {
        id: Date.now(),
        branch:values.branch,
        department: values.department,
        employee: values.employee,
        title: values.title,
        date: values.eventsetupDate.format('YYYY-MM-DD'),
        description: values.description
      };
  
      onAddEvent(formattedData);
      message.success('Event scheduled successfully!');
    };
  
    return (
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <hr style={{ marginBottom: '20px', border: '1px solid #e8e8e8' }} />
        <Row gutter={16}>
        <Col span={8}>
            <Form.Item
              name="branch"
              label="Branch"
              rules={[{ required: true, message: 'Please select an Branch.' }]}
            >
              <Select placeholder="Select Branch">
                <Option value="India">India</Option>
                <Option value="Canada">Canada</Option>
                <Option value="France">France</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="department"
              label="Department"
              rules={[{ required: true, message: 'Please select an Department.' }]}
            >
              <Select placeholder="Select Designation">
                <Option value="Select Designation">Select Designation</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="employee"
              label="Employee"
              rules={[{ required: true, message: 'Please select an Employee.' }]}
            >
              <Select placeholder="Select Employee">
                <Option value="Select Employee">Select Employee</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="title"
              label="Event Title"
              rules={[{ required: true, message: 'Please provide a title for the event.' }]}
            >
              <Input placeholder="Event Title" />
            </Form.Item>
          </Col>
          
          {/* <Col span={12}>
            <Form.Item
              name="eventmanager"
              label="EventManager"
              rules={[{ required: true, message: 'Please select an EventManager.' }]}
            >
              <Select placeholder="Select EventManager">
                <Option value="Candice">Candice</Option>
                <Option value="John Doe">John Doe</Option>
              </Select>
            </Form.Item>
          </Col> */}
          <Col span={12}>
            <Form.Item
              name="eventstartdate"
              label="Event Start Date"
              rules={[{ required: true, message: 'Please select an event date.' }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="eventenddate"
              label="Event End Date"
              rules={[{ required: true, message: 'Please select an event date.' }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="color"
              label="Event Select Color"
              rules={[{ required: true, message: 'Please select Event Color.' }]}
            >
              {/* <Input placeholder="Event Title" /> */}
              <Button htmlType="" className='me-1 bg-cyan-500'></Button>
              <Button htmlType="" className='me-1 bg-orange-400'></Button>
              <Button htmlType="" className='me-1 bg-rose-500'></Button>
              <Button htmlType="" className='me-1 bg-lime-400'></Button>
              <Button htmlType="" className='bg-blue-800'></Button>
              
            </Form.Item>
          </Col>
          <Col span={24}>
             <Form.Item name="description" label="Event Description" rules={[{ required: true }]}>
               <ReactQuill placeholder="Enter Event Description" />
             </Form.Item>
           </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Event
          </Button>
        </Form.Item>
      </Form>
    );
};

export default AddEventSetUp;



