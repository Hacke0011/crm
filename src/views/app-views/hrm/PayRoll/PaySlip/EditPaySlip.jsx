import React, { useEffect } from 'react';
import { Form, Input, Button, DatePicker, Select, message, Row, Col, Checkbox } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import moment from 'moment';

const { Option } = Select;

const EditPaySlip = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { id } = useParams(); // Assuming the route includes an ID, e.g., /edit-payslip/:id

  useEffect(() => {
    // Mock API call to fetch payslip data. Replace with real API call.
    const fetchPaySlip = async () => {
      const mockData = {
        jobTitle: 'Software Engineer',
        branch: 'branch1',
        jobCategory: 'it',
        positions: 3,
        startDate: '2023-12-01',
        endDate: '2024-12-01',
        skills: 'React, Node.js, CSS',
        jobDescription: '<p>Develop software applications...</p>',
        jobRequirement: '<p>Experience with JavaScript frameworks...</p>',
        additionalOptions: ['gender', 'dob'],
      };

      form.setFieldsValue({
        ...mockData,
        startDate: moment(mockData.startDate),
        endDate: moment(mockData.endDate),
      });
    };

    fetchPaySlip();
  }, [form, id]);

  const onFinish = (values) => {
    console.log('Updated values:', values);
    message.success('Pay slip updated successfully!');
    navigate('/app/hrm/jobs');
  };

  return (
    <div className="edit-payslip-form">
      <Form
        layout="vertical"
        form={form}
        name="edit-payslip"
        onFinish={onFinish}
      >
        <h2 className="mb-4 border-b pb-2 font-medium"></h2>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="jobTitle" label="Job Title" rules={[{ required: true, message: 'Please enter a job title.' }]}>
              <Input placeholder="Enter Job Title" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="branch" label="Branch" rules={[{ required: true, message: 'Please select a branch.' }]}>
              <Select placeholder="Select Branch">
                <Option value="all">All</Option>
                <Option value="branch1">Branch 1</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="jobCategory" label="Job Category" rules={[{ required: true, message: 'Please select a category.' }]}>
              <Select placeholder="Select Job Category">
                <Option value="it">IT</Option>
                <Option value="hr">HR</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="positions" label="Positions" rules={[{ required: true, message: 'Please enter positions.' }]}>
              <Input placeholder="Enter Positions" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="startDate" label="Start Date" rules={[{ required: true, message: 'Start date is required.' }]}>
              <DatePicker style={{ width: '100%' }} format="DD-MM-YYYY" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="endDate" label="End Date" rules={[{ required: true, message: 'End date is required.' }]}>
              <DatePicker style={{ width: '100%' }} format="DD-MM-YYYY" />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name="skills" label="Skill" rules={[{ required: true, message: 'Please enter skills.' }]}>
              <Input placeholder="Enter Skills" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="jobDescription" label="Job Description" rules={[{ required: true }]}>
              <ReactQuill placeholder="Write here..." />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="jobRequirement" label="Job Requirement" rules={[{ required: true }]}>
              <ReactQuill placeholder="Write here..." />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Checkbox.Group>
              <Row>
                <Col span={6}><Checkbox value="gender">Gender</Checkbox></Col>
                <Col span={6}><Checkbox value="dob">Date of Birth</Checkbox></Col>
                <Col span={6}><Checkbox value="country">Country</Checkbox></Col>
                <Col span={6}><Checkbox value="profileImage">Profile Image</Checkbox></Col>
              </Row>
            </Checkbox.Group>
          </Col>
        </Row>

        <Form.Item>
          <div className="form-buttons text-right">
            <Button type="default" className="mr-2" onClick={() => navigate('/app/hrm/jobs')}>Cancel</Button>
            <Button type="primary" htmlType="submit">Update</Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditPaySlip;
