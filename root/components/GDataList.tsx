import { windowHeight } from '@/utils/system';
import { assign, clone, merge } from 'lodash';
import React, { Component, ReactNode } from 'react'
import { StyleSheet, View, FlatList, FlatListProps, ListRenderItemInfo, ListRenderItem, StyleProp, ViewStyle } from 'react-native'

export interface GDataListProps {
    style?: StyleProp<ViewStyle>
    noDeaultPageName?: boolean
    requestParams?: { [key: string]: any }
    defaultPageSize?: number
    keyExtractor?: (item: any, index: number) => string;
    requestBeforeFun?: () => boolean
    // requestMethod: (params: object) => Promise<{ list: any[], isListEnd: boolean, total: number }>
    requestMethod: (params: object) => Promise<{ data: any[], msg: string, code: number }>
    renderItem: ListRenderItem<any> | null | undefined
    getItemLayout?: (data: any, index: number,) => { length: number; offset: number; index: number };
    handleDataList?: (list: any[]) => Promise<any[]>;
    numColumns?: number
    columnWrapperStyle?: StyleProp<ViewStyle>
    contentContainerStyle?: StyleProp<ViewStyle>
    ListEmptyComponent?: React.ComponentType<any> | React.ReactElement | null
    ListHeaderComponent?: React.ComponentType<any> | React.ReactElement | null
    ListFooterComponent?: React.ComponentType<any> | React.ReactElement | null
    ItemSeparatorComponent?: React.ComponentType<any> | null
    [key: string]: any
    onScroll?: () => void;
}

interface GDataListState {
    dataList: any[]
    pageNumber: number
    isListEnd: boolean
    isRefreshing: boolean
    isPageLoading: boolean
    total: number
}

export default class dGDataList extends Component<GDataListProps, GDataListState> {
    private _adjustParams = {};

    static defaultProps: GDataListProps = {
        noDeaultPageName: false,
        requestBeforeFun: () => true,
        defaultPageSize: 10,
        requestParams: {},
        requestMethod: ({ }) => Promise.resolve({ data: [], msg: '', code: 0, goods: [] }),
        renderItem: undefined,
        numColumns: undefined,
        keyExtractor: (item, index) => `${item?.id}_${index}`,
    }

    constructor(props: GDataListProps) {
        super(props);
        this.state = {
            dataList: [],
            pageNumber: 1,
            isListEnd: false,
            isRefreshing: false,
            isPageLoading: true,
            total: 0,
        }
    }

    $setState = (state: object) => {
        return new Promise<void>((resolve) => {
            this.setState(state, () => resolve());
        })
    }

    componentDidMount = async () => {
        await this._getList();
        await this.$setState({ isPageLoading: false })
    }

    componentWillUnmount = () => {

    }

    getDataList = () => this.state.dataList;
    setDataList = (dataList: any[]) => {
        this.$setState({ dataList });
    }
    getIsListEnd = () => this.state.isListEnd;
    setIsListEnd = (isListEnd: boolean) => this.$setState({ isListEnd });
    getTotal = () => this.state.total;
    getPageNumber = () => this.state.pageNumber;
    setPageNumber = (pageNumber: number) => this.$setState({ pageNumber });
    refreshData = () => this._onRefresh();

    private _getList = async () => {
        let { pageNumber, dataList } = this.state;
        let { defaultPageSize, requestMethod, requestParams, requestBeforeFun, handleDataList, noDeaultPageName } = this.props;
        // if (this.state.isListEnd) return Promise.resolve(true);
        // if (this.state.isRefreshing) return Promise.resolve(true);
        if (!(requestBeforeFun?.() ?? true)) return Promise.resolve(true);
        let params;
        if (noDeaultPageName == false) params = assign({}, requestParams, { page: pageNumber, pageSize: defaultPageSize });
        else params = assign({}, requestParams, { pageNumber: pageNumber, pageSize: defaultPageSize });
        this._adjustParams = params;
        await this.$setState({ isRefreshing: true });
        const {data } = await requestMethod(params);
        const newList = !!handleDataList ? await handleDataList(data) : data;
        dataList = pageNumber === 1 ? newList : dataList.concat(newList);
        await this.$setState({ dataList,  pageNumber: ++pageNumber, isRefreshing: false});
        return Promise.resolve(true);
    }

    private _onRefresh = async () => {
        await this.$setState({ pageNumber: 1, isListEnd: false });
        await this._getList();
    }

    // 上拉加载

    private _onEndReached = async () => {
        const { isListEnd, isRefreshing } = this.state;
        if (isListEnd || isRefreshing) return
        await this._getList();

    }

    render = () => {
        const { dataList, isRefreshing, isPageLoading } = this.state;
        const { style, keyExtractor, columnWrapperStyle, onScroll, contentContainerStyle, numColumns, getItemLayout, renderItem, ListEmptyComponent, ListHeaderComponent, ListFooterComponent, ItemSeparatorComponent } = this.props;
        return (
            <View style={[styles.containerStyle, style]}>
                <FlatList
                    style={styles.scrollContainerStyle}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                    keyboardDismissMode="interactive"
                    contentContainerStyle={[
                        dataList?.length === 0 && !ListHeaderComponent && !ListFooterComponent && { flex: 1 }, contentContainerStyle
                    ]}
                    // 默认
                    keyExtractor={keyExtractor}
                    data={dataList}
                    renderItem={renderItem}
                    getItemLayout={getItemLayout}
                    refreshing={isRefreshing}
                    onRefresh={this._onRefresh}
                    onEndReachedThreshold={0.01}
                    onEndReached={this._onEndReached}
                    onScroll={onScroll}
                    ListEmptyComponent={isPageLoading ? undefined : ListEmptyComponent}
                    ListHeaderComponent={ListHeaderComponent}
                    ListFooterComponent={ListFooterComponent}
                    ItemSeparatorComponent={ItemSeparatorComponent}
                    numColumns={numColumns}
                    columnWrapperStyle={columnWrapperStyle}


                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
    },
    scrollContainerStyle: {
        flex: 1,
    },
})
