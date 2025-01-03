import React, { useState } from 'react';
import { DealStatisticViewData } from '../../../dashboards/default/DefaultDashboardData';
import { Card, Form, Table, Menu, Row, Col, Tag, Input, message, Button, Modal } from 'antd';
import { EyeOutlined, DeleteOutlined, SearchOutlined, MailOutlined, PlusOutlined, PushpinOutlined, FileExcelOutlined, CopyOutlined, EditOutlined, LinkOutlined } from '@ant-design/icons';
import UserView from '../../../Users/user-list/UserView';
import Flex from 'components/shared-components/Flex';
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown';
import userData from 'assets/data/user-list.data.json';


function ViewEstimates() {
    // const [dealStatisticViewData] = useState(DealStatisticViewData);

    const [users, setUsers] = useState(userData);
  
    return (
        <>
          <div>
          <div className='bg-gray-50 ml-[-24px] mr-[-24px] p-6 mt-[-53px] rounded-t-lg rounded-b-lg mb-[-24px] pb-3'>
          <h2 className="mb-4 border-b pb-[35px] font-medium"></h2>
            <Card className='border-0 mt-4'>

                <div className="p-2">

                    {/* Heading */}
                    <h1 className="font-bold text-lg mb-1">Product Summary</h1>
                    <p className="text-xs text-gray-500 mb-2">
                        All items here cannot be deleted.
                    </p>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-300 bg-white text-center text-xs">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-2">#</th>
                                    <th className="px-4 py-2">Product</th>
                                    <th className="px-4 py-2">Quantity</th>
                                    <th className="px-4 py-2">Rate</th>
                                    <th className="px-4 py-2">Discount</th>
                                    <th className="px-4 py-2">Tax</th>
                                    <th className="px-4 py-2">Description</th>
                                    <th className="px-4 py-2">
                                        <span>Price</span>
                                        <br />
                                        <span className="text-red-500">(after tax & discount)</span>

                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Row 1 */}
                                <tr>
                                    <td className="px-4 py-2">1</td>
                                    <td className="px-4 py-2">Refrigerator</td>
                                    <td className="px-4 py-2">Piece</td>
                                    <td className="px-4 py-2">USD 9.000,00</td>
                                    <td className="px-4 py-2">USD 0.00</td>
                                    <td className="px-4 py-2 text-center">
                                        <tr><p className='flex gap-3'><span>CGST (10%)</span><span>USD 900,00</span></p></tr>
                                        <tr><p className='flex gap-5'><span>SGST (5%)</span><span>USD 450,00</span></p></tr>
                                    </td>
                                    <td className="px-4 py-2">
                                       -
                                    </td>
                                    <td className="px-4 py-2">USD 10.350,00</td>
                                </tr>
                                {/* Total Row */}
                                <tr className="bg-gray-100 font-semibold">
                                    <td className="px-4 py-2 text-center" colSpan="2">
                                        Total
                                    </td>
                                    <td className="px-4 py-2">1</td>
                                    <td className="px-4 py-2">USD 9.000,00</td>
                                    <td className="px-4 py-2">USD 0,00</td>
                                    <td className="px-4 py-2">USD 1.350,00</td>
                                    <td className="px-4 py-2"></td>
                                    <td className="px-4 py-2"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Summary Details */}
                    <div className="mt-3 flex flex-col items-end space-y-2 text-xs">
                        <div className="flex justify-between w-full sm:w-1/3 border-b pb-2">
                            <span className="text-gray-700">Sub Total</span>
                            <span className="text-gray-700">USD 9.000,00</span>
                        </div>
                        <div className="flex justify-between w-full sm:w-1/3 border-b pb-2">
                            <span className="text-gray-700">Discount</span>
                            <span className="text-gray-700">USD 0,00</span>
                        </div>
                        <div className="flex justify-between w-full sm:w-1/3 border-b pb-2">
                            <span className="text-gray-700">CGST</span>
                            <span className="text-gray-700">USD 900,00</span>
                        </div>
                        <div className="flex justify-between w-full sm:w-1/3 border-b pb-2">
                            <span className="text-gray-700">SGST</span>
                            <span className="text-gray-700">USD 450,00</span>
                        </div>
                        <div className="flex justify-between w-full sm:w-1/3 border-b pb-2">
                            <span className="text-gray-700">Total</span>
                            <span className="text-gray-700">USD 10.350,00</span>
                        </div>
                    </div>
                </div>
            </Card>
            </div>
            </div>

        </>
    )
}

export default ViewEstimates;
