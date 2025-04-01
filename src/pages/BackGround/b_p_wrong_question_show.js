import { Table, Button, Space, Modal, Form, Input, Select, message } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    getWrongQuestions, 
    addNewWrongQuestion, 
    updateQuestionMastery, 
    removeWrongQuestion 
} from '@/redux/modules/r_c_wrong_questions';
import { url_get_wrong_questions, url_add_wrong_question, url_update_wrong_question_mastery, url_delete_wrong_question } from '@/utils/constant_api';

const { Option } = Select;

const BackWrongQuestionSetting = () => {
    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentRecord, setCurrentRecord] = useState(null);
    const dispatch = useDispatch();
    const wrongQuestionsState = useSelector(state => state.r_c_wrong_questions);

    useEffect(() => {
        dispatch(getWrongQuestions());
    }, [dispatch]);

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '题目内容',
            dataIndex: 'question_content',
            key: 'question_content',
            render: text => text?.substring(0, 30) + (text?.length > 30 ? '...' : ''),
        },
        {
            title: '学科',
            dataIndex: 'subject_id',
            key: 'subject_id',
            render: id => ['数学', '语文', '英语', '物理'][id - 1] || '未知',
        },
        {
            title: '掌握状态',
            dataIndex: 'is_mastered',
            key: 'is_mastered',
            render: status => (
                <span style={{ color: status ? 'green' : 'red' }}>
                    {status ? '已掌握' : '未掌握'}
                </span>
            ),
        },
        {
            title: '操作',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button onClick={() => handleEdit(record)}>编辑</Button>
                    <Button 
                        type={record.is_mastered ? 'default' : 'primary'} 
                        onClick={() => handleToggleMastery(record)}
                    >
                        {record.is_mastered ? '标记未掌握' : '标记已掌握'}
                    </Button>
                    <Button danger onClick={() => handleDelete(record)}>删除</Button>
                </Space>
            ),
        },
    ];

    const handleAdd = () => {
        setCurrentRecord(null);
        form.resetFields();
        setIsModalVisible(true);
    };

    const handleEdit = (record) => {
        setCurrentRecord(record);
        form.setFieldsValue(record);
        setIsModalVisible(true);
    };

    const handleToggleMastery = (record) => {
        dispatch(updateQuestionMastery({
            id: record.id,
            is_mastered: !record.is_mastered
        }));
    };

    const handleDelete = (record) => {
        Modal.confirm({
            title: '确认删除',
            content: '确定要删除这道错题吗？',
            onOk: () => {
                dispatch(removeWrongQuestion({ id: record.id }));
            },
        });
    };

    const handleSubmit = () => {
        form.validateFields().then(values => {
            if (currentRecord) {
                // 更新逻辑
                message.success('更新成功');
            } else {
                // 新增逻辑
                dispatch(addNewWrongQuestion(values));
            }
            setIsModalVisible(false);
        });
    };

    return (
        <div style={{ padding: 24 }}>
            <div style={{ marginBottom: 16 }}>
                <Button type="primary" onClick={handleAdd}>
                    添加错题
                </Button>
            </div>
            <Table 
                columns={columns} 
                dataSource={wrongQuestionsState.data} 
                loading={wrongQuestionsState.loading}
                rowKey="id"
                pagination={{ pageSize: 10 }}
            />
            
            <Modal
                title={currentRecord ? '编辑错题' : '添加错题'}
                visible={isModalVisible}
                onOk={handleSubmit}
                onCancel={() => setIsModalVisible(false)}
                width={800}
            >
                <Form form={form} layout="vertical">
                    <Form.Item name="subject_id" label="学科" rules={[{ required: true }]}>
                        <Select placeholder="请选择学科">
                            <Option value={1}>数学</Option>
                            <Option value={2}>语文</Option>
                            <Option value={3}>英语</Option>
                            <Option value={4}>物理</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="question_type" label="题型" rules={[{ required: true }]}>
                        <Select placeholder="请选择题型">
                            <Option value={1}>单选题</Option>
                            <Option value={2}>多选题</Option>
                            <Option value={3}>填空题</Option>
                            <Option value={4}>解答题</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="question_content" label="题目内容" rules={[{ required: true }]}>
                        <Input.TextArea rows={4} />
                    </Form.Item>
                    <Form.Item name="correct_answer" label="正确答案" rules={[{ required: true }]}>
                        <Input.TextArea rows={4} />
                    </Form.Item>
                    <Form.Item name="wrong_reason" label="错误原因">
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default BackWrongQuestionSetting;
