import React, { useEffect, useState } from 'react';
import { Card, Table, Menu, Row, Col, Tag, Input, message, Button, Modal } from 'antd';
import { EyeOutlined, DeleteOutlined, SearchOutlined, MailOutlined, PlusOutlined, PushpinOutlined, FileExcelOutlined,EditOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import UserView from '../../Users/user-list/UserView';
import Flex from 'components/shared-components/Flex';
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown';
import StatisticWidget from 'components/shared-components/StatisticWidget';
// import { DealStatisticData } from '../../dashboards/default/DefaultDashboardData';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import AddMeeting from './AddMeeting';
import userData from 'assets/data/user-list.data.json';
import OrderListData from 'assets/data/order-list.data.json';
import utils from 'utils';
import EditMeeting from './EditMeeting';
import { deleteM, MeetData } from './MeetingReducer/MeetingSlice';
import { useDispatch, useSelector } from 'react-redux';

const MeetingList = () => {
  const [users, setUsers] = useState(userData);
  const [list, setList] = useState(OrderListData);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [userProfileVisible, setUserProfileVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isAddMeetingModalVisible, setIsAddMeetingModalVisible] = useState(false);
  const [isEditMeetingModalVisible, setIsEditMeetingModalVisible] = useState(false);

  const [meetid,setMeetid] = useState("");

  const dispatch = useDispatch();


     const tabledata = useSelector((state) => state.Meeting);


//   const [dealStatisticData] = useState(DealStatisticData);

  // Open Add Job Modal
  const openAddMeetingModal = () => {
    setIsAddMeetingModalVisible(true);
  };

  // Close Add Job Modal
  const closeAddMeetingModal = () => {
    setIsAddMeetingModalVisible(false);
  };

  
  // Open Add Job Modal
  const openEditMeetingModal = () => {
    setIsEditMeetingModalVisible(true);
  };

  // Close Add Job Modal
  const closeEditMeetingModal = () => {
    setIsEditMeetingModalVisible(false);
  };


  // Search functionality
  const onSearch = (e) => {
    const value = e.currentTarget.value;
    const searchArray = value ? list : OrderListData;
    const data = utils.wildCardSearch(searchArray, value);
    setList(data);
    setSelectedRowKeys([]);
  };


    const deleteUser = async (userId) => {
      try {
        await dispatch(deleteM(userId)); 
    
        const updatedData = await dispatch(MeetData());
    
        setUsers(users.filter((item) => item.id !== userId));
    
        message.success({ content: 'Deleted user successfully.', duration: 2 });
      } catch (error) {
        // message.error({ content: 'Failed to delete user', duration: 2 });
        console.error('Error deleting user:', error);
      }
    };

  // Show user profile
  const showUserProfile = (userInfo) => {
    setSelectedUser(userInfo);
    setUserProfileVisible(true);
  };

  // Close user profile
  const closeUserProfile = () => {
    setSelectedUser(null);
    setUserProfileVisible(false);
  };

  useEffect(() => {
    dispatch(MeetData());
  }, [dispatch]);
  
  useEffect(() => {
    if (tabledata && tabledata.Meeting) {
      setUsers(tabledata.Meeting.data);
    }
  }, [tabledata]);

  const EditMeet = (id) =>{
    openEditMeetingModal();
    setMeetid(id)
  }

  const dropdownMenu = (elm) => (
    <Menu>
      <Menu.Item>
        <Flex alignItems="center">
          <Button
            type=""
            className=""
            icon={<EditOutlined />}
            onClick={() => EditMeet(elm.id)}
            size="small"
          >
            <span className="">Edit</span>
          </Button>
        </Flex>
      </Menu.Item>
      <Menu.Item>
        <Flex alignItems="center">
          <Button
            type=""
            className=""
            icon={<DeleteOutlined />}
            onClick={() => deleteUser(elm.id)}
            size="small"
          >
            <span className="">Delete</span>
          </Button>
        </Flex>
      </Menu.Item>
    </Menu>
  );

  const tableColumns = [
    {
      title: 'Meeting title ',
      dataIndex: 'title',
      sorter: {
        compare: (a, b) => a.branch.length - b.branch.length,
      },
    },

    {
      title: 'Meeting Date',
      dataIndex: 'date',
      sorter: (a, b) => dayjs(a.startdate).unix() - dayjs(b.startdate).unix(),
    },
    
    {
        title: 'Meeting Time',
        dataIndex: 'startTime',
        sorter: (a, b) => utils.antdTableSorter(a, b, 'name')
    },
    {
      title: 'Action',
      dataIndex: 'actions',
      render: (_, elm) => (
        <div className="text-center">
          <EllipsisDropdown menu={dropdownMenu(elm)} />
        </div>
      ),
    },
  ];

  return (
    <Card bodyStyle={{ padding: '-3px' }}>
    
      <Flex alignItems="center" justifyContent="space-between" mobileFlex={false}>
        <Flex className="mb-1" mobileFlex={false}>
          <div className="mr-md-3 mb-3">
            <Input placeholder="Search" prefix={<SearchOutlined />} onChange={(e) => onSearch(e)} />
          </div>
        </Flex>
        <Flex gap="7px">
          <Button type="primary" className="ml-2" onClick={openAddMeetingModal}>
            <PlusOutlined />
            <span>New</span>
          </Button>
          <Button type="primary" icon={<FileExcelOutlined />} block>
            Export All
          </Button>
        </Flex>
      </Flex>
      <div className="table-responsive mt-2">
        <Table
          columns={tableColumns}
          dataSource={users}
          rowKey="id"
          scroll={{ x: 1200 }}
        />
      </div>
      <UserView data={selectedUser} visible={userProfileVisible} close={closeUserProfile} />

      {/* Add Job Modal */}
      <Modal
        title="Add Metting"
        visible={isAddMeetingModalVisible}
        onCancel={closeAddMeetingModal}
        footer={null}
        width={1000}
      >
        <AddMeeting onClose={closeAddMeetingModal} />
      </Modal>
      <Modal
        title="Edit Metting"
        visible={isEditMeetingModalVisible}
        onCancel={closeEditMeetingModal}
        footer={null}
        width={1000}
      >
        <EditMeeting onClose={closeEditMeetingModal} meetid={meetid}/>
      </Modal>
    </Card>
  );
};

export default MeetingList;

