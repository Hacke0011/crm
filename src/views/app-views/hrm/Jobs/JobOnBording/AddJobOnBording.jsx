import React from 'react';
import { Form, Input, Button, DatePicker, Select, message, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const AddJobOnBording = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Submitted values:', values);
    message.success('Job Candidate added successfully!');
    navigate('/app/hrm/jobcandidate');
  };

  return (
    <div className="add-job-form">
      {/* <h2 className="mb-4">Create New Job OnBoard</h2> */}
      <Form layout="vertical" form={form} name="add-job" onFinish={onFinish}>
      <hr style={{ marginBottom: '20px', border: '1px solid #e8e8e8' }} />

        <Row gutter={16}>
          {/* Interviewer */}
          <Col span={12}>
            <Form.Item
              name="interviewer"
              label="Interviewer"
              rules={[{ required: true, message: 'Please select an interviewer.' }]}
            >
              <Select placeholder="Select Interviewer">
                <Option value="interviewer1">Interviewer 1</Option>
                <Option value="interviewer2">Interviewer 2</Option>
              </Select>
            </Form.Item>
          </Col>

          {/* Joining Date */}
          <Col span={12}>
            <Form.Item
              name="joiningDate"
              label="Joining Date"
              rules={[{ required: true, message: 'Joining date is required.' }]}
            >
              <DatePicker style={{ width: '100%' }} format="DD-MM-YYYY" />
            </Form.Item>
          </Col>

          {/* Days of Week */}
          <Col span={12}>
            <Form.Item
              name="daysOfWeek"
              label="Days Of Week"
              rules={[{ required: true, message: 'Please enter days of the week.' }]}
            >
              <Input placeholder="Enter Days of Week" />
            </Form.Item>
          </Col>

          {/* Salary */}
          <Col span={12}>
            <Form.Item
              name="salary"
              label="Salary"
              rules={[{ required: true, message: 'Please enter salary.' }]}
            >
              <Input placeholder="Enter Salary" />
            </Form.Item>
          </Col>

          {/* Salary Type */}
          <Col span={12}>
            <Form.Item
              name="salaryType"
              label="Salary Type"
              rules={[{ required: true, message: 'Please select a salary type.' }]}
            >
              <Select placeholder="Select Salary Type">
                <Option value="hourly">Hourly Payslip</Option>
                <Option value="monthly">Monthly Payslip</Option>
              </Select>
            </Form.Item>
          </Col>

          {/* Salary Duration */}
          <Col span={12}>
            <Form.Item
              name="salaryDuration"
              label="Salary Duration"
              rules={[{ required: true, message: 'Please select a salary duration.' }]}
            >
              <Select placeholder="Select Salary Duration">
                <Option value="weekly">Weekly</Option>
                <Option value="biweekly">Biweekly</Option>
                <Option value="monthly">Monthly</Option>
              </Select>
            </Form.Item>
          </Col>

          {/* Job Type */}
          <Col span={12}>
            <Form.Item
              name="jobType"
              label="Job Type"
              rules={[{ required: true, message: 'Please select a job type.' }]}
            >
              <Select placeholder="Select Job Type">
                <Option value="fulltime">Full Time</Option>
                <Option value="parttime">Part Time</Option>
              </Select>
            </Form.Item>
          </Col>

          {/* Status */}
          <Col span={12}>
            <Form.Item
              name="status"
              label="Status"
              rules={[{ required: true, message: 'Please select a status.' }]}
            >
              <Select placeholder="Select Status">
                <Option value="active">Active</Option>
                <Option value="inactive">Inactive</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <div className="form-buttons text-right">
            <Button type="default" className="mr-2" onClick={() => navigate('/app/hrm/jobcandidate')}>
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

export default AddJobOnBording;












// import React from 'react';
// import { Form, Input, Button, DatePicker, Select, message, Row, Col } from 'antd';
// import { useNavigate } from 'react-router-dom';

// const { Option } = Select;

// const AddJobOnBording = () => {
//   const [form] = Form.useForm();
//   const navigate = useNavigate();

//   const onFinish = (values) => {
//     console.log('Submitted values:', values);
//     message.success('Job Candidate added successfully!');
//     navigate('/app/hrm/jobcandidate');
//   };

//   return (
//     <div className="add-job-form">
//       <h2 className="mb-4">Create New Job OnBoard</h2>
//       <Form layout="vertical" form={form} name="add-job" onFinish={onFinish}>
//         <Row gutter={16}>
//           {/* Interviewer */}
//           <Col span={12}>
//             <Form.Item
//               name="interviewer"
//               label="Interviewer"
//               rules={[{ required: true, message: 'Please select an interviewer.' }]}
//             >
//               <Select placeholder="Select Interviewer">
//                 <Option value="interviewer1">Interviewer 1</Option>
//                 <Option value="interviewer2">Interviewer 2</Option>
//               </Select>
//             </Form.Item>
//           </Col>

//           {/* Joining Date */}
//           <Col span={12}>
//             <Form.Item
//               name="joiningDate"
//               label="Joining Date"
//               rules={[{ required: true, message: 'Joining date is required.' }]}
//             >
//               <DatePicker style={{ width: '100%' }} format="DD-MM-YYYY" />
//             </Form.Item>
//           </Col>

//           {/* Days of Week */}
//           <Col span={12}>
//             <Form.Item
//               name="daysOfWeek"
//               label="Days Of Week"
//               rules={[{ required: true, message: 'Please enter days of the week.' }]}
//             >
//               <Input placeholder="Enter Days of Week" />
//             </Form.Item>
//           </Col>

//           {/* Salary */}
//           <Col span={12}>
//             <Form.Item
//               name="salary"
//               label="Salary"
//               rules={[{ required: true, message: 'Please enter salary.' }]}
//             >
//               <Input placeholder="Enter Salary" />
//             </Form.Item>
//           </Col>

//           {/* Salary Type */}
//           <Col span={12}>
//             <Form.Item
//               name="salaryType"
//               label="Salary Type"
//               rules={[{ required: true, message: 'Please select a salary type.' }]}
//             >
//               <Select placeholder="Select Salary Type">
//                 <Option value="hourly">Hourly Payslip</Option>
//                 <Option value="monthly">Monthly Payslip</Option>
//               </Select>
//             </Form.Item>
//           </Col>

//           {/* Salary Duration */}
//           <Col span={12}>
//             <Form.Item
//               name="salaryDuration"
//               label="Salary Duration"
//               rules={[{ required: true, message: 'Please select a salary duration.' }]}
//             >
//               <Select placeholder="Select Salary Duration">
//                 <Option value="weekly">Weekly</Option>
//                 <Option value="biweekly">Biweekly</Option>
//                 <Option value="monthly">Monthly</Option>
//               </Select>
//             </Form.Item>
//           </Col>

//           {/* Job Type */}
//           <Col span={12}>
//             <Form.Item
//               name="jobType"
//               label="Job Type"
//               rules={[{ required: true, message: 'Please select a job type.' }]}
//             >
//               <Select placeholder="Select Job Type">
//                 <Option value="fulltime">Full Time</Option>
//                 <Option value="parttime">Part Time</Option>
//               </Select>
//             </Form.Item>
//           </Col>

//           {/* Status */}
//           <Col span={12}>
//             <Form.Item
//               name="status"
//               label="Status"
//               rules={[{ required: true, message: 'Please select a status.' }]}
//             >
//               <Select placeholder="Select Status">
//                 <Option value="active">Active</Option>
//                 <Option value="inactive">Inactive</Option>
//               </Select>
//             </Form.Item>
//           </Col>
//         </Row>

//         <Form.Item>
//           <div className="form-buttons text-right">
//             <Button type="default" className="mr-2" onClick={() => navigate('/app/hrm/jobcandidate')}>
//               Cancel
//             </Button>
//             <Button type="primary" htmlType="submit">
//               Create
//             </Button>
//           </div>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default AddJobOnBording;
