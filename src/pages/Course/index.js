import React, { useState, useEffect } from 'react';
import {
    Container,
    Title,
    Image,
    Text,
    Tutor,
    Progress,
    Description
} from './styles';
import { ProgressBarAndroid, StyleSheet, View } from 'react-native';

export default function Course({ navigation }) {
    const [course, setCourse] = useState(navigation.getParam("course"));

    useEffect(() => {

    }, []);

    function renderImage() {
        console.log(course)
        if (!course) return <></>;
        if (!course.image[0]) return <></>;
        return <Image resizeMode={'cover'} style={{ width: '100%', height: 200 }} source={{ uri: course.image[0] }} />;
    }

    return (
        <Container>
            <Title>COURSE</Title>
            {renderImage()}
            <Text>
                Curso por : <Tutor>{course.tutor_name}</Tutor>
            </Text>
            <Progress>
                <ProgressBarAndroid
                    styleAttr="Horizontal"
                    indeterminate={false}
                    color="#fefefe"
                    style={{ width: "50%", height: 50 }}
                    progress={course.progress}
                />
                <Text style={{ marginLeft: 20 }}>{course.progress}%</Text>
            </Progress>
            <Description>{course.complete_description}</Description>
        </Container>
    );
}