import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Input, Button, DatePicker, Select, message, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';
// import moment from 'moment';
import ReactQuill from 'react-quill';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const { Option } = Select;
const { TextArea } = Input;

const EditLeave = ({ editData }) => {
  const navigate = useNavigate();
  const [fieldsValue, setFieldsValue] = useState();
  useEffect(() => {
    // Initialize the form fields with the provided editData if available
    if (editData) {
      setFieldsValue({
        employee: editData.employee,
        leaveType: editData.leaveType,
        startDate: editData.startDate ? moment(editData.startDate, 'DD-MM-YYYY') : null,
        endDate: editData.endDate ? moment(editData.endDate, 'DD-MM-YYYY') : null,
        leaveReason: editData.leaveReason,
        remark: editData.remark,
      });
    }
  }, [editData]);

  const onSubmit = (values) => {
    console.log('Updated values:', values);
    message.success('Leave updated successfully!');
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
    <div className="edit-leave-form">
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
                Update
              </Button>
            </div>

          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditLeave;

