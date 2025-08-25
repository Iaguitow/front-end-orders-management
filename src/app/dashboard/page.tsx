'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "@/services/firebase_auth"


import { ThemeProvider } from '../../hooks/contexts/themeContext';
import SideDrawer from '@/components/drawer';
import { Spin } from 'antd';


export default function DashboardPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                router.push('/login');
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [router]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spin size="large" />
            </div>
        );
    }

    return (
        <ThemeProvider>
            <div className="p-8">
                <SideDrawer />
                <h1>Bem-vindo, {user?.email}</h1>
                <p>Esta é a homepage protegida 🎉</p>
            </div>
        </ThemeProvider>
    );
}
