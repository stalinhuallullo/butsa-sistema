"use client"

import { Button } from 'react-bootstrap'
import patterns from '../data-utils/patternRegex'
import { sorter } from './sorter'
import { useRef, useState } from 'react'
import { Image, Input, InputRef, Space } from 'antd'
import { FilterConfirmProps } from 'antd/es/table/interface'
import { InfoTableServicesDay } from '@/interfaces/services-day-interface'
import Highlighter from 'react-highlight-words';
import Link from 'next/link'
/* eslint-disable no-useless-escape */

export interface ColumnsDataUser {
  title?: string
  dataIndex?: string
  key?: string
  width?: number
  sorter?: any
  multiple?: any
  render?: any
}


export const columnsUser: ColumnsDataUser[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    width: 30,
    sorter: (a: any, b: any) => sorter(a.id, b.id),
    multiple: 1
  },
  {
    title: 'Foto',
    // dataIndex: 'name',
    // key: 'name',
    width: 200,
    // sorter: (a: any, b: any) => sorter(a.fecha_registro, b.fecha_registro),
    render: (_: any, obj: any) => {
      return (
        <Image
          width={200}
          src={obj.photo}
        />
      )
    },
    multiple: 2
  },
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
    width: 130,
    // sorter: (a: any, b: any) => sorter(a.fecha_registro, b.fecha_registro),
    render: (_: any, obj: any) => {
      return (
        <strong>{obj.first_name + obj.father_last_name}</strong>
      )
    },
    multiple: 3
  },
  {
    title: 'DNI',
    dataIndex: 'dni', // excel name column
    key: 'dni',
    width: 50,
    sorter: (a: any, b: any) => sorter(a.dni, b.dni),
    multiple: 3
  },
  {
    title: 'CUMPLEAÑOS (D/M/Y)',
    dataIndex: 'birthdate',
    key: 'birthdate',
    width: 50,
    sorter: (a: any, b: any) => sorter(a.birthdate, b.birthdate),
    multiple: 8
  },
  {
    title: "ESTADO",
    dataIndex: 'status', // excel name column
    key: "status",
    width: 50,
    sorter: (a: any, b: any) => sorter(a.status, b.status),
    multiple: 4,
  },
  
  
  {
    title: 'USUARIO',
    dataIndex: 'user_name',
    key: 'user_name',
    width: 50,
    sorter: (a: any, b: any) => sorter(a.user_name, b.user_name),
    multiple: 9
  },
  {
    title: 'OPCIONES',
    dataIndex: 'options',
    key: 'options',
    width: 50,
    //sorter: (a: any, b: any) => sorter(a.usuario, b.usuario),
    multiple: 9,
    render: (_: any, obj: any) => {
      return (
        <div className="btn-icon-list">
          {/* <Button variant="primary" onClick={() => console.log("click en " + obj.id)}>
            <i className="fe fe-folder"></i> Consultar
          </Button> */}
          <Link className='btn btn-primary' href={`/app/applications/services-day/${obj.id}`}>
            <i className="fe fe-folder"></i> Editar
          </Link>
          <Link className='btn btn-danger' href={`/app/applications/services-day/${obj.id}`}>
            <i className="fe fe-folder"></i> Eliminar
          </Link>
          {/* <Link className='btn btn-primary' href={`/app/applications/services-day//${obj.id}`}>
          <i className="fe fe-airplay"></i> Finalizar
          </Link> */}
          {/* <Button variant="success" onClick={() => console.log("click en " + obj.id)}>
            <i className="fe fe-airplay"></i> Finalizar
          </Button> */}
        </div>
      )
    }
  }
  // {
  //   title: 'OPCIONES',
  //   dataIndex: 'options',
  //   key: 'options',
  //   width: 50,
  //   multiple: 10,
  //   render: (_: any, obj: any) => {
  //     return (
  //       <div className="btn-icon-list">
  //         <Button variant="primary" onClick={() => console.log("click en " + obj.id)}>
  //           <i className="fe fe-folder"></i> Consultar
  //         </Button>
  //         <Button variant="success" onClick={() => console.log("click en " + obj.id)}>
  //           <i className="fe fe-airplay"></i> Finalizar
  //         </Button>
  //       </div>
  //     )
  //   }
  // }

]

