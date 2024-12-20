import React from 'react';
import { Form, Input, Button, DatePicker, Select, Upload, Radio, message, Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const AddJobApplication = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form submitted:', values);
    message.success('Job application submitted successfully!');
  };

  return (
    <div>
      {/* <h2>Create New Job Application</h2> */}
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
      >

<hr style={{ marginBottom: '20px', border: '1px solid #e8e8e8' }} />

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item name="job" label="Job" rules={[{ required: true, message: 'Please select a job.' }]}>
              <Select placeholder="Select a Job">
                <Select.Option value="accounting">Highly Projected Growth for Accounting Jobs</Select.Option>
                {/* Add more options as needed */}
              </Select>
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter your name.' }]}>
              <Input placeholder="Enter Name" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email.' }]}>
              <Input placeholder="Enter Email" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="phone" label="Phone" rules={[{ required: true, message: 'Please enter your phone number.' }]}>
              <Input placeholder="Enter Phone (e.g., +91)" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="dob" label="Date of Birth" rules={[{ required: true, message: 'Please select your date of birth.' }]}>
              <DatePicker format="DD-MM-YYYY" style={{ width: '100%' }} />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="gender" label="Gender" rules={[{ required: true, message: 'Please select your gender.' }]}>
              <Radio.Group>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="country" label="Country" rules={[{ required: true, message: 'Please enter your country.' }]}>
              <Input placeholder="Enter Country" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="state" label="State" rules={[{ required: true, message: 'Please enter your state.' }]}>
              <Input placeholder="Enter State" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="city" label="City" rules={[{ required: true, message: 'Please enter your city.' }]}>
              <Input placeholder="Enter City" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="profile" label="Profile">
              <Upload>
                <Button icon={<UploadOutlined />}>Choose File</Button>
              </Upload>
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="cv" label="CV / Resume">
              <Upload>
                <Button icon={<UploadOutlined />}>Choose File</Button>
              </Upload>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name="coverLetter" label="Cover Letter">
              <TextArea rows={4} placeholder="Enter Cover Letter" />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name="weaknesses" label="What Do You Consider to Be Your Weaknesses?">
              <TextArea rows={2} placeholder="Write Here..." />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name="reason" label="Why Do You Want This Job?">
              <TextArea rows={2} placeholder="Write Here..." />
            </Form.Item>
          </Col>
        </Row>

        <div style={{ textAlign: 'right' }}>
          <Button onClick={() => form.resetFields()} style={{ marginRight: 8 }}>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddJobApplication;
