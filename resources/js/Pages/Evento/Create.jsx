import FormLayout from '@/Layouts/FormLayout'
import { useForm } from '@inertiajs/react'
import React from 'react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function FormEvento() {
    const { data, setData, post, processing, errors } = useForm({
        nome: '',
        data: '',
        localizacao: '',
        descricao: '',
        kit: '',
    })

    function submit(e) {
        e.preventDefault()
        post('/evento/store')
    }

    return (
        <FormLayout>
            <form onSubmit={submit} className="space-y-12">
                <div>
                    <label className="block text-sm/6 font-medium text-gray-900" >Nome </label>
                    <input
                        type="text"
                        value={data.nome}
                        onChange={e => setData('nome', e.target.value)}
                    />
                    {errors.nome && <div className="text-red-500">{errors.nome}</div>}
                </div>

                <div>
                    <label className="block text-sm/6 font-medium text-gray-900">Data </label>
                    <input
                        type="date"
                        value={data.data}
                        onChange={e => setData('data', e.target.value)}
                    />
                    {errors.data && <div className="text-red-500">{errors.data}</div>}
                </div>

                <div>
                    <label className="block text-sm/6 font-medium text-gray-900">Localização </label>
                    <input
                        type="text"
                        value={data.localizacao}
                        onChange={e => setData('localizacao', e.target.value)}
                    />
                    {errors.localizacao && <div className="text-red-500">{errors.localizacao}</div>}
                </div>

                <div>
                    <label className="block text-sm/6 font-medium text-gray-900">Descrição </label>
                    <textarea
                        value={data.descricao}
                        onChange={e => setData('descricao', e.target.value)}
                    />
                    {errors.descricao && <div className="text-red-500">{errors.descricao}</div>}
                </div>

                <div>
                    <label className="block text-sm/6 font-medium text-gray-900">Kit </label>
                    <input
                        type="text"
                        value={data.kit}
                        onChange={e => setData('kit', e.target.value)}
                    />
                    {errors.kit && <div className="text-red-500">{errors.kit}</div>}
                </div>
                <div className="">
                    <PrimaryButton type="submit" disabled={processing}>
                        Salvar
                    </PrimaryButton>
                </div>
            </form>
        </FormLayout>

    )
}

