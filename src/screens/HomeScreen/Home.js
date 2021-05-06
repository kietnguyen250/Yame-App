import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert, ToastAndroid, Image, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import styles from './StyleHome';

import Header from '../Header/Header';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = () => {
    return (

        <SafeAreaView style={styles.container}>
            <Header />

            {/* <View style={styles.header}>
                <Image
                // animation="bounceIn"
                // duration='1600'
                source={require('../../Images/yameLogo.jpg')}
                style={styles.logo}
                resizeMode='stretch'
                />
                <Text style={styles.textHeader}>Yame</Text>
                <TouchableOpacity
                style={styles.fab}
                onPress={() => {
                    
                    _showDialog();
                    // ProductInsert(name, image, price, material);
                }}  >
                    <MaterialCommunityIcons name="cart-outline" color={"white"} size={35}/>
                </TouchableOpacity>
            </View> */}

            <ScrollView style={styles.scrollView} >
            <Image
                    style={styles.thumb}
                    height={300}
                    source={{uri: "https://cdn2.yame.vn/cimg/images/1580d24b-2c37-0100-1517-0017b5daa36c.jpg"}}
                   
            />

            {/* 1 */}
            <View style={styles.row}>
                
                <Text style={styles.contentText}> MỞ BÁN 26-02 </Text>

                <Text style={styles.contentText}> JACKET VHCB VER2 </Text>
                
            </View>

            <View style={styles.row}>
                <Image
                    style={styles.thumbmini}
                    height={160}
                    source={{uri: "https://cms.yame.vn/uploads/7746d1ad-ef1f-4311-a3df-0afff27e214a-thumbmoban-1280x1000.jpg"}}
                                    
                />

                <View style={styles.line}>
                    
                </View>

                <Image
                    style={styles.thumbmini}
                    height={160}
                    source={{uri: "https://cms.yame.vn/uploads/df3c90c2-ca10-4441-8d02-70026b714ced-Thum%20web%20AK%2005.02%20fix.jpg"}}
                                    
                />
            </View>

            <View style={styles.row}>
                <View style={styles.rowpd}>
                    <Image
                        style={styles.thumbpd}
                        height={160}
                        source={{uri: "https://cdn3.yame.vn/pimg/ao-khoac-thun-y2010-originals-min2-0020013/09f52705-7320-0800-d790-0017b4d9cecc.jpg?w=540&h=756&c=true&ntf=false"}}
                                        
                    />

                    <View style={styles.line1}>
                        
                    </View>

                    <Image
                        style={styles.thumbpd}
                        height={160}
                        source={{uri: "https://cdn2.yame.vn/pimg/ao-thun-tn-r-wild-animals-m7-0020141/87161c3b-185f-0200-24f9-0017b4d90e43.jpg?w=540&h=756&c=true&ntf=false"}}
                                        
                    />
                </View>

                <View style={styles.line}>
                    
                </View>

                <View style={styles.rowpd}>
                    <Image
                        style={styles.thumbpd}
                        height={160}
                        source={{uri: "https://cdn2.yame.vn/pimg/tui-eo-hand-drawn-ver1-0020110/c989b0c3-2746-0300-009e-0017a45dc315.jpg?w=540&h=756&c=true&ntf=false"}}
                                        
                    />

                    <View style={styles.line1}>
                        
                    </View>

                    <Image
                        style={styles.thumbpd}
                        height={160}
                        source={{uri: "https://cdn3.yame.vn/pimg/quan-jogger-thun-van-xuan-kien-quoc-min2-0020099/79bbdc7a-0904-1700-4aaa-0017a45f94e4.jpg?w=540&h=756&c=true&ntf=false"}}
                                        
                    />
                </View>
                
            </View>

            {/* 2 */}
            <View style={styles.row}>
                
                <Text style={styles.contentText}> CỬU LONG GIANG VER2 </Text>

                <Text style={styles.contentText}> LONG VẬN THIÊN ĐÔ </Text>
                
            </View>

            <View style={styles.row}>
                <Image
                    style={styles.thumbmini}
                    height={160}
                    source={{uri: "https://cms.yame.vn/uploads/bda0a0a4-ef4f-4489-9c2e-194bdfde6663-Thum%20blog%20MB%20CLG.jpg"}}
                                    
                />

                <View style={styles.line}>
                    
                </View>

                <Image
                    style={styles.thumbmini}
                    height={160}
                    source={{uri: "https://cms.yame.vn/uploads/e2867bda-578a-4de9-a3ef-0b1689f5dbed-Artboard%201.jpg"}}
                                    
                />
            </View>

            <View style={styles.row}>
                <View style={styles.rowpd}>
                    <Image
                        style={styles.thumbpd}
                        height={160}
                        source={{uri: "https://cdn3.yame.vn/pimg/ao-thun-tn-tc-thien-nhien-ki-vi-m11-0020016/b69111b4-751f-0400-2513-00179ee11feb.jpg?w=540&h=756&c=true&ntf=false"}}
                                        
                    />

                    <View style={styles.line1}>
                        
                    </View>

                    <Image
                        style={styles.thumbpd}
                        height={160}
                        source={{uri: "https://cdn3.yame.vn/pimg/ao-thun-tn-r-y2010-originals-m15-0020147/1a42067d-c0b8-0200-f97e-00179fb18394.jpg?w=540&h=756&c=true&ntf=false"}}
                                        
                    />
                </View>

                <View style={styles.line}>
                    
                </View>

                <View style={styles.rowpd}>
                    <Image
                        style={styles.thumbpd}
                        height={160}
                        source={{uri: "https://cdn3.yame.vn/pimg/ao-khoac-thun-co-non-y2010-f02-0019875/e55ecd38-2c38-1000-2eec-0017997afe72.jpg?w=540&h=756&c=true&ntf=false"}}
                                        
                    />

                    <View style={styles.line1}>
                        
                    </View>

                    <Image
                        style={styles.thumbpd}
                        height={160}
                        source={{uri: "https://cdn3.yame.vn/pimg/quan-jogger-thun-minimal-m2-0020002/060ddf0b-c8f5-1100-397b-0017997b183a.jpg?w=540&h=756&c=true&ntf=false"}}
                                        
                    />
                </View>
                
            </View>

            {/* Top sản phẩm hot */}

            <View style={styles.toptieuDe}>
                <Text style={styles.textToptieuDe}>Top sản phẩm HOT</Text>
            </View>

            <View style={styles.topnoidung}>
                <Text style={styles.textTopnoidung}>Những sản phẩm thời trang mới nhất/Hot nhất</Text>
            </View>

            <Image
                    style={styles.thumb}
                    height={300}
                    source={{uri: "https://cdn2.yame.vn/cimg/images/4c07b9bd-84bd-0100-63ad-0017d21409f5.jpg"}}
                   
            />

            {/* Top product HOT */}

            <View style={styles.rowHOT}>
                    <Image
                        style={styles.thumbHOT}
                        height={170}
                        source={{uri: "https://cdn3.yame.vn/pimg/ao-khoac-y2010-hoodie-d01-0019449/eacbc448-145c-0400-4a0f-0016915507ac.jpg?w=540&h=756&c=true"}}
                                        
                    />

                    {/* <View style={styles.line2}>
                        
                    </View> */}

                    <Image
                        style={styles.thumbHOT}
                        height={170}
                        source={{uri: "https://cdn3.yame.vn/pimg/quan-jogger-thun-y2010-g01-0019609/763e88cb-d698-0100-5842-001776f4812c.jpg?w=540&h=756&c=true"}}
                                        
                    />

                    {/* <View style={styles.line2}>
                        
                    </View> */}
    
                    <Image
                        style={styles.thumbHOT}
                        height={170}
                        source={{uri: "https://cdn2.yame.vn/pimg/ao-khoac-hoodie-y2010-bd-b19-0019784/4112880b-c2a9-0800-0bc4-00174d292c5c.jpg?w=540&h=756&c=true"}}
                                            
                    />
            </View>

            <View style={styles.rowHOT}>
                    <Image
                        style={styles.thumbHOT}
                        height={170}
                        source={{uri: "https://cdn3.yame.vn/pimg/balo-a-thiet-ke-m2-0020010/0512ecf3-e171-0100-7a0b-0017d6dbfb4c.jpg?w=540&h=756&c=true"}}
                                        
                    />

                    {/* <View style={styles.line2}>
                        
                    </View> */}

                    <Image
                        style={styles.thumbHOT}
                        height={170}
                        source={{uri: "https://cdn3.yame.vn/pimg/balo-y2010-h71-0019770/f03a8097-7760-0801-eb22-001727a7d6f6.jpg?w=540&h=756&c=true"}}
                                        
                    />

                    {/* <View style={styles.line2}>
                        
                    </View> */}
    
                    <Image
                        style={styles.thumbHOT}
                        height={170}
                        source={{uri: "https://cdn2.yame.vn/pimg/bltx-u-y2010-h57-0018921/c0f2913b-f452-0300-059d-00162f1374c9.jpg?w=540&h=756&c=true"}}
                                            
                    />
            </View>


            {/* 3 */}
            <View style={styles.row}>
                
                <Text style={styles.contentText}> MỞ BÁN 26-02 </Text>

                <Text style={styles.contentText}> JACKET VHCB VER2 </Text>
                
            </View>

            <View style={styles.row}>
                <Image
                    style={styles.thumbmini}
                    height={160}
                    source={{uri: "https://cms.yame.vn/uploads/5a9c2c2c-c96e-4396-b80b-aba5981243ed-thumbbonghoa.jpg"}}
                                    
                />

                <View style={styles.line}>
                    
                </View>

                <Image
                    style={styles.thumbmini}
                    height={160}
                    source={{uri: "https://cms.yame.vn/uploads/3a50c50f-5a85-4102-a6d7-dead8987d16c-thumbrong.jpg"}}
                                    
                />
            </View>

            <View style={styles.row}>
                <View style={styles.rowpd}>
                    <Image
                        style={styles.thumbpd}
                        height={160}
                        source={{uri: "https://cdn3.yame.vn/pimg/ao-thun-3-lo-tc-on-gian-minimal-m8-0020071/38615d8b-c4f5-0300-b23d-0017bfd64b98.jpg?w=540&h=756&c=true&ntf=false"}}
                                        
                    />

                    <View style={styles.line1}>
                        
                    </View>

                    <Image
                        style={styles.thumbpd}
                        height={160}
                        source={{uri: "https://cdn3.yame.vn/pimg/ao-thun-tn-r-secret-garden-m9-0020134/ee2ae53a-0ffe-1000-8ca8-0017bfdb69a2.jpg?w=540&h=756&c=true&ntf=false"}}
                                        
                    />
                </View>

                <View style={styles.line}>
                    
                </View>

                <View style={styles.rowpd}>
                    <Image
                        style={styles.thumbpd}
                        height={160}
                        source={{uri: "https://cdn3.yame.vn/pimg/ao-thun-tn-r-secret-garden-m14-0020194/48d1e49e-7ea9-1300-012b-0017bfdbf44f.jpg?w=540&h=756&c=true&ntf=false"}}
                                        
                    />

                    <View style={styles.line1}>
                        
                    </View>

                    <Image
                        style={styles.thumbpd}
                        height={160}
                        source={{uri: "https://cdn3.yame.vn/pimg/ao-thun-tn-tc-khung-long-m2-0020162/697c7cca-967e-0300-8f8e-0017b4d926be.jpg?w=540&h=756&c=true&ntf=false"}}
                                        
                    />
                </View>
                
            </View>


            <View style={styles.toptieuDe}>
                <Text style={styles.textToptieuDe}>Các chương trình Khuyến mãi</Text>
            </View>

            <View style={styles.topnoidung}>
                <Text style={styles.textTopnoidung}>Đừng bỏ lỡ các chương trình khuyến mãi Hot tại YameShop</Text>
            </View>

            <View style={styles.row}>
                <Image
                    style={styles.thumbmini}
                    height={160}
                    source={{uri: "https://cdn2.yame.vn/cimg/qua-tang-mien-phi/33181116-e676-0100-78ff-0017d2c5ac31.jpg?w=800"}}
                                    
                />

                <View style={styles.line}>
                    
                </View>

                <Image
                    style={styles.thumbmini}
                    height={160}
                    source={{uri: "https://cdn3.yame.vn/cimg/sale-quan-jean-upto-50/a5bbd844-eb72-0100-5d5e-00179cbd62a8.jpg?w=800"}}
                                    
                />
            </View>

            <View style={styles.row}>
                <View style={{width: "50%"}}>
                    <View style={styles.sale}>
                    <Text style={styles.textsale}>QUÀ TẶNG MIỄN PHÍ</Text>
                    </View>

                    <View style={styles.ngay}>
                        <Text style={styles.textngay}>Thời gian: Từ 01/04/2021 Địa điểm: Áp dụng tại tất cả chi nhánh</Text>
                    </View>
                </View>

                <View style={{width: "50%"}}>
                    <View style={styles.sale}>
                    <Text style={styles.textsale}>SALE QUẦN JEAN UPTO 50%</Text>
                    </View>

                    <View style={styles.ngay}>
                        <Text style={styles.textngay}>Thời gian: Thứ hai đến thứ 5 hàng tuần Địa điểm: Tất cả các chi nhánh YaMe Shop, kể cả mua hàng Online</Text>
                    </View>
                </View>
            </View>
            
                
    
            
            </ScrollView>
            
        </SafeAreaView>
        )
};

export default Home;