import useTimeout from '@/hooks/useTimeout';
import { HomeService } from '@/services';
import { Navigate } from '@/utils';
import { pxToDp } from '@/utils/system';
import React, { FunctionComponent, useState } from 'react'
import { useRef } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { View, Text, Pressable, Image } from 'react-native'
import FastImage from 'react-native-fast-image';
import Swiper from "react-native-swiper";
import styles from './banner-style';

type BannerProps = {
    data: any
    width?: number
    height?: number
    onDataFinish?: () => void
}

const Banner: FunctionComponent<BannerProps> = (props) => {

    const { data, width = pxToDp(702), height = pxToDp(296), onDataFinish } = props;
    const [dataList, setDataList] = useState<any[]>([]);

    useEffect(() => {
        initData();
    }, [data])

    const initData = useCallback(async () => {
        try {
            const { data: list } = await HomeService.composingData({ type: data?.type });
            setDataList(list);
        } catch (error) { }
        onDataFinish?.();
    }, [data]);

    if (!(dataList?.length > 0)) {
        return null;
    }

    return (
        <View style={styles.swiper}>
            <Swiper
                width={width}
                height={height}
                dotStyle={styles.dot}
                activeDotStyle={styles.active_dot}
                autoplay={true}
                autoplayTimeout={3}
                showsPagination={dataList?.length > 1}
                loop={true}
                paginationStyle={styles.pagination}
                // 添加这个属性解决第二个循环抖动问题
                removeClippedSubviews={false}
            // automaticallyAdjustContentInsets={true}
            >
                {dataList?.map((item, index) => (
                    <Pressable key={`${index}`} style={[styles.image_wrap, { width, height }]} onPress={() => Navigate.navigationToMini(item?.link)}>
                        <FastImage style={styles.image} resizeMode="cover" source={{ uri: item?.thumb }} />
                    </Pressable>
                ))}
            </Swiper>
        </View>
    )

}

export default Banner;
