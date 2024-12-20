import React, { useEffect, useState } from 'react';
import { Form, Input, Button, DatePicker, Select, message, Row, Col, Checkbox } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { Formik, Field, Form as FormikForm } from 'formik';
import * as Yup from 'yup';

const { Option } = Select;

const EditJob = () => {
  const navigate = useNavigate();
  const { jobId } = useParams();

  const [jobData, setJobData] = useState(null);

  useEffect(() => {
    // Simulated API call to fetch job data
    const mockJobData = {
      jobTitle: 'Software Developer',
      branch: 'branch1',
      jobCategory: 'it',
      positions: 5,
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      skills: 'JavaScript, React',
      jobDescription: 'Develop web applications.',
      jobRequirement: '3+ years of experience in JavaScript.',
      status: 'active',
      needToAsk: ['gender', 'dob'],
      needToShow: ['profileImage'],
    };

    setJobData(mockJobData);
  }, [jobId]);

  const validationSchema = Yup.object({
    jobTitle: Yup.string().required('Please enter a job title.'),
    branch: Yup.string().required('Please select a branch.'),
    jobCategory: Yup.string().required('Please select a category.'),
    positions: Yup.number().required('Please enter positions.').min(1, 'Positions must be at least 1'),
    startDate: Yup.date().required('Start date is required.'),
    endDate: Yup.date().required('End date is required.'),
    skills: Yup.string().required('Please enter skills.'),
    status: Yup.string().required('Please select a status.'),
    jobDescription: Yup.string().required('Job description is required.'),
    jobRequirement: Yup.string().required('Job requirement is required.'),
  });

  const onSubmit = (values) => {
    console.log('Updated values:', values);
    message.success('Job updated successfully!');
    navigate('/app/hrm/jobs');
  };

  if (!jobData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="edit-job-form">
      {/* <h2>Edit Job</h2> */}

      <hr style={{ marginBottom: '20px', border: '1px solid #e8e8e8' }} />

      <Formik
        initialValues={jobData}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {({ setFieldValue, values }) => (
          <FormikForm>
            <Row gutter={[16, 16]}>
              {/* Job Title */}
              <Col span={12}>
                <Field name="jobTitle">
                  {({ field }) => (
                    <Form.Item label="Job Title">
                      <Input {...field} placeholder="Enter Job Title" />
                    </Form.Item>
                  )}
                </Field>
              </Col>

              {/* Branch */}
              <Col span={12}>
                <Field name="branch">
                  {({ field }) => (
                    <Form.Item label="Branch">
                      <Select {...field} onChange={(value) => setFieldValue('branch', value)}>
                        <Option value="all">All</Option>
                        <Option value="branch1">Branch 1</Option>
                      </Select>
                    </Form.Item>
                  )}
                </Field>
              </Col>

              {/* Job Category */}
              <Col span={12}>
                <Field name="jobCategory">
                  {({ field }) => (
                    <Form.Item label="Job Category">
                      <Select {...field} onChange={(value) => setFieldValue('jobCategory', value)}>
                        <Option value="it">IT</Option>
                        <Option value="hr">HR</Option>
                      </Select>
                    </Form.Item>
                  )}
                </Field>
              </Col>

              {/* Positions */}
              <Col span={12}>
                <Field name="positions">
                  {({ field }) => (
                    <Form.Item label="Positions">
                      <Input {...field} placeholder="Enter number of positions" />
                    </Form.Item>
                  )}
                </Field>
              </Col>

              {/* Status */}
              <Col span={12}>
                <Field name="status">
                  {({ field }) => (
                    <Form.Item label="Status">
                      <Select {...field} onChange={(value) => setFieldValue('status', value)}>
                        <Option value="active">Active</Option>
                        <Option value="inactive">Inactive</Option>
                      </Select>
                    </Form.Item>
                  )}
                </Field>
              </Col>

              {/* Start Date */}
              <Col span={12}>
                <Field name="startDate">
                  {({ field }) => (
                    <Form.Item label="Start Date">
                      <DatePicker
                        {...field}
                        style={{ width: '100%' }}
                        format="YYYY-MM-DD"
                        value={values.startDate ? new Date(values.startDate) : null}
                        onChange={(date, dateString) => setFieldValue('startDate', dateString)}
                      />
                    </Form.Item>
                  )}
                </Field>
              </Col>

              {/* End Date */}
              <Col span={12}>
                <Field name="endDate">
                  {({ field }) => (
                    <Form.Item label="End Date">
                      <DatePicker
                        {...field}
                        style={{ width: '100%' }}
                        format="YYYY-MM-DD"
                        value={values.endDate ? new Date(values.endDate) : null}
                        onChange={(date, dateString) => setFieldValue('endDate', dateString)}
                      />
                    </Form.Item>
                  )}
                </Field>
              </Col>

              {/* Skills */}
              <Col span={24}>
                <Field name="skills">
                  {({ field }) => (
                    <Form.Item label="Skills">
                      <Input {...field} placeholder="Enter required skills" />
                    </Form.Item>
                  )}
                </Field>
              </Col>

              {/* Job Description */}
              <Col span={12}>
                <Field name="jobDescription">
                  {({ field }) => (
                    <Form.Item label="Job Description">
                      <ReactQuill
                        {...field}
                        value={values.jobDescription}
                        onChange={(value) => setFieldValue('jobDescription', value)}
                        placeholder="Write here..."
                      />
                    </Form.Item>
                  )}
                </Field>
              </Col>

              {/* Job Requirement */}
              <Col span={12}>
                <Field name="jobRequirement">
                  {({ field }) => (
                    <Form.Item label="Job Requirement">
                      <ReactQuill
                        {...field}
                        value={values.jobRequirement}
                        onChange={(value) => setFieldValue('jobRequirement', value)}
                        placeholder="Write here..."
                      />
                    </Form.Item>
                  )}
                </Field>
              </Col>

              {/* Need to Ask */}
              <Col span={24}>
                <Form.Item label="Need to Ask?">
                  <Checkbox.Group
                    onChange={(checkedValues) => setFieldValue('needToAsk', checkedValues)}
                    value={values.needToAsk}
                  >
                    <Checkbox value="gender">Gender</Checkbox>
                    <Checkbox value="dob">Date of Birth</Checkbox>
                    <Checkbox value="country">Country</Checkbox>
                  </Checkbox.Group>
                </Form.Item>
              </Col>

              {/* Need to Show */}
              <Col span={24}>
                <Form.Item label="Need to Show Options?">
                  <Checkbox.Group
                    onChange={(checkedValues) => setFieldValue('needToShow', checkedValues)}
                    value={values.needToShow}
                  >
                    <Checkbox value="profileImage">Profile Image</Checkbox>
                    <Checkbox value="resume">Resume</Checkbox>
                    <Checkbox value="coverLetter">Cover Letter</Checkbox>
                    <Checkbox value="terms">Terms and Conditions</Checkbox>
                  </Checkbox.Group>
                </Form.Item>
              </Col>
            </Row>

            {/* Form Actions */}
            <Form.Item>
              <div style={{ textAlign: 'right' }}>
                <Button type="default" onClick={() => navigate('/app/hrm/jobs')} style={{ marginRight: 10 }}>
                  Cancel
                </Button>
                <Button type="primary" htmlType="submit">
                  Update
                </Button>
              </div>
            </Form.Item>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};

export default EditJob;













// import React, { useEffect, useState } from 'react';
// import { Form, Input, Button, DatePicker, Select, message, Row, Col, Checkbox } from 'antd';
// import { useNavigate, useParams } from 'react-router-dom';
// import 'react-quill/dist/quill.snow.css';
// import ReactQuill from 'react-quill';
// import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const { Option } = Select;

// const EditJob = () => {
//   const navigate = useNavigate();
//   const { jobId } = useParams(); // assuming the job ID is passed in the route params

//   // Simulating fetching job data (In a real app, fetch the job details from an API)
//   const [jobData, setJobData] = useState(null);

//   useEffect(() => {
//     // Mock job data. Replace this with an API call to fetch the job details.
//     const mockJobData = {
//       jobTitle: 'Software Developer',
//       branch: 'branch1',
//       jobCategory: 'it',
//       positions: 5,
//       startDate: '2024-01-01',
//       endDate: '2024-12-31',
//       skills: 'JavaScript, React',
//       jobDescription: 'Develop web applications.',
//       jobRequirement: '3+ years of experience in JavaScript.',
//       additionalFields: ['gender', 'dob'],
//     };

//     setJobData(mockJobData); // Set the fetched data
//   }, [jobId]);

//   // Initial values for Formik
//   const initialValues = jobData || {
//     jobTitle: '',
//     branch: '',
//     jobCategory: '',
//     positions: '',
//     startDate: null,
//     endDate: null,
//     skills: '',
//     jobDescription: '',
//     jobRequirement: '',
//     additionalFields: [],
//   };

//   // Validation schema with Yup
//   const validationSchema = Yup.object({
//     jobTitle: Yup.string().required('Please enter a job title.'),
//     branch: Yup.string().required('Please select a branch.'),
//     jobCategory: Yup.string().required('Please select a category.'),
//     positions: Yup.number().required('Please enter positions.').min(1, 'Positions must be at least 1'),
//     startDate: Yup.date().required('Start date is required.'),
//     endDate: Yup.date().required('End date is required.'),
//     skills: Yup.string().required('Please enter skills.'),
//     jobDescription: Yup.string().required('Job description is required.'),
//     jobRequirement: Yup.string().required('Job requirement is required.'),
//     additionalFields: Yup.array().of(Yup.string()).min(1, 'Please select at least one field.'),
//   });

//   // Handle form submission
//   const onSubmit = (values) => {
//     console.log('Updated values:', values);
//     message.success('Job updated successfully!');
//     navigate('/app/hrm/jobs');
//   };

//   if (!jobData) {
//     return <div>Loading...</div>; // Return loading state while jobData is being fetched
//   }

//   return (
//     <div className="edit-job-form">
//       <h2 className="mb-4">Edit Job</h2>

//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={onSubmit}
//         enableReinitialize={true} // Allows the form to reinitialize when the jobData changes
//       >
//         {({ setFieldValue, values }) => (
//           <FormikForm>
//             <Row gutter={16}>
//               <Col span={12}>
//                 <Field name="jobTitle">
//                   {({ field }) => (
//                     <Form.Item
//                       label="Job Title"
//                       validateStatus={values.jobTitle ? '' : 'error'}
//                       help={values.jobTitle ? '' : 'Please enter a job title.'}
//                     >
//                       <Input {...field} placeholder="Enter Job Title" />
//                     </Form.Item>
//                   )}
//                 </Field>
//               </Col>

//               <Col span={12}>
//                 <Field name="branch">
//                   {({ field }) => (
//                     <Form.Item
//                       label="Branch"
//                       validateStatus={values.branch ? '' : 'error'}
//                       help={values.branch ? '' : 'Please select a branch.'}
//                     >
//                       <Select {...field} placeholder="Select Branch">
//                         <Option value="all">All</Option>
//                         <Option value="branch1">Branch 1</Option>
//                       </Select>
//                     </Form.Item>
//                   )}
//                 </Field>
//               </Col>

//               <Col span={12}>
//                 <Field name="jobCategory">
//                   {({ field }) => (
//                     <Form.Item
//                       label="Job Category"
//                       validateStatus={values.jobCategory ? '' : 'error'}
//                       help={values.jobCategory ? '' : 'Please select a category.'}
//                     >
//                       <Select {...field} placeholder="Select Job Category">
//                         <Option value="it">IT</Option>
//                         <Option value="hr">HR</Option>
//                       </Select>
//                     </Form.Item>
//                   )}
//                 </Field>
//               </Col>

//               <Col span={12}>
//                 <Field name="positions">
//                   {({ field }) => (
//                     <Form.Item
//                       label="Positions"
//                       validateStatus={values.positions ? '' : 'error'}
//                       help={values.positions ? '' : 'Please enter positions.'}
//                     >
//                       <Input {...field} placeholder="Enter Positions" />
//                     </Form.Item>
//                   )}
//                 </Field>
//               </Col>

//               <Col span={12}>
//                 <Field name="startDate">
//                   {({ field }) => (
//                     <Form.Item
//                       label="Start Date"
//                       validateStatus={values.startDate ? '' : 'error'}
//                       help={values.startDate ? '' : 'Start date is required.'}
//                     >
//                       <DatePicker
//                         {...field}
//                         style={{ width: '100%' }}
//                         format="DD-MM-YYYY"
//                         onChange={(date, dateString) => setFieldValue('startDate', dateString)}
//                       />
//                     </Form.Item>
//                   )}
//                 </Field>
//               </Col>

//               <Col span={12}>
//                 <Field name="endDate">
//                   {({ field }) => (
//                     <Form.Item
//                       label="End Date"
//                       validateStatus={values.endDate ? '' : 'error'}
//                       help={values.endDate ? '' : 'End date is required.'}
//                     >
//                       <DatePicker
//                         {...field}
//                         style={{ width: '100%' }}
//                         format="DD-MM-YYYY"
//                         onChange={(date, dateString) => setFieldValue('endDate', dateString)}
//                       />
//                     </Form.Item>
//                   )}
//                 </Field>
//               </Col>

//               <Col span={24}>
//                 <Field name="skills">
//                   {({ field }) => (
//                     <Form.Item
//                       label="Skills"
//                       validateStatus={values.skills ? '' : 'error'}
//                       help={values.skills ? '' : 'Please enter skills.'}
//                     >
//                       <Input {...field} placeholder="Enter Skills" />
//                     </Form.Item>
//                   )}
//                 </Field>
//               </Col>

//               <Col span={12}>
//                 <Field name="jobDescription">
//                   {({ field }) => (
//                     <Form.Item
//                       label="Job Description"
//                       validateStatus={values.jobDescription ? '' : 'error'}
//                       help={values.jobDescription ? '' : 'Job description is required.'}
//                     >
//                       <ReactQuill
//                         {...field}
//                         value={values.jobDescription}
//                         onChange={(value) => setFieldValue('jobDescription', value)}
//                         placeholder="Write here..."
//                       />
//                     </Form.Item>
//                   )}
//                 </Field>
//               </Col>

//               <Col span={12}>
//                 <Field name="jobRequirement">
//                   {({ field }) => (
//                     <Form.Item
//                       label="Job Requirement"
//                       validateStatus={values.jobRequirement ? '' : 'error'}
//                       help={values.jobRequirement ? '' : 'Job requirement is required.'}
//                     >
//                       <ReactQuill
//                         {...field}
//                         value={values.jobRequirement}
//                         onChange={(value) => setFieldValue('jobRequirement', value)}
//                         placeholder="Write here..."
//                       />
//                     </Form.Item>
//                   )}
//                 </Field>
//               </Col>

//               <Col span={24}>
//                 <Form.Item label="Additional Fields">
//                   <Checkbox.Group
//                     onChange={(checkedValues) => setFieldValue('additionalFields', checkedValues)}
//                     value={values.additionalFields}
//                   >
//                     <Row>
//                       <Col span={6}><Checkbox value="gender">Gender</Checkbox></Col>
//                       <Col span={6}><Checkbox value="dob">Date of Birth</Checkbox></Col>
//                       <Col span={6}><Checkbox value="country">Country</Checkbox></Col>
//                       <Col span={6}><Checkbox value="profileImage">Profile Image</Checkbox></Col>
//                     </Row>
//                   </Checkbox.Group>
//                 </Form.Item>
//               </Col>
//             </Row>

//             <Form.Item>
//               <div className="form-buttons text-right">
//                 <Button type="default" className="mr-2" onClick={() => navigate('/app/hrm/jobs')}>Cancel</Button>
//                 <Button type="primary" htmlType="submit">Update</Button>
//               </div>
//             </Form.Item>
//           </FormikForm>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default EditJob;


