import React from 'react';
import { Button, Typography, Badge } from '@arco-design/web-react';

const { Text } = Typography;

export const Status = ['下线', '正常'];

export function getColumns(
  callback: (record: Record<string, any>, type: string) => Promise<void>
) {
  return [
    {
      title: '家族编号',
      dataIndex: 'code',
      render: (value) => <Text copyable>{value}</Text>,
    },
    {
      title: '家族名称',
      dataIndex: 'name',
    },
    {
      title: '所在区服',
      dataIndex: 'serve',
    },
    {
      title: '家族状态',
      dataIndex: 'status',
      render: (x) => {
        if (x === 0) {
          return <Badge status="error" text={Status[x]}></Badge>;
        }
        return <Badge status="success" text={Status[x]}></Badge>;
      },
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
    },
    {
      title: '操作',
      dataIndex: 'operations',
      headerCellStyle: { paddingLeft: '15px' },
      render: (_, record) => (
        <Button
          type="text"
          size="small"
          onClick={() => callback(record, 'view')}
        >
          {'删除'}
        </Button>
      ),
    },
  ];
}
