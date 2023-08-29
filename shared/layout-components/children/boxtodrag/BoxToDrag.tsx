
import { useState } from 'react'
import { MdFileUpload } from 'react-icons/md'
import useTranslation from 'next-translate/useTranslation'
import { Upload } from 'antd'
import { UploadChangeParam } from 'antd/lib/upload'
import DownloadTemplate from './downloadtemplate/DownloadTemplate'
import ModalInfo from '../modals/ModalInfo'
import { setUploadFileToArray } from '@/utils/data-utils/fileToArray'
import { useGlobalContextStores } from '@/interfaces/reducer/stores-context'
import { dataUrls } from '@/config/url'

const { Dragger } = Upload

type PropsBoxToDrag = {
  onUploadComplete?: () => void
}

export default function BoxToDrag ({ onUploadComplete = () => { } }: PropsBoxToDrag) {
  const { t } = useTranslation()
  const { setArrayStores } = useGlobalContextStores()
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  

  const handleFileUpload = ({ file, fileList, event }: UploadChangeParam) => {
    const { status } = file

    console.log("file ==> ", file)
    console.log("fileList ==> ", fileList)
    console.log("event ==> ", event)
    console.log("status ==> ", status)
    if (status === 'done') {
      onUploadComplete()
      // This show a pop up when the user upload a file
      // message.success(`${file.name} file uploaded successfully.`)
      setUploadFileToArray(file, setArrayStores, setIsModalVisible)
    }
  }

  return (
    <>
      <div className='s-box-v2'>
        <Dragger
          multiple={false}
          maxCount={1}
          data-testid='input-file-data-csv'
          accept='.xlsx,.csv,.xls'
          //action={"http://localhost:3000/api/v1/services-day"}
          onChange={handleFileUpload}>
          <div className='s-clickhere'>
            <div className='s-iconUpload'>
              <MdFileUpload data-testid='file-image' />
            </div>
            <div className='s-textclickhere'>
              {"Selecciona o arrastra tu archivo .csv"}
              <br></br>
              {"para empezar a subir el servicio del dia"}
            </div>
            {isModalVisible ? (
              <ModalInfo
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
              />
            ) : null}
          </div>
        </Dragger>
      </div>

      <div className='s-box-footer'>
        <DownloadTemplate />
        <div className='s-textclickherrtod'>
          <a target='_blank' href={dataUrls.URLs.guide} rel='noreferrer'>
            <p>{"Cómo llenar mi archivo csv.?"}</p>
          </a>
        </div>
      </div>
    </>
  )
}

