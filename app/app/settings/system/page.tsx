"use client"

import React from 'react'
import PageHeader from '@/shared/layout-components/page-header/page-header'
import Seo from '@/shared/layout-components/seo/seo'
import { Card, Col, Row } from 'react-bootstrap'

export default function Routes() {
    return (
        <div>
            <Seo title="Configuración del sistema" />

            <PageHeader title="Configuración del sistema" item="Configuraciones" active_item="Configuración del sistema" />

            {/* <!-- Row --> */}
            <Row className=" sidemenu-height">
                <Col lg={12}>
                    <Card className="custom-card">
                        <Card.Body>Typing Some text here....</Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End Row --> */}
        </div>
    )
}