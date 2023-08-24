import { Fragment, useEffect, useRef, useState } from "react";
import { Button, Input, InputRef, Space, Table } from "antd";
import ModalConfirm from "../modals/ModalConfirm";
import { useGlobalContextServicesDay } from "@/interfaces/reducer/services-day-context";
import { useUserInfoGlobalContent } from "@/interfaces/userInfo-context";
import { validateHeaders, validateRows } from "@/utils/data-utils/validateTable";
import { ColumnsData, columnsServicesDay, onChangeData } from "@/utils/component-utils/tableColumnsServicesDay";
import Highlighter from "react-highlight-words";
import type { ColumnType, ColumnsType } from 'antd/es/table';
import { FilterConfirmProps } from "antd/es/table/interface";
import { InfoTableServicesDay } from "@/interfaces/services-day-interface";


export default function TableServicesDay() {


    const { arrayServicesDay, setArrayServicesDay } = useGlobalContextServicesDay()
    const [isPopUpVisible, setIsPopUpVisible] = useState(false)
    const [columnsServicesDayTmp, setColumnsServicesDayTmp] = useState<ColumnsData[] >([])

    // User Info
    const { userDataSession } = useUserInfoGlobalContent()
    const showModal = () => setIsPopUpVisible(true)
    type DataIndex = keyof ColumnsData;

    // useEffect(() => {
    //     validateHeaders(arrayStores, setArrayBadHeaders, setArrayGoodHeaders)
    //     validateRows(arrayStores, setBadRowFormat)
    //     //validateDuplicateManagerEmail(arrayStores, setArrayDuplicateManagerEmail)
    //     //validateDuplicateEmails(arrayStores, setArrayDuplicateEmails)
    // }, [arrayServicesDay])

    useEffect(() => {
        const mey = columnsServicesDay.map((item: ColumnsData) => {
            const ddd: any = item 
            return {
                ...item,
                ...getColumnSearchProps(ddd)
            }
        })
        console.log("mey => ", mey)
        setColumnsServicesDayTmp(mey)
    }, [arrayServicesDay])


    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);

    const handleSearch = (
        selectedKeys: string[],
        confirm: (param?: FilterConfirmProps) => void,
        dataIndex: DataIndex,
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<DataIndex> => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                        // icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText((selectedKeys as string[])[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        // type="link"
                        // size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            // <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
            <>tay</>
        ),
        onFilter: (value: any, record: any) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()),
        onFilterDropdownOpenChange: (visible: any) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text: string) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    return (
        <Fragment>
            <div className='s-box-table'>
                <Table
                    showHeader={true}
                    scroll={{ x: 600 }}
                    pagination={{ pageSizeOptions: [10, 20, 50] }}
                    dataSource={arrayServicesDay.newData}
                    columns={columnsServicesDayTmp}
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