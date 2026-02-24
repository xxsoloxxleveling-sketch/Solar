import React, { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface PagerProduct {
    id: string;
    name: string;
    marketEquivalent: string;
    specs: { label: string; value: string }[];
    description: string;
    image: string;
    link: string;
}

interface ProductPagerProps {
    categoryTitle: string;
    products: PagerProduct[];
}

export const ProductPager: React.FC<ProductPagerProps> = ({ categoryTitle, products }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
    };

    const currentProduct = products[currentIndex];

    if (!products || products.length === 0) return null;

    return (
        <div className="bg-white border border-gray-100 shadow-xl overflow-hidden rounded-sm my-16">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Side */}
                <div className="relative h-64 lg:h-[500px] bg-gray-50 flex items-center justify-center overflow-hidden group">
                    <img
                        src={currentProduct.image}
                        alt={currentProduct.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                        <span className="text-white text-xs font-bold uppercase tracking-widest px-3 py-1 bg-black/60 inline-block rounded-sm">
                            Comparable to: {currentProduct.marketEquivalent}
                        </span>
                    </div>
                </div>

                {/* Content Side */}
                <div className="p-8 lg:p-12 flex flex-col justify-between">
                    <div>
                        <div className="text-secondary font-bold text-sm tracking-widest uppercase mb-4">{categoryTitle}</div>
                        <h3 className="text-4xl font-heading font-bold text-primary mb-6">{currentProduct.name}</h3>
                        <p className="text-gray-500 text-lg leading-relaxed mb-8">{currentProduct.description}</p>

                        <div className="grid grid-cols-2 gap-6 mb-8">
                            {currentProduct.specs.map((spec, idx) => (
                                <div key={idx} className="border-l-4 border-blue-100 pl-4">
                                    <span className="block text-xl font-heading font-bold text-gray-900">{spec.value}</span>
                                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">{spec.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-4">
                        <div className="flex gap-2">
                            <button
                                onClick={prevSlide}
                                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
                            >
                                <ArrowLeft className="h-4 w-4" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
                            >
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>

                        <Link to={currentProduct.link} className="inline-flex items-center text-primary font-bold uppercase tracking-wider text-sm hover:text-secondary transition-colors">
                            Full Specifications <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center gap-2 p-4 bg-gray-50 border-t border-gray-100">
                {products.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-secondary' : 'w-2 bg-gray-300'}`}
                    />
                ))}
            </div>
        </div>
    );
};
