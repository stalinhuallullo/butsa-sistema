import { UploadFile } from 'antd/lib/upload/interface';
import { convertCSVtoJSON } from './csvToJson';


export type ITypeProveedor = "" | "PALOMINO" | "CANCHARI" | "CEVA" | "DINET" | "LEYVA";

export function setUploadFileToArray(
  file: UploadFile<any>,
  setArrayStores: any,
  setIsModalVisible: any
) {
  // console.log("setUploadFileToArray ==> ", file)
  const reader = new FileReader();
  reader.onload = function (p) {
    const result = p.target?.result;
    // console.log("result ==> ", result)
    const data = convertCSVtoJSON(result);
    const newData = data
      .filter((item) => item.PROVEEDOR === "PALOMINO")
      .map((item) => {
        return Object.fromEntries(
          Object.entries(item).map(([headerName, cellValue]) => {
            // delete space before and after the text
            if (typeof cellValue === 'string') {
              cellValue = cellValue.trim();
            }
            if (headerName === "FECHA_DESPACHO") {
              console.log("FECHA_DESPACHO ==> ", cellValue)
            }
            // if (headerName === "FECHA_DESPACHO") {
            //   const parsedDate: Date = new Date(cellValue);
            //   parsedDate.setHours(parsedDate.getHours() + timezoneOffset); // utc-dates
            //   cellValue = df(parsedDate, "dd/mm/yyyy");
            // }
            // set empty string in budget as undefined, because budget is treated as number later
            if (["ENTREGAS_CONFORME", "OBSERVACION"].includes(headerName) && cellValue === '') {
              cellValue = "";
            }
            return [headerName, cellValue];
          })
        )
      })
    console.log("newData ===> ", newData)
    // const newData = data.map((x) => {
    //   return Object.fromEntries(
    //     Object.entries(x).map(([headerName, cellValue]) => {
    //       // delete space before and after the text
    //       if (typeof cellValue === 'string') {
    //         cellValue = cellValue.trim();
    //       }
    //       // set empty string in budget as undefined, because budget is treated as number later
    //       if (["ENTREGAS_CONFORME", "OBSERVACION"].includes(headerName) && cellValue === '') {
    //         cellValue = "";
    //       }
    //       return [headerName, cellValue];
    //     })
    //   )
    // }).map((item) => {
    //   console.log("item.PROVEEDOR ==> ", item.PROVEEDOR)
    //   //item.PROVEEDOR === "PALOMINO"
    // });
    if (newData.length === 0) {
      setIsModalVisible(true)
    } else {
      setArrayStores({ newData: newData, filename: file.name.split('.')[0] });
    }
  };
  const infoFileBlob = file.originFileObj as Blob;
  if (file.name.split('.').pop() === 'csv') {
    reader.readAsText(infoFileBlob);
  } else {
    reader.readAsBinaryString(infoFileBlob);
  }
}
