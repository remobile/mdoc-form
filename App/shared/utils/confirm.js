import React from 'react';
import _ from 'lodash';
import { Modal, Input, notification } from 'antd';

export function confirm ({ pre, name, post = '' }, onOk) {
    Modal.confirm({
        title: '确认',
        content: (
            <div style={{ paddingTop: 10, fontSize: 14 }}>
                确定{pre}{name && <span style={{ color: 'red' }}>{name}</span>}{post}吗？
            </div>
        ),
        okText: '确定',
        cancelText: '取消',
        onOk,
    });
}
export function confirmWithPassword ({ pre, name, post = '', type = '登录' }, onOk) {
    let password = '';
    Modal.confirm({
        title: '确认',
        content: (
            <div style={{ paddingTop: 10, fontSize: 14 }}>
                {pre}{name && <span style={{ color: 'red' }}>{name}</span>}{post} 需要输入确认身份，请输入{type}密码。
                <Input style={{ marginTop: 10 }} placeholder={`请输入${type}密码`} maxLength={20}
                    type='password' autoComplete='off' onContextMenu={_.noop} onPaste={_.noop}
                    onCopy={_.noop} onCut={_.noop} onChange={(e) => {
                        password = e.target.value;
                    }}
                    />
            </div>
        ),
        okText: '确定',
        cancelText: '取消',
        onOk: () => onOk(password),
    });
}
export function showSuccess (info, title) {
    notification.success({ key:'success', description: info, message: title });
}
export function showError (info, title) {
    notification.error({ key:'error', description: info, message: title });
}
