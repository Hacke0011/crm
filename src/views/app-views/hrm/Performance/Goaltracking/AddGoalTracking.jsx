import React from 'react';
import { Form, Input, Button, DatePicker, Select, Rate, message, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;
const { TextArea } = Input;

const AddGoalTracking = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Submitted values:', values);
    message.success('Goal added successfully!');
    navigate('/app/hrm/goaltracking');
  };

  const onFinishFailed = (errorInfo) => {
    console.error('Form submission failed:', errorInfo);
    message.error('Please fill out all required fields.');
  };

  return (
    <div className="add-goal-tracking">
      {/* <h2 className="mb-4">Create New Goal Tracking</h2> */}
      <hr style={{ marginBottom: '20px', border: '1px solid #e8e8e8' }} />

      <Form
        layout="vertical"
        form={form}
        name="add-goal-tracking"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="branch"
              label="Branch"
              rules={[{ required: true, message: 'Please select a branch' }]}
            >
              <Select placeholder="Select Branch">
                <Option value="branch1">Branch 1</Option>
                <Option value="branch2">Branch 2</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="goalType"
              label="Goal Types"
              rules={[{ required: true, message: 'Please select a goal type' }]}
            >
              <Select placeholder="Select Goal Type">
                <Option value="type1">Type 1</Option>
                <Option value="type2">Type 2</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="startDate"
              label="Start Date"
              rules={[{ required: true, message: 'Please select a start date' }]}
            >
              <DatePicker format="DD-MM-YYYY" style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="endDate"
              label="End Date"
              rules={[{ required: true, message: 'Please select an end date' }]}
            >
              <DatePicker format="DD-MM-YYYY" style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="subject"
              label="Subject"
              rules={[{ required: true, message: 'Please enter a subject' }]}
            >
              <Input placeholder="Enter Subject" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="targetAchievement"
              label="Target Achievement"
              rules={[{ required: true, message: 'Please enter target achievement' }]}
            >
              <Input placeholder="Enter Target Achievement" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true, message: 'Please enter a description' }]}
            >
              <TextArea placeholder="Enter Description" rows={4} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="status"
              label="Status"
              rules={[{ required: true, message: 'Please select a status' }]}
            >
              <Select placeholder="Select Status">
                <Option value="notStarted">Not Started</Option>
                <Option value="inProgress">In Progress</Option>
                <Option value="completed">Completed</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="rating"
              label="Rating"
              rules={[{ required: true, message: 'Please provide a rating' }]}
            >
              <Rate />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <div className="text-right">
            <Button type="default" className="mr-2" onClick={() => navigate('/app/hrm/goaltracking')}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              Create
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddGoalTracking;









// import React from 'react';
// import { Form, Input, Button, DatePicker, Select, message, Row, Col } from 'antd';
// import { useNavigate } from 'react-router-dom';

// const { Option } = Select;

// const AddGoalTracking = () => {
//   const [form] = Form.useForm();
//   const navigate = useNavigate();

//   const onFinish = (values) => {
//     console.log('Submitted values:', values);
//     message.success('Goal added successfully!');
//     navigate('app/hrm/goaltracking')
//     // Navigate or perform additional actions here
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.error('Form submission failed:', errorInfo);
//     message.error('Please fill out all required fields.');
//   };

  

//   return (
//     <div className="add-employee">
//       <h2 className="mb-4">Add New Goal</h2>
//       <Form
//         layout="vertical"
//         form={form}
//         name="add-employee"
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//       >
//         {/* User Information */}
//         <Row gutter={16}>
//           <Col span={12}>
//             <Form.Item
//               name="firstName"
//               label="First Name"
//               rules={[{ required: true, message: 'First Name is required' }]}
//             >
//               <Input placeholder="John" />
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Form.Item
//               name="lastName"
//               label="Last Name"
//               rules={[{ required: true, message: 'Last Name is required' }]}
//             >
//               <Input placeholder="Doe" />
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Form.Item
//               name="username"
//               label="User Name"
//               rules={[{ required: true, message: 'User Name is required' }]}
//             >
//               <Input placeholder="john_doe" />
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Form.Item
//               name="password"
//               label="Password"
//               rules={[{ required: true, message: 'Password is required' }]}
//             >
//               <Input.Password placeholder="Strong Password" />
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Form.Item
//               name="email"
//               label="Email"
//               rules={[
//                 { required: true, message: 'Email is required' },
//                 { type: 'email', message: 'Please enter a valid email' },
//               ]}
//             >
//               <Input placeholder="johndoe@example.com" />
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Form.Item
//               name="phone"
//               label="Phone"
//               rules={[{ required: true, message: 'Phone is required' }]}
//             >
//               <Input placeholder="01500000000" />
//             </Form.Item>
//           </Col>
//         </Row>

