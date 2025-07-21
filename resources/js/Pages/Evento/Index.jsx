import React from 'react';
import { Head } from '@inertiajs/react';
import EventoLayout from '@/Layouts/EventoLayout';

export default function EventoIndex({ eventos }) {
    const temEventos = eventos && eventos.length;
    return (
        <EventoLayout>
         <Head title="Eventos" />

            <h2 className="text-2xl font-bold mb-6">Lista de Eventos</h2>

            {temEventos && (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded shadow">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="text-left px-4 py-2 border-b">#</th>
                                <th className="text-left px-4 py-2 border-b">Nome</th>
                                <th className="text-left px-4 py-2 border-b">Data</th>
                                <th className="text-left px-4 py-2 border-b">Localização</th>
                                <th className="text-left px-4 py-2 border-b">Kit</th>
                                <th className="text-left px-4 py-2 border-b">Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            {eventos.map((evento, index) => (
                                <tr key={evento.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border-b">{index + 1}</td>
                                    <td className="px-4 py-2 border-b">{evento.nome}</td>
                                    <td className="px-4 py-2 border-b">{evento.data}</td>
                                    <td className="px-4 py-2 border-b">{evento.localizacao}</td>
                                    <td className="px-4 py-2 border-b">{evento.kit ? evento.kit : 'Não possui kit'}</td>
                                     <td className="px-4 py-2 border-b">{evento.descricao}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {!temEventos && (
                <div className="p-6 bg-white rounded shadow text-gray-700 text-center">
                    Nenhum Evento Cadastrado, por favor cadastre um evento <a href="/eventos/create" className="text-blue-500">aqui</a>.
                </div>
            )}
        </EventoLayout>
    );
}