import React from 'react';
import { Head } from '@inertiajs/react';
import InscricaoLayout from '@/Layouts/InscricaoLayout';

export default function InscricaoIndex({ inscricoes }) {
    const temInscricoes = inscricoes && inscricoes.length;
    return (
        <InscricaoLayout>
         <Head title="Inscrições" />

            <h2 className="text-2xl font-bold mb-6">Lista de Inscrições</h2>

            {temInscricoes && (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded shadow">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="text-left px-4 py-2 border-b">#</th>
                                <th className="text-left px-4 py-2 border-b">Nome</th>
                                <th className="text-left px-4 py-2 border-b">Email</th>
                                <th className="text-left px-4 py-2 border-b">Evento</th>
                                <th className="text-left px-4 py-2 border-b">Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inscricoes.map((inscricao, index) => (
                                <tr key={inscricao.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border-b">{index + 1}</td>
                                    <td className="px-4 py-2 border-b">{inscricao.nome}</td>
                                    <td className="px-4 py-2 border-b">{inscricao.email}</td>
                                    <td className="px-4 py-2 border-b">{inscricao.evento?.titulo || '—'}</td>
                                    <td className="px-4 py-2 border-b">{new Date(inscricao.created_at).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {!temInscricoes && (
                <div className="p-6 bg-white rounded shadow text-gray-700 text-center">
                    Nenhuma inscrição encontrada.
                </div>
            )}
        </InscricaoLayout>
    );
}