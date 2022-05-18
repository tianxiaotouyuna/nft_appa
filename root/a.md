// react-native-snap-carousel 3.8的类型定义
/ /项目:https://github.com/archriss/react-native-snap-carousel
//定义by: jnbt <https://github.com/jnbt>
// Jacob Froman <https://github.com/j-fro>
// Nikolay Polukhin <https://github.com/gazaret>
// GuillaumeAmat <https://github.com/GuillaumeAmat>
// VitorLuiz Cavalcanti <https://github.com/VitorLuizC>
// Lemon Garrett <https://github.com/egarrett94>
/ /定义:https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript版本:2.8

import * as React from ' React ';
进口{
动画,
LayoutChangeEvent,
NativeSyntheticEvent,
NativeScrollEvent,
StyleProp,
ScrollViewProps,
ViewStyle,
ImageProps,
FlatListProps
从“react-native”};

导出界面
carouselRef吗?:反应。组件< FlatListProps <任何> > |未定义;
itemHeight吗?: number | undefined;
itemWidth吗?: number | undefined;
scrollPosition吗?:动画。值|定义;
sliderHeight吗?: number | undefined;
输入sliderWidth吗?: number | undefined;
垂直?:布尔值|未定义;
｝

CarouselProps<T> {
/ /需要

／**
*要循环的项目数组
*／
数据:ReadonlyArray < T >;
／**
*从' data '数组中获取一项并返回React的函数
*元素。看到react-native”年代“FlatList”
*／
renderItem(项目:{项目:T;index: number}， parallaxProps?: AdditionalParallaxProps): React.ReactNode;
／**
*所有幻灯片的像素宽度必须相同
*注:要求水平旋转木马
*／
／**
*翻转滚动的方向。使用-1的缩放变换。
*／
倒吗?:布尔值|未定义;
itemWidth吗?: number | undefined;
／**
*旋转木马项目的高度(像素)必须相同
*注:需要垂直旋转木马
*／
itemHeight吗?: number | undefined;
／**
*宽度在你的滑块像素
*注:要求水平旋转木马
*／
输入sliderWidth吗?: number | undefined;
／**
*旋转木马本身的高度(以像素为单位)
*注:需要垂直旋转木马
*／
sliderHeight吗?: number | undefined;

/ /行为

／**
*从滑块的中心，在被设置为活动之前被滚动的最小滑动距离
*／
activeSlideOffset吗?: number | undefined;
／**
*安装后组件隐藏的时间持续时间。注意:可能导致渲染
* Android问题。默认值为0
*／
apparitionDelay吗?: number | undefined;
／**
*为滚动事件的回调定义一个小的边界。增加这个值
*如果您遇到错过回调。默认为5
*／
callbackOffsetMargin吗?: number | undefined;
／**
从1.5.0开始，snap效果现在可以基于动量而不是当你
*松开手指。这意味着该组件将一直等到ScrollView
*不再移动以折断
*／
enableMomentum吗?:布尔值|未定义;
／**
*如果启用，释放触摸将滚动到最近的/活动的项目的中心
*／
enableSnap吗?:布尔值|未定义;
／**
*要显示的第一项的索引
*／
firstItem吗?: number | undefined;
／**
标志，表示旋转木马是否包含' <ParallaxImage /> '。视差数据
*将不会被传递给旋转木马项目，如果这是假的
*／
hasParallaxImages吗?:布尔值|未定义;
／**
*开始时应该渲染多少个项目?
*／
initialNumToRender吗?: number | undefined;
／**
*防止用户与旋转木马交互，而它正在断裂。忽略了
*如果' enableMomentum '是' true '
*／
lockScrollWhileSnapping吗?:布尔值|未定义;
／**
*更改默认锁的超时时间，单位为ms。
*／
lockScrollTimeoutDuration吗?: number | undefined;
／**
*当动量被禁用时，这个道具定义了时间框架
回调调用应该被“分组”成一个单独的。这种反弹也有帮助
*当触摸被释放时，通过提供一点惯性来平滑snap效果。
注意这将延迟回调函数的执行。
*／
scrollEndDragDebounceValue吗?: number | undefined;
／**
*允许滚动独立于用户交互的旋转木马。“假”违约。
*／
scrollEnabled吗?:布尔值|未定义;
／**
*是否实现一个shouldComponentUpdate策略来最小化更新
*／
shouldOptimizeUpdates吗?:布尔值|未定义;
／**
* Delta x时，滑动触发snap
*／
swipeThreshold吗?: number | undefined;
／**
*决定是否使用“ScrollView”而不是“FlatList”。可能会导致
*渲染性能问题，由于失去“FlatList”的性能
＊