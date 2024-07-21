import React from 'react';

const QualityAssuranceSection = () => {
    return (
        <section className="py-12 bg-gray-50 sm:py-16 lg:py-20" id="QualityAssurance">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">Quality Assurance</h2>
                    <p className="mt-4 text-base leading-7 text-gray-600">Our Quality Control (QC) tool ensures the highest accuracy in data management and processing. With a robust system and state-of-the-art technology, we achieve accuracy rates above 95% consistently. Below are some of our accuracy statistics over the past six months:</p>
                </div>
                <div className="grid grid-cols-1 gap-5 text-center md:grid-cols-3 gap-y-5 md:gap-x-8 mt-12">
                    <div className="overflow-hidden bg-white border border-gray-200 rounded-xl">
                        <div className="px-4 py-5 sm:p-6">
                            <p className="text-2xl font-bold text-gray-900">99.8%</p>
                            <p className="mt-2 text-sm font-medium text-gray-500">Accuracy Rate</p>
                            <p className="mt-6 text-sm font-medium text-green-500">43% extra since last week</p>
                        </div>
                    </div>

                    <div className="overflow-hidden bg-white border border-gray-200 rounded-xl">
                        <div className="px-4 py-5 sm:p-6">
                            <p className="text-2xl font-bold text-gray-900">200,000</p>
                            <p className="mt-2 text-sm font-medium text-gray-500">PDFs Processed This Year</p>
                            <p className="mt-6 text-sm font-medium text-red-500">17% lower than last month</p>
                        </div>
                    </div>

                    <div className="overflow-hidden bg-white border border-gray-200 rounded-xl">
                        <div className="px-4 py-5 sm:p-6">
                            <p className="text-2xl font-bold text-gray-900">Custom QC Tool</p>
                            <p className="mt-2 text-sm font-medium text-gray-500">For Each Client</p>
                            <p className="mt-6 text-sm font-medium text-green-500">21% extra since last week</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QualityAssuranceSection;
