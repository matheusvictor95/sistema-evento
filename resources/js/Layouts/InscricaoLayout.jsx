import React from 'react';

export default function InscricaoLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
           
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl font-bold text-gray-900">Inscrições</h1>
                </div>
            </header>

            
            <main className="flex-grow">
                <div className="w-full mx-auto py-8 px-4 sm:px-6 lg:px-8">
                    {children}
                </div>
            </main>

            
            <footer className="bg-white shadow mt-auto">
                <div className="max-w-7xl mx-auto py-4 px-4 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Sistema de Eventos
                </div>
            </footer>
        </div>
    );
}

