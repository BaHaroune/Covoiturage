import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style={{ backgroundColor: '#000', paddingHorizontal: 15, marginBottom: 15 }}>
                
                <View style={{flexDirection: 'row', gap: 15,paddingVertical: 15, alignItems: 'center'}}>
                    <View style={{height: 50, width: 50, borderRadius: 25, backgroundColor: '#fff'}}></View>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={{color: '#fff'}}>Haroune Ba</Text>
                        <Text style={{color: '#fff'}}>5.00 *</Text>
                    </View>
                </View>
                
                <View>
                    <Pressable onPress={() => console.warn("Messages")}>
                        <Text
                            style={{ color: '#fff', paddingVertical: 15, borderBottomWidth: 0.5, borderTopWidth: 0.5, borderColor: '#fff' }}
                        >Messages</Text>
                    </Pressable>
                </View>

                <Pressable onPress={() => console.warn("Do more with your accounts")}>
                    <Text style={{ color: '#fff', paddingVertical: 15 }}>Do more with your account</Text>
                </Pressable>

                <Pressable onPress={() => console.warn("Wallet")}>
                    <Text style={{ color: '#fff', paddingVertical: 15 }}>Wallet</Text>
                </Pressable>
            </View>

            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

export default CustomDrawer;