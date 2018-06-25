import React from 'react';
import { Input, Spin, Button } from 'antd';
import styles from './index.less';
const Search = Input.Search;

export default class TableContainer extends React.Component {
    static defaultProps = {
        placeholder: '输入关键字查找',
    };
    handleGoBack () {
        this.props.history.goBack();
    }
    render () {
        const { loading, placeholder, title, onSearch, history, refresh, children } = this.props;
        return (
            <div className={styles.container}>
                {
                    (!!onSearch || !!title || !!history) &&
                    <div className={styles.searchContainer}>
                        {
                            !!onSearch &&
                            <div className={styles.search} >
                                <Search placeholder={placeholder} onSearch={onSearch} maxLength={20} />
                            </div>
                        }
                        {
                            !!title &&
                            <div className={styles.tableTitle}>{title}</div>
                        }
                        <div className={styles.buttonsContainer}>
                            { (!!refresh && !loading) && <Button style={{ marginLeft: 10 }} onClick={refresh}>刷新</Button> }
                        </div>
                    </div>
                }
                { children }
            </div>
        );
    }
}
