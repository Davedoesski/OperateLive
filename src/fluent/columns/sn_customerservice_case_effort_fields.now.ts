import '@servicenow/sdk/global'
import { DurationColumn } from '@servicenow/sdk/core'

// New effort tracking fields for sn_customerservice_case
export const approved_effort = DurationColumn({
    label: 'Approved Effort',
    active: true,
    mandatory: false,
    read_only: false,
})

export const additional_time_approved = DurationColumn({
    label: 'Additional Time Approved',
    active: true,
    mandatory: false,
    read_only: false,
})

export const additional_time_requested = DurationColumn({
    label: 'Additional Time Requested',
    active: true,
    mandatory: false,
    read_only: false,
})

export const effort_to_date = DurationColumn({
    label: 'Effort to Date',
    active: true,
    mandatory: false,
    read_only: false,
})

export const total_approved_time = DurationColumn({
    label: 'Total Approved Time',
    active: true,
    mandatory: false,
    read_only: false,
})
