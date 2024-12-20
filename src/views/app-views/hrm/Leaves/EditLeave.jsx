import React, { useEffect } from 'react';
import moment from 'moment';

import { Form, Input, Button, DatePicker, Select, message, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';
// import moment from 'moment';

const { Option } = Select;
const { TextArea } = Input;

const EditLeave = ({ editData }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize the form fields with the provided editData if available
    if (editData) {
      form.setFieldsValue({
        employee: editData.employee,
        leaveType: editData.leaveType,
        startDate: editData.startDate ? moment(editData.startDate, 'DD-MM-YYYY') : null,
        endDate: editData.endDate ? moment(editData.endDate, 'DD-MM-YYYY') : null,
        leaveReason: editData.leaveReason,
        remark: editData.remark,
      });
    }
  }, [editData, form]);

  const onFinish = (values) => {
    console.log('Updated values:', values);
    message.success('Leave updated successfully!');
    navigate('/app/hrm/leave');
  };

  const onFinishFailed = (errorInfo) => {
    console.error('Form submission failed:', errorInfo);
    message.error('Please fill out all required fields.');
  };

  return (
    <div className="edit-leave-form">
      <Form
        layout="vertical"
        form={form}
        name="edit-leave"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <hr style={{ marginBottom: '20px', border: '1px solid #e8e8e8' }} />

        <Row gutter={16}>
          {/* Employee */}
          <Col span={24}>
            <Form.Item
              name="employee"
              label="Employee"
              rules={[{ required: true, message: 'Please select an employee.' }]}
            >
              <Select placeholder="Select Employee">
                <Option value="employee1">Employee 1</Option>
                <Option value="employee2">Employee 2</Option>
                <Option value="employee3">Employee 3</Option>
              </Select>
            </Form.Item>
          </Col>

          {/* Leave Type */}
          <Col span={24}>
            <Form.Item
              name="leaveType"
              label="Leave Type"
              rules={[{ required: true, message: 'Please select leave type.' }]}
            >
              <Select placeholder="Select Leave Type">
                <Option value="sick">Sick Leave</Option>
                <Option value="casual">Casual Leave</Option>
                <Option value="annual">Annual Leave</Option>
              </Select>
            </Form.Item>
          </Col>

          {/* Start and End Date */}
          <Col span={12}>
            <Form.Item
              name="startDate"
              label="Start Date"
              rules={[{ required: true, message: 'Start Date is required.' }]}
            >
              <DatePicker style={{ width: '100%' }} format="DD-MM-YYYY" placeholder="dd-mm-yyyy" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="endDate"
              label="End Date"
              rules={[{ required: true, message: 'End Date is required.' }]}
            >
              <DatePicker style={{ width: '100%' }} format="DD-MM-YYYY" placeholder="dd-mm-yyyy" />
            </Form.Item>
          </Col>

          {/* Leave Reason */}
          <Col span={24}>
            <Form.Item
              name="leaveReason"
              label="Leave Reason"
              rules={[{ required: true, message: 'Please provide a leave reason.' }]}
            >
              <TextArea rows={4} placeholder="Leave Reason" />
            </Form.Item>
          </Col>

          {/* Remark */}
          <Col span={24}>
            <Form.Item
              name="remark"
              label="Remark"
              rules={[{ required: true, message: 'Please provide a remark.' }]}
            >
              <TextArea rows={4} placeholder="Leave Remark" />
            </Form.Item>
          </Col>
        </Row>

        {/* Form Buttons */}
        <Form.Item>
          <div className="form-buttons text-right">
            <Button
              type="default"
              className="mr-2"
              onClick={() => navigate('/app/hrm/leave')}
            >
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditLeave;
