"use client"

import React from 'react'
import PageHeader from '@/shared/layout-components/page-header/page-header'
import Seo from '@/shared/layout-components/seo/seo'
import { Card, Col, Row } from 'react-bootstrap'

export default function ServicesDay() {
    return (
        <div>
            <Seo title="Servicios del día" />

            <PageHeader title="Servicios del día" item="Aplicaciones" active_item="Servicios del día" />

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