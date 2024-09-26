import { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native"
import { Text } from 'react-native-paper'
import { useAuth } from "../../context/auth";
import { Link } from "expo-router";

interface IPost {
    id: number;
    title: string;
    status: string;
}

export default function Home() {

    const auth = useAuth()

    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.org/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
    }, []);
    return (
        <ScrollView >
            <Text>Olá {auth.user.email}</Text>
            <Link style={{ marginTop: 30 }} href="/sensor">  Sensores </Link>
            <Link style={{ marginTop: 30 }} href="/camera">  Camera </Link>
            <Link style={{ marginTop: 30 }} href="/profile">  Perfil </Link>
            {/* {posts.map((post) => (
                <Text>
                    {post.title} - {post.status}
                </Text>
            ))} */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    mt20: {
        marginTop: 20,
    },
})
