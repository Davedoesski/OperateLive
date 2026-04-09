import '@servicenow/sdk/global'
import { Acl } from '@servicenow/sdk/core'

// ACLs for new effort fields on sn_customerservice_case

Acl({
    $id: Now.ID['approved_effort_write_acl'],
    active: true,
    adminOverrides: true,
    type: 'record',
    table: 'sn_customerservice_case',
    field: 'approved_effort',
    operation: 'write',
    roles: ['259e90f6c3223100d6d210c422d3aefb', '2831a114c611228501d4ea6c309d626d'],
})

Acl({
    $id: Now.ID['additional_time_approved_write_acl'],
    active: true,
    adminOverrides: true,
    type: 'record',
    table: 'sn_customerservice_case',
    field: 'additional_time_approved',
    operation: 'write',
    roles: ['259e90f6c3223100d6d210c422d3aefb', '2831a114c611228501d4ea6c309d626d'],
})

Acl({
    $id: Now.ID['additional_time_requested_write_acl'],
    active: true,
    adminOverrides: true,
    type: 'record',
    table: 'sn_customerservice_case',
    field: 'additional_time_requested',
    operation: 'write',
    roles: ['259e90f6c3223100d6d210c422d3aefb', '2831a114c611228501d4ea6c309d626d'],
})

Acl({
    $id: Now.ID['effort_to_date_write_acl'],
    active: true,
    adminOverrides: true,
    type: 'record',
    table: 'sn_customerservice_case',
    field: 'effort_to_date',
    operation: 'write',
    roles: ['259e90f6c3223100d6d210c422d3aefb', '2831a114c611228501d4ea6c309d626d'],
})

Acl({
    $id: Now.ID['total_approved_time_write_acl'],
    active: true,
    adminOverrides: true,
    type: 'record',
    table: 'sn_customerservice_case',
    field: 'total_approved_time',
    operation: 'write',
    roles: ['259e90f6c3223100d6d210c422d3aefb', '2831a114c611228501d4ea6c309d626d'],
})
