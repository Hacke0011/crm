import React from "react";
import { Button, Typography, Row, Col, Divider, Modal } from "antd";

const { Text, Title } = Typography;

const ViewLeave = ({ visible, onClose, onApprove, onReject, leaveData }) => {
  // Sample leave data (can be replaced by props or API response)
  const defaultLeaveData = {
    employee: "Sonya Sims",
    leaveType: "Casual Leave",
    appliedOn: "21-04-2023",
    startDate: "05-05-2023",
    endDate: "07-05-2023",
    leaveReason: "Emergency medical procedure",
    status: "Approved",
  };

  const data = leaveData || defaultLeaveData;

  return (
   <>
      <hr style={{ marginBottom: '20px', border: '1px solid #e8e8e8' }} />

      <Row gutter={[16, 16]}>
        
        <Col span={8}>
          <Text strong>Employee</Text>
        </Col>
        <Col span={16}>
          <Text>{data.employee}</Text>
        </Col>

        <Col span={8}>
          <Text strong>Leave Type</Text>
        </Col>
        <Col span={16}>
          <Text>{data.leaveType}</Text>
        </Col>

        <Col span={8}>
          <Text strong>Applied On</Text>
        </Col>
        <Col span={16}>
          <Text>{data.appliedOn}</Text>
        </Col>

        <Col span={8}>
          <Text strong>Start Date</Text>
        </Col>
        <Col span={16}>
          <Text>{data.startDate}</Text>
        </Col>

        <Col span={8}>
          <Text strong>End Date</Text>
        </Col>
        <Col span={16}>
          <Text>{data.endDate}</Text>
        </Col>

        <Col span={8}>
          <Text strong>Leave Reason</Text>
        </Col>
        <Col span={16}>
          <Text>{data.leaveReason}</Text>
        </Col>

        <Col span={8}>
          <Text strong>Status</Text>
        </Col>
        <Col span={16}>
          <Text>{data.status}</Text>
        </Col>
      </Row>

      <Divider />

      <Row justify="end" gutter={16}>
        <Col>
          <Button
            type="primary"
            onClick={onApprove}
          >
            Approve
          </Button>
        </Col>
        <Col>
          <Button
            type="primary"
            danger
            onClick={onReject}
          >
            Reject
          </Button>
        </Col>
      </Row>
      </>
    // {/* </Modal> */}
  );
};

export default ViewLeave;
