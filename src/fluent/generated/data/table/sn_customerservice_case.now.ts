import { Table, DurationColumn } from '@servicenow/sdk/core'

export const sn_customerservice_case = Table({
    actions: ['read', 'update', 'create'],
    allowClientScripts: true,
    allowNewFields: true,
    allowUiActions: true,
    allowWebServiceAccess: true,
    attributes: {
        email_client: true,
    },
    audit: true,
    extends: 'task',
    label: 'Case',
    name: 'sn_customerservice_case',
    schema: {
        x_dttm_customer_0_total_approved_time: DurationColumn({
            label: 'Total approved time',
            maxLength: 40,
        }),
        x_dttm_customer_0_additional_time_approved: DurationColumn({
            label: 'Additional time approved',
            maxLength: 40,
        }),
        x_dttm_customer_0_effort_to_date: DurationColumn({
            label: 'Effort to date',
            maxLength: 40,
        }),
        x_dttm_customer_0_additional_time_requested: DurationColumn({
            label: 'Additional time requested',
            maxLength: 40,
        }),
        x_dttm_customer_0_approved_effort: DurationColumn({
            label: 'Approved effort',
            maxLength: 40,
        }),
    },
    textIndex: true,
})
