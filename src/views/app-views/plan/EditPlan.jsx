import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, Switch, Row, Col } from 'antd';

const { Option } = Select;

const EditPlan = ({ planData, onUpdate }) => {
  const [form] = Form.useForm();
  const [isTrialEnabled, setIsTrialEnabled] = useState(planData?.trial || false);

  useEffect(() => {
    // Populate the form with the existing plan data
    form.setFieldsValue(planData);
  }, [planData, form]);

  const handleSubmit = (values) => {
    console.log('Updated Plan:', values);
    onUpdate(values); // Call the provided callback with updated plan data
  };

  const handleTrialToggle = (checked) => {
    setIsTrialEnabled(checked);
  };

  return (
    <div>
      {/* <h2>Edit Plan</h2> */}
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        onValuesChange={(changedValues) => {
          if ('trial' in changedValues) {
            handleTrialToggle(changedValues.trial);
          }
        }}
      >

      <hr style={{ marginBottom: "20px", border: "1px solid #e8e8e8" }} />

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Please enter the plan name!' }]}
            >
              <Input placeholder="Enter Plan Name" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="price"
              label="Price"
              rules={[{ required: true, message: 'Please enter the plan price!' }]}
            >
              <Input placeholder="Enter Plan Price" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="duration"
              label="Duration"
              rules={[{ required: true, message: 'Please select a duration!' }]}
            >
              <Select>
                <Option value="Lifetime">Lifetime</Option>
                <Option value="Yearly">Yearly</Option>
                <Option value="Monthly">Monthly</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="maxUsers"
              label="Maximum Users"
              rules={[{ required: true, message: 'Please enter the maximum users!' }]}
            >
              <Input placeholder="Enter Maximum Users" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="maxCustomers"
              label="Maximum Customers"
              rules={[{ required: true, message: 'Please enter the maximum customers!' }]}
            >
              <Input placeholder="Enter Maximum Customers" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="maxVendors"
              label="Maximum Vendors"
              rules={[{ required: true, message: 'Please enter the maximum vendors!' }]}
            >
              <Input placeholder="Enter Maximum Vendors" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="maxClients"
              label="Maximum Clients"
              rules={[{ required: true, message: 'Please enter the maximum clients!' }]}
            >
              <Input placeholder="Enter Maximum Clients" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="storageLimit"
              label="Storage Limit (MB)"
              rules={[{ required: true, message: 'Please enter the storage limit!' }]}
            >
              <Input placeholder="Maximum Storage Limit" suffix="MB" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: 'Please enter a description!' }]}
        >
          <Input.TextArea placeholder="Enter Description" rows={4} />
        </Form.Item>

        <Form.Item name="trial" label="Trial is enabled (on/off)" valuePropName="checked">
          <Switch />
        </Form.Item>

        {isTrialEnabled && (
          <Form.Item
            name="trialDays"
            label="Trial Days"
            rules={[{ required: true, message: 'Please enter the number of trial days!' }]}
          >
            <Input placeholder="Enter Number of Trial Days" />
          </Form.Item>
        )}

        <Form.Item label="Modules">
          <Row gutter={16}>
            <Col span={4}><Switch checked={planData?.modules?.CRM} /> CRM</Col>
            <Col span={4}><Switch checked={planData?.modules?.Project} /> Project</Col>
            <Col span={4}><Switch checked={planData?.modules?.HRM} /> HRM</Col>
            <Col span={4}><Switch checked={planData?.modules?.Account} /> Account</Col>
            <Col span={4}><Switch checked={planData?.modules?.POS} /> POS</Col>
            <Col span={4}><Switch checked={planData?.modules?.ChatGPT} /> Chat GPT</Col>
          </Row>
        </Form.Item>

        <Form.Item>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button style={{ marginRight: '8px' }} onClick={() => form.resetFields()}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              Save Changes
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditPlan;
