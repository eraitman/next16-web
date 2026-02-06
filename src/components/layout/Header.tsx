'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils/cn';
import { Menu as MenuIcon, X } from 'lucide-react';

const MENU_ITEMS = [
    { label: '홈', href: '/' },
    { label: '벼랑영어?', href: '/introduction' },
    { label: '과정안내', href: '/course' },
    { label: '수강효과', href: '/review' },
    { label: '수강요건', href: '/requirement' },
    { label: '수강등록', href: '/enrollment' },
];

export function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
                scrolled ? 'bg-white/90 backdrop-blur-md border-gray-200 py-2' : 'bg-transparent py-4'
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <nav className="flex items-center justify-between">
                    {/* Logo - Authentic & Firm */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="bg-brand-yellow px-2 py-1 transform transition-transform group-hover:scale-105">
                            <span className="text-brand-black font-black text-xl tracking-tighter">CLIFF</span>
                        </div>
                        <span className="font-bold text-brand-black text-lg tracking-tight">ENGLISH</span>
                    </Link>

                    {/* Desktop Menu - Editorial Style */}
                    <ul className="hidden md:flex items-center gap-8">
                        {MENU_ITEMS.map((item) => {
                            const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            'text-sm font-bold tracking-tight transition-colors relative py-1',
                                            isActive
                                                ? 'text-brand-blue'
                                                : 'text-brand-black hover:text-brand-blue/80'
                                        )}
                                    >
                                        {item.label}
                                        {isActive && (
                                            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-yellow animate-in fade-in slide-in-from-left duration-300" />
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-brand-black"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 top-[60px] bg-white z-40 md:hidden animate-in fade-in duration-200">
                    <ul className="flex flex-col p-6 gap-6">
                        {MENU_ITEMS.map((item) => (
                            <li key={item.href} onClick={() => setIsOpen(false)}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        'text-2xl font-black tracking-tighter transition-colors',
                                        pathname === item.href ? 'text-brand-blue' : 'text-brand-black'
                                    )}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}
