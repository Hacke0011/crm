import React, { useEffect } from 'react';
import { Formik, Form as FormikForm, Field } from 'formik';
import { Input, Button, Row, Col, message } from 'antd';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';

// Validation Schema using Yup
const validationSchema = Yup.object().shape({
  designation: Yup.string()
    .required('Designation Name is required')
    .min(2, 'Designation name must be at least 2 characters')
    .max(50, 'Designation name cannot exceed 50 characters'),
});

const EditDesignation = () => {
  const navigate = useNavigate();
  const { id } = useParams();  // Assuming we're passing `id` as a route parameter

  // Mock fetching the data (in a real-world app, replace this with an API call)
  const fetchDesignationData = (id) => {
    // Replace this with actual API call to get designation data
    return { designation: 'Software Engineer' }; // Example data
  };

  const initialValues = fetchDesignationData(id);

  const handleSubmit = (values) => {
    console.log('Updated values:', values);
    message.success('Designation updated successfully!');
    navigate('/app/hrm/designation');  // Redirect to the list after update
  };

  useEffect(() => {
    // You can fetch the data here if needed, based on the ID passed via URL params
    // This would generally be an API call to fetch the designation details
    // If using real-world data, use the `id` from `useParams()`
  }, [id]);

  return (
    <div className="edit-designation">
      <hr style={{ marginBottom: '20px', border: '1px solid #e8e8e8' }} />

      <Formik
        initialValues={initialValues}
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

export default EditDesignation;
