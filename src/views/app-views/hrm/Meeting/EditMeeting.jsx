import React, { useEffect } from 'react';
import { Form, Input, Button, DatePicker, Select, message, Row, Col, TimePicker } from 'antd';
import { useNavigate } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import moment from 'moment';

const { Option } = Select;

const EditMeeting = ({ editData }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize the form with editData
    if (editData) {
      form.setFieldsValue({
       
        meetingtitle: editData.meetingtitle,
        meetingdate: editData.meetingdate ? moment(editData.meetingdate, 'DD-MM-YYYY') : null,
        meetingtime: editData.meetingtime ? moment(editData.meetingtime, 'HH:mm') : null,
        meetingnote: editData.meetingnote,
      });
    }
  }, [editData, form]);

  const onFinish = (values) => {
    console.log('Updated values:', values);
    message.success('Meeting updated successfully!');
    navigate('/app/hrm/meeting');
  };

  return (
    <div className="edit-meeting-form">
      <Form
        layout="vertical"
        form={form}
        name="edit-meeting"
        onFinish={onFinish}
      >
        <hr style={{ marginBottom: '20px', border: '1px solid #e8e8e8' }} />

        <Row gutter={16}>
          
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

          <Col span={12}>
            <Form.Item name="meetingtime" label="Meeting Time" rules={[{ required: true, message: 'Please enter Meeting Time.' }]}>
              <TimePicker style={{ width: '100%' }} format="HH:mm" />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name="meetingnote" label="Meeting Note" rules={[{ required: true }]}>
              <ReactQuill value={editData?.meetingnote || ''} placeholder="Write here..." />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <div className="form-buttons text-right">
            <Button type="default" className="mr-2" onClick={() => navigate('/app/hrm/meeting')}>Cancel</Button>
            <Button type="primary" htmlType="submit">Update</Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditMeeting;
