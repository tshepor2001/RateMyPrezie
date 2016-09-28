import React, {Component} from 'react';
import {Navigator} from 'react-native';

export default class AppRouter{
    render(){
        return  <Navigator
                    initialRoute = {{ title: 'Rate My Prezi ', index: 0 }}
                    renderScene = {(route, navigator) =>
                        return  <RatingQuestion
                           
                            onForward= { () =>{
                                const nextIndex = route.index + 1;
                                navigator.push({
                                    title: 'Scene' + nextIndex,
                                    index: nextIndex
                                });

                            }} 
                            onBack = { () => }
                            
                            />
                    }
}
