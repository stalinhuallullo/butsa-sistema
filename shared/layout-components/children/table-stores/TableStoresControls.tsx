import useTranslation from 'next-translate/useTranslation'

import { Button } from 'antd'

const TableStoresControls = (props: {
    validateError: () => Boolean
    submitStores: () => Promise<void>
    cleanStores: () => void
    tryAgain: () => void
}): JSX.Element => {
    const { t } = useTranslation()

    return (
        <>
            {props.validateError() ? (
                <Button
                    type='dashed'
                    style={{ backgroundColor: '#e24045' }}
                    onClick={props.tryAgain}>
                    {t('uploadmembers:dont')}
                </Button>
            ) : (
                <div style={{ display: 'flex', gap: '12px' }}>
                    <Button type={'primary'} onClick={props.cleanStores}>
                        {t('uploadmembers:cancel')}
                    </Button>
                    <Button type='primary' onClick={props.submitStores}>
                        {t('uploadmembers:continue')}
                    </Button>
                </div>
            )}
        </>
    )
}

export default TableStoresControls
