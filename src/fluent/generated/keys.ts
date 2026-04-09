import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    additional_time_approved_write_acl: {
                        table: 'sys_security_acl'
                        id: 'e3923e2ddf8c4b0ea6cc6ac9c9185f0f'
                    }
                    additional_time_requested_write_acl: {
                        table: 'sys_security_acl'
                        id: '52861ea530954191a1032c533ce4ef69'
                    }
                    approved_effort_write_acl: {
                        table: 'sys_security_acl'
                        id: '7c62e50c960e4ef491d3e74912fa1dc2'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '8990185c195144b29ee156b848ee489f'
                    }
                    effort_to_date_write_acl: {
                        table: 'sys_security_acl'
                        id: '7ded59d2d23d4b9e8d7623ffe5b787ff'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'dab112f51128470a84571189c5ac86ae'
                    }
                    total_approved_time_write_acl: {
                        table: 'sys_security_acl'
                        id: 'e45ec0b389ec4270aaa9e7307503f3b3'
                    }
                }
                composite: [
                    {
                        table: 'sys_security_acl_role'
                        id: '13bbdf9b2d25464cb5a42563af7b832a'
                        key: {
                            sys_security_acl: 'e45ec0b389ec4270aaa9e7307503f3b3'
                            sys_user_role: '259e90f6c3223100d6d210c422d3aefb'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3d2da781d8a34b2c93018a7ad678340b'
                        key: {
                            sys_security_acl: 'e3923e2ddf8c4b0ea6cc6ac9c9185f0f'
                            sys_user_role: '2831a114c611228501d4ea6c309d626d'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '49fb2e5d9bcf4945a91b2beef5393b43'
                        key: {
                            sys_security_acl: 'e3923e2ddf8c4b0ea6cc6ac9c9185f0f'
                            sys_user_role: '259e90f6c3223100d6d210c422d3aefb'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5e6ee63440e0441cbd197045715a0d49'
                        key: {
                            sys_security_acl: '7ded59d2d23d4b9e8d7623ffe5b787ff'
                            sys_user_role: '259e90f6c3223100d6d210c422d3aefb'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '64ce8f74c5794a7fbdcd6fe1a41b5014'
                        key: {
                            sys_security_acl: '52861ea530954191a1032c533ce4ef69'
                            sys_user_role: '259e90f6c3223100d6d210c422d3aefb'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6b9c3833c4164151a7b9dd2e2ce3c256'
                        key: {
                            sys_security_acl: 'e45ec0b389ec4270aaa9e7307503f3b3'
                            sys_user_role: '2831a114c611228501d4ea6c309d626d'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '80af8c3f4a224ae4bda5877523e4ff0b'
                        key: {
                            sys_security_acl: '7ded59d2d23d4b9e8d7623ffe5b787ff'
                            sys_user_role: '2831a114c611228501d4ea6c309d626d'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '904c0f53124b4196b924bb0ffbec34bb'
                        key: {
                            sys_security_acl: '7c62e50c960e4ef491d3e74912fa1dc2'
                            sys_user_role: '259e90f6c3223100d6d210c422d3aefb'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a0af124ed71547a1a23ca21873655d58'
                        key: {
                            sys_security_acl: '7c62e50c960e4ef491d3e74912fa1dc2'
                            sys_user_role: '2831a114c611228501d4ea6c309d626d'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c20306882df34491963cf0144d8be0b1'
                        key: {
                            sys_security_acl: '52861ea530954191a1032c533ce4ef69'
                            sys_user_role: '2831a114c611228501d4ea6c309d626d'
                        }
                    },
                ]
            }
        }
    }
}
