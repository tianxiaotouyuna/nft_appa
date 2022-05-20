import React, { Component, FunctionComponent, useRef, useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, StatusBar, TouchableOpacity, Pressable } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { Header } from 'react-native/Libraries/NewAppScreen';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import tvShowContent from '../../assets/tvShowContent';
import useInitScreen from '@/hooks/useInitScreen';
import { Navigate } from '@/utils/';
import { useNavigation } from '@react-navigation/native';

const MIN_HEIGHT = 64;
const MAX_HEIGHT = 250;


const NtfDetail: FunctionComponent = () => {
  const [showNavTitle, setshowNavTitle] = useState(false);

  const navi=useNavigation()
  navi.setOptions({
    headerShown:false,

		navigationOptions: {
			title:'首页',
			headerRight: () => (
				<Pressable onPress={() => { Navigate.navigate('Search', {}) }}>
					{/* <Image style={styles.tab_right} source={require('@/resources/home/more.png')} /> */}
				</Pressable>
			),
			headerTitleAlign:'left'
		},
  })
  const navTitleViewRef = useRef<Animatable.View>(null);
  return (
    <View style={{ flex: 1 }}>
        <HeaderImageScrollView
          maxHeight={MAX_HEIGHT}
          minHeight={MIN_HEIGHT}
          maxOverlayOpacity={0.6}
          minOverlayOpacity={0.3}
          fadeOutForeground
          renderHeader={() => <Image source={tvShowContent.image} style={styles.image} />}
          renderFixedForeground={() => (
            <Animatable.View
              style={styles.navTitleView}
              ref={navTitleViewRef}
            >
              <Text style={styles.navTitle}>
                {tvShowContent.title}, ({tvShowContent.year})
              </Text>
            </Animatable.View>
          )}
          renderForeground={() => (
            <View style={styles.titleContainer}>
              <Text style={styles.imageTitle}>{tvShowContent.title}</Text>
            </View>
          )}
        >
          <TriggeringView
            style={styles.section}
            onHide={() => navTitleViewRef.current?.fadeInUp(200)}
            onDisplay={() => navTitleViewRef.current?.fadeOut(100)}
          >
            <Text style={styles.title}>
              <Text style={styles.name}>{tvShowContent.title}</Text>, ({tvShowContent.year})
            </Text>
          </TriggeringView>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Overview</Text>
            <Text style={styles.sectionContent}>{tvShowContent.overview}</Text>
          </View>
          <View style={[styles.section, styles.sectionLarge]}>
            <Text style={styles.sectionTitle}>Keywords</Text>
            <View style={styles.keywords}>
              {tvShowContent.keywords.map(keyword => (
                <View style={styles.keywordContainer} key={keyword}>
                  <Text style={styles.keyword}>{keyword}</Text>
                </View>
              ))}
            </View>
          </View>
        </HeaderImageScrollView>
    </View>
  );
}

export default NtfDetail;


const styles = StyleSheet.create({
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
  },
  name: {
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'justify',
  },
  keywords: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  keywordContainer: {
    backgroundColor: '#999999',
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  keyword: {
    fontSize: 16,
    color: 'white',
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    opacity: 0,
  },
  navTitle: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  sectionLarge: {
    height: 600,
  },
});