//         {/* Address Information */}
//         {/* <Row gutter={16}>
//           <Col span={12}>
//             <Form.Item
//               name="street"
//               label="Street"
//               rules={[{ required: true, message: 'Street is required' }]}
//             >
//               <Input placeholder="123 Main Street" />
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Form.Item
//               name="city"
//               label="City"
//               rules={[{ required: true, message: 'City is required' }]}
//             >
//               <Input placeholder="Los Angeles" />
//             </Form.Item>
//           </Col>
//           <Col span={8}>
//             <Form.Item
//               name="state"
//               label="State"
//               rules={[{ required: true, message: 'State is required' }]}
//             >
//               <Input placeholder="CA" />
//             </Form.Item>
//           </Col>
//           <Col span={8}>
//             <Form.Item
//               name="zipCode"
//               label="Zip Code"
//               rules={[{ required: true, message: 'Zip Code is required' }]}
//             >
//               <Input placeholder="90211" />
//             </Form.Item>
//           </Col>
//           <Col span={8}>
//             <Form.Item
//               name="country"
//               label="Country"
//               rules={[{ required: true, message: 'Country is required' }]}
//             >
//               <Input placeholder="USA" />
//             </Form.Item>
//           </Col>
//         </Row> */}

//         {/* Employee Information */}
//         {/* <Row gutter={16}>
//           <Col span={12}>
//             <Form.Item
//               name="joiningDate"
//               label="Joining Date"
//               rules={[{ required: true, message: 'Joining Date is required' }]}
//             >
//               <DatePicker style={{ width: '100%' }} />
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Form.Item name="leaveDate" label="Leave Date">
//               <DatePicker style={{ width: '100%' }} />
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Form.Item
//               name="employeeId"
//               label="Employee ID"
//               rules={[{ required: true, message: 'Employee ID is required' }]}
//             >
//               <Input placeholder="OE-012" />
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Form.Item
//               name="bloodGroup"
//               label="Blood Group"
//               rules={[{ required: true, message: 'Blood Group is required' }]}
//             >
//               <Select placeholder="Select Blood Group">
//                 <Option value="A+">A+</Option>
//                 <Option value="A-">A-</Option>
//                 <Option value="B+">B+</Option>
//                 <Option value="B-">B-</Option>
//                 <Option value="O+">O+</Option>
//                 <Option value="O-">O-</Option>
//                 <Option value="AB+">AB+</Option>
//                 <Option value="AB-">AB-</Option>
//               </Select>
//             </Form.Item>
//           </Col>
//         </Row> */}

//         {/* Designation & Salary Information */}
//         {/* <Row gutter={16}>
//           <Col span={12}>
//             <Form.Item
//               name="designation"
//               label="Designation"
//               rules={[{ required: true, message: 'Designation is required' }]}
//             >
//               <Select placeholder="Select Designation">
//                 <Option value="Manager">Manager</Option>
//                 <Option value="Developer">Developer</Option>
//                 <Option value="Designer">Designer</Option>
//               </Select>
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Form.Item
//               name="salary"
//               label="Salary"
//               rules={[{ required: true, message: 'Salary is required' }]}
//             >
//               <Input placeholder="$" type="number" />
//             </Form.Item>
//           </Col>
//         </Row> */}

//         <Form.Item>
//           <div className="text-right">
//             <Button type="default" className="mr-2" onClick={() => navigate('/app/hrm/employee')}>
//               Cancel
//             </Button>
//             <Button type="primary" htmlType="submit">
//               Submit
//             </Button>
//           </div>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default AddGoalTracking;
