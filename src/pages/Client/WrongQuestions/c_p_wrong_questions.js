import { useState, useEffect } from 'react';
import { Tabs, Card, List, Pagination, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getWrongQuestions } from '@/redux/modules/r_c_wrong_questions';
import style from './index.module.scss';

const { TabPane } = Tabs;

const WrongQuestions = () => {
    const dispatch = useDispatch();
    const wrongQuestionsState = useSelector(state => state.r_c_wrong_questions);
    const [activeTab, setActiveTab] = useState('math');
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5;

    useEffect(() => {
        dispatch(getWrongQuestions());
    }, [dispatch]);

    const getCurrentData = () => {
        const data = wrongQuestionsState.data[activeTab] || [];
        return data.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    };

    return (
        <div className={style.container}>
            <Tabs 
                activeKey={activeTab} 
                onChange={(key) => {
                    setActiveTab(key);
                    setCurrentPage(1);
                }}
                tabPosition="left"
                className={style.tabs}
            >
                {Object.keys(wrongQuestionsState.data).map(category => (
                    <TabPane tab={category} key={category}>
                        {wrongQuestionsState.data[category]?.length > 0 ? (
                            <>
                                <List
                                    dataSource={getCurrentData()}
                                    renderItem={item => (
                                        <List.Item className={style.listItem}>
                                            <Card 
                                                title={`${item.id}. ${item.title || '未命名题目'}`}
                                                className={style.card}
                                                extra={
                                                    <Tag color={item.is_mastered ? 'green' : 'red'}>
                                                        {item.is_mastered ? '已掌握' : '未掌握'}
                                                    </Tag>
                                                }
                                            >
                                                <div className={style.content}>
                                                    <div className={style.meta}>
                                                        <span>题型: {getQuestionType(item.question_type)}</span>
                                                        <span>错误次数: {item.wrong_count}</span>
                                                        <span>最后错误: {formatTime(item.last_wrong_time)}</span>
                                                    </div>
                                                    <h4>题目:</h4>
                                                    <p>{item.question_content}</p>
                                                    <h4>你的答案:</h4>
                                                    <p style={{color: 'red'}}>{item.user_answer}</p>
                                                    <h4>正确答案:</h4>
                                                    <p style={{color: 'green'}}>{item.correct_answer}</p>
                                                    {item.wrong_detail && (
                                                        <>
                                                            <h4>错误分析:</h4>
                                                            <p>{item.wrong_detail}</p>
                                                        </>
                                                    )}
                                                    <div className={style.tags}>
                                                        {item.tags?.map(tag => (
                                                            <Tag key={tag.id}>{tag.name}</Tag>
                                                        ))}
                                                    </div>
                                                </div>
                                            </Card>
                                        </List.Item>
                                    )}
                                />
                                {/* 只有当数据量大于pageSize时才显示分页 */}
                                {wrongQuestionsState.data[activeTab]?.length > pageSize && (
                                    <Pagination
                                        current={currentPage}
                                        pageSize={pageSize}
                                        total={wrongQuestionsState.data[activeTab]?.length || 0}
                                        onChange={(page) => setCurrentPage(page)}
                                        className={style.pagination}
                                    />
                                )}
                            </>
                        ) : (
                            <div className={style.emptyState}>
                                暂无错题，敬请期待
                            </div>
                        )}
                    </TabPane>
                ))}
            </Tabs>
        </div>
    );
};

// 辅助函数
const getQuestionType = (type) => {
    const types = {
        1: '单选题',
        2: '多选题',
        3: '填空题',
        4: '解答题'
    };
    return types[type] || '未知题型';
};

const formatTime = (time) => {
    return new Date(time).toLocaleString();
};

export default WrongQuestions;