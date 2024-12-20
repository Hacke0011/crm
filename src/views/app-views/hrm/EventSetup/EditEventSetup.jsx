import React from 'react';
import { Form, Input, Button, DatePicker, Select, TimePicker, message, Row, Col } from 'antd';
// import moment from 'moment';
import ReactQuill from 'react-quill'
// const { Option } = Select;

const EditEventSetUp = ({ onEditEvent }) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
      const formattedData = {
        id: Date.now(),
        title: values.title,
        date: values.eventsetupDate.format('YYYY-MM-DD'),
        description: values.description,
      };
  
      onEditEvent(formattedData);
      message.success('Event scheduled successfully!');
    };
  
    return (
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <hr style={{ marginBottom: '20px', border: '1px solid #e8e8e8' }} />
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="title"
              label="Event Title"
              rules={[{ required: true, message: 'Please provide a title for the event.' }]}
            >
              <Input placeholder="Event Title" />
            </Form.Item>
          </Col>
        
          <Col span={12}>
            <Form.Item
              name="eventstartdate"
              label="Event Start Date"
              rules={[{ required: true, message: 'Please select start event date.' }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="eventenddate"
              label="Event End Date"
              rules={[{ required: true, message: 'Please select end event date.' }]}
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
            Update
          </Button>
        </Form.Item>
      </Form>
    );
};

export default EditEventSetUp;



