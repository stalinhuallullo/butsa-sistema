"use client"

import React from 'react'
import PageHeader from '@/shared/layout-components/page-header/page-header'
import Seo from '@/shared/layout-components/seo/seo'
import { Card, Col, Row } from 'react-bootstrap'

export default function ReportKpi() {
    return (
        <div>
            <Seo title="Reporte de KPI" />

            <PageHeader title="Reporte de KPI" item="Reportes" active_item="Reporte de KPI" />

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