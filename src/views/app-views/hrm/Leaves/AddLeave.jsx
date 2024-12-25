import React from 'react';
import {Input, Button, DatePicker, Select, message, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const { Option } = Select;
const { TextArea } = Input;

const AddLeave = () => {
  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log('Submitted values:', values);
    message.success('Leave added successfully!');
    navigate('/app/hrm/leave');
  };

  const onFinishFailed = (errorInfo) => {
    console.error('Form submission failed:', errorInfo);
    message.error('Please fill out all required fields.');
  };

   const initialValues = {
    employee: '',
    leaveType: '',
    startDate: null,
    endDate: null,
    leaveReason: '',
    remark: '',
      }
    
      const validationSchema = Yup.object({
        employee: Yup.string().required('Please select a employee.'),
        leaveType: Yup.string().required('Please Select a leaveType.'),
        startDate: Yup.date().nullable().required('Start Date is required.'),
        endDate: Yup.date().nullable().required('End Date is required.'),
        leaveReason: Yup.string().required('Please enter a leave Reason.'),
        remark: Yup.string().required('Please enter a remark.'),
      });
  

  return (
    <div className="add-leave-form">
      {/* <h2 className="mb-4"></h2> */}
       <hr style={{ marginBottom: "20px", border: "1px solid #e8e8e8" }} />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue, handleSubmit, setFieldTouched }) => (
          <Form
            className="formik-form" onSubmit={handleSubmit}
            onFinishFailed={onFinishFailed}
          >

            <Row gutter={16}>
              {/* Employee */}
              <Col span={24} className='mt-2'>
                <div className="form-item">
                  <label className='font-semibold'>Employee</label>
                  <Field name="employee">
                    {({ field }) => (
                      <Select
                        {...field}
                        className="w-full"
                        placeholder="Select Employee"
                        onChange={(value) => setFieldValue('employee', value)}
                        value={values.employee}
                        onBlur={() => setFieldTouched("employee", true)}
                      >
                        <Option value="employee1">Employee 1</Option>
                        <Option value="employee2">Employee 2</Option>
                      </Select>
                    )}
                  </Field>
                  <ErrorMessage name="employee" component="div" className="error-message text-red-500 my-1" />
                </div>
              </Col>


              {/* Leave Type */}
              <Col span={24} className='mt-2'>
                <div className="form-item">
                  <label className='font-semibold'>Leave Type</label>
                  <Field name="leaveType">
                    {({ field }) => (
                      <Select
                        {...field}
                        className="w-full"
                        placeholder="Select Leave Type"
                        onChange={(value) => setFieldValue('leaveType', value)}
                        value={values.leaveType}
                        onBlur={() => setFieldTouched("leaveType", true)}
                      >
                        <Option value="sick">Sick Leave</Option>
                        <Option value="casual">Casual Leave</Option>
                        <Option value="annual">Annual Leave</Option>
                      </Select>
                    )}
                  </Field>
                  <ErrorMessage name="leaveType" component="div" className="error-message text-red-500 my-1" />
                </div>
              </Col>

              {/* Start and End Date */}
              <Col span={12} className='mt-2'>
                <div className="form-item">
                  <label className='font-semibold'>Start Date</label>
                  <DatePicker
                    className="w-full"
                    format="DD-MM-YYYY"
                    value={values.startDate}
                    onChange={(startDate) => setFieldValue('startDate', startDate)}
                    onBlur={() => setFieldTouched("startDate", true)}
                  />
                  <ErrorMessage name="startDate" component="div" className="error-message text-red-500 my-1" />
                </div>
              </Col>


              <Col span={12} className='mt-2'>
                <div className="form-item">
                  <label className='font-semibold'>End Date</label>
                  <DatePicker
                    className="w-full"
                    format="DD-MM-YYYY"
                    value={values.endDate}
                    onChange={(endDate) => setFieldValue('endDate', endDate)}
                    onBlur={() => setFieldTouched("endDate", true)}
                  />
                  <ErrorMessage name="endDate" component="div" className="error-message text-red-500 my-1" />
                </div>
              </Col>

              {/* Leave Reason */}

              <Col span={24} className='mt-2'>
                <div className="form-item">
                  <label className="font-semibold">Leave Reason</label>
                  <Field name="leaveReason">
                    {({ field }) => (
                      <ReactQuill
                        {...field}
                        value={values.leaveReason}
                        onChange={(value) => setFieldValue('leaveReason', value)}
                        onBlur={() => setFieldTouched("leaveReason", true)}
                        placeholder="Leave Reason"
                      />
                    )}
                  </Field>
                  <ErrorMessage name="leaveReason" component="div" className="error-message text-red-500 my-1" />
                </div>
              </Col>


              {/* Remark */}
              <Col span={24} className='mt-2'>
                <div className="form-item">
                  <label className="font-semibold">Remark</label>
                  <Field name="remark">
                    {({ field }) => (
                      <ReactQuill
                        {...field}
                        value={values.remark}
                        onChange={(value) => setFieldValue('remark', value)}
                        onBlur={() => setFieldTouched("remark", true)}
                        placeholder="Write here..."
                      />
                    )}
                  </Field>
                  <ErrorMessage name="remark" component="div" className="error-message text-red-500 my-1" />
                </div>
              </Col>

            </Row>

            {/* Form Buttons */}

            <div className="form-buttons text-right mt-2">
              <Button
                type="default"
                className="mr-2"
                onClick={() => navigate('/app/hrm/leave')}
              >
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                Create
              </Button>
            </div>

          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddLeave;













// import React from 'react';
// import { Form, Input, Button, DatePicker, Select, message, Row, Col } from 'antd';
// import { useNavigate } from 'react-router-dom';

// const { Option } = Select;

// const AddLeave = () => {
//   const [form] = Form.useForm();
//   const navigate = useNavigate();

//   const onFinish = (values) => {
//     console.log('Submitted values:', values);
//     message.success('Leave added successfully!');
//     navigate('app/hrm/Leave')
//     // Navigate or perform additional actions here
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.error('Form submission failed:', errorInfo);
//     message.error('Please fill out all required fields.');
//   };

  

//   return (
//     <div className="add-employee">
//       <h2 className="mb-4">Add New Leave</h2>
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
//             <Button type="default" className="mr-2" onClick={() => navigate('/app/hrm/Leave')}>
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

// export default AddLeave;









