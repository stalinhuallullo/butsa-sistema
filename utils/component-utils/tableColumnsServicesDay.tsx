"use client"

import { Button } from 'react-bootstrap'
import patterns from '../data-utils/patternRegex'
import { sorter } from './sorter'
import { useRef, useState } from 'react'
import { Input, InputRef, Space } from 'antd'
import { FilterConfirmProps } from 'antd/es/table/interface'
import { InfoTableServicesDay } from '@/interfaces/services-day-interface'
import Highlighter from 'react-highlight-words';
/* eslint-disable no-useless-escape */

export interface ColumnsData {
  title?: string
  dataIndex?: string
  key?: string
  width?: number
  sorter?: any
  multiple?: any
  render?: any
}


export const columnsServicesDay: ColumnsData[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    width: 30,
    sorter: (a: any, b: any) => sorter(a.id, b.id),
    multiple: 1
  },
  {
    title: 'FECHA REGISTRO (D/M/Y)',
    dataIndex: 'fecha_registro',
    key: 'fecha_registro',
    width: 130,
    sorter: (a: any, b: any) => sorter(a.fecha_registro, b.fecha_registro),
    multiple: 2
  },
  {
    title: 'RUTAS',
    dataIndex: 'rutas', // excel name column
    key: 'rutas',
    width: 50,
    sorter: (a: any, b: any) => sorter(a['rutas'], b['rutas']),
    multiple: 3
  },
  {
    title: "JABAS",
    dataIndex: 'jabas', // excel name column
    key: "jabas",
    width: 50,
    sorter: (a: any, b: any) =>
      sorter(a['jabas'], b['jabas']),
    multiple: 4,
  },
  {
    title: 'ESTADO DEL SERVICIO',
    dataIndex: 'estado_servicio',
    key: 'estado_servicio',
    width: 130,
    sorter: (a: any, b: any) => sorter(a.estado_servicio, b.estado_servicio),
    multiple: 5
  },
  {
    title: 'CARGO SECO',
    dataIndex: 'cargo_seco',
    key: 'cargo_seco',
    width: 50,
    sorter: (a: any, b: any) => sorter(a.cargo_seco, b.cargo_seco),
    multiple: 7
  },
  {
    title: 'FECHA FINALIZACION DE SERVICIO (D/M/Y)',
    dataIndex: 'fecha_finalizacion_servicio',
    key: 'fecha_finalizacion_servicio',
    width: 50,
    sorter: (a: any, b: any) => sorter(a.fecha_finalizacion_servicio, b.fecha_finalizacion_servicio),
    multiple: 8
  },
  {
    title: 'USUARIO',
    dataIndex: 'usuario',
    key: 'usuario',
    width: 50,
    sorter: (a: any, b: any) => sorter(a.usuario, b.usuario),
    multiple: 9
  },
  {
    title: 'OPCIONES',
    dataIndex: '',
    key: '',
    width: 50,
    render: (_: any, obj: any) => {
      return (
        <div className="btn-icon-list">
          <Button variant="primary" onClick={() => console.log("click en " + obj.id)}>
            <i className="fe fe-folder"></i> Consultar
          </Button>
          <Button variant="success" onClick={() => console.log("click en " + obj.id)}>
            <i className="fe fe-airplay"></i> Finalizar
          </Button>
        </div>
      )
    },
  }

]

export function onChangeData(
  pagination: any,
  filters: any,
  sorter: any,
  extra: any
) {
  return 1
}
