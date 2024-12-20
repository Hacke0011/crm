import React, { useEffect } from 'react';
import { Form, Input, Button, DatePicker, Select, TimePicker, message, Row, Col } from 'antd';
import moment from 'moment';

const { Option } = Select;

const EditInterview = ({ interviewData, onUpdateInterview }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    // Populate form with initial values when editing
    if (interviewData) {
      form.setFieldsValue({
        title: interviewData.title,
        interviewer: interviewData.interviewer,
        interviewDate: interviewData.date ? moment(interviewData.date, 'YYYY-MM-DD') : null,
        interviewTime: interviewData.time ? moment(interviewData.time, 'HH:mm') : null,
      });
    }
  }, [form, interviewData]);

  const onFinish = (values) => {
    const updatedData = {
      ...interviewData, // Preserve the existing interview ID or other properties
      title: values.title,
      interviewer: values.interviewer,
      date: values.interviewDate.format('YYYY-MM-DD'),
      time: values.interviewTime.format('HH:mm'),
    };

    onUpdateInterview(updatedData);
    message.success('Interview updated successfully!');
  };

  return (
    <Form layout="vertical" form={form} onFinish={onFinish}>
            <hr style={{ marginBottom: '20px', border: '1px solid #e8e8e8' }} />

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="title"
            label="Interview Title"
            rules={[{ required: true, message: 'Please provide a title for the interview.' }]}
          >
            <Input placeholder="Interview Title" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="interviewer"
            label="Interviewer"
            rules={[{ required: true, message: 'Please select an interviewer.' }]}
          >
            <Select placeholder="Select Interviewer">
              <Option value="Candice">Candice</Option>
              <Option value="John Doe">John Doe</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="interviewDate"
            label="Interview Date"
            rules={[{ required: true, message: 'Please select an interview date.' }]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="interviewTime"
            label="Interview Time"
            rules={[{ required: true, message: 'Please select an interview time.' }]}
          >
            <TimePicker style={{ width: '100%' }} />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Update Interview
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditInterview;
