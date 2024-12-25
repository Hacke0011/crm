import React from 'react';
import { Form, Input, Button, DatePicker, Select, message, Row, Col, Checkbox ,TimePicker} from 'antd';
import { useNavigate } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

const { Option } = Select;

const AddMeeting = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Submitted values:', values);
    message.success('Job added successfully!');
    navigate('/app/hrm/meeting');
  };

  return (
    <div className="add-job-form">
      {/* <h2 className="mb-4">Create Contract</h2> */}
      <Form
        layout="vertical"
        form={form}
        name="add-job"
        onFinish={onFinish}
      >
              <hr style={{ marginBottom: '20px', border: '1px solid #e8e8e8' }} />

        <Row gutter={16}>
          {/* <Col span={24}>
            <Form.Item name="branch" label="Branch*" rules={[{ required: true, message: 'Please enter a branch.' }]}>
            <Select placeholder="Select Branch">
                <Option value="all">All</Option>
                <Option value="branch1">Branch 1</Option>
              </Select>
            </Form.Item>
          </Col> */}

          <Col span={24}>
            <Form.Item name="department" label="Department" rules={[{ required: true, message: 'Please select a Department.' }]}>
              <Select placeholder="Select Department">
                <Option value="all">All</Option>
                <Option value="branch1">Branch 1</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name="employee" label="Employee" rules={[{ required: true, message: 'Please select a Employee.' }]}>
              <Select placeholder="Select Employee">
                <Option value="it">IT</Option>
                <Option value="hr">HR</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name="meetingtitle" label="Meeting Title" rules={[{ required: true, message: 'Please enter Meeting Title.' }]}>
              <Input placeholder="Enter Meeting Title" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="meetingdate" label="Meeting Date" rules={[{ required: true, message: 'Meeting date is required.' }]}>
              <DatePicker style={{ width: '100%' }} format="DD-MM-YYYY" />
            </Form.Item>
          </Col>

          {/* <Col span={12}>
            <Form.Item name="endDate" label="End Date" rules={[{ required: true, message: 'End date is required.' }]}>
              <DatePicker style={{ width: '100%' }} format="DD-MM-YYYY" />
            </Form.Item>
          </Col> */}

          <Col span={12}>
            <Form.Item name="meetingtime" label="Meeting Time" rules={[{ required: true, message: 'Please enter Meeting Time.' }]}>
            <TimePicker style={{ width: '100%' }} format="HH:mm" />
              {/* <Input placeholder="Enter Meeting Time" /> */}
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name="meetingnote" label="Meeting Note" rules={[{ required: true }]}>
              <ReactQuill placeholder="Write here..." />
            </Form.Item>
          </Col>


        </Row>

        <Form.Item>
          <div className="form-buttons text-right">
            <Button type="default" className="mr-2" onClick={() => navigate('/app/hrm/meeting')}>Cancel</Button>
            <Button type="primary" htmlType="submit">Create</Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddMeeting;