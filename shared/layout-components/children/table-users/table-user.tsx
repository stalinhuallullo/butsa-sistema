import { useGlobalContextUser } from "@/interfaces/reducer/users-context"
import { useUserInfoGlobalContent } from "@/interfaces/userInfo-context"
import { Table } from "antd"
import { Fragment, useState } from "react"
import ModalConfirm from "../modals/ModalConfirm"
import { onChangeData } from "@/utils/component-utils/change-data"
import { ColumnsDataUser } from "@/utils/component-utils/table-columns-users"


export default function TableUsers() {

    const { arrayUsers, setArrayUsers } = useGlobalContextUser()
    const [isPopUpVisible, setIsPopUpVisible] = useState(false)
    const [columnsUser, setColumnsUser] = useState<ColumnsDataUser[]>([])

    // User Info
    const { userDataSession } = useUserInfoGlobalContent()
    const showModal = () => setIsPopUpVisible(true)
    type DataIndex = keyof ColumnsDataUser;



    return (
        <Fragment>
            <div className='s-box-table'>
                <Table
                    showHeader={true}
                    scroll={{ x: 600 }}
                    pagination={{ pageSizeOptions: [10, 20, 50] }}
                    dataSource={arrayUsers}
                    columns={columnsUser}
                    onChange={onChangeData}
                />
            </div>

            <ModalConfirm
                isModalVisible={isPopUpVisible}
                setIsModalVisible={setIsPopUpVisible}
            />
        </Fragment>
    )
}