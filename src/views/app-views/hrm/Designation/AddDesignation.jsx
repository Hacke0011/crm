import React from 'react';
import { Formik, Form as FormikForm, Field } from 'formik';
import { Input, Button, Row, Col, message } from 'antd';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

// Validation Schema using Yup
const validationSchema = Yup.object().shape({
  designation: Yup.string()
    .required('Designation Name is required')
    .min(2, 'Designation name must be at least 2 characters')
    .max(50, 'Designation name cannot exceed 50 characters'),
});

const AddDesignation = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log('Submitted values:', values);
    message.success('Designation added successfully!');
    navigate('/app/hrm/designation');
  };

  return (
    <div className="add-employee">
      {/* <h2 className="mb-4">Add New Designation</h2> */}
      <hr style={{ marginBottom: '20px', border: '1px solid #e8e8e8' }} />

      <Formik
        initialValues={{
          designation: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, setFieldValue }) => (
          <FormikForm>
            <Row gutter={16}>
              <Col span={12}>
                <div style={{ marginBottom: '16px' }}>
                  <label>Designation*</label>
                  <Field
                    as={Input}
                    name="designation"
                    placeholder="Enter Designation Name"
                    onChange={(e) => setFieldValue('designation', e.target.value)}
                  />
                  {errors.designation && touched.designation && (
                    <div style={{ color: 'red', fontSize: '12px' }}>{errors.designation}</div>
                  )}
                </div>
              </Col>
            </Row>

            <div className="text-right">
              <Button type="default" className="mr-2" onClick={() => navigate('/app/hrm/designation')}>
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </div>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};

export default AddDesignation;










// import React from 'react';
// import { Form, Input, Button, DatePicker, Select, message, Row, Col } from 'antd';
// import { useNavigate } from 'react-router-dom';

// const { Option } = Select;

// const AddDesignation = () => {
//   const [form] = Form.useForm();
//   const navigate = useNavigate();

//   const onFinish = (values) => {
//     console.log('Submitted values:', values);
//     message.success('Designation added successfully!');
//     navigate('app/hrm/designation')
//     // Navigate or perform additional actions here
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.error('Form submission failed:', errorInfo);
//     message.error('Please fill out all required fields.');
//   };

  

//   return (
//     <div className="add-employee">
//       <h2 className="mb-4">Add New Designation</h2>
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
//               name="designation"
//               label="Designation"
//               rules={[{ required: true, message: 'Designation Name is required' }]}
//             >
//               <Input placeholder="John" />
//             </Form.Item>
//           </Col>
         
//         </Row>

      
//         <Form.Item>
//           <div className="text-right">
//             <Button type="default" className="mr-2" onClick={() => navigate('/app/hrm/desigantion')}>
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

// export default AddDesignation;









