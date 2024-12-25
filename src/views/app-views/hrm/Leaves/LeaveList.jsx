import React, { useState } from 'react';
import { Card, Table, Menu, Tag, Input, message, Button, Modal ,Select} from 'antd';
import { EyeOutlined, DeleteOutlined, SearchOutlined, MailOutlined, PlusOutlined, PushpinOutlined, FileExcelOutlined, EditOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import UserView from '../../Users/user-list/UserView';
import Flex from 'components/shared-components/Flex';
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import AddLeave from './AddLeave';
import userData from "assets/data/user-list.data.json";
import OrderListData from "assets/data/order-list.data.json";
import utils from 'utils';
import ViewLeave from './ViewLeave';
import EditLeave from './EditLeave';

const { Option } = Select

const LeaveList = () => {
  const [users, setUsers] = useState(userData);
  const [userProfileVisible, setUserProfileVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [list, setList] = useState(OrderListData); // Initialize with OrderListData
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isAddLeaveModalVisible, setIsAddLeaveModalVisible] = useState(false); // State to toggle Add Employee Modal
  const [isViewLeaveModalVisible, setIsViewLeaveModalVisible] = useState(false); 
  const [isEditLeaveModalVisible, setIsEditLeaveModalVisible] = useState(false); // State to toggle Add Employee Modal
  // State to toggle Add Employee Modal


  // Open Add Employee Modal
  const openAddLeaveModal = () => {
    setIsAddLeaveModalVisible(true);
  };

  // Close Add Employee Modal
  const closeAddLeaveModal = () => {
    setIsAddLeaveModalVisible(false);
  };




  // Open Add Employee Modal
  const openViewLeaveModal = () => {
    setIsViewLeaveModalVisible(true);
  };

  // Close Add Employee Modal
  const closeViewLeaveModal = () => {
    setIsViewLeaveModalVisible(false);
  };

   // Open Add Employee Modal
   const openEditLeaveModal = () => {
    setIsEditLeaveModalVisible(true);
  };

  // Close Add Employee Modal
  const closeEditLeaveModal = () => {
    setIsEditLeaveModalVisible(false);
  };





  const onSearch = (e) => {
    const value = e.currentTarget.value;
    const searchArray = value ? list : OrderListData;
    const data = utils.wildCardSearch(searchArray, value);
    setList(data);
    setSelectedRowKeys([]);
  };

  const deleteUser = (userId) => {
    setUsers(users.filter(item => item.id !== userId));
    message.success({ content: `Deleted user ${userId}`, duration: 2 });
  };

  const showUserProfile = (userInfo) => {
    setUserProfileVisible(true);
    setSelectedUser(userInfo);
  };

  const closeUserProfile = () => {
    setUserProfileVisible(false);
    setSelectedUser(null);
  };

  const getLeaveStatus = status => {
    if (status === 'active') {
      return 'blue'
    }
    if (status === 'blocked') {
      return 'cyan'
    }
    return ''
  }
  
  const handleShowStatus = value => {
		if (value !== 'All') {
			const key = 'status'
			const data = utils.filterArray(userData, key, value)
			setUsers(data)
		} else {
			setUsers(userData)
		}
	}
  
  const leaveStatusList = ['active', 'blocked']

  const dropdownMenu = (elm) => (
    <Menu>
      <Menu.Item>
        <Flex alignItems="center">
          <Button type="" icon={<EyeOutlined />} onClick={openViewLeaveModal} size="small">
            <span>Leave Action</span>
          </Button>
        </Flex>
      </Menu.Item>
      <Menu.Item>
        <Flex alignItems="center">
          <Button type="" icon={<EditOutlined />} onClick={openEditLeaveModal} size="small">
            <span>Edit</span>
          </Button>
        </Flex>
      </Menu.Item>
      <Menu.Item>
        <Flex alignItems="center">
          <Button type="" icon={<PushpinOutlined />} onClick={() => showUserProfile(elm)} size="small">
            <span className="ml-2">Pin</span>
          </Button>
        </Flex>
      </Menu.Item>
      <Menu.Item>
        <Flex alignItems="center">
          <Button type="" icon={<DeleteOutlined />} onClick={() => deleteUser(elm.id)} size="small">
            <span>Delete</span>
          </Button>
        </Flex>
      </Menu.Item>
    </Menu>
  );

  const tableColumns = [
    {
      title: 'Employee',
      dataIndex: 'name',
      render: (_, record) => (
        <div className="d-flex">
          <AvatarStatus src={record.img} name={record.name} subTitle={record.email} />
        </div>
      ),
      sorter: (a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
    },
    {
      title: 'Leave Type',
      dataIndex: 'leavetype',
      sorter: (a, b) => a.leavetype.length - b.leavetype.length,
    },
    {
      title: 'Applied On',
      dataIndex: 'appliedon',
      sorter: (a, b) => dayjs(a.appliedon).unix() - dayjs(b.appliedon).unix(),
    },
    {
      title: 'Start Date',
      dataIndex: 'startdate',
      sorter: (a, b) => dayjs(a.startdate).unix() - dayjs(b.startdate).unix(),
    },
    {
      title: 'End Date',
      dataIndex: 'enddate',
      sorter: (a, b) => dayjs(a.enddate).unix() - dayjs(b.enddate).unix(),
    },
    {
      title: 'Total Days',
      dataIndex: 'totaldays',
      sorter: (a, b) => a.totaldays - b.totaldays,
    },
    {
      title: 'Leave Reason',
      dataIndex: 'leavereason',
      sorter: (a, b) => a.leavereason.length - b.leavereason.length,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (_, record) => (
				<><Tag color={getLeaveStatus(record.status)}>{record.status}</Tag></>
			),
			sorter: (a, b) => utils.antdTableSorter(a, b, 'status')
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
            <Input placeholder="Search" prefix={<SearchOutlined />} onChange={onSearch} />
          </div>
          <div className="w-full md:w-48 ">
							<Select
								defaultValue="All"
								className="w-100"
								style={{ minWidth: 180 }}
								onChange={handleShowStatus}
								placeholder="Status"
							>
								<Option value="All">All Order </Option>
								{leaveStatusList.map(elm => <Option key={elm} value={elm}>{elm}</Option>)}
							</Select>
						</div>
        </Flex>
        <Flex gap="7px">
          <Button type="primary" className="ml-2" onClick={openAddLeaveModal}>
            <PlusOutlined />
            <span>New</span>
          </Button>
          <Button type="primary" icon={<FileExcelOutlined />} block>
            Export All
          </Button>
        </Flex>
      </Flex>
      <div className="table-responsive mt-2">
        <Table columns={tableColumns} dataSource={users} rowKey="id" scroll={{ x: 1200 }} />
      </div>
      <UserView data={selectedUser} visible={userProfileVisible} close={closeUserProfile} />

      {/* Add Employee Modal */}
      <Modal
        title="Add Leave"
        visible={isAddLeaveModalVisible}
        onCancel={closeAddLeaveModal}
        footer={null}
        width={800}
      >
        <AddLeave onClose={closeAddLeaveModal} />
      </Modal>


{/* Add Employee Modal */}
<Modal
        title="Edit Leave"
        visible={isEditLeaveModalVisible}
        onCancel={closeEditLeaveModal}
        footer={null}
        width={800}
      >
        <EditLeave onClose={closeEditLeaveModal} />
      </Modal>
      
      {/* Add Employee Modal */}
      <Modal
        title="Leave"
        visible={isViewLeaveModalVisible}
        onCancel={closeViewLeaveModal}
        footer={null}
        width={800}
      >
        <ViewLeave onClose={closeViewLeaveModal} />
      </Modal>
    </Card>
  );
};

export default LeaveList;










// import React, { Component } from 'react';
// import { Card, Table, Menu, Tag, Input, message, Button, Modal } from 'antd';
// import { EyeOutlined, DeleteOutlined, SearchOutlined, MailOutlined, PlusOutlined, PushpinOutlined, FileExcelOutlined } from '@ant-design/icons';
// import dayjs from 'dayjs';
// import UserView from '../../Users/user-list/UserView';
// import Flex from 'components/shared-components/Flex';
// import EllipsisDropdown from 'components/shared-components/EllipsisDropdown';
// import AvatarStatus from 'components/shared-components/AvatarStatus';
// import AddLeave from './AddLeave';
// import userData from "assets/data/user-list.data.json";
// import OrderListData from "assets/data/order-list.data.json";
// import utils from 'utils';

// export class LeaveList extends Component {
//   state = {
//     users: userData,
//     userProfileVisible: false,
//     selectedUser: null,
//     list: OrderListData, // Initialize with OrderListData
//     selectedRowKeys: [],
//     isAddLeaveModalVisible: false, // State to toggle Add Employee Modal
//   };

//   // Open Add Employee Modal
//   openAddLeaveModal = () => {
//     this.setState({ isAddLeaveModalVisible: true });
//   };

//   // Close Add Employee Modal
//   closeAddLeaveModal = () => {
//     this.setState({ isAddLeaveModalVisible: false });
//   };

//   onSearch = (e) => {
//     const { list } = this.state;
//     const value = e.currentTarget.value;
//     const searchArray = value ? list : OrderListData;
//     const data = utils.wildCardSearch(searchArray, value);
//     this.setState({ list: data, selectedRowKeys: [] });
//   };

//   deleteUser = (userId) => {
//     this.setState({
//       users: this.state.users.filter(item => item.id !== userId),
//     });
//     message.success({ content: `Deleted user ${userId}`, duration: 2 });
//   };

//   showUserProfile = (userInfo) => {
//     this.setState({
//       userProfileVisible: true,
//       selectedUser: userInfo,
//     });
//   };

//   closeUserProfile = () => {
//     this.setState({
//       userProfileVisible: false,
//       selectedUser: null,
//     });
//   };

//   render() {
//     const { users, userProfileVisible, selectedUser, isAddLeaveModalVisible } = this.state;


//     const dropdownMenu = elm => (
//         <Menu>
            
//             <Menu.Item>
//                 <Flex alignItems="center">
//                     {/* <EyeOutlined />
//                     <span className="ml-2">View Details</span> */}
                 
//                 <Button type="" className="" icon={<EyeOutlined />} onClick={() => {this.showUserProfile(elm)}} size="small">
//                 <span className="">View Details</span>
//                 </Button>
//                 </Flex>
//             </Menu.Item>
//             <Menu.Item>
//                 <Flex alignItems="center">
//                     {/* <EyeOutlined />
//                     <span className="ml-2">View Details</span> */}
                 
//                  <Button type="" className="" icon={<MailOutlined />} onClick={() => {this.showUserProfile(elm)}} size="small">
//                 <span className="">Send Mail</span>
//                 </Button>
//                 </Flex>
//             </Menu.Item>
//             <Menu.Item>
//                 <Flex alignItems="center">
//                     {/* <EyeOutlined />
//                     <span className="ml-2">View Details</span> */}
                 
//                  <Button type="" className="" icon={<PushpinOutlined />} onClick={() => {this.showUserProfile(elm)}} size="small">
//                 <span className="ml-2">Pin</span>
//                 </Button>
//                 </Flex>
//             </Menu.Item>
//             <Menu.Item>
//                 <Flex alignItems="center">
//                     {/* <DeleteOutlined />
//                     <span className="ml-2">Delete</span> */}
                
//     <Button type="" className="" icon={<DeleteOutlined />} onClick={() => {this.deleteUser(elm.id)}} size="small"> 
//     <span className="">Delete</span>
//     </Button>
    
    
//                 </Flex>
//             </Menu.Item>	
//         </Menu>
//     );


//     const tableColumns = [
//       {
//         title: 'Employee',
//         dataIndex: 'name',
//         render: (_, record) => (
//           <div className="d-flex">
//             <AvatarStatus src={record.img} name={record.name} subTitle={record.email} />
//           </div>
//         ),
//         sorter: {
//           compare: (a, b) => {
//             a = a.name.toLowerCase();
//             b = b.name.toLowerCase();
//             return a > b ? -1 : b > a ? 1 : 0;
//           },
//         },
//       },
//       {
//         title: 'Leave Type',
//         dataIndex: 'leavetype',
//         sorter: {
//           compare: (a, b) => a.leavetype.length - b.leavetype.length,
//         },
//       },
//       {
//         title: 'Applied On',
//         dataIndex: 'appliedon',
       
//         sorter: (a, b) => dayjs(a.appliedon).unix() - dayjs(b.appliedon).unix(),
//       },
//       {
//         title: 'Start Date',
//         dataIndex: 'startdate',
       
//         sorter: (a, b) => dayjs(a.startdate).unix() - dayjs(b.startdate).unix(),
//       },
//       {
//         title: 'End Date',
//         dataIndex: 'enddate',
       
//         sorter: (a, b) => dayjs(a.enddate).unix() - dayjs(b.enddate).unix(),
//       },
//       {
//         title: 'Total Days',
//         dataIndex: 'totaldays',
//         sorter: {
//           compare: (a, b) => a.totaldays.length - b.totaldays.length,
//         },
//       },

//        {
//         title: 'Leave Reason',
//         dataIndex: 'leavereason',
//         sorter: {
//           compare: (a, b) => a.leavereason.length - b.leavereason.length,
//         },
//       },
//       {
//         title: 'Status',
//         dataIndex: 'status',
//         render: (status) => (
//           <Tag className="text-capitalize" color={status === 'active' ? 'cyan' : 'red'}>
//             {status}
//           </Tag>
//         ),
//         sorter: {
//           compare: (a, b) => a.status.length - b.status.length,
//         },
//       },
//       {
//         title: 'Action',
//         dataIndex: 'actions',
//         render: (_, elm) => (
//             <div className="text-center">
//                 <EllipsisDropdown menu={dropdownMenu(elm)}/>
//             </div>
//         )
//     },
//     //   {
//     //     title: 'Action',
//     //     dataIndex: 'actions',
//     //     render: (_, elm) => (
//     //       <div className="text-right d-flex justify-content-center">
//     //         <Tooltip title="View">
//     //           <Button
//     //             type="primary"
//     //             className="mr-2"
//     //             icon={<EyeOutlined />}
//     //             onClick={() => this.showUserProfile(elm)}
//     //             size="small"
//     //           />
//     //         </Tooltip>
//     //         <Tooltip title="Delete">
//     //           <Button danger icon={<DeleteOutlined />} onClick={() => this.deleteUser(elm.id)} size="small" />
//     //         </Tooltip>
//     //       </div>
//     //     ),
//     //   },
//     ];

//     return (
//       <Card bodyStyle={{ padding: '-3px' }}>
//         <Flex alignItems="center" justifyContent="space-between" mobileFlex={false}>
//           <Flex className="mb-1" mobileFlex={false}>
//             <div className="mr-md-3 mb-3">
//               <Input placeholder="Search" prefix={<SearchOutlined />} onChange={(e) => this.onSearch(e)} />
//             </div>
//           </Flex>
//           <Flex gap="7px">
//             <Button type="primary" className="ml-2" onClick={this.openAddLeaveModal}>
//               <PlusOutlined />
//               <span>New</span>
//             </Button>
//             <Button type="primary" icon={<FileExcelOutlined />} block>
//               Export All
//             </Button>
//           </Flex>
//         </Flex>
//         <div className="table-responsive mt-2">
//           <Table columns={tableColumns} dataSource={users} rowKey="id"  scroll={{ x: 1200 }} />
//         </div>
//         <UserView data={selectedUser} visible={userProfileVisible} close={() => this.closeUserProfile()} />

//         {/* Add Employee Modal */}
//         <Modal
//           title=""
//           visible={isAddLeaveModalVisible}
//           onCancel={this.closeAddLeaveModal}
//           footer={null}
//           width={800}
//         >
//           <AddLeave onClose={this.closeAddLeaveModal} />
//         </Modal>
//       </Card>
//     );
//   }
// }

// export default LeaveList;